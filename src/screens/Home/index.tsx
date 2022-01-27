import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {requestQuote} from '../../store/modules/quotes/actions';
import {RootState} from '../../store/modules/rootReducer';

import * as S from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const {data, error, loading} = useSelector(
    (state: RootState) => state.quotes,
  );

  const getNewQuote = () => {
    dispatch(requestQuote());
  };

  useEffect(() => {
    getNewQuote();
  }, []);

  return (
    <S.Container>
      <S.StatusBar barStyle="light-content" backgroundColor="#011627" />
      <S.Title>Kanye Quotes</S.Title>
      <S.WrapperQuote>
        {loading && (
          <>
            <S.QuoteText>Loading...</S.QuoteText>
            <S.Author>...</S.Author>
          </>
        )}

        {error && (
          <>
            <S.QuoteText>
              This is an error, not a quote! Please press the button to try
              again.
            </S.QuoteText>
            <S.Author>:/</S.Author>
          </>
        )}

        {loading === false && data != '' && (
          <>
            <S.QuoteText>"{data}"</S.QuoteText>
            <S.Author>- Kanye West</S.Author>
          </>
        )}
      </S.WrapperQuote>

      <S.Button onPress={getNewQuote}>
        {loading ? (
          <ActivityIndicator size="large" color="011627" />
        ) : (
          <S.ButtonText>Show me a new quote!</S.ButtonText>
        )}
      </S.Button>
    </S.Container>
  );
};

export default Home;
