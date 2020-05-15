<h3 align="center">
  Front End Programming Test by: OnSign TV
  Project Name: Wheater Forecast
  Resolved by: Vinicius Dias
</h3>

<p align="center">
  <a aria-label="Node version" href="https://nodejs.org/en/blog/release/v12.16.3/">
    <img src="https://img.shields.io/badge/node.js@lts-12.14.1-informational?logo=Node.JS"></img>
  </a>
  <a aria-label="React version" href="https://github.com/facebook/react/blob/master/CHANGELOG.md#16131-march-19-2020">
    <img src="https://img.shields.io/badge/react-16.12.0-informational?logo=react"></img>
  </a>
  <a aria-label="Typescript version" href="https://www.npmjs.com/package/typescript/v/3.7.2">
    <img src="https://img.shields.io/npm/types/typescript"></img>
  </a>
  <a aria-label="Finished" href="https://rocketseat.com.br/week/aulas/11.0?aula=5">
    <img src="https://img.shields.io/badge/OnSignTV-done-green"></img>
  </a>
</p>

## :sparkles: About Challenge

Your goal is to create a simple web application that allows users to view the temperature forecast for the next six hours at agiven location.
This application can be developed using your preferred JS Framework or just plain and simple

Javascript. React and Vue.js areour personal preference, but rest assured that you'll NOT be evaluated by choice of Framework. All code must be writtenexclusively in english. You don't have to add automated tests, but adding some comments and documentation would be nice.

We will be evaluating how you architect the solution, how you handle errors from both user input and external APIs, as well ashow efficient your solution is.

If you want to add an external library or other type of dependency, please write some comments explaining why you believe it isnecessary.

Don't worry about how this would be deployed, as long as we can run it somehow. A README file with instructions isappreciated.

### Development

- In the root directory (/weather-forecast) of the project, install all the necessary libraries for development with the command:

```js
  yarn install
```

- In the root directory (/weather-forecast) of the project, start the application in development mode at [localhost](http://localhost:3000) with the command:

```js
  yarn start
```

### Tech Introduction

- Desenvolvido utilizando os padrões do Typescript dentro do React (create-react-app);
- Foi utilizado as bibliotecas EsLint e Prettier para identação e um melhor debug do código;
- Fonte usada: Arimo, pela semelhança com a Helvetica Hue, encontrada no site da OnSignTV;

#### Basic Template

- Create the project with create-react-app;

```js
  create-react-app weather-forecast --template=typescript
```

#### Added Libraries

- Added the Eslint libraty to project in development mode:

```js
  yarn add eslint -D
```

- Added the following library in the development version, to import typescript by default:

```js
  yarn add eslint-import-resolver-typescript -D
```

- Added the Prettier library to the project in development mode:

```js
  yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

- Added the Styled Components library to stylized the aplication:

```js
  yarn add styled-components
```

- Added the Axios library to HTTP request's:

```js
  yarn add axios
```

- Added the React Icons library to use some icons:

```js
  yarn add react-icons
```

#### Project Structure

The project contains the following folders

./src

- /components => Reusable application components;
- /pages => Application pages;
- /routes => Application routes;
- /styles => Global styles of aplication;

---

Some comments have been added to the code to improve understanding;
