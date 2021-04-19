export const secondsToTimeString = (seconds) => {
  let time = [];

  let numberOfYears = Math.floor(seconds / 31536000);
  let numberOfDays = Math.floor((seconds - numberOfYears * 31536000) / 86400);
  let numberOfHours = Math.floor(
    (seconds - numberOfYears * 31536000 - numberOfDays * 86400) / 3600
  );
  let numberOfMinutes = Math.floor(
    (seconds -
      numberOfYears * 31536000 -
      numberOfDays * 86400 -
      numberOfHours * 3600) /
      60
  );
  let numberOfSeconds =
    seconds -
    numberOfYears * 31536000 -
    numberOfDays * 86400 -
    numberOfHours * 3600 -
    numberOfMinutes * 60;

  if (numberOfYears === 1) {
    time[0] = `${numberOfYears} year`;
  } else if (numberOfYears > 1) {
    time[0] = `${numberOfYears} years`;
  }

  if (numberOfDays === 1) {
    time[1] = `${numberOfDays} day`;
  } else if (numberOfDays > 1) {
    time[1] = `${numberOfDays} days`;
  }

  if (numberOfHours === 1) {
    time[2] = `${numberOfHours} hour`;
  } else if (numberOfHours > 1) {
    time[2] = `${numberOfHours} hours`;
  }

  if (numberOfMinutes === 1) {
    time[3] = `${numberOfMinutes} min`;
  } else if (numberOfMinutes > 1) {
    time[3] = `${numberOfMinutes} mins`;
  }

  if (numberOfSeconds === 1) {
    time[4] = `${numberOfSeconds} s`;
  } else if (numberOfSeconds > 1) {
    time[4] = `${numberOfSeconds} s`;
  }

  let filteredTime = time.filter(Boolean);
  if (filteredTime.length === 5) {
    filteredTime[0] += ',';
    filteredTime[1] += ',';
    filteredTime[2] += ',';
    filteredTime[3] += ' and';
  } else if (filteredTime.length === 4) {
    filteredTime[0] += ',';
    filteredTime[1] += ',';
    filteredTime[2] += ' and';
  } else if (filteredTime.length === 3) {
    filteredTime[0] += ',';
    filteredTime[1] += ' and';
  } else if (filteredTime.length === 2) {
    filteredTime[0] += ' and';
  }

  return filteredTime.join(' ');
};

export const toNameCase = (str) => {
  const splitStr = str.split('');
  return splitStr
    .map((letter, index) => {
      return index === 0 ? letter.toUpperCase() : letter;
    })
    .join('');
};
