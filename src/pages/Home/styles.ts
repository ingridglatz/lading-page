import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & a {
    text-decoration: none;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.25rem;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div<{ image: string }>`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  width: 300px;
  height: 300px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.border};
  overflow: hidden;
  padding: 1.5rem;

  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${({ image }) => image});
  background-size: cover;
  background-position: center;

  & p {
    color: #fff;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const SideBar = styled(Content)`
  width: 600px;
  height: 616px;

  & p {
    font-size: 2rem;
  }
`;
