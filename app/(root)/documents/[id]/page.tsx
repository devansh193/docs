import { CollaborativeRoom } from '@/components/CollaborativeRoom'
import Header from '@/components/Header'
import { Editor } from '@/components/editor/Editor'
import { getDocument } from '@/lib/actions/room.actions'
import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const Document = async ({params: {id}}: SearchParamProps) => {
  const user = await currentUser();
  if(!user) redirect('/sign-in');

  const room = await getDocument({
    roomId: id,
    userId: user.emailAddresses[0].emailAddress,
  })
  if(!room) redirect('/');

  return (
    <main className='flex w-full flex-col'>
      <CollaborativeRoom 
        roomId={id}
        roomMetadata={room.roomMetadata} users={[]} currentUserType={'creator'}      />
    </main>
  )
}

export default Document