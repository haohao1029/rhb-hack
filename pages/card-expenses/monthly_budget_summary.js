import React from "react";
import Head from "next/head";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

function MonthlyBudget() {
  return (
    <div>
      {" "}
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        align-items="center"
        padding="5rem 2rem 0 2rem"
        className="bg-[#6BCDE7] m-0 p-0 h-screen"
      >
        <Text fontSize="xl" color="brand.darkblue">
          But it is okay! You are still within your budget
        </Text>

        <Box py={10}>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-blue-700 dark:text-white">
              RM 0
            </span>
            <span className="text-sm font-medium text-blue-700 dark:text-white">
              RM 1500
            </span>
            <span className="text-sm font-medium text-blue-700 dark:text-white">
              RM 3000
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full w-[45%]"></div>
          </div>
        </Box>

        <Text fontSize="xl" color="brand.darkblue">
          But it is okay! You are still within your budget
        </Text>
        <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <Image
            src={"https://media.giphy.com/media/SEWEmCymjv8XDbsb8I/giphy.gif"}
            alt="the gif"
            height={500}
            width={500}
          />
        </div>
      </Box>

    </div>
  );
}

export default MonthlyBudget;
