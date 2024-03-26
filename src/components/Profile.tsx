import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface AvatarProps {
  img: string; // this will be string | sanity image
  flb: string;
}

function Profile({ img, flb }: AvatarProps) {
  return (
    <Avatar className='w-16 h-16'>
      <AvatarImage src={img} />
      <AvatarFallback>{flb ?? "Pic"}</AvatarFallback>
    </Avatar>
  );
}

export default Profile;
