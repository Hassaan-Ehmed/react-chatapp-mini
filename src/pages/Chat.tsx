import { ChatLayout } from '@/components/layouts/ChatLayout'
import { AddFriend } from '@/components/settings/AddFriend';
import { ProfileSettings } from '@/components/settings/ProfileSettings';
import { currentUser, mockChats, mockMessages } from '@/data/mockData';
import React, { useState } from 'react'

export default function Chat() {
      const [showSettings, setShowSettings] = useState(false);
  const [showExplorePage, setShowExplorePage] = useState(false);



//   if (showSettings) {
//     return (
//       <></>
//     );
//   }

//   if (showExplorePage) {
//     return (
//       <>
//       </>
//     );
//   }

  return (
    <ChatLayout
      currentUser={currentUser}
      chats={mockChats}
      messages={mockMessages}
      onShowSettings={() => setShowSettings(true)}
      onShowExplorePage={() => setShowExplorePage(true)}
    />
  )
}
