import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Textarea } from "./ui/textarea";
import { Separator } from "./ui/separator";

export default function ContactUs() {
  return (
    <div className='flex gap-12 w-full items-center'>
      <div className=' p-4 space-y-8 max-w-md lg:p-0 lg:max-w-none mx-auto lg:ml-0 lg:mr-auto'>
        <div className='space-y-2'>
          <h2 className='text-3xl font-bold'>Contact Us</h2>
          <p className='text-gray-500 dark:text-gray-400'>
            Please fill the below form and we will get back to you as soon as
            possible.
          </p>
        </div>
        <div className='space-y-4'>
          <div className='space-y-2'>
            <Label className='text-gray-600 dark:text-gray-400' htmlFor='name'>
              Name
            </Label>
            <Input
              className='border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800'
              id='name'
              placeholder='Enter your name'
            />
          </div>
          <div className='space-y-2'>
            <Label className='text-gray-600 dark:text-gray-400' htmlFor='email'>
              Email
            </Label>
            <Input
              className='border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800'
              id='email'
              placeholder='Enter your Email adress'
            />
          </div>
          <div className='space-y-2'>
            <Label
              className='text-gray-600 dark:text-gray-400'
              htmlFor='message'
            >
              Message
            </Label>
            <Textarea
              className='border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800'
              defaultValue='I would like to receive more information'
              id='message'
            />
          </div>

          <Button type='submit'>Submit</Button>
        </div>
      </div>
      <div className=' hidden lg:block'>
        <img
          src='/contact.svg'
          alt='contact us'
          className=' object-contain block max-w-lg'
        />
      </div>
    </div>
  );
}
