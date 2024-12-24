import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Loader2, MessageCircle, RotateCw } from "lucide-react";
import { Link } from 'react-router-dom';
import { emailRegex, FormChecks } from '@/utils/helper';
import { createNewUser } from '@/firebase/MsgHelperFunctions';



export function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    FormChecks(email,password,'signup'); // solid principle will apply here !!

    // onSubmit({ email, password, ...(mode === 'signup' ? { name } : {}) });
  };

  return (
    <Card className="w-[90%] max-w-md ">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-center mb-4">
          <MessageCircle className="h-12 w-12 text-primary" />
        </div>
        <CardTitle className="text-2xl text-center">
           Create your account
        </CardTitle>
        <CardDescription className="text-center">
        Let's chat with your friends !
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
         
            {/* <div className="space-y-2">
              <Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                // required
              />
            </div>

            <div className="space-y-2 ">
               <div className="flex w-full items-center space-x-2">
                  <Input type="email" placeholder="@username" disabled={true} />
                  <Button>
                    {true ? <Check color="#00d65d" /> : <Loader2 className="animate-spin" />}
                  </Button>
               </div>
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
          <Button className="w-full" onClick={handleSubmit}>
           Create an account
          </Button>
          <CardDescription className="text-center">
        Already have an account ?<Link to={'/signin'}><Button  variant="link" className='hover:text-red-500 p-2'>Sign in</Button> </Link> 
        </CardDescription>
        </CardFooter>
      </form>
    </Card>
  );
}