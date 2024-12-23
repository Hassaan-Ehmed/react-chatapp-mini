import { useState } from 'react';
import { ChatList } from '../chat/ChatList';
import { ChatWindow } from '../chat/ChatWindow';
import type { User, Chat, Message } from '@/types';
import { Button } from "@/components/ui/button";
import { Bell, ChevronRight, Mic, UserPlus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatLayoutProps {
  currentUser: User;
  chats: Chat[];
  messages: Message[];
  onShowSettings: () => void;
  onShowExplorePage: () => void;
}

export function ChatLayout({ currentUser, chats, messages, onShowSettings , onShowExplorePage}: ChatLayoutProps) {
  const [selectedChatId, setSelectedChatId] = useState<string>();
  const selectedChat = chats.find(chat => chat.id === selectedChatId);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      {/* Sidebar */}
      <div className="flex h-full w-full max-w-sm flex-col border-r md:w-80">
        <div className="flex items-center justify-between border-b p-4 bg-gradient-to-r from-[#859398] to-[#283048]">
          <button
            onClick={onShowSettings}
            className="flex items-center space-x-2 rounded-lg p-2 "
          >
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="h-8 w-8 rounded-full"
            />  
            <span className="font-medium text-white">{currentUser.name}</span>
          </button>
          <div className='motion-preset-seesaw'>


            <Button variant="outline" size="icon" className='mr-2' onClick={onShowExplorePage}>
            <UserPlus  />
        </Button>
            <Button variant="outline" size="icon" className='relative'>
            <Bell  className=''/>
             <span className={cn("absolute top-0 right-0 w-3 h-3 rounded-full border-2 border-background", "bg-red-500" )} />
        </Button>

          </div>
        </div>
        <ChatList
          chats={chats}
          selectedChatId={selectedChatId}
          onChatSelect={setSelectedChatId}
        />
      </div>

     
      {/* Main Chat Area */}
      <div className="hidden h-full flex-1 md:flex">
        {selectedChat ? (
          <ChatWindow
            messages={messages}
            currentUser={currentUser}
            otherUser={selectedChat.participants.find(p => p.id !== currentUser.id)!}
            onSendMessage={(content, type) => {
              console.log('New message:', { content, type });
            }}
          />
        ) : (
          
          <div className="text-3xl font-bold tracking-tighter flex h-full w-full  justify-center items-center bg-gradient-to-r from-[#859398] to-[#283048]">Select a &nbsp;<span className='bg-white p-2 '>Chat </span>&nbsp;  to start <span className='bg-white p-2'>&nbsp;messaging </span>&nbsp;!!</div>
        )}
      </div>

      {/* Mobile Chat View */}
      {selectedChat && (
        <div className="absolute inset-0 flex h-full w-full flex-col bg-background md:hidden">
          <ChatWindow
            messages={messages}
            currentUser={currentUser}
            otherUser={selectedChat.participants.find(p => p.id !== currentUser.id)!}
            onSendMessage={(content, type) => {
              console.log('New message:', { content, type });
            }}
            onBack={() => setSelectedChatId(undefined)}
          />
        </div>
      )}
    </div>
  );
}