import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 900px;
  margin: 4rem auto;
  padding: 2rem;
  line-height: 1.8;
  color: #333;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: #6e8efb;
  margin-bottom: 1rem;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const About = () => {
  return (
    <AboutContainer>
      <Heading>About Cadet College Killa Saifullah</Heading>
      <Paragraph>
        Cadet College Killa Saifullah (CCKS) is one of Balochistan’s premier educational institutions, dedicated to nurturing young cadets into future leaders.
        Established with the vision to provide quality education, character building, and leadership training, CCKS aims to prepare students for the challenges of the modern world.
      </Paragraph>
      <Paragraph>
        Located in the heart of Killa Saifullah, the college offers state-of-the-art facilities, experienced faculty, and a disciplined environment that encourages academic excellence and all-round development.
      </Paragraph>
      <Paragraph>
        CCKS alumni have gone on to serve the country with pride in various fields, including the armed forces, civil services, education, and beyond.
        The college remains committed to fostering a strong community of graduates who stay connected, share experiences, and contribute to the nation’s progress.
      </Paragraph>
    </AboutContainer>
  );
};

export default About;
