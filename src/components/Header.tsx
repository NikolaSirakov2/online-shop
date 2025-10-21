import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Search from './Search'

const Header = () => {
  return (
    <header className='py-4'>
      <div className="container flex justify-between items-center">

        <div className="logo">
          <Link href="/">
            <Image src="/shoes-logo-nobg.png" alt="logo" width={243} height={73} />
          </Link>
        </div>

        <Search />

        <div className='flex items-center gap-5'>
          <div className='flex items-center gap-3'>
            <Link href={"/login"}>Login</Link>
            <span>|</span>
            <Link href={"/register"}>Register</Link>
          </div>
        </div>



      </div>
    </header>
  )
}

export default Header