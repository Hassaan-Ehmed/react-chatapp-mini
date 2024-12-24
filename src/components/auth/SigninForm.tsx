import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import { Link } from 'react-router-dom';
import { FormChecks } from '@/utils/helper';



export function SigninForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

        FormChecks(email,password,signup); // solid principle will apply here !!
    // onSubmit({ email, password, ...(mode === 'signup' ? { name } : {}) });
  };

  return (
    <Card className="w-[90%] max-w-md ">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-center mb-4">
          <MessageCircle className="h-12 w-12 text-primary" />
        </div>
        <CardTitle className="text-2xl text-center">
    'Welcome back' 
        </CardTitle>
        <CardDescription className="text-center">
    
      'Enter your credentials to access your account' 
         
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
{/*          
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div> */}

          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button type="submit" className="w-full">
            Sign In
          </Button>
          <CardDescription className="text-center">
        Don't have an account ?<Link to={'/signup'}><Button  variant="link" className='hover:text-red-500 p-2'>Sign up</Button> </Link> 
        </CardDescription>
        </CardFooter>
      </form>
    </Card>
  );
}