import Link from 'next/link'
import React from 'react'

export default function AuthLayout() {
  return (
    <>
        <nav>
            <h1>Dojo Helpdesk</h1>
            <Link href='/signup'>Sign up</Link>
            <Link href='/login'>Log in</Link>
        </nav>
    </>
  )
}
