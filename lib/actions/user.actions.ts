"use server";

import { clerkClient } from "@clerk/nextjs/server";
import { parseSetCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { use } from "react";
import { parseStringify } from "../utils";

export const getUser = async ({userIds}:{userIds: string[]})=>{
    try{
        const {data} = await clerkClient.users.getUserList({
            emailAddress: userIds,
        });
        const users= data.map((user)=>({
            id: user.id,

            name:`${user.firstName}`,
            email: user.emailAddresses[0].emailAddress,
            avatar: user.imageUrl,
        }));

        const sortedUsers = userIds.map((email)=> users.find((user)=>
        user.email === email));
        return parseStringify(sortedUsers);
    } catch (error) {
        console.log(error);
    }
}