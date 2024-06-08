import React from 'react';
import { Text } from '@chakra-ui/react';

type ScientificParagraphProps = {
  children: React.ReactNode; // Accepts text or any React node as children
};

const ScientificParagraph: React.FC<ScientificParagraphProps> = ({ children }) => {
  return (
    <Text
      fontSize="md" // Medium font size
      fontFamily="'Noto Serif', serif" // Noto Serif with a serif fallback
      lineHeight="tall" // Slightly taller line height for readability
      textAlign="justify" // Justifies text like many academic papers
      width={'80%'}
      mb={4} // Margin bottom for paragraph spacing
    >
      {children}
    </Text>
  );
};

export default ScientificParagraph;
