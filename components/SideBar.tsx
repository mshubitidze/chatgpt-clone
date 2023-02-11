"use client";

import { collection, orderBy, query } from "firebase/firestore";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";
import NewChat from "./NewChat";

const SideBar = () => {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );
  
return (
    <div className="flex flex-col p-2 h-screen">
      <div className="flex-1">
        <div className="flex flex-col gap-1">
          <NewChat />

          <div className="hidden md:inline">
            <ModelSelection />
          </div>

          {loading && (
            <div className="animate-pulse text-center text-white">
              <p>Loading Chats...</p>
            </div>
          )}
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
      {session && (
        <div className="flex flex-col gap-2 justify-center items-end">
          <img
            onClick={() => signOut()}
            src={session.user?.image!}
            className="mx-auto mb-2 w-12 h-12 rounded-full cursor-pointer hover:opacity-50"
            alt="Profile Pic"
          />
        </div>
      )}
    </div>
  );
};

export default SideBar;
