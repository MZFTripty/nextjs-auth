import { auth } from '@/auth'
import LogOut from '@/components/LogOut'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function page() {
    const session = await auth()
    if(!session?.user) redirect('/')
  return (
    <div className='flex flex-col items-center m-4'>
      <h1 className='text-3xl my-3'>{session?.user?.name}</h1>
      <Image src={session?.user?.image || '/default-avatar.png'} alt={session?.user?.name || 'User'} width={72} height={72} className='rounded-full'/>
      <LogOut/>
    </div>
  )
}
