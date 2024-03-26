import { LucideIcon, Star, StarHalf } from "lucide-react";

export default function setRatings(howManyStars: number): LucideIcon[] {
  switch (howManyStars) {
    case 0.5:
      return [StarHalf];
    case 1:
      return [Star];
    case 1.5:
      return [Star, StarHalf];
    case 2:
      return [Star, Star];
    case 2.5:
      return [Star, Star, StarHalf];
    case 3:
      return [Star, Star, Star];
    case 3.5:
      return [Star, Star, Star, StarHalf];
    case 4:
      return [Star, Star, Star, Star];
    case 4.5:
      return [Star, Star, Star, Star, StarHalf];
    case 5:
      return [Star, Star, Star, Star, Star];
    default:
      return [Star, Star, Star, Star, Star];
  }
}
