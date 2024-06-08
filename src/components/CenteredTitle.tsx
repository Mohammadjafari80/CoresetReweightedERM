import React from 'react';
import { Text } from '@chakra-ui/react';

type CenteredTitleProps = {
  title: string; // The text to be displayed as the title
};

const CenteredTitle: React.FC<CenteredTitleProps> = ({ title }) => {
  return (
    <Text
      fontSize="4xl" // Example size, adjust as needed
      fontFamily="Lobster, cursive" // Specify Lobster, with a fallback to cursive
      textAlign="center" // Centers the text
      width="100%" // Takes the full width
    >
      {title}
    </Text>
  );
};

export default CenteredTitle;
