import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateRandomId = ({ length }: { length: number }) => {
  let generatedId: string = "";
  const randomString = "abcdefghijklmnopqrstuvwxyz1234567890";

  for (let i = 0; i < length; i++) {
    generatedId +=
      randomString[Math.floor(Math.random() * randomString.length)];
  }
  return generatedId;
};
