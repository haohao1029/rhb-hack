import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import piechart from "../onboarding/image/piechart.png";
import NextButton from "../../components/NextButton";

// chakra slider component
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Box,
} from "@chakra-ui/react";

const ActionGoalMetric = () => {
  return (
    <div>
      <Head>
        <title>ZEE BY RHB</title>
        <meta name="description" content="Card Expenses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-cyan-400 px-12 py-10 h-max">
        <Link legacyBehavior href="/onboarding/ActionGoalIncome">
          <a className="text-3xl text-purple-700 pt-10">
            <AiOutlineArrowLeft />
          </a>
        </Link>
        <div className="my-12">
          <h2 className="text-purple-700 text-2xl max-w-xl mx-auto font-bold">
            Next - Find a budget that works for you
          </h2>
          <p className="text-purple-700 text-md max-w-xl mx-auto mt-3">
            Set up yourself for success
          </p>
        </div>

        <div className="mt-12">
          <div className="relative w-full mx-auto">
            <div className="relative flex items-center">
              <div className="text-xs text-purple-700 font-bold">
                Chill <br></br>Mode
              </div>
              <div className="absolute inset-y-0 right-0 text-xs text-red-500 font-bold">
                Try <br></br>Hard Mode
              </div>
            </div>
            <Slider defaultValue={50} min={0} max={100} step={25}>
              <SliderTrack bg="purple.100">
                <Box position="relative" right={10} />
                <SliderFilledTrack bg="purple.600" />
              </SliderTrack>
              <SliderThumb boxSize={6} />
            </Slider>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <Image src={piechart} alt="image" />
        </div>
        <div className="flex justify-center my-5">
          <p className="text-gray-500 hover:text-gray-600">Activate Advance Mode 🚀</p>
        </div>
        <Link href="/onboarding/ActionGoalControl">
          <NextButton text="Next Step" />
        </Link>
      </main>
    </div>
  );
};

export default ActionGoalMetric;
