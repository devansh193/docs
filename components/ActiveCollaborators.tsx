import { useOthers } from "@liveblocks/react/suspense";
import Image from "next/image";

export const ActiveCollaborators = () => {
    const others = useOthers();
    const collab = others.map((other)=> other.info);


    return(
        <div>
            <ul className="collaborator-list">
                {collab.map(({id, avatar, name, color})=>(
                    <li key={id}>
                        <Image
                        src={avatar}
                        alt="name"
                        width={100}
                        height={100}
                        className="inline-block size-8 rounded-full ring-2 ring-zinc-800"
                        style={{border: `3px solid ${color}`}}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};