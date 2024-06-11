export const generateRandomId = ({ length }: { length: number }) => {
  let generatedId: string = "";

  let randomString = "abcdefghijklmnopqrstuvwxyz1234567890";

  for (var i = 0; i < length; i++) {
    generatedId +=
      randomString[Math.floor(Math.random() * randomString.length)];
  }

  return generatedId;
};
