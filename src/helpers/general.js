export const throttled = (delay, fn) => {
  let lastCall = 0;
  return function(...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  };
};

export const declinedWord = (word, number) => {
  const words = {
    array1: ['pojęć', 'pojęcie', 'pojęcia'],
    array2: ['zestawów', 'zestaw', 'zestawy']
  };
  let helperNumber = '';
  let helperWord = 0;
  if (!word && !number) return;

  // helperNumber decides which array to chose
  if (word === 'pojęcie') {
    helperNumber = '1';
  } else if (word === 'zestaw') {
    helperNumber = '2';
  } else return;

  //helperWord decides which word from array to chose
  number === 1
    ? (helperWord = 1)
    : number === 2 || number === 3 || number === 4
    ? (helperWord = 2)
    : (helperWord = 0);

  return words['array' + helperNumber][helperWord];
};

export const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);
