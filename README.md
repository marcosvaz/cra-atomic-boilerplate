<h3 align="center">Atomic Boilerplate</h3>

<p align="center">
  <a href="#wrench-Configurações">Configurações</a> |
  <a href="#dart-Testes">Testes</a> |
  <a href="#gift-Outros">Outros</a>
</p>

## :wrench: Configurações
Será necessário possuir o `yarn` instalado, caso não tenha, rode
```bash
npm install -g yarn
```

Para rodar o projeto você deve:

1. Instalar as dependências usando
```bash
yarn
```

2. Rodar o projeto utilizando
```bash
yarn start
```
> A página estará rodando em [http://localhost:3000](http://localhost:3000).

Qualquer modificação que você fizer no projeto, será alterada em tempo real no navegador com `Live Reload` (alguns arquivos que não são js/ts podem ter problemas com o Live Reload, então você deverá encerrar o processo do node com `CTRL + C` e rodar novamente o `yarn start`).

## :dart: Testes

Para esse projeto estamos utilizando o `Cypress` como biblioteca de testes.

1. Para abrir o `Cypress`, use
```bash
yarn test:open
```
2. e para rodar os testes, utilize
```bash
yarn test:run
```

## :gift: Outros
#### `Storybook`
Temos uma documentação dos componentes através do Storybook. Para conseguir acessar, é só rodar
```bash
yarn storybook
```
e para rodar o build dele
```bash
yarn build-storybook
```

#### `Docker`
Caso esteja utilizando Docker e queira rodar o build do projeto, temos um `Dockerfile` já definido e o `docker-compose` também configurado.\
Para rodar o projeto com Docker, utilize
```bash
docker-compose up -d
```
e para reiniciar a imagem utilize
```bash
docker-compose down && docker rmi [NOME_DA_IMAGEM] && docker-compose up -d
```
> Troque o `[NOME_DA_IMAGEM]` pelo respectivo nome da imagem no Docker.