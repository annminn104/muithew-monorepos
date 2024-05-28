import * as S from './styles';

type SectionUIProps = {
  component?: React.ReactNode;
  id: string;
};

const SectionUI: React.FC<SectionUIProps> = ({ component, id }) => {
  return <S.SectionWrap id={id}>{component}</S.SectionWrap>;
};

export default SectionUI;
