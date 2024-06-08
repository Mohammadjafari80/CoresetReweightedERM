import React from 'react';
import { Box } from '@chakra-ui/react';

const FadingSeparator: React.FC = () => {
  return (
    <Box
      width="100%"
      height="1px"
      bgGradient="linear(to-r, transparent, gray.400, transparent)"
      position="relative"
      my={4} // Adds margin for spacing around the separator
    />
  );
};

export default FadingSeparator;
