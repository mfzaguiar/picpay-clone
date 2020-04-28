import React, { useState } from 'react';
import { Switch } from 'react-native';
import {
  Entypo,
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from '@expo/vector-icons';

import * as S from './styles';

import creditCard from '../../../assets/images/credit-card.png';

export default function Wallet() {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  function handleToggleVisibility() {
    setIsVisible((prevState) => !prevState);
  }

  function handleToffleUseBalance() {
    setUseBalance((prevState) => !prevState);
  }

  return (
    <S.Wrapper>
      <S.Header
        colors={useBalance ? ['#52e78c', '#1ab563'] : ['#d3d3d3', '#868686']}
      >
        <S.HeaderContainer>
          <S.WrapperGraphButton>
            <S.GraphButton>
              <S.GraphNotification>
                <S.Notification>1</S.Notification>
              </S.GraphNotification>
              <Entypo name="bar-graph" color="#fff" size={18} />
            </S.GraphButton>
          </S.WrapperGraphButton>

          <S.Title>Saldo PicPay</S.Title>

          <S.BalanceContainer>
            <S.Value>
              R$ <S.Bold>{isVisible ? '0,00' : '----'}</S.Bold>
            </S.Value>
            <S.EyeButton onPress={handleToggleVisibility}>
              <Feather
                name={isVisible ? 'eye' : 'eye-off'}
                size={28}
                color="#fff"
              />
            </S.EyeButton>
          </S.BalanceContainer>

          <S.Info>Seu saldo está rendendo 100% do CDI</S.Info>

          <S.Actions>
            <S.Action>
              <MaterialCommunityIcons name="cash" size={28} color="#fff" />
              <S.ActionLabel>Adicionar</S.ActionLabel>
            </S.Action>
            <S.Action>
              <FontAwesome name="bank" size={20} color="#fff" />
              <S.ActionLabel>Banco</S.ActionLabel>
            </S.Action>
          </S.Actions>
        </S.HeaderContainer>
      </S.Header>

      <S.UseBalance>
        <S.UseBalanceTitle>Usar saldo ao pagar</S.UseBalanceTitle>
        <Switch value={useBalance} onValueChange={handleToffleUseBalance} />
      </S.UseBalance>

      <S.PaymentMethods>
        <S.PaymentMethodsTitle>Formas de pagamento</S.PaymentMethodsTitle>
        <S.Card>
          <S.CardBody>
            <S.CardDetails>
              <S.CardTitle>Cadastre seu cartão de crédito</S.CardTitle>
              <S.CardInfo>
                Cadastre seu cartão de crédito para fazer pagamentos mesmo
                quanto não tiver saldo no seu PicPay
              </S.CardInfo>
            </S.CardDetails>
            <S.Img source={creditCard} resizeMode="contain" />
          </S.CardBody>

          <S.AddButton>
            <AntDesign name="pluscircleo" size={30} color="#0db060" />
            <S.AddLabel>Adicionar cartão de crédito</S.AddLabel>
          </S.AddButton>
        </S.Card>

        <S.Ticket>
          <MaterialCommunityIcons
            name="ticket-percent"
            color="#0db060"
            size={20}
          />
          <S.TicketLabel>Usar código promocional</S.TicketLabel>
        </S.Ticket>
      </S.PaymentMethods>
    </S.Wrapper>
  );
}
