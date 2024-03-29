'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { EducationalProvider} from '@/context/EducationalContext'
 import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [queryClient] =  useState(() =>new QueryClient())
 

  return (
    <html lang="en">
        <QueryClientProvider client={queryClient}>
          <EducationalProvider>
             <body className={inter.className}>{children}</body>
          </EducationalProvider>
        </QueryClientProvider>
    </html>
  )
}
