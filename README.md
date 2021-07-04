<h3 align="center">CRA Atomic Boilerplate</h3>

<p align="center">
  <a href="#wrench-Configurações">Configurações</a> |
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