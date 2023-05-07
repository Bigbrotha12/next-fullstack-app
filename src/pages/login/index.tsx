import React from 'react'
import LoginForm from "@/components/LoginForm"
import { PrismaClient } from '@prisma/client'
import Image from 'next/image'
import Logo from '@/assets/images/logo-placeholder.png'

export default function LoginPrompt(props: any) {    
    console.log(props.users[0].email)
    return (
        <LoginForm
            title='Welcome!'
            subtitle='Sign in to your account'
            logo={<Image priority={true} placeholder='blur' src={Logo} width='64' height='64' alt='logo' />}
        />
    )
};

const prisma = new PrismaClient()

export async function getStaticProps() {
    const allUsers = await prisma.users.findMany()
    const parsedUsers = JSON.stringify(allUsers, (_key, value) =>
      typeof value === 'bigint' ? value.toString() : value)

    return {
        props: {
            users: JSON.parse(parsedUsers)
        }    
    }
}