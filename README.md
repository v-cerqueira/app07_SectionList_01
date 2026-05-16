# app07_SectionList_01

Projeto React Native com Expo para apresentar uma lista de alunos agrupados por curso usando `SectionList`.

## Objetivo

Neste desafio, o app:

- lê os dados de um arquivo JSON;
- organiza os alunos por curso;
- exibe os nomes em uma `SectionList`;
- mostra os dados complementares do aluno ao clicar no nome.

Os dados exibidos no alerta são:

- CPF
- data de nascimento
- ano de ingresso na IES

## Tecnologias

- React Native
- Expo
- SectionList
- JSON local

## Estrutura do projeto

```text
App.js
src/
  dados/
    alunos.json
  styleSheet/
    estilo1.js
```

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o projeto:

```bash
npm start
```

3. Para abrir diretamente no navegador:

```bash
npx expo start --web
```

## Funcionamento

O app utiliza o componente `Platform` para identificar onde está rodando:

- no `web`, o app usa `alert(...)`;
- no `android` e `ios`, o app usa `Alert.alert(...)`.

Isso foi necessário porque o componente `Alert` do React Native não funciona no navegador da mesma forma que em dispositivos móveis.

## Exemplo de dados

O arquivo `src/dados/alunos.json` pode ser lido e convertido para seções por curso, permitindo a exibição no formato esperado pela `SectionList`.

## Autor

Vinicius Cerqueira
