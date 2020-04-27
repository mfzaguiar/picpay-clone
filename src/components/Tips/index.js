import React from 'react';

import * as S from './styles';

import img8 from '../../../assets/images/08.png';
import img9 from '../../../assets/images/09.png';
import img10 from '../../../assets/images/10.png';
import img11 from '../../../assets/images/11.png';
import img12 from '../../../assets/images/12.png';

const items = [
  {
    key: String(Math.random()),
    title: 'Page suas contas sem sair de casa',
    bgColor: '#172c4a',
    img: img8,
  },
  {
    key: String(Math.random()),
    title: 'Page suas contas sem sair de casa',
    bgColor: '#6a0159',
    img: img9,
  },
  {
    key: String(Math.random()),
    title: 'Esteja próximo e conectado',
    bgColor: '#4139c8',
    img: img10,
  },
  {
    key: String(Math.random()),
    title: 'Page suas contas sem sair de casa',
    bgColor: '#00ab4b',
    img: img11,
  },
  {
    key: String(Math.random()),
    title: 'Page suas contas sem sair de casa',
    bgColor: '#ba2f76',
    img: img12,
  },
];

const Tips = () => (
  <S.Container>
    {items.map((item) => (
      <S.Option key={item.key} bgColor={item.bgColor}>
        <S.Title>{item.title}</S.Title>
        <S.Img source={item.img} />
      </S.Option>
    ))}
  </S.Container>
);

export default Tips;
