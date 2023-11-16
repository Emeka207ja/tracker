import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {Box,Heading} from "@chakra-ui/react"
import { Signup } from '@/Component/Auth/Signup'
import NotAuthLayout from '@/Component/Layout/NotAuthLayout'
import { LandingPage } from '@/Component/Home/LandingPage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   
     <NotAuthLayout>
        <LandingPage/>
     </NotAuthLayout>
   
  )
}
