import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.View`
  flex: 1;
  background: #000;
`;

export const Header = styled(LinearGradient)`
  height: 300px;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const WrapperGraphButton = styled.View`
  position: absolute;
  top: 20px;
  right: 10px;
`;

export const GraphButton = styled.TouchableOpacity`
  height: 32px;
  width: 32px;
  border-radius: 16px;
  border: 1px solid #fff;
  align-items: center;
  justify-content: center;
`;

export const GraphNotification = styled.View`
  position: absolute;
  height: 18px;
  width: 18px;
  border-radius: 9px;
  background: #fe4b75;
  top: -4px;
  left: -3px;
  align-items: center;
  justify-content: center;
`;

export const Notification = styled.Text`
  color: #fff;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const BalanceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`;

export const Value = styled.Text`
  font-size: 38px;
  color: #fff;
  font-weight: 200;
`;
export const Bold = styled.Text`
  font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const Info = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const Actions = styled.View`
  flex-direction: row;
  margin-top: 40px;
`;

export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.6);
  width: 150px;
  height: 45px;
  border-radius: 25px;
  margin: 0 10px;
`;

export const ActionLabel = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-left: 10px;
`;

export const UseBalance = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #1c1c1e;
  height: 60px;
  padding: 0 16px;
`;

export const UseBalanceTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

export const PaymentMethods = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;
export const PaymentMethodsTitle = styled.Text`
  color: #8e8e93;
  text-transform: uppercase;
`;

export const Card = styled.View`
  background: #1e232a;
  padding: 20px;
  border-radius: 8px;
  margin-top: 10px;
`;

export const CardBody = styled.View`
  flex-direction: row;
`;

export const CardDetails = styled.View`
  flex: 1;
  margin-right: 14px;
`;

export const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
export const CardInfo = styled.Text`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 15px;
`;

export const Img = styled.Image`
  width: 60px;
`;

export const AddButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 25px;
`;

export const AddLabel = styled.Text`
  color: #0db060;
  font-size: 18px;
  font-weight: bold;
  margin-left: 15px;
`;

export const Ticket = styled.TouchableOpacity`
  margin-top: 25px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TicketLabel = styled.Text`
  color: #0db060;
  font-weight: bold;
  margin-left: 5px;
  text-decoration: underline;
`;
