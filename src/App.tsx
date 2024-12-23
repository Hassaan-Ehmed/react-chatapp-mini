import { useState } from 'react';
import { AuthForm } from './components/auth/AuthForm';
import { ChatLayout } from './components/layouts/ChatLayout';
import { ProfileSettings } from './components/settings/ProfileSettings';
import type { User } from './types';
import { mockChats, mockMessages, currentUser } from './data/mockData';
import { AddFriend } from './components/settings/AddFriend';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showExplorePage, setShowExplorePage] = useState(false);

  const handleAuth = (data: { email: string; password: string; name?: string }) => {
    console.log('Auth data:', data);
    setIsAuthenticated(true);
  };

  if (isAuthenticated) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-background p-4">
        <AuthForm mode="login" onSubmit={handleAuth} />
      </div>
    );
  }

  if (showSettings) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4 bg-gradient-to-r from-[#859398] to-[#283048]">
        <div className="w-full max-w-2xl">
          <ProfileSettings 
            user={currentUser} 
            onSave={(userData) => {
              console.log('Updated user data:', userData);
              setShowSettings(false);
            }} 
          />
        </div>
      </div>
    );
  }

  if (showExplorePage) {
    return (
      <div className="flex min-h-screen items-center justify-center  p-4 bg-gradient-to-r from-[#859398] to-[#283048]">
        <div className="w-full max-w-2xl">
          <AddFriend 
            user={currentUser} 
            onSave={(userData) => {
              console.log('Updated user data:', userData);
              setShowSettings(false);
            }} 
          />
        </div>
      </div>
    );
  }

  return (
    <ChatLayout
      currentUser={currentUser}
      chats={mockChats}
      messages={mockMessages}
      onShowSettings={() => setShowSettings(true)}
      onShowExplorePage={() => setShowExplorePage(true)}
    />
  );
}

export default App;