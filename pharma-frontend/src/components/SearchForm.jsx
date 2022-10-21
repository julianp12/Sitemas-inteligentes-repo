import React, { useState } from 'react'
import {
  Grid,
  GridItem,
  FormControl,
  FormErrorMessage,
  Button,
  Input,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const SearchForm = () => {
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  const handleInputChange = (e) => setInput(e.target.value)

  const handleButton = () => input === '' ? setError(true) : setError(false)

  return (
    <Grid templateColumns='3fr 1fr' templateRows='20px' justifyContent='center' gap={2} mb='10'>
      <GridItem w='100%'>
        <FormControl isInvalid={error}>
          <Input type='text' placeholder='Ingresa un medicamento para iniciar la búsqueda.' value={input} onChange={handleInputChange} />
          {error ? (
            <FormErrorMessage>Este campo es obligatorio.</FormErrorMessage>
          ) : null}
        </FormControl>
      </GridItem>
      <GridItem w='100%'>
        <Button rightIcon={<SearchIcon />} colorScheme='teal' variant='outline' onClick={handleButton}>
          Buscar
        </Button>
      </GridItem>
    </Grid>

  )
};

export default SearchForm;