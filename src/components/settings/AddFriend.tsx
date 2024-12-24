import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { User } from '@/types';
import { Ban,  ChevronLeft, Search, UserPlus, X} from 'lucide-react';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command"
import { cn } from '@/lib/utils';
import { exploreImage } from '@/data/mockData';
import { Link } from 'react-router-dom';




interface AddFriend {
  user: User;
  onSave: (userData: Partial<User>) => void;
}

export function AddFriend({ user, onSave }: AddFriend) {
  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio || '');
  const [avatar, setAvatar] = useState(user.avatar);

  const handleSubmit = (e: React.FormEvent) => {
    onSave({ name, bio, avatar });
    e.preventDefault();
    
  };

  return (
    <form>
      <Card className=''>
    <Link to={'/chat'} >
      <Button variant="link" size="icon" className='m-3'>
    <ChevronLeft color="#000000" />
</Button>
    </Link>
        <CardHeader>
          <CardTitle>Explore new people</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <Avatar className="w-24 h-24">
              <AvatarImage src={exploreImage} />
              <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>
           
           
          </div>
          <div className="space-y-2">
            
          <div className="relative">
          {/* <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /> */}
          {/* <Input
            placeholder="Search by @username"
            className="pl-9"
          /> */}
     <Command className="rounded-lg border shadow-md md:min-w-[450px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList className=''>
        <CommandEmpty>No results found.</CommandEmpty>
      
        <CommandGroup heading="Related searches">


          <CommandItem>

            <span>Hassaan</span>&nbsp;
            <span className='text-slate-400'>( @hassu8901 ) </span> 
            <CommandShortcut>
           


<Button variant="outline" size="sm" className='mr-2'>
{/* <UserPlus color="#000000" className='hover:text-green-500' /> */}
<Ban color="#000000" />
</Button>
{/* <Button variant="outline" size="sm" className='relative'>
<X color="#000000" />
 <span className="absolute top-0 right-0 w-3 h-3 rounded-full border-2 border-background" />
</Button> */}


            </CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
        </div>
          </div>
        
        </CardContent>
        <CardFooter>

            <div className='w-full flex justify-center items-center'>
          <Button className="w-[50%] self-center">
           Search
          </Button>

            </div>
        </CardFooter>
      </Card>
    </form>
  );
}