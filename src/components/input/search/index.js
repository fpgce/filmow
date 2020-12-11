import React, {useState, useRef, useEffect, memo, useCallback} from 'react';

// import SearchIcon from '~/assets/svg/search.svg';
import SearchIcon from '~/assets/svgIcon/search';
import {useTheme} from 'styled-components/native';
import * as I from './styles';

const InputSearchComponent = ({callbackSearch}) => {
  const theme = useTheme();
  const [state, setState] = useState({
    inputText: '',
    enableInput: false,
  });

  const inputRef = useRef(null);

  function updateText(text) {
    setState((s) => ({...s, inputText: text}));
    callbackSearch(text);
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <I.Container>
      <I.Row>
        <I.AbsoluteButton style={{left: 0}}>
          <SearchIcon
            fill="none"
            stroke={theme.color.dark_dark}
            size={20}
            width={20}
            height={20}
          />
        </I.AbsoluteButton>
        <I.Input
          placeholder="Digite para pesquisar"
          autoCapitalize="none"
          autoCompleteType="off"
          ref={inputRef}
          value={state.inputText}
          onChangeText={updateText}
          focused={state.focused}
          returnKeyType="search"
        />
      </I.Row>
    </I.Container>
  );
};

export default memo(InputSearchComponent);
