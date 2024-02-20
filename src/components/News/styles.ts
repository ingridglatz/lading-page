import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Section = styled.section<{ image: string }>`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 238px;
  overflow: hidden;
  padding: 1.5rem;

  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${({ image }) => image});
  background-size: cover;
  background-position: center;

  & h1 {
    color: #fff;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0;
  width: 750px;
  height: 646px;
  margin: 0 auto;

  & p {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
