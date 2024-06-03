import { ListItem } from '@mui/material';

import * as S from './styles';

type NavigationProps = {
  list: { key: string; name: string }[];
};

const Navigation: React.FC<NavigationProps> = ({ list }) => {
  return (
    <S.NavList>
      {list.map((item, index) => (
        <ListItem key={index}>{item.name}</ListItem>
      ))}
    </S.NavList>
  );
};

export default Navigation;
