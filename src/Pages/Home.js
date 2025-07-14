import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  max-width: 600px;
  line-height: 1.6;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title>Welcome to Alumni CCKS</Title>
      <Subtitle>
        Stay connected with your institution and fellow alumni. Register, share your achievements,
        and contribute to building a stronger community together!
      </Subtitle>
    </HomeContainer>
  );
};

export default Home;
