import { DocumentData } from "firebase/firestore";

function Message({ message }: { message: DocumentData }) {
  const isChatGPT = message.user.name === "ChatGPT";

  return (
    <div className={`py-5 text-white ${isChatGPT && "bg-[#414654]"}`}>
      <div className="flex px-10 mx-auto space-x-5 max-w-2xl">
        <img src={message.user.avatar} alt="avatar" className="w-8 h-8" />
        <p className="pt-1 text-sm">{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
