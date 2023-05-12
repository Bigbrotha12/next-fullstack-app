import React from 'react'
import LoginForm from "@/components/LoginForm"
import { PrismaClient } from '@prisma/client'
import Image from 'next/image'
import Logo from '@/assets/images/logo-placeholder.png'

export default function LoginPrompt() {    
    
    return (
        <LoginForm
            title='Welcome!'
            subtitle='Sign in to your account'
            logo={<Image priority={true} placeholder='blur' src={Logo} width='64' height='64' alt='logo' />}
        />
    )
}