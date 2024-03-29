import * as S from './styles';

type BodyProps = {
  children?: React.ReactNode;
};

const Body: React.FC<BodyProps> = ({ children }) => {
  return <S.BodyWrapper>{children}</S.BodyWrapper>;
};

export default Body;
