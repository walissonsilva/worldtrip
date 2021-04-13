import Head from "next/head";
import { TravelTypes } from "../components/TravelTypes/";
import { Header } from "../components/Header";
import { HomeBanner } from "../components/HomeBanner";
import { Divider, Flex, Text } from "@chakra-ui/layout";
import { ContinentsSlider } from "../components/ContinentsSlider";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Worldtrip</title>
      </Head>

      <Header />
      <HomeBanner />
      <TravelTypes />

      <Flex
        flexDir="column"
        justify="center"
        align="center"
      >
        <Divider width={90} margin="80px auto 0" border="2px" borderColor="text-color-secondary" />
        <Text mt="52px" color="text-color-secondary" fontSize="4xl">Vamos nessa?</Text>
        <Text color="text-color-secondary" fontSize="4xl">Então escolha seu continente</Text>
      </Flex>

      <ContinentsSlider />
    </>
  )
}
