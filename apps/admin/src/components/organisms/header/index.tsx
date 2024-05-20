import { IconButton } from '@mui/material';
import { HamburgerMenu2Icon, Widget6Icon } from '@styles/ui-mui/icons';
import * as S from './styled';

type HeaderProps = {
  onExtendSidebar: () => void;
};

export const Header: React.FC<HeaderProps> = ({ onExtendSidebar }) => {
  return (
    <S.Header>
      <S.HeaderLeft>
        <IconButton onClick={onExtendSidebar}>
          <HamburgerMenu2Icon fontSize='large' />
        </IconButton>
        <IconButton>
          <Widget6Icon fontSize='medium' />
        </IconButton>
        <S.HeaderLeftInputSearch label='Search here...' size='small' InputProps={{ endAdornment: <S.HeaderLeftIcon fontSize='small' /> }} />
      </S.HeaderLeft>
      <S.HeaderRight>Header right</S.HeaderRight>
    </S.Header>
  );
};
