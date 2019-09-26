import React from 'react';
import styled from 'styled-components';
import { HeadingH2, Paragraph } from '../../elements';
import SEO from '../../../SEO';

const FaqContainer = styled.section`
  margin: 0 auto;
  max-width: 1200px;
  padding: 100px 20px 30px;
`;

const FaqItem = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 50px;
`;

const data = [
  {
    id: 0,
    title: 'Rejestracja w celu utworzenia darmowego konta',
    description:
      'Możesz utworzyć darmowe konto, korzystając ze swojego adresu e-mail, bądź za pomocą swojego konta w Google. W celu rejestracji kliknij, przycisk Zarejestruj się, a następnie postępuj zgodnie z instrukcją oraz podaj potrzebne dane.'
  },
  {
    id: 1,
    title: 'Kompatybilność przeglądarki i urządzenia',
    description:
      'Z Whoosh można korzystać na wielu różnych urządzeniach. Można używać w tym celu oficjalnych aplikacji na iOS lub Androida, natomiast strona internetowa Whoosh obsługiwana jest na wielu przeglądarkach zarówno w systemie Windows, jak i Mac.'
  },
  {
    id: 2,
    title: 'Czym są zestawy do nauki?',
    description:
      'Zestaw do nauki to lista pojęć połączonych w pary z odpowiednimi definicjami.'
  },
  {
    id: 3,
    title: 'Wyszukiwanie zestawów do nauki',
    description:
      'Istnieje wiele milionów zestawów do nauki stworzonych przez uczniów i nauczycieli, co sprawia, że znalezienie odpowiedniego zestawu dla siebie jest niezwykle proste. Aby znaleźć zestaw do nauki Kliknij w ikonę pasek do wyszukiwania, wpisz nazwę, któej szukasz a następnię wciśnij Enter bądz ikonę lupy.'
  },
  {
    id: 4,
    title: 'Usuwanie zestawu ',
    description:
      'Aby usunąć zestaw: Przejdź do sekcji Moje Zestawy. Na zestawie, który chcesz usunąć kliknij czerwoną ikonę kosza, następnie potwierdź usunięcie zestawu. Po usunięciu zestawu nie ma możliwości jego przywrócenia.'
  },
  {
    id: 5,
    title: 'Zgłaszanie złych reklam',
    description:
      'Jeśli zobaczysz reklamę, która wyda Ci się agresywna lub niewłaściwa, zgłoś nam to na adres kontakt@whoosh.pl. Aby możliwe było darmowe korzystanie z naszej Usługi, na naszej stronie internetowej i w naszych aplikacjach wyświetlane są reklamy. Wyznaczyliśmy jednak restrykcyjne standardy w zakresie jakości reklam i ściśle współpracujemy z naszymi dostawcami reklam, aby zapewnić, że wyświetlane będą tylko reklamy odpowiednie dla danej usługi edukacyjnej.'
  }
];

const userFaq = () => {
  return (
    <FaqContainer>
      <SEO title='Moje Zestawy' />
      {data.map(({ id, title, description }) => (
        <FaqItem key={id}>
          <HeadingH2>{title}</HeadingH2>
          <Paragraph modifiers='feature'>{description}</Paragraph>
        </FaqItem>
      ))}
    </FaqContainer>
  );
};

export default userFaq;
