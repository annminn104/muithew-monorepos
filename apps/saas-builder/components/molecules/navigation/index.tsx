import { List, ListItem } from '@mui/material';

type NavigationProps = {
  list: { key: string; name: string }[];
};

const Navigation: React.FC<NavigationProps> = ({ list }) => {
  return (
    <List>
      {list.map((item, index) => (
        <ListItem key={index}>{item.name}</ListItem>
      ))}
    </List>
  );
};

export default Navigation;
