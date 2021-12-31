import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" mb={6} p={3} align="center">
        Hi! I am passionate about Frontend Developer and UX|Designer.
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Douglas da Silva
          </Heading>
          <p>
            Digital Garimpeiro (Developer / Designer) from Brazil to the world
          </p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
