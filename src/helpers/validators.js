import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan,
  hasLengthBetween,
  matchesField
} from 'revalidate';

import { isValidEmail, isMinimumOneCipher } from './validateHelpers';

export const registerValidator = combineValidators({
  email: composeValidators(
    isRequired({ message: 'email jest wymagany' }),
    isValidEmail
  )(),
  password: composeValidators(
    isRequired({ message: 'hasło jest wymagane' }),
    hasLengthGreaterThan(7)({
      message: 'Hasło musi mieć minimum 8 znaków'
    }),
    isMinimumOneCipher
  )(),
  displayName: composeValidators(
    isRequired({ message: 'Nazwa użytkownika jest wymagana' }),
    hasLengthBetween(3, 32)({
      message: 'Wymagane minimum 3 znaki, maksymalnie 32 znaki'
    })
  )()
});

export const addCardValidator = combineValidators({
  english: composeValidators(
    isRequired({ message: 'Podaj angielską wersję' }),
    hasLengthBetween(3, 150)({
      message: 'Wymagane minimum 3 znaki, maksymalnie 150 znaków'
    })
  )(),
  polish: composeValidators(
    isRequired({ message: 'Podaj polską wersję' }),
    hasLengthBetween(3, 150)({
      message: 'Wymagane minimum 3 znaki, maksymalnie 150 znaków'
    })
  )()
});

export const passwordChangeValidator = combineValidators({
  password1: composeValidators(
    isRequired({ message: 'Wprowadź nowe hasło' }),
    hasLengthGreaterThan(7)({
      message: 'Hasło musi mieć minimum 8 znaków'
    }),
    isMinimumOneCipher
  )(),
  password2: composeValidators(
    isRequired({ message: 'Potwierdź nowe hasło' }),
    matchesField('password1')({ message: 'hasła muszą być jednakowe' })
  )()
});
