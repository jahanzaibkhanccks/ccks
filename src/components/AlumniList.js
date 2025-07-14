// Note.js
import React from 'react';
import styled from 'styled-components';

const NoteContainer = styled.div`
  background-color: #f0f8ff;
  border-left: 6px solid #0077b6;
  padding: 20px;
  margin: 20px auto;
  width: 80%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const NoteTitle = styled.h2`
  color: #0077b6;
  margin-bottom: 10px;
`;

const NoteContent = styled.p`
  color: #333;
  font-size: 1rem;
  line-height: 1.5;
`;

export default function Note() {
  return (
    <NoteContainer>
      <NoteTitle>Note for Students</NoteTitle>
      <NoteContent>
        Dear Students, always remember that learning is a journey, not a race. Stay curious,
        stay consistent, and never hesitate to ask questions. You’ve got this!
      </NoteContent>
    </NoteContainer>
  );
}
