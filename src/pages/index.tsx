import React from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import LandingBanner from '@/components/LandingBanner'
import Image from 'next/image'
import { Icons } from '@/assets/Icons'
import logo from '@/assets/images/logo-placeholder.png'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Telecommunication</title>
        <meta name="description" content="Fullstack Demo App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        
        <Header
          logo={<Image src={logo} width='96' height='96' alt='logo' />}
          navigation={[
            "Home", "Services", "Contact"
          ]}
          // searchBar={<SearchBar />}
          options={[
            <Icons.Search key='0' />,
            <Icons.MenuIcon key='1' />,
            <Icons.Language key='2' />
          ]}
          endButton={"Login"}
        />

        <LandingBanner />

      </main>
    </React.Fragment>
  )
}
