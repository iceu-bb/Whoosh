import { createValidator } from 'revalidate';

// GLOBAL
export const isValidEmail = createValidator(
  message => value => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return message;
    }
  },
  'Nieprawidłowy adres email'
);

export const isMinimumOneCipher = createValidator(
  message => value => {
    if (value && !/^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/i.test(value)) {
      return message;
    }
  },
  'Hasło musi zawierać przynajmniej jedną cyfre'
);

// ADD CATEGORY VALIDATORS
export const requiredCategory = value =>
  value ? undefined : 'Podaj nazwę zestawu';

export const checkIfCategoryNameExist = (categories, name) => {
  const isExist = categories.filter(item => item.name === name);
  return isExist.length;
};

export const isExistCategoryName = (value, ...props) => {
  const categories = props[1].categories;
  const isExist = checkIfCategoryNameExist(categories, value);
  return isExist ? 'wybrana nazwa juz istnieje' : undefined;
};

export const hasLengthBetween3and50 = value => {
  return value.length < 3 || value.length > 50
    ? 'Wymagane minimum 3 znaki, maksymalnie 50 znaków'
    : undefined;
};
