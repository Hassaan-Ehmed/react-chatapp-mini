import { ProfileSettings } from '@/components/settings/ProfileSettings'
import { currentUser } from '@/data/mockData';
import React, { useState } from 'react'

export default function Settings() {

        const [showSettings, setShowSettings] = useState(false);

  return (
    <>
    
    
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

    </>
  )
}
