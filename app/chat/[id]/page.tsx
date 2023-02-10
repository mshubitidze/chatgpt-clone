import Chat from "../../../components/Chat";
import ChatInput from "../../../components/ChatInput";

type Props = {
  params: {
    chatId: string;
  };
};

function ChatPage({ params: { chatId } }: Props) {
  return (
    <div className="flex overflow-hidden flex-col h-screen">
      <Chat chatId={chatId} />
      <ChatInput chatId={chatId} />
    </div>
  );
}

export default ChatPage;
