import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  VStack,
  Text,
  Image,
  Grid, GridItem, ListItem, UnorderedList
} from '@chakra-ui/react';
import { Link, Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react';
import { FaGithub, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

import AuthorName from './components/AuthorName'; 
import Affiliation from './components/Affiliation';
import FadingSeparator from './components/FadingSeperator';
import CenteredTitle from './components/CenteredTitle';
import ScientificParagraph from './components/ScientificParagraph'

const authors = [
  { name: "Mohammad Jafari", index: "1", span: { base: 1, md: 1, lg: 1 } },
  { name: "Yimeng Zhang", index: "2", span: { base: 1, md: 1, lg: 1 } },
  { name: "Yihua Zhang ", index: "2", span: { base: 1, md: 1, lg: 1 } },
  { name: "Sijia Liu", index: "2", span: { base: 1, md: 1, lg: 1 } },
];

const affiliations = [
  {name: "Sharif University of Technology", index: "1"},
  {name: "Michigan State University", index: "2"}
]

const App: React.FC = () => {
  return (
    <Flex mt={10} justify="center" minHeight="100vh" width="100%"> {/* Ensures that the content is centered in the viewport */}
      <Container maxW={{base:"95%", md:"80%", lg:"70%"}} bgColor="white">
        <VStack spacing={4} alignItems="center">
          <Box textAlign="center" p={6}>
            <Heading as="h1" size="xl" fontFamily="Times New Roman">
              The Power of Few: 
            </Heading>
            <Heading as="h1" size="xl" fontFamily="Times New Roman">
              Accelerating and Enhancing Data Reweighting with Coreset Selection
            </Heading>
          </Box>
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
            ICASSP 2024 (Poster)
          </Heading>
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(3, 1fr)']}
            gap={{ base: "5", md: "30" }}
            mt={2}
          >
            <Link href="https://github.com/Mohammadjafari80/CW-ERM" isExternal>
              <Tag size="lg" colorScheme="blue" borderRadius="full">
                <TagLeftIcon boxSize="16px" as={FaGithub} />
                <TagLabel>Code</TagLabel>
              </Tag>
            </Link>
            <Link href="ICASSP-POSTER-vertical-final.png" isExternal>
              <Tag size="lg" colorScheme="green" borderRadius="full">
                <TagLeftIcon boxSize="16px" as={FaFilePdf} />
                <TagLabel>Poster</TagLabel>
              </Tag>
            </Link>
            <Link href="https://arxiv.org/abs/2403.12166" isExternal>
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
              width={'60%'}   // Set the width to be 100% of the inner Flex
              objectFit={'cover'}  // This will ensure the image covers the area without distortion
              src={'hpo-method.png'}
              alt={'Methodology'}
              />
          <FadingSeparator/>
          <CenteredTitle title='Abstract'/>
          <ScientificParagraph>
          As machine learning tasks continue to evolve, the trend has been to gather larger datasets and train increasingly larger models. While this has led to advancements in accuracy, it has also escalated computational costs to unsustainable levels. Addressing this, our work aims to strike a delicate balance between computational efficiency and model accuracy, a persisting challenge in the field. We introduce a novel method that employs core subset selection for reweighting, effectively optimizing both computational time and model performance. By focusing on a strategically selected coreset, our approach offers a robust representation, as it efficiently minimizes the influence of outliers. The re-calibrated weights are then mapped back to and propagated across the entire dataset. Our experimental results substantiate the effectiveness of this approach, underscoring its potential as a scalable and precise solution for model training.  
          </ScientificParagraph>
          <FadingSeparator/>
          <CenteredTitle title='Problem'/>

          <ScientificParagraph>
            <VStack spacing={6} align="start">
              <Box>
                <Text mt="2">
                 <Text fontSize="2xl" fontWeight="bold" as="span" mr={2}>
                    Coreset Selection: 
                  </Text>
                  Improves computational efficiency by focusing on the most representative data{' '}
                  <Text as="span" fontWeight="bold">
                    but may miss nuanced diversity.
                  </Text>
                </Text>
              </Box>
              <Box>
                <Text mt="2">
                  <Text fontSize="2xl" fontWeight="bold" as="span" mr={2}>
                    Data Reweighting: 
                  </Text>
                  Aims at better generalization and faster convergence{' '}
                  <Text as="span" fontWeight="bold">
                    but is computationally intensive on large datasets.
                  </Text>
                </Text>
              </Box>
            </VStack>
          </ScientificParagraph>
          <FadingSeparator/>
          <CenteredTitle title='Methodology'/>
          <Image
              rounded={'lg'}
              // height={'100%'}  // Set the height to be 100% of the inner Flex
              width={'60%'}   // Set the width to be 100% of the inner Flex
              objectFit={'cover'}  // This will ensure the image covers the area without distortion
              src={'method-hpo.gif'}
              alt={'Methodology'}
              />
            {/* <ScientificParagraph>
            To develop a robust outlier detection model, the Outlier Exposure (OE) technique appears to be crucial; otherwise, the model would lack information about the adversarial patterns in the outlier data. However, the Baseline OE technique, which involves leveraging outliers from a presumed dataset, leads to unsatisfactory results in situations where the auxiliary exposed outliers deviate significantly from the in-distribution. Motivated by these factors, we aim to propose an adaptive OE technique that attempts to generate diverse and near-distribution outliers, which can act as a proxy for the real inference-time outliers. The subsequent sections will provide a detailed description of the primary stages of our methodology. 
            </ScientificParagraph> */}

          <ScientificParagraph>
              Our research methodology integrates three essential components: <strong>coreset selection</strong>, <strong>coreset reweighting</strong>, and <strong>broadcasting of recalibrated weights</strong> to the full dataset. We begin with selecting a representative subset of the original dataset, known as the coreset, to focus the intensive reweighting process. The coreset's weights are then fine-tuned and broadcast back to the entire dataset, achieving a globally effective reweighting. This unified process, termed <em>Coreset Reweighting for ERM (CW-ERM)</em>, balances computational efficiency with model performance, streamlining the path from data selection to final model training.
          </ScientificParagraph>
          <FadingSeparator/>
          <CenteredTitle title='Contributions'/>
          <Box p={6} width="80%">
            <VStack spacing={6} align="start">
              <UnorderedList spacing={4} styleType="none">
                <ListItem>
                  <Text fontSize="xl" fontFamily="Times New Roman" css={{ textAlign: 'justify' }}>
                    {'\u2780 (Methodology-wise)'} We propose a new framework that integrates coreset selection and data reweighting, striking a balance between training efficiency and model efficacy.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text fontSize="xl" fontFamily="Times New Roman" css={{ textAlign: 'justify' }}>
                    {'\u2781 (Efficiency-wise)'} We unveil that less than <Latex>$1\%$</Latex> of the dataset is sufficient for effective reweighting, dramatically increasing the efficiency of the process.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text fontSize="xl" fontFamily="Times New Roman" css={{ textAlign: 'justify' }}>
                    {'\u2782 (Performance-wise)'} We empirically validate our approach through comprehensive experiments on the <Text as="i">CIFAR-10</Text> and <Text as="i">CIFAR-100</Text> datasets, showing that our method maintains competitive levels of accuracy.
                  </Text>
                </ListItem>
              </UnorderedList>
            </VStack>
          </Box>
        <FadingSeparator/>
          <CenteredTitle title='Formulation'/>
          <Box p={4} borderRadius="md" width="70%">
            <VStack spacing={6} align="center">
              <Box textAlign="center">
                <Text fontSize="xl" fontWeight="bold" fontFamily="Times New Roman" mb={2}>ERM</Text>
                <Latex>{`$$\\min_{\\theta} \\frac{1}{n} \\sum_{i=1}^{n} \\mathcal{L}(f(x_i; \\theta), y_i)$$`}</Latex>
              </Box>
              <Box textAlign="center">
                <Text fontSize="xl" fontWeight="bold" fontFamily="Times New Roman" mb={2}>Weighted-ERM (W-ERM)</Text>
                <Latex >{`$$w = \\text{DataReweighting}(\\mathcal{X})$$`}</Latex>
                <Latex>{`$$\\min_{\\theta} \\frac{1}{n} \\sum_{i=1}^{n} w_i \\mathcal{L}(f(x_i; \\theta), y_i)$$`}</Latex>
              </Box>
              <Box textAlign="center">
                <Text fontSize="xl" fontWeight="bold" fontFamily="Times New Roman" mb={2}>Coreset reWeighted-ERM (CW-ERM)</Text>
                <Latex>{`$$C \\leftarrow \\text{ModerateCoreset}(\\mathcal{X})$$`}</Latex>
                <Latex>{`$$w^C = \\text{DataReweighting}(C)$$`}</Latex>
                <Latex>{`$$w_i^* = \\text{broadcast}(x_i, C, w^C) = w^C_{NN}(x_i, C)$$`}</Latex>
                <Latex>{`$$\\min_{\\theta} \\frac{1}{n} \\sum_{i=1}^{n} w_i^* \\mathcal{L}(f(x_i; \\theta), y_i)$$`}</Latex>
              </Box>
              <Box mt={4} textAlign="center">
                <Latex>{`Dataset $\\mathcal{X}$ with pairs $(x_i, y_i)$, model parameters $\\theta$, backbone function $f$, loss function $\\mathcal{L}$, representative coreset $C$, reweighted full dataset weights $w$, coreset weights $w^C$, and broadcasted weights $w_i^*$.`}</Latex>
              </Box>
            </VStack>
          </Box>

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
             <CenteredTitle title='OPTML'/>
             {/* <AvatarGroup size='md' max={4} mb={10}>
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
            </AvatarGroup> */}
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
