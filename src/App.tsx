import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  VStack,
  Text,
  Image,
  Grid, GridItem
} from '@chakra-ui/react';
import { Avatar, AvatarGroup } from '@chakra-ui/react'
import { Link, Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react';
import { FaGithub, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';

import AuthorName from './components/AuthorName'; 
import Affiliation from './components/Affiliation';
import FadingSeparator from './components/FadingSeperator';
import CenteredTitle from './components/CenteredTitle';
import ScientificParagraph from './components/ScientificParagraph'

// const authors = [
//   { name: "Hossein Mirzaei", index: "1", span: { base: 1, md: 1, lg: 1 } },
//   { name: "Mohammad Jafari", index: "1", span: { base: 1, md: 2, lg: 1 } },
//   { name: "Hamidreza Dehbashi", index: "1", span: { base: 1, md: 1, lg: 1 } },
//   { name: "Ali Anasari", index: "1", span: { base: 1, md: 1, lg: 1 } },
//   { name: "Sepehr Ghobadi", index: "1", span: { base: 1, md: 1, lg: 1 } },
//   { name: "Masoud Hadi", index: "2", span: { base: 1, md: 2, lg: 1 } },
//   { name: "Arshia Soltani", index: "1", span: { base: 1, md: 1, lg: 1 } },
//   { name: "Mohammad Azizmalayeri", index: "1", span: { base: 1, md: 1, lg: 1 } },
//   { name: "Mahdieh Soleymani Baghshah", index: "1", span: { base: 2, md: 2, lg: 2 } },
//   { name: "Mohammad Hossein Rohban", index: "1", span: { base: 2, md: 2, lg: 2 } }
// ];

const authors = [
  { name: "H. Mirzaei", index: "1", span: { base: 1, md: 1, lg: 1 } },
  { name: "M. Jafari", index: "1", span: { base: 1, md: 1, lg: 1 } },
  { name: "H. Dehbashi", index: "1", span: { base: 1, md: 1, lg: 1 } },
  { name: "A. Anasari", index: "1", span: { base: 1, md: 1, lg: 1 } },
  { name: "S. Ghobadi", index: "1", span: { base: 1, md: 1, lg: 1 } },
  { name: "M. Hadi", index: "2", span: { base: 1, md: 1, lg: 1 } },
  { name: "A. Soltani", index: "1", span: { base: 1, md: 1, lg: 1 } },
  { name: "M. Azizmalayeri", index: "1", span: { base: 1, md: 1, lg: 1 } },
  { name: "M. Soleymani", index: "1", span: { base: 2, md: 2, lg: 2 } },
  { name: "MH. Rohban", index: "1", span: { base: 2, md: 2, lg: 2 } }
];

const affiliations = [
  {name: "Sharif University of Technology", index: "1"},
  {name: "Isfahan University of Technology", index: "2"}
]
const App: React.FC = () => {
  return (
    <Flex mt={10} justify="center" minHeight="100vh" width="100%"> {/* Ensures that the content is centered in the viewport */}
      <Container maxW={{base:"95%", md:"80%", lg:"70%"}} bgColor="white">
        <VStack spacing={4} alignItems="center">
          <Heading as="h1" fontFamily="Times New Roman" size="xl" textAlign="center">
            RODEO: Robust Outlier Detection via Exposing Adaptive Outliers
          </Heading>
          <FadingSeparator/>
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
            gap={{ base: "1", md: "2", lg: "1"}}
            mt={3}
          >
            {authors.map((author, index) => (
              <GridItem
                key={index}
                w="100%"
                display="flex"
                justifyContent="center"
                colSpan={{ base: author.span.base, md: author.span.md, lg: author.span.lg }}
              >
                <AuthorName name={author.name} index={author.index} />
              </GridItem>
            ))}
          </Grid>
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
            gap={{ base: "5", md: "20"}}
            mt={2}
          >
          {affiliations.map((affiliation, index) => (
              <GridItem
                key={index}
                w="100%"
                display="flex"
                justifyContent="center"
              >
                <Affiliation name={affiliation.name} index={affiliation.index} />
              </GridItem>
            ))}
          </Grid>
          <Heading as="h2" mt={4} fontFamily="Times New Roman" size="md" textAlign="center">
            ICML 2024 (Poster)
          </Heading>
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(3, 1fr)']}
            gap={{ base: "5", md: "30" }}
            mt={2}
          >
            <Link href="https://github.com" isExternal>
              <Tag size="lg" colorScheme="blue" borderRadius="full">
                <TagLeftIcon boxSize="16px" as={FaGithub} />
                <TagLabel>Code</TagLabel>
              </Tag>
            </Link>
            <Link href="https://example.com/poster.pdf" isExternal>
              <Tag size="lg" colorScheme="green" borderRadius="full">
                <TagLeftIcon boxSize="16px" as={FaFilePdf} />
                <TagLabel>Poster</TagLabel>
              </Tag>
            </Link>
            <Link href="https://arxiv.org" isExternal>
              <Tag size="lg" colorScheme="red" borderRadius="full">
                <TagLeftIcon boxSize="16px" as={FaExternalLinkAlt} />
                <TagLabel>ArXiv</TagLabel>
              </Tag>
            </Link>
          </Grid>
          <FadingSeparator/>
          <Image
              rounded={'lg'}
              // height={'100%'}  // Set the height to be 100% of the inner Flex
              width={'80%'}   // Set the width to be 100% of the inner Flex
              objectFit={'cover'}  // This will ensure the image covers the area without distortion
              src={'fig-samples-icml.png'}
              alt={'Methodology'}
              />
          <FadingSeparator/>
          <CenteredTitle title='Abstract'/>
          <ScientificParagraph>
          In recent years, there have been significant improvements in various forms of image outlier detection. However, outlier detection performance under adversarial settings lags far behind that in standard settings. This is due to the lack of effective exposure to adversarial scenarios during training, especially on unseen outliers, leading to detection models failing to learn robust features. To bridge this gap, we introduce RODEO, a data-centric approach that generates effective outliers for robust outlier detection. More specifically, we show that incorporating outlier exposure (OE) and adversarial training could be an effective strategy for this purpose, as long as the exposed training outliers meet certain characteristics, including diversity, and both conceptual differentiability and analogy to the inlier samples. We leverage a text-to-image model to achieve this goal. We demonstrate both quantitatively and qualitatively that our adaptive OE method effectively generates ``diverse'' and ``near-distribution'' outliers, leveraging information from both text and image domains. Moreover, our experimental results show that utilizing our synthesized outliers significantly enhances the performance of the outlier detector, particularly in adversarial settings.  
          </ScientificParagraph>
          <FadingSeparator/>
          <CenteredTitle title='Problem'/>
          <Image
              rounded={'lg'}
              // height={'100%'}  // Set the height to be 100% of the inner Flex
              width={{base:'80%', md:'80%', lg:'40%'}}   // Set the width to be 100% of the inner Flex
              objectFit={'cover'}  // This will ensure the image covers the area without distortion
              src={'fig-1-icml.png'}
              alt={'problem'}
              />
          <ScientificParagraph>
            In this study, we experimentally observe that the OE technique performance is highly sensitive to the distance between the exposed outliers and the inlier training set distribution. Our result suggests that a near-distribution OE set is significantly more beneficial than a distant one. By near-distribution outliers, we refer to image data that possesses semantically and stylistically related characteristics to those of the inlier dataset. 
          </ScientificParagraph>
          <FadingSeparator/>
          <CenteredTitle title='Method'/>
          <Image
              rounded={'lg'}
              // height={'100%'}  // Set the height to be 100% of the inner Flex
              width={'80%'}   // Set the width to be 100% of the inner Flex
              objectFit={'cover'}  // This will ensure the image covers the area without distortion
              src={'rodeo-website.png'}
              alt={'Methodology'}
              />
            <ScientificParagraph>
            To develop a robust outlier detection model, the Outlier Exposure (OE) technique appears to be crucial; otherwise, the model would lack information about the adversarial patterns in the outlier data. However, the Baseline OE technique, which involves leveraging outliers from a presumed dataset, leads to unsatisfactory results in situations where the auxiliary exposed outliers deviate significantly from the in-distribution. Motivated by these factors, we aim to propose an adaptive OE technique that attempts to generate diverse and near-distribution outliers, which can act as a proxy for the real inference-time outliers. The subsequent sections will provide a detailed description of the primary stages of our methodology. 
            </ScientificParagraph>
             <FadingSeparator/>
             <CenteredTitle title='Experimental Results'/>
             <Image
              rounded={'lg'}
              // height={'100%'}  // Set the height to be 100% of the inner Flex
              width={'80%'}   // Set the width to be 100% of the inner Flex
              objectFit={'cover'}  // This will ensure the image covers the area without distortion
              src={'results.png'}
              alt={'results'}
              />
             <FadingSeparator/>
             <CenteredTitle title='RIML Lab'/>
             <AvatarGroup size='md' max={4} mb={10}>
              <Avatar name='Hossein Mirzaei' src='people/01.jpg' />
              <Avatar name='Mohammad Jafari' src='people/02.jpg' />
              <Avatar name='Hamidreza Dehbashi' src='people/03.jpg' />
              <Avatar name='Ali Ansari' src='people/04.jpg' />
              <Avatar name='Sepehr Ghobadi' src='https://bit.ly/code-beast' />
              <Avatar name='Masoud Hadi' src='https://bit.ly/code-beast' />
              <Avatar name='Arshia Soltani' src='https://bit.ly/code-beast' />
              <Avatar name='Mohammad Azizmalayeri' src='https://bit.ly/code-beast' />
              <Avatar name='Mahdieh Soleymani Baghshah' src='https://bit.ly/code-beast' />
              <Avatar name='Mohammad Hossein Rohban' src='https://bit.ly/code-beast' />
            </AvatarGroup>
            <Box textAlign="center" mb={8}>
              <Text fontSize="sm">
                Designed by Mohammad Jafari. All rights reserved.
              </Text>
              <Text fontSize="sm">
                This design is original and created for the lab use.
              </Text>
            </Box>
        </VStack>
      </Container>
    </Flex>
  );
};

export default App;
