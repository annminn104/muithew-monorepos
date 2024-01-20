import { IconButton } from '@mui/material';
import * as S from './styled';

type HeaderProps = {
  onExtendSidebar: () => void;
};

export const Header: React.FC<HeaderProps> = ({ onExtendSidebar }) => {
  return (
    <S.Header>
      <IconButton onClick={onExtendSidebar}>abc</IconButton>
      Header
    </S.Header>
  );
};
