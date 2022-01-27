import React from 'react';
import {ActivityIndicator} from 'react-native';

import * as S from './styles';

const Home: React.FC = () => {
  const loading = false; // Temp

  const getNewQuote = () => {};

  return (
    <S.Container>
      <S.Title>Kanye Quotes</S.Title>
      <S.WrapperQuote>
        <S.QuoteText>
          "People always say that you can't please everybody. I think that's a
          cop-out. Why not attempt it? Cause think of all the people that you
          will please if you try."
        </S.QuoteText>
        <S.Author>- Kanye West</S.Author>
      </S.WrapperQuote>

      <S.Button>
        {loading ? (
          <ActivityIndicator size="large" color="011627" />
        ) : (
          <S.ButtonText onPress={getNewQuote}>
            Show me a new quote!
          </S.ButtonText>
        )}
      </S.Button>
    </S.Container>
  );
};

export default Home;
