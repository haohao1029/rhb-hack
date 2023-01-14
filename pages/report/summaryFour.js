import Head from 'next/head'
import { Box, Text, Heading, Flex, Center } from '@chakra-ui/react'
import NextButton from '../../components/NextButton'
import { WarningIcon } from '@chakra-ui/icons'
import MultiProgress from 'react-multi-progress'


const summaryNine = () => {
     
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
                padding="5rem 2rem 0 2rem"
                className="bg-[#6BCDE7] m-0 p-0 h-screen"
            >
            <Box height="85%">
                <Heading as="h1" color="brand.purple">Check out where you are at your goals</Heading>
                <Box pt={5}>
                    <Text textAlign="right">Total Spending: RM 2480</Text>
                    <Box>
                        <Box my={3}>
                            <Flex justifyContent='space-between'>
                                <Text maxW="150">Necessities <WarningIcon  color="red.500" /></Text>
                                <Text maxW="150">RM 1300/1500</Text>
                            </Flex>
                            <MultiProgress className="progressBarCustom"
                                elements={[
                                    {
                                        value: 65,
                                        color: "#722464",
                                    },				{
                                        value: 25,
                                        color: "#E044C4",
                                    },				{
                                        value: 10,
                                        color: "#D9D9D9",
                                    },
                                ]}
                                style={{ padding: "20px" }}
                            />
                        </Box>
                        <Box my={3}>
                        <Flex justifyContent='space-between'>
                            <Text maxW="150">Wants <WarningIcon  color="red.500" /></Text>
                            <Text maxW="150">RM 780/900</Text>
                        </Flex>
                        <MultiProgress className="progressBarCustom"
                            elements={[
                                {
                                    value: 30,
                                    color: "#722464",
                                },				{
                                    value: 50,
                                    color: "#E044C4",
                                },				{
                                    value: 20,
                                    color: "#D9D9D9",
                                },
                            ]}
                        />
                        </Box>
                        <Box my={3}>
                        <Flex justifyContent='space-between'>
                            <Text maxW="150">Saving</Text>
                            <Text maxW="150">RM 400/600</Text>
                        </Flex>
                        <MultiProgress className="progressBarCustom"
                            elements={[
                                {
                                    value: 25,
                                    color: "#722464",
                                },				{
                                    value: 40,
                                    color: "#E044C4",
                                },				{
                                    value: 35,
                                    color: "#D9D9D9",
                                },
                            ]}
                        />
                        </Box>
                    </Box>
                </Box>
                <Center>
                    <Flex padding={3}>
                        <Box padding="0 5px 0 5px">
                            <Flex>
                                <Box  padding="0 5px" height="1rem" width="1rem" borderRadius="200px" backgroundColor="#722464"></Box>
                                <Text padding="0 5px" fontSize="xs">Last Week</Text>
                            </Flex>
                        </Box>
                        <Box padding="0 5px">
                            <Flex>
                                <Box  padding="0 5px" height="1rem" width="1rem" borderRadius="200px" backgroundColor="#E044C4"></Box>
                                <Text padding="0 5px" fontSize="xs">This Week</Text>                        
                            </Flex>
                        </Box>
                    </Flex>
                </Center>
            </Box>
            <NextButton text="Next"/>
            </Box>
        </>
    )
}

export default summaryNine;
