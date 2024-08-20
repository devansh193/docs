import { CollaborativeRoom } from '@/components/CollaborativeRoom'
import Header from '@/components/Header'
import { Editor } from '@/components/editor/Editor'
import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs'
import React from 'react'

const Document = () => {
  return (
    <main className='flex w-full flex-col'>
      <CollaborativeRoom children={undefined}      
      />
    </main>
  )
}

export default Document