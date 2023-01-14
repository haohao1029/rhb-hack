import Head from 'next/head'
import Image from 'next/image'
import { Box, Text, Heading, Container, Button, Card, CardBody, CardHeader } from '@chakra-ui/react'


export default function Home() {
  const top3Categories = [
    ["General", 1300.50],
    ["Food", 100.50],
    ["Transport", 50.50]
  ]

  const categoryCard = top3Categories.map((category, index) => {
    return <Card my='5'>
    <CardBody>
      <Text size='md' fontSize='xl' color="#036B9C">{category[0]}</Text>
      <Text py='2' fontSize='2xl' color="#036B9C">
        <b>RM{category[1]}</b>
      </Text>
    </CardBody>
  </Card>
    
  })

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box 
        align-items= "center"
        mt='2' padding="5rem 2rem 0 2rem"
      >
        <Heading as="h1" size="2xl" color="#5452C6">
          Last Week,<br></br> Your Spend
        </Heading>
        <Heading as="h1" color="brand.darkpink" fontSize='5xl' /*textAlign="center"*/ padding="2rem 0 0 0">RM1300.50</Heading>
        <Box>
          <Heading as="h2" size="lg" pt="2rem" pb="2rem" color="#5452C6">
            Top Categories
          </Heading>
          {
          categoryCard
          }
        </Box>
      </Box>
    </>
  )
}
