import React from 'react';
import { Box, Text } from '@chakra-ui/react';

type AuthorNameProps = {
  name: string;
  index: string;
};

const AuthorName: React.FC<AuthorNameProps> = ({ name, index }) => {
  return (
    <Box>
      <Text as="span" fontSize="lg" fontWeight="bold"  fontFamily="Times New Roman">
        {name}
        <Text as="sup" fontSize="sm" ml="1" verticalAlign="super">
          {index}
        </Text>
      </Text>
    </Box>
  );
};

export default AuthorName;
