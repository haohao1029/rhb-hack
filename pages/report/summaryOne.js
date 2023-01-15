import Head from "next/head";
import {
  Box,
  Text,
  Heading,
  Container,
  Card,
  CardBody,
  Stack,
  Image,
  CardFooter,
  CardHeader,
} from "@chakra-ui/react";
import NextButton from "../../components/NextButton";
import Link from "next/link";
import saving from "./saving.png";
export default function SummaryOne() {
  const top3Categories = [
    ["General", 1300.5],
    ["Food", 100.5],
    ["Transport", 50.5],
  ];

  return (
    <>
      <Head>
        <title>ZEE BY RHB App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        align-items="center"
        padding="5rem 2rem 0 2rem"
        className="bg-[#6BCDE7] m-0 p-0 h-screen"
      >
        <Box>
          <Heading as="h1" size="2xl" color="#5452C6">
            Last Week,<br></br> Your Spend
          </Heading>
          <Heading
            as="h1"
            color="brand.darkpink"
            fontSize="5xl"
            /*textAlign="center"*/ py="1"
          >
            RM2480
          </Heading>
          <Box>
            <Heading as="h2" size="lg" color="#5452C6">
              Top Categories
            </Heading>

            <Card
              direction={{ base: "row", sm: "row" }}
              pl="5"
              my={3}
              overflow="hidden"
              variant="outline"
            >
              <CardHeader position="relative">
                <Text
                  position="absolute"
                  top=" 50%"
                  left=" 50%"
                  transform=" translate(-50%, -50%)"
                  fontSize="4xl"
                  maxW={{ base: "100%", sm: "100px" }}
                >
                  📦
                </Text>
              </CardHeader>
              <Stack>
                <CardBody>
                  <Text fontSize="xl" color="#036B9C">
                    Necessities
                  </Text>
                  <Text py="2" fontSize="2xl" as="b" color="#036B9C">
                    RM 300.00
                  </Text>
                </CardBody>
              </Stack>
            </Card>
            <Card
              direction={{ base: "row", sm: "row" }}
              pl="5"
              my={3}
              overflow="hidden"
              variant="outline"
            >
              <CardHeader position="relative">
                <Text
                  position="absolute"
                  top=" 50%"
                  left=" 50%"
                  transform=" translate(-50%, -50%)"
                  fontSize="4xl"
                  maxW={{ base: "100%", sm: "100px" }}
                >
                  🛍
                </Text>
              </CardHeader>
              <Stack>
                <CardBody>
                  <Text fontSize="xl" color="#036B9C">
                    Wants
                  </Text>
                  <Text py="2" fontSize="2xl" as="b" color="#036B9C">
                    RM 480.00
                  </Text>
                </CardBody>
              </Stack>
            </Card>
            <Card
              direction={{ base: "row", sm: "row" }}
              pl="5"
              my={3}
              overflow="hidden"
              variant="outline"
            >
              <CardHeader position="relative">
                <Text
                  position="absolute"
                  top=" 50%"
                  left=" 50%"
                  transform=" translate(-50%, -50%)"
                  fontSize="4xl"
                  maxW={{ base: "100%", sm: "100px" }}
                >
                  💰
                </Text> 
              </CardHeader>
              <Stack>
                <CardBody>
                  <Text fontSize="xl" color="#036B9C">
                    Saving
                  </Text>
                  <Text py="2" fontSize="2xl" as="b" color="#036B9C">
                    RM 200.00
                  </Text>
                </CardBody>
              </Stack>
            </Card>
          </Box>
        </Box>
        <Link href="/report/summaryTwo">
          <NextButton text="Next" />
        </Link>
      </Box>
    </>
  );
}
