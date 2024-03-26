import React from "react";
import Profile from "./Profile";
import { Star, StarOff, StarsIcon } from "lucide-react";
import setRatings from "@/lib/ratingsFc";

interface ReviewsProps {
  profileImg: string;
  review: string;
  stars: number;
  workingAt?: string;
  postion?: string;
  name: string;
}

function Reviews({
  profileImg,
  review,
  name,
  stars,
  postion,
  workingAt,
}: ReviewsProps) {
  return (
    <div className='flex flex-col gap-8 mx-auto w-full p-12 border border-solid border-gray-200'>
      <div className='flex items-center gap-3'>
        <Profile img={profileImg} flb='Pic' />
        <div>
          <p className='text-sm'> {name} </p>
          <p className=' text-muted-foreground text-xs'>
            <span> {workingAt ?? ""} </span>{" "}
            <span>{postion && workingAt && "/"}</span>{" "}
            <span> {postion ?? ""} </span>{" "}
          </p>
          <p className='flex items-center gap-1 mt-1'>
            {setRatings(stars).map((E, i) => (
              <E size={14} key={i + "-star"} />
            ))}
          </p>
        </div>
      </div>
      <div className=''>
        <p className=' text-muted-foreground text-xs'>
          {review
            ? review
            : "Absolutely love shopping at Kalles for backpacks! Their selection is extensive, quality top-notch, and prices competitive. Customer service is superb too - highly recommend!"}
        </p>
      </div>
    </div>
  );
}

export default Reviews;
