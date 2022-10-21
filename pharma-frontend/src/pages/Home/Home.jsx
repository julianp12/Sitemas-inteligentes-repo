import React from 'react'
import SearchForm from '../../components/SearchForm';
import ResultItem from '../../components/ResultItem';
import { SimpleGrid, Box, Divider, Text } from '@chakra-ui/react'

const Home = () => {
  return (
    <Box w='70%' mx='auto' my='10' px='10' py='10' pt='5' border='1px' borderColor='gray.200'>
      <SimpleGrid columns={1} spacing={5}>
        <SearchForm />
        <Divider />
        <Text fontSize='xl'>Resultados:</Text>
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
      </SimpleGrid >
    </Box>
  )
};

export default Home;