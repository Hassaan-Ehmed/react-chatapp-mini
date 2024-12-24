import { AddFriend } from '@/components/settings/AddFriend';
import { currentUser } from '@/data/mockData';
import React, { useState } from 'react'

export default function Explore() {

    const [showSettings, setShowSettings] = useState(false);

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
  )
}
