import React from 'react';

import * as S from './styles';

import img13 from '../../../assets/images/13.png';

export default function Banner() {
  return (
    <S.Container>
      <S.Details>
        <S.Title>Cobre um amigo</S.Title>

        <S.Description>
          Mantenha suas parcerias em dia, use o PicPay para fazer suas cobranças
        </S.Description>
      </S.Details>
      <S.Img source={img13} />
    </S.Container>
  );
}
