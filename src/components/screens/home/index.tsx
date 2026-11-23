import React, { useState } from 'react';
import { FlatList } from 'react-native';
import {
  Container,
  Header,
  Titulo,
  Subtitulo,
  CampoBusca,
  Card,
  NomeLivro,
  Autor,
  Mensagem,
} from './styles';

const livros = [
  { id: '1', title: 'Turma da Mônica', author: 'Mauricio de Sousa' },
  { id: '2', title: 'Turma da Mônica Jovem', author: 'Mauricio de Sousa' },
  { id: '3', title: 'Chico Bento', author: 'Mauricio de Sousa' },
  { id: '4', title: 'Cebolinha', author: 'Mauricio de Sousa' },
  { id: '5', title: 'Cascão', author: 'Mauricio de Sousa' },
  { id: '6', title: 'Magali', author: 'Mauricio de Sousa' },
  { id: '7', title: 'Menino Maluquinho', author: 'Ziraldo' },
  { id: '8', title: 'Pererê', author: 'Ziraldo' },
  { id: '9', title: 'Asterix', author: 'René Goscinny e Albert Uderzo' },
  { id: '10', title: 'As Aventuras de Tintim', author: 'Hergé' },
  { id: '11', title: 'Garfield', author: 'Jim Davis' },
  { id: '12', title: 'Peanuts — Snoopy', author: 'Charles M. Schulz' },
  { id: '13', title: 'Calvin e Haroldo', author: 'Bill Watterson' },
  { id: '14', title: 'Mafalda', author: 'Quino' },
  { id: '15', title: 'Luluzinha', author: 'Marjorie Henderson Buell' },
];

const cores = ['blue', 'green', 'red'];

export default function Index() {
  const [busca, setBusca] = useState('');

  const livrosFiltrados = livros.filter((livro) =>
    livro.title.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <Container>
      <Header>
        <Titulo>📖 LeituraViva</Titulo>
        <Subtitulo>Library Loan System</Subtitulo>
      </Header>

      <CampoBusca
        placeholder="Pesquisar livro..."
        placeholderTextColor="#777"
        value={busca}
        onChangeText={setBusca}
      />

      <FlatList
        data={livrosFiltrados}
        keyExtractor={(item) => item.id}
        keyboardShouldPersistTaps="handled"
        renderItem={({ item, index }) => (
          <Card style={{ backgroundColor: cores[index % 3] }}>
            <NomeLivro>{item.title}</NomeLivro>
            <Autor>{item.author}</Autor>
          </Card>
        )}
        ListEmptyComponent={
          <Mensagem>Nenhum livro encontrado.</Mensagem>
        }
      />
    </Container>
  );
}