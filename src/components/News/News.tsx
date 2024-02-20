import { Container, Section, Text } from './styles';

type NewsProps = {
  title: string;
  image: string;
  children: React.ReactNode[];
};

export function News({ title, image, children }: NewsProps) {
  return (
    <Container>
      <Section image={image}>
        <h1>{title}</h1>
      </Section>
      <Text>{children}</Text>
    </Container>
  );
}
