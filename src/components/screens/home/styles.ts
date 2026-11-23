import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

export const Header = styled.View`
  background-color: blue;
  padding: 20px;
  align-items: center;
`;

export const Titulo = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: white;
`;

export const Subtitulo = styled.Text`
  font-size: 14px;
  color: white;
`;

export const CampoBusca = styled.TextInput`
  margin: 15px;
  padding: 15px;
  border-width: 2px;
  border-color: blue;
  font-size: 18px;
  color: black;
`;

export const Card = styled.View`
  margin: 10px 15px;
  padding: 25px;
  min-height: 130px;
  justify-content: center;
`;

export const NomeLivro = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: white;
`;

export const Autor = styled.Text`
  font-size: 17px;
  color: white;
  margin-top: 10px;
`;

export const Mensagem = styled.Text`
  text-align: center;
  margin: 20px;
  font-size: 18px;
  color: red;
`;