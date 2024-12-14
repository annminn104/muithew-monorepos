'use client';

import { useEffect, useRef, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';
import { AnimateUtils } from 'utils';

import { SectionServicesProps } from '@components/templates/section-services';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import * as S from './styles';

type ServicesProductsProps = {
  i18n: Pick<SectionServicesProps, 'products'>;
};

const ServicesProducts: React.FC<ServicesProductsProps> = ({
  i18n: {
    products: { icon, title, content }
  }
}) => {
  const [itemTextHeight, setItemTextHeight] = useState<number>(0);
  const { width = 0, height = 0 } = useWindowSize();
  const ref = useRef<HTMLDivElement | null>(null);
  const theme = useTheme();

  useEffect(() => {
    setItemTextHeight(ref.current.clientHeight);
  }, [width]);

  return (
    <S.SerProWrap clipPathHeight={itemTextHeight || 0}>
      <S.SerProDivider />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <S.SerProBox>
            <S.SerProLogo {...icon} {...AnimateUtils.fadeIn(0.4)} />
            <S.SerProTitle variant='h3' {...AnimateUtils.fadeIn(0.6)}>
              {title}
            </S.SerProTitle>
          </S.SerProBox>
        </Grid>
        {content.map((item, index) => (
          <Grid item xs={12} md={6} key={item.key}>
            <S.SerProItem {...AnimateUtils.fadeDirection('left', 0.5, 100, 0.3 * index)}>
              <S.SerProItemImg {...item.img} />
              <S.SerProItemIcon {...item.icon} />
              <S.SerProItemText ref={ref}>
                <S.SerProItemTitle variant='h6'>{item.title}</S.SerProItemTitle>
                <S.SerProItemContent variant='body2' dangerouslySetInnerHTML={{ __html: item.content }} />
                <S.SerProItemButton size='large'>
                  <S.SerProItemButtonIcon linearColor={theme.palette.maruhachi['contrastText']} fontSize='large' />
                </S.SerProItemButton>
              </S.SerProItemText>
            </S.SerProItem>
          </Grid>
        ))}
      </Grid>
    </S.SerProWrap>
  );
};

export default ServicesProducts;
