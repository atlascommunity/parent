# Standarts plugin

Standarts is a default jira-plugin structure project

## Backend

### Backend dependencies
|Library | Version | Description|
|---| ---| ---|
|jira-core| provided | Jira core dependency|
|activeobjects-plugin| provided | Active objects dependency |
|atlassian-spring-scanner-annotation| provided | Atlassian spring scanner dependency |
|atlassian-rest-common| provided |  Atlassian rest common dependency |
|lombok| 1.18.10 | Lombok project dependency|
|commons| 2.0 | Internal mail.ru dev team package for atlassian addons|

### Backend test dependencies

|Library | Version | Description|
|---| ---| ---|
|junit-jupiter|5.7.0| Junit 5|
|mockito-core|3.5.13| Mockito|

### Backend useful commands

**NOTE: All commands should be used in a root directory of project**

|Command | Description|
|---| ---|
|atlas-package | Builds deployable atlassian dev-mode addon (dev_front + back)  |
|atlas-package -P production | Builds deployable atlassian  production-ready addon (prod_front + back) |
|atlas-debug | Builds deployable atlassian dev-mode addon and runs local jira server in debug mode with this addon installed (dev_front + back) |
|atlas-debug -P production | Builds deployable atlassian prod-mode addon and runs local jira server in debug mode with this addon installed (prod_front + back) |


## Frontend 

### Frontend dependencies

|Package | Version | Description| Link |
|---| ---| ---| --- |
|@atlassian/wrm-react-i18n| ^0.7.0 | An internationalization i18n helper for WRM and React that can be used in Atlassian Server products and plugins|https://www.npmjs.com/package/@atlassian/wrm-react-i18n|
|@emotion/core| ^10.0.35 | Css-in-js styling in react apps (Emotion.js)| https://www.npmjs.com/package/@emotion/core |
|@emotion/styled| ^10.0.27 | The styled API for @emotion/core (Emotion.js) | https://www.npmjs.com/package/@emotion/styled|
|@emotion/styled-base| ^10.0.31 | ----- | https://www.npmjs.com/package/@emotion/styled-base |
|mobx| ^6.0.1 | MobX state management library | https://www.npmjs.com/package/mobx |
|mobx-react| ^7.0.0 | Package with React component wrapper for combining React with MobX | https://www.npmjs.com/package/mobx-react |
|react| ^16.14.0 | JavaScript library for creating user interfaces | https://www.npmjs.com/package/react |
|react-dom| ^16.14.0 | Entry point to the DOM and server renderers for React | https://www.npmjs.com/package/react-dom |
|styled-components| ^3.2.6 | Legacy styled-components dependency, needed for all future @atlaskit/ prefixed dependecies| https://www.npmjs.com/package/styled-components |

**NOTE**: **_styled-components_** dependency must be removed when all **_@atlaskit_** dependencies finally migrates to **_@emotion_**
 
### Frontend dev dependencies

|Package | Version | Description| Link |
|---|---|---|---|
| @types/jquery | ^3.5.3 | Jquery library type definitions  | https://www.npmjs.com/package/@types/jquery |
| @types/lodash | ^4.14.162 | Lodash library type definitions | https://www.npmjs.com/package/@types/lodash |
| @types/node | ^14.14.0 | Node runtime type deifinitions | https://www.npmjs.com/package/@types/node | 
| @types/react | ^16.9.53 | React library type definitions | https://www.npmjs.com/package/@types/react |
| @types/react-dom | ^16.9.8 | React-dom package type definitions | https://www.npmjs.com/package/@types/react-dom |
| @typescript-eslint/eslint-plugin | ^4.5.0 | An ESLint plugin which provides lint rules for TypeScript codebases |  https://www.npmjs.com/package/@typescript-eslint/eslint-plugin|
| @typescript-eslint/parser | ^4.5.0 | An ESLint parser which leverages TypeScript ESTree to allow for ESLint to lint TypeScript source code | https://www.npmjs.com/package/@typescript-eslint/parser |  
| atlassian-webresource-webpack-plugin | ^4.9.0 | Auto-generates web-resource definitions from your webpacked code, for usage in an Atlassian product or plugin | https://www.npmjs.com/package/atlassian-webresource-webpack-plugin |
| clean-webpack-plugin | ^3.0.0 | A webpack plugin to remove/clean build folder(s). |  https://www.npmjs.com/package/clean-webpack-plugin |
| eslint | ^7.11.0 | JS/TS linter (ESLint) |  https://www.npmjs.com/package/eslint | 
| eslint-config-prettier | ^6.14.0 | Turns off all rules that are unnecessary or might conflict with Prettier. | https://www.npmjs.com/package/eslint-config-prettier| 
| eslint-plugin-prettier | ^3.1.4 | Runs Prettier as an ESLint rule and reports differences as individual ESLint issues. | https://www.npmjs.com/package/eslint-plugin-prettier|
| eslint-plugin-react | ^7.21.5 | React specific linting rules for ESLint | https://www.npmjs.com/package/eslint-plugin-react |
| inspectpack | ^4.5.2 | An inspection tool for Webpack frontend JavaScript bundles. | https://www.npmjs.com/package/inspectpack |
| prettier | ^2.1.2 | Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary. |  https://www.npmjs.com/package/prettier | 
| terser-webpack-plugin | ^4.2.3 | Webpack plugin that uses terser to minify JavaScript bundle size. | https://www.npmjs.com/package/terser-webpack-plugin |
| ts-loader | ^8.0.6 | This is the TypeScript loader for webpack | https://www.npmjs.com/package/ts-loader |
| typescript | ^4.0.3 | Typescript | https://www.npmjs.com/package/typescript|
| webpack | ^4.44.2 | Webpack | https://www.npmjs.com/package/webpack |
| webpack-bundle-analyzer | ^3.9.0 | Visualize size of webpack output files with an interactive zoomable treemap | https://www.npmjs.com/package/webpack-bundle-analyzer |
| webpack-cli | ^3.3.12 | webpack cli tool | https://www.npmjs.com/package/webpack-cli |
| webpackbar | ^4.0.0 | Elegant ProgressBar and Profiler for Webpack | https://www.npmjs.com/package/webpackbar |

## Frontend useful commands

**NOTE: All commands should be used in /js directory of project**

|Command | Description|
|---| ---|
|yarn build| Builds frontend part of add-on in dev mode|
|yarn build-prod| Builds frontend part of add-on in production-ready mode|
|yarn analyze| Builds frontend part of add-on in production ready mode and shows bundle analysis in new browser tab with address http://127.0.0.1:8888/ |
|yarn lint| Runs prettier + linter on all front part files ```eslint '*/**/*.{js,ts,tsx}' --quiet --fix``` |


## TSCONFIG.JSON documentation
"exclude" - defines directories which will be excluded from compilation and type resolving
"include" - defines directories which will included in compilation and type resolving
"compileOnSave" - just says editor to compile all project files when saved

### Compiler options part

**NOTE**: 
* "useDefineForClassFields": true 
* "experimentalDecorators": true 

**Must be inside tsconfig compiler options for correct working of MobX library**


All other tsconfig options documentation can be found here: https://www.typescriptlang.org/tsconfig


P.S: tsconfig.json with russian comments on all possible features could be found here 
https://gist.github.com/KRostyslav/82a25c469ffa6652825d58537ac6bc22



## Что осталось сделать? 
* Настроить тесты для фронта
* Настроить линтер(какие-то правила для идеи) для бэка
* Настроить гит прекоммит хук для линтера (?)

