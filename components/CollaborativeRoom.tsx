"use client";
import { ClientSideSuspense, RoomProvider } from "@liveblocks/react/suspense";
import Header from "@/components/Header";
import { Editor } from "@/components/editor/Editor";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { ActiveCollaborators } from "./ActiveCollaborators";

export const CollaborativeRoom = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          <div className="collaborative-room">
            <Header>
              <div className="flex w-fit items-center justify-center gap-2">
                <p className="document-title">document title</p>
              </div>
              <div className="flex w-full flex-1 justify-end gap-2 sm:gap-3">
                <ActiveCollaborators />
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <SignInButton />
                </SignedIn>
              </div>
            </Header>
            <Editor />
          </div>
        </ClientSideSuspense>
      </RoomProvider>
    </div>
  );
};
