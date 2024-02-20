import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Container, Content, ContentBox, SideBar } from './styles';

export function Home() {
  return (
    <Layout>
      <Container>
        <Link to="/destiny">
          <SideBar image="landscape.jpg">
            <p>Os 10 melhores destinos em 2024</p>
          </SideBar>
        </Link>

        <ContentBox>
          <Link to="/city">
            <Content image="city.jpg">
              <p>As melhores cidades para se viver</p>
            </Content>
          </Link>

          <Link to="/exercises">
            <Content image="run.jpg">
              <p>A prática de exercícios no meio urbano</p>
            </Content>
          </Link>
        </ContentBox>
      </Container>
    </Layout>
  );
}
