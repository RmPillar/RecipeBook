import { isNull } from 'lodash';

export const secondsToTimeString = (seconds) => {
  const days = Math.floor(seconds / 86400);
  if (days === 1) return `${days} day`;
  if (days > 1) return `${days} days`;

  const hours = Math.floor(seconds / 3600);
  if (hours === 1) return `${hours} hour`;
  if (hours > 1) return `${hours} hours`;

  const minutes = Math.floor(seconds / 60);
  if (minutes === 1) return `${minutes} minute`;
  if (minutes > 1) return `${minutes} minutes`;
};

export const toNameCase = (str) => {
  const splitStr = str.split('');
  return splitStr
    .map((letter, index) => {
      return index === 0 ? letter.toUpperCase() : letter;
    })
    .join('');
};

export const parseQuantity = (num) => {
  const parsedNum = parseFloat(num);

  if (parsedNum > 0) return parsedNum;
};

export const nullCheck = (...args) => {
  return args.map((arg) => isNull(arg)).includes(true);
};
