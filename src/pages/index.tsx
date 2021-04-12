import Head from "next/head";
import { Header } from "../components/Header";
import { HomeBanner } from "../components/HomeBanner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Worldtrip</title>
      </Head>

      <Header />
      <HomeBanner />

      <h1>Hello World!</h1>
    </>
  )
}
