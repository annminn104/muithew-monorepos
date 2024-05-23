type SectionUIProps = {
  component?: React.ReactNode;
  id: string;
};

const SectionUI: React.FC<SectionUIProps> = ({ component, id }) => {
  return <section id={id}>{component}</section>;
};

export default SectionUI;
