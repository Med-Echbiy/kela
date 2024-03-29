import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail } from "lucide-react";

function SignIn() {
  return (
    <div className=' flex items-center gap-3 flex-col justify-center max-w-md'>
      <h1 className='text-xl mb-2 underline'>Sign-In</h1>
      <Input placeholder='Type your email' />
      <Input name='password' placeholder='type your password' type='password' />
      <Button className='flex-1 gap-5 w-full'>
        <Mail />
        <span>Sign-In With Email & Password</span>
      </Button>
      <Button className='gap-5 flex-1 w-full'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          fill='currentColor'
          className='bi bi-google'
          viewBox='0 0 16 16'
        >
          <path d='M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z' />
        </svg>
        <span>Sign-In With Google</span>
      </Button>
    </div>
  );
}

export default SignIn;
