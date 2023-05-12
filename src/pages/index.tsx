import React from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Section from '@/components/Section'
import LandingBanner from '@/components/LandingBanner'
import Image from 'next/image'
import { Icons } from '@/assets/Icons'
import Logo from '@/assets/images/logo-placeholder.png'
import Card from '@/components/Card'
import SectionStyles from './styles/section.module.css'
import Grid from '@/components/Grid'

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
          logo={<Image priority={true} placeholder='blur' src={Logo} width='96' height='96' alt='logo' />}
          navigation={[
            "Home", "Services", "Contact"
          ]}
  
          options={[
            <Icons.Search key='0' />,
            <Icons.MenuIcon key='1' />,
            <Icons.Language key='2' />
          ]}
          endButton={"Login"}
        />

        <LandingBanner />
        <Section heading='Software, Processes, Solutions' subheading='Take advantage of a great pool of talent to support your business needs.'>
          <Grid columns={3} elements={[
            <Card
              key='0'
              title='Card Title'
              content='LoremPariatur ipsum quis et cillum anim duis cillum ipsum cupidatat irure exercitation officia aliqua velit. Eu eiusmod nisi fugiat labore incididunt dolor. Dolore ea quis amet aliquip Lorem do cillum esse incididunt. Incididunt exercitation fugiat sit tempor anim ut dolor eu qui dolore esse culpa eu.'
              icon={<Icons.Search />}
              buttonText='Click Me' />,
            <Card
              key='1'
              title='Card Title'
              content='LoremPariatur ipsum quis et cillum anim duis cillum ipsum cupidatat irure exercitation officia aliqua velit. Eu eiusmod nisi fugiat labore incididunt dolor. Dolore ea quis amet aliquip Lorem do cillum esse incididunt. Incididunt exercitation fugiat sit tempor anim ut dolor eu qui dolore esse culpa eu.'
              icon={<Icons.Search />}
              buttonText='Click Me' />,
            <Card
              key='2'
              title='Card Title'
              content='LoremPariatur ipsum quis et cillum anim duis cillum ipsum cupidatat irure exercitation officia aliqua velit. Eu eiusmod nisi fugiat labore incididunt dolor. Dolore ea quis amet aliquip Lorem do cillum esse incididunt. Incididunt exercitation fugiat sit tempor anim ut dolor eu qui dolore esse culpa eu.'
              icon={<Icons.Search />}
              buttonText='Click Me' />
          ]} />
            
          
        </Section>

        <Section className={SectionStyles.section_container} heading='Section 2' subheading='This one has fancy pseudo-elements'>
          <p>Incididunt ea anim consectetur aute est aute aliqua culpa voluptate exercitation nostrud laboris fugiat fugiat. Tempor ea enim commodo occaecat consectetur incididunt duis nisi quis quis ea anim et. Mollit id occaecat ad dolore est nulla dolore velit. Nulla mollit aliquip non ex et adipisicing id eiusmod aliquip aute culpa non cillum voluptate. Quis laboris cillum cillum consequat ea dolore sit eu excepteur adipisicing et.</p>
        </Section>

      </main>
    </React.Fragment>
  )
}
