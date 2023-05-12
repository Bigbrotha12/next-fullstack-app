import React from "react"
import RegisterForm from "@/components/RegisterForm"
import Image from "next/image"
import Logo from '@/assets/images/logo-placeholder.png'

export default function LoginPrompt(props: any) {    
    
    return (
        <RegisterForm
            title='Welcome!'
            subtitle='Register a new account.'
            logo={<Image priority={true} placeholder='blur' src={Logo} width='64' height='64' alt='logo' />}
        />
    )
}