import Head from 'next/head'
import { Inter } from 'next/font/google'
import Router from 'next/router'
import Link from 'next/link'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1>Select country</h1>
      <Link href={'/en'}>English</Link>
    </div>
  )
}
