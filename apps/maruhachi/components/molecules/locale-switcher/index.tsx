import { usePathname, useRouter } from 'navigation';
import { useParams } from 'next/navigation';
import React, { useTransition } from 'react';

import { IconButton } from '@mui/material';
import { languagesMock } from 'mocks';

import * as S from './styles';

type LocaleSwitcherProps = {};

const LocaleSwitcher: React.FC<LocaleSwitcherProps> = () => {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  const handleChangeLanguage = (locale: string) => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error
        { pathname, params },
        { locale }
      );
    });
  };

  return (
    <S.LocaleSwWrap>
      {languagesMock.map((lang) => (
        <IconButton key={lang.key} onClick={() => handleChangeLanguage(lang.locale)}>
          {lang.icon}
        </IconButton>
      ))}
    </S.LocaleSwWrap>
  );
};

export default LocaleSwitcher;
