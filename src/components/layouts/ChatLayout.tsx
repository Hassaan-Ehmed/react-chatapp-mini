import React, { useState } from 'react';
import { ChatList } from '../chat/ChatList';
import { ChatWindow } from '../chat/ChatWindow';
import type { User, Chat, Message } from '@/types';
import { Button } from "@/components/ui/button";
import { Bell, ChevronRight, MessageCircleDashed, MessagesSquare, Mic, Send, UserPlus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import empty_chat_doodle from '../../images/empty_chat_doodle.jpg' 

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
  const [name,setName] = useState(currentUser.name);

  React.useEffect(()=>{

    const auth = getAuth();

    setName(String(auth.currentUser?.displayName?.split(":")[0]) as any);
    
  },[]);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-white">
      {/* Sidebar */}
      <div className="flex h-full w-full max-w-sm flex-col border-r md:w-80">
        <div className="flex items-center justify-between border-b p-4 ">
        <Link to={'/settings'}>
          <button

            className="flex items-center space-x-2 rounded-lg p-2 shadow-lg bg-white"
          >
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="h-8 w-8 rounded-full"
            />  
            <span className="font-medium text-[#00d65d] text-1xl">{name ?  "Hassaan" :  ""}</span>
          </button>
          </Link>
          <div className='motion-preset-seesaw'>

            <Link to={'/explore'}>

            <Button variant="outline" size="icon" className='mr-2 bg-white hover:bg-white shadow-lg' >
            
            <UserPlus  color='#00d65d'  />
        </Button>
            </Link>
            <Button variant="outline" size="icon" className='relative bg-white hover:bg-white shadow-lg'>
            <Bell  className='' color='#00d65d'/>
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
          
          <div className="text-3xl font-bold tracking-tighter flex h-full w-full  justify-center items-center  text-[#00d65d] ">
          {/* <img  src={empty_chat_doodle} alt=""  className='w-full h-full z-10'/> */}
            Let's Chat&nbsp;<span className='bg-white p-2 text-[#00d65d]'>
            <MessagesSquare  color="#00d65d"  size={48}/>
          </span>&nbsp;with your friend<span className='bg-white p-2'>&nbsp;</span>&nbsp;
            
            </div>
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