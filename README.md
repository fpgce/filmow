<!--
***
*** Projeto criado por Fernando Pascoal Gomes
***
-->

<br />
<!-- Sumário -->

## Sumário

- [Sobre o Projeto](#sobre-o-projeto)
  - [Feito Com](#feito-com)
- [Iniciando](#iniciando)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Observações](#observações)
- [Features](#features)
- [Contato](#contato)

## Sobre o Projeto

Projeto de um aplicativo para listar alguns filmes, apresentar informações e enviar a avaliação do filme utilizando a api <a target="_blank" href="https://www.themoviedb.org/">The movie db</a>.

### Feito Com

Lista de dependencias do Projeto:

- [React Native](https://reactnative.dev/) - O React Native é um framework que permite o desenvolvimento de aplicações mobile usando JavaScript e React;
- [React Navigation](https://reactnavigation.org/) - Componente de navegação que pode ser configuável e vem alguns com componentes já configurados de navegação;
- [Axios](https://github.com/axios/axios) - O Axios é um cliente HTTP baseado em Promises para Browser e NodeJS;
- [Styled Components](https://www.styled-components.com/) - O Styled components facilita na estilização de components reactive native.
- [Prop Types](https://www.npmjs.com/package/prop-types) - Muito utilizado para checagem de tipos enviados aos componentes via props
- [zustand](https://github.com/pmndrs/zustand) -
  Componente de gerenciamento de estados entre componentes.
- [React Native Async Storage](https://github.com/react-native-community/async-storage) - Responsável por gravar informações no storage local da aplicação
- [Lottie](https://github.com/lottie-react-native/lottie-react-native) - Lottie é uma biblioteca móvel para Android e iOS que analisa animações do Adobe After Effects exportadas como JSON com bodymovin e as renderiza nativamente no celular!
- [React Native Snap Carousel](https://github.com/archriss/react-native-snap-carousel) - Componente pronto com algumas animações de slide carousel.

  <!-- GETTING STARTED -->

## Iniciando

É necessário ter instalado yarn ou npm.
[Utilize a documentação como Guia](https://yarnpkg.com/ ou https://www.npmjs.com/)

```bash
    yarn install
    cd ios && pod install (se for emular no simulador do ios)
```

```bash
    yarn ios (se for emular no simulador do ios)
    yarn android (se for emular no simulador do android)
```

### Estrutura de Arquivos

A estrutura de arquivos deverá seguir o seguinte padrão:

```bash
filmow
├── src/
│   ├── pages/
│   │   └── home/
│   │       └── index.js
│   │       └── styles.js
│   ├── context/
│   │   └── movies.js
│   ├── components/
│   │   └── button/
│   │       └── primary/
│   │              └── index.js
│   │              └── styles.js
│   ├── services/
│   │      └── api
│   │         └── auth.js
│   ├── utils/
│   │      └── date.js
├── .editorconfig
├── .gitignore
├── babel.config.js
├── index.js
├── app.json
├── package.json
└── README.md
```

## Observações

- No layout sugerido não existe nenhum botão de 'voltar', imagino que a opção de 'voltar' nas telas seja, no caso do android, o botão nativo e, no caso do ios, a opção de arrastar para o lado.
- No detalhe do filme eu não encontrei nenhuma outra requisição que retornasse os atores de um determinado filme, também não é retornado tal valor na requisição do detalhe do filme
- As tags da home não executam qualquer ação sobre a lista de filmes exibida
- O context movies, genres e theme estão sendo salvos no localstorage

## Features

- [x] HOME - Listagem de 10 filmes em formato de banner horizontal;
- [x] HOME - Uma tab navigation (Não precisar ser funcional);
- [x] HOME - Um filtro com estilização de "tag selection" (A filtragem dos intens não precisa ser funcional);
- [x] SEARCH SCREEH - O init da screen precisa trazer uma lista de buscas recentes (Os itens da busca podem ser fakes)
- [x] SEARCH SCREEH - O input de busca deve ser funcional
- [x] MOVIE DETAIL - A screen deve ter a capa do filme, avaliação, titulo, data de lançamento, duração sinopse e <strong>lista de atores</strong> com scrool horizontal
- [x] MOVIE DETAIL - O usuario poderá avaliar o filme clicando no componente "Avalie". Essa ação abrirá um zz com um "rating stars"
- [x] FUNCIONALIDADES - Alteração entre modo dark e ligth;
- [x] FUNCIONALIDADES - navegação via tab navigation na home screen;
- [x] FUNCIONALIDADES - Buscas recentes em local storage;

<!-- CONTACT -->

## Contato

Fernando - **fernandopascoalsi@gmail.com**
