import React from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import { Icons } from '@/assets/Icons'
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
          navigation={[
            "This is a button",
            "Second",
            "Third"
          ]}
          searchBar={<SearchBar />}
          options={[
            <Icons.MenuIcon key='1' />,
            <Icons.Language key='2' />
          ]}
          endButton={"Login"}
        />

      </main>
    </React.Fragment>
  )
}
