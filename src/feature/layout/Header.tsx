import { Button } from '@/components/ui/button'
import React from 'react'

export const Header = async() => {
  return (
    <header className='border-b border-b-green-500'>
        <div className='container flex items-center py-2 max-w-lg m-auto gap-1 border border-red-700'>
            <h2 className='text-4xl font-bold mr-auto'>GitThread</h2>
            <Button>demo</Button>
        </div>
    </header>
  )
}
