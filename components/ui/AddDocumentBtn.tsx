"use client";
import Image from "next/image";
import { Button } from "./button"
import { createDocument } from "@/lib/actions/room.actions";
import { useRouter } from "next/navigation";

type AddDocumentBtnProps = {
    userId: string;
    email: string;
  };


export const AddDocumentButton = ({userId, email}: AddDocumentBtnProps ) =>{
    const router = useRouter();
    const documentHandler = async () =>{
        try{
           const room = await createDocument({userId, email});
           if(room)  router.push(`/documents/${room.id}`);
        }catch(error){
            console.log(error);
        }

    }
    return (
        <Button type="submit" onClick={documentHandler} className="bg-gradient-to-t from-blue-500 to-blue-400 flex gap-1 shadow-md">
            <Image
            src={"/assets/icons/add.svg"}
            alt="add"
            width={24}
            height={24}
            />
            <p className="hidden sm:block">Start a blank document</p>
        </Button>
    );
};