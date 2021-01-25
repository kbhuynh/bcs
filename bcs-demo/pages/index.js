import Head from 'next/head'
import Sidebar from '../components/sidebar' 
import Carousel from '../components/carousel' 
import Latest from '../components/latest' 


export default function Home() {
  return (
    <>
    <style jsx global>{`
            body {
              font: 16px Arial, Helvetica, sans-serif;
            }
    `}</style>
    <Head>
      <title>Black & White Cat Scanlations</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"/>
    </Head>
    <Sidebar/>
    <Carousel/>
    <Latest/>
    </>
  )
}
