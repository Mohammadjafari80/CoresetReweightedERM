import React from 'react';
import { Box, Text } from '@chakra-ui/react';

type AffiliationProps = {
  name: string;
  index: string;
};

const Affiliation: React.FC<AffiliationProps> = ({ name, index }) => {
  return (
    <Box display="flex" alignItems="center">
      <Text as="span" position="relative" fontSize="lg" fontWeight="black" fontFamily="Times New Roman" color={'gray.600'}>
        <Text as="sup" fontSize="sm" position="absolute" left="-0.5rem" top="-0.3rem">
          {index}
        </Text>
        {name}
      </Text>
    </Box>
  );
};

export default Affiliation;
