import Head from "next/head";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const Title = styled.h1`
  color: red;
`;

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
      </Head>
      <Navbar/>
    </div>
  );
}
