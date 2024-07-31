
'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
  return (
    <nav className='flex-between w-full mb-20 pt-4'>
        <Link href='/' className='gap-2 flex-center'>
            <Image
                src='assets/images/logo.svg'
                alt='PromptGalaxy logo'
                width={30}
                height={30}
                className='object-contain'
            />
            <p className='logo_text'>PromptGalaxy</p>
        </Link>
    </nav>
  )
}

export default Nav