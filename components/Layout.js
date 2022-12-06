import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico"/>
        <title>Pokedex</title>
      </Head>
      <Navbar />
      <main>
        { children }
      </main>
      <Footer />
    </>
  )
}

export default Layout