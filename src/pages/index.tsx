import { type NextPage } from "next";
import Head from "next/head";
import Header from "~/components/Header";
import HomeStayShowcase from "~/components/HomeStayShowcase";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Homestay.my</title>
        <meta name="description" content="Hmsty" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <div>
        <Header>
         <div>
          <HomeStayShowcase />
         </div>
        </Header>
        <main>

        </main>
      </div>
    </>
  );
};

export default Home;

