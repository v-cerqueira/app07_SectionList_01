import React from 'react';
import {
  Alert,
  Platform,
  SectionList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import dadosAlunos from './src/dados/alunos.json';
import { estilo1 } from './src/styleSheet/estilo1';

function normalizarSecoes(dados) {
  if (
    Array.isArray(dados) &&
    dados.length > 0 &&
    dados[0].title &&
    Array.isArray(dados[0].data)
  ) {
    return dados;
  }

  const cursos = {};

  dados.forEach((aluno) => {
    if (!cursos[aluno.curso]) {
      cursos[aluno.curso] = [];
    }

    cursos[aluno.curso].push(aluno);
  });

  return Object.keys(cursos).map((curso) => ({
    title: curso,
    data: cursos[curso],
  }));
}

export default function App() {
  const secoes = normalizarSecoes(dadosAlunos);

  function mostrarDetalhes(aluno) {
    const mensagem =
      `CPF: ${aluno.cpf}\n` +
      `Nascimento: ${aluno.nascimento}\n` +
      `Ano: ${aluno.ano}`;

    if (Platform.OS === 'web') {
      alert(`${aluno.nome}\n\n${mensagem}`);
      return;
    }

    Alert.alert(aluno.nome, mensagem);
  }

  function mostraItem({ item }) {
    return (
      <TouchableOpacity
        activeOpacity={0.2}
        onPress={() => mostrarDetalhes(item)}
        style={estilo1.item}
      >
        <Text style={estilo1.nome}>{item.nome}</Text>
      </TouchableOpacity>
    );
  }

  function mostraSecao({ section: { title } }) {
    return (
      <View style={estilo1.cabecalho}>
        <Text style={estilo1.tituloSecao}>{title}</Text>
      </View>
    );
  }

  return (
    <View style={estilo1.container}>
      <Text style={estilo1.titulo}>Lista de Alunos por Curso</Text>

      <SectionList
        sections={secoes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={mostraItem}
        renderSectionHeader={mostraSecao}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={estilo1.lista}
      />
    </View>
  );
}
