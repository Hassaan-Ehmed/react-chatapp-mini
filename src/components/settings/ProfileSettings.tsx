import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { User } from '@/types';
import { ChevronLeft } from 'lucide-react';

interface ProfileSettingsProps {
  user: User;
  onSave: (userData: Partial<User>) => void;
}

export function ProfileSettings({ user, onSave }: ProfileSettingsProps) {
  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio || '');
  const [avatar, setAvatar] = useState(user.avatar);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ name, bio, avatar });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
      <Button variant="outline" size="sm" className='m-2'>
    <ChevronLeft color="#000000"  onClick={handleSubmit}/>
</Button>
        <CardHeader>

          <CardTitle>Profile Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex flex-col items-center space-y-2">
            <Avatar className="w-24 h-24">
              <AvatarImage src={avatar} />
              <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>
            <Button 
              variant="outline" 
              onClick={() => document.getElementById('avatar-input')?.click()}
            >
              Change Avatar
            </Button>
            <input
              id="avatar-input"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  // Handle avatar upload
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setAvatar(reader.result as string);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Name</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Bio</label>
            <Textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Write something about yourself..."
              rows={4}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            Save Changes
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}