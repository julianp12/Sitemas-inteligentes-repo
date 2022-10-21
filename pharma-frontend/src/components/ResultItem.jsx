import React from 'react'
import { SkeletonText, Box } from '@chakra-ui/react'

const ResultItem = () => {
  return (
    <Box w='100' px='5' py='5' border='1px' borderColor='gray.200'>
      <SkeletonText noOfLines={3} spacing='3' />
    </Box>
  )
};

export default ResultItem