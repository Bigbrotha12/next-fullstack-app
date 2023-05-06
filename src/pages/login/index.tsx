import React from 'react'
import LoginForm from "@/components/LoginForm"
import { PrismaClient } from '@prisma/client'


export default function LoginPrompt(props: any) {    
    console.log(props.users[0].email)
    return (
        <LoginForm />
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