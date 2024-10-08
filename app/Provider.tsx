"use client"
import { Loader } from "@/components/Loader";
import { getUser } from "@/lib/actions/user.actions";
import {ClientSideSuspense, LiveblocksProvider} from "@liveblocks/react/suspense"

const Provider = ({children }:{children:React.ReactNode}) =>{
    return(
        <LiveblocksProvider
         authEndpoint={"/api/liveblocks-auth"}
         resolveUsers={async ({userIds})=>{
          const users = await getUser({userIds}); 
          return users;
         }}
        >
          <ClientSideSuspense fallback={<Loader/>}>
            {children}
          </ClientSideSuspense>
      </LiveblocksProvider>
    );
};

export default Provider;