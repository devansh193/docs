"use client";
import { ClientSideSuspense, RoomProvider } from "@liveblocks/react/suspense";
import Header from "@/components/Header";
import { Editor } from "@/components/editor/Editor";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { ActiveCollaborators } from "./ActiveCollaborators";

type RoomMetadata = {
  creatorId: string;
  email: string;
  title: string;
};
type UserType = "creator" | "editor" | "viewer";

type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  color: string;
  userType?: UserType;
};

type CollaborativeRoomProps = {
  roomId: string;
  roomMetadata: RoomMetadata;
  users: User[];
  currentUserType: UserType;
};

export const CollaborativeRoom = ({
  roomId,
  roomMetadata,
}: CollaborativeRoomProps) => {
  return (
    <div>
      <RoomProvider id={roomId}>
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
