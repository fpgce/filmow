import React, {memo, useState, useCallback, useEffect} from 'react';

import * as M from './styles';
import PrimaryButton from '~/components/button/primary';
import RateStartsComponent from '~/components/rate/stars';

import useRate from '~/context/rate';

const ModalMoviesComponent = () => {
  const {success, modalOpen, sendARate, loading, toggleModal} = useRate();
  const [rate, setRate] = useState(0);

  const handleSendRate = useCallback(() => {
    if (!rate) return;
    sendARate({value: rate});
  }, [rate, sendARate]);

  return (
    <M.ModalContainer
      onRequestClose={toggleModal}
      transparent
      animationType="slide"
      visible={modalOpen}>
      <M.Container>
        <M.FooterBox>
          <M.CloseBar onPress={toggleModal} />
          <M.Title>Avalie Power</M.Title>
          <M.Subtitle>ajute os outros usuários a ver bons filmes</M.Subtitle>
          <RateStartsComponent callbackSelected={setRate} />
          <PrimaryButton
            success={success}
            loading={loading}
            onPress={handleSendRate}>
            avaliar
          </PrimaryButton>
        </M.FooterBox>
      </M.Container>
    </M.ModalContainer>
  );
};

export default ModalMoviesComponent;
