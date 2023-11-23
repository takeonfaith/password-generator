export const generatePassword = (
  length: number,
  hasLowerLetters: boolean,
  hasUpperLetters: boolean,
  hasNumbers: boolean,
  hasSymbols: boolean
): string => {
  const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+/=,.:'";

  let total = "";
  let result = "";

  if (hasLowerLetters) total += lowerLetters;
  if (hasUpperLetters) total += upperLetters;
  if (hasNumbers) total += numbers;
  if (hasSymbols) total += symbols;

  for (let index = 0; index < length; index++) {
    const newLetter = total[Math.floor(Math.random() * total.length)];

    result += newLetter;
  }

  return result;
};
