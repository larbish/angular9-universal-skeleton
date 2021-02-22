# Contact info

Baptiste Leproux

Mail: leproux.baptiste@gmail.com

# Coding style

Typescript is used in a restrictive way thanks to TSLint.

All complexe objects are defined in src/models, I do not authorize 'any' type and all variables, response, params must be typed

In project context:

- I create a common project containing only data models
- I publish it on a repository manager in order to share it with all other projects (fronts and apis)

## Linter

I am still using TSlint even if i know it has been decrecated. Ng cli still use it too.

## Code formatter

An .editorconfig file is provided in this repo in order to match lint rules and keep coding consitency between developers

Prettier (.prettierrc) is used to help developers formating their code

# Pretttier on intellij

https://prettier.io/docs/en/webstorm.html

# Pretttier on vscode

https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
```json
{
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

## Git hooks

Use Husky for commit format, pre-commit and others commit lifecycles (.huskyrc.json)

# Styles

## Toolkit

Use [bootstrap](https://getbootstrap.com/) and [ngx-bootstrap](https://valor-software.com/ngx-bootstrap/#/)

# How to use this project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.

## Development server static

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Run `npm run dev` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development server SSR

Run `npm run dev:srr` for a dev server SSR in watch mode. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `npm run build:ssr` to build the project. The build artifacts will be stored in the `dist/browser` and `dist/server` directory. Use the `--prod` flag for a production build.

Run `npm run serve:ssr` to run a simple nodejs SSR server returning your app.

## Using docker => Build and run your app with Compose

Run `docker-compose build` to build your app.

Run `docker-compose up` to run your app.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
