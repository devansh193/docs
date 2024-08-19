import Header from '@/components/Header'
import { Editor } from '@/components/editor/Editor'
import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs'
import React from 'react'

const Document = () => {
  return (
    <div>
      <Header>
      <div className='flex w-fit items-center justify-center gap-2'>
        <p className='document-title'>document title</p>
      </div>
      <SignedOut>
        <SignInButton/>
      </SignedOut>
      <SignedIn>
        <SignInButton/>
      </SignedIn>
      </Header>
    <Editor/>
    </div>
  )
}

export default Document