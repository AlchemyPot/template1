import type { NextPage } from "next";
import Head from "next/head";
import { Main } from "src/Main";

const Home: NextPage = () => {
    return (
        <div className="">
            <Head>
                <title></title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <Main></Main>
        </div>
    );
};

export default Home;