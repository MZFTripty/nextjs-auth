import { signout } from '@/app/actions'
import React from 'react'

export default function LogOut() {
  return (
    <form action={signout}>
      <button type="submit" className='text-white bg-red-600 px-4 py-2 rounded mt-4 hover:bg-red-700'>
        LogOut
      </button>
    </form>
  )
}
