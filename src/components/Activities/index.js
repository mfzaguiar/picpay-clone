import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import * as S from './styles';

import avatar from '../../../assets/images/avatar.png';

const Activities = () => (
  <S.Container>
    <S.Header>
      <S.Title>Atividades</S.Title>
      <S.SubTitles>
        <S.SubTitle>Todas</S.SubTitle>
        <S.SubTitle>Minhas</S.SubTitle>
      </S.SubTitles>
    </S.Header>

    <S.Card>
      <S.CardHeader>
        <S.Avatar source={avatar} />
        <S.Description>
          <S.Bold>Você</S.Bold> pagou a <S.Bold>@mfzaguiar</S.Bold>
        </S.Description>
      </S.CardHeader>

      <S.CardBody>
        <S.Username>Matheus Aguiar</S.Username>
      </S.CardBody>

      <S.CardFooter>
        <S.Details>
          <S.Value>R$ 18,00</S.Value>
          <S.Divider />
          <Feather name="lock" color="#fff" size={14} />
          <S.Date>há 2 dias</S.Date>
        </S.Details>

        <S.Actions>
          <S.Option>
            <MaterialCommunityIcons
              name="comment-outline"
              color="#fff"
              size={14}
            />
            <S.OptionLabel>0</S.OptionLabel>
          </S.Option>
          <S.Option>
            <AntDesign name="hearto" color="#fff" size={14} />
            <S.OptionLabel>0</S.OptionLabel>
          </S.Option>
        </S.Actions>
      </S.CardFooter>
    </S.Card>
  </S.Container>
);

export default Activities;
