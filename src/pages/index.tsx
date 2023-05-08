import React from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Section from '@/components/Section'
import LandingBanner from '@/components/LandingBanner'
import Image from 'next/image'
import { Icons } from '@/assets/Icons'
import logo from '@/assets/images/logo-placeholder.png'
import { Inter } from 'next/font/google'
import Card from '@/components/Card'

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
          logo={<Image priority={true} placeholder='blur' src={logo} width='96' height='96' alt='logo' />}
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
        <Section heading='Software, Processes, Solutions' subheading='Take advantage of a great pool of talent to support your business needs.'>
          <Card
            title='Card Title'
            content='LoremPariatur ipsum quis et cillum anim duis cillum ipsum cupidatat irure exercitation officia aliqua velit. Eu eiusmod nisi fugiat labore incididunt dolor. Dolore ea quis amet aliquip Lorem do cillum esse incididunt. Incididunt exercitation fugiat sit tempor anim ut dolor eu qui dolore esse culpa eu.'
            icon={<Icons.Search />}
            buttonText='Click Me' />
        </Section>

      </main>
    </React.Fragment>
  )
}
