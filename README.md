# Influu MediaKit

> Exemplo de repositório para o projeto Influu MidiaKit construído com Vue.js, Nuxt.js e Tailwind CSS

Para explicações detalhadas das configurações, dê uma olhada nas documentações do [Vue.js](https://br.vuejs.org/), do [Nuxt.js](https://nuxtjs.org/) e do [Tailwind CSS](https://tailwindcss.com/).

## Desenvolvendo

Antes de iniciar, o ambiente de desenvolvimento deve ter a versão mais recente do [Node.js](https://nodejs.org/en/) e seu gerenciador de pacotes NPM (instalado junto). Para verificar se o seu ambiente está com ambos instalados, execute em um _terminal_:

```bash
# verifica sua versão do Node.js
$ node -v

# verifica sua versão do NPM
$ npm -v
```

Com os pré-requisitos funcionando, basta utilizar em um _terminal_ executando **no diretório atual do projeto**:

```bash
# instalar dependências
$ npm i

# servidor com hot reload para desenvolvimento
$ npm run dev
```

Outros comandos que podem ser relevantes durante o desenvolvimento e os testes:

```bash
# construir para produção e lançar servidor
$ npm run build
$ npm start

# gerar arquivos estáticos para hospedagem em CDN
$ npm run generate

# analisar qualidade do código-fonte
$ npm run lint

# analisar tamanho dos pacotes para produção
$ npm run analyze
```

## Publicando

[![Netlify Status](https://api.netlify.com/api/v1/badges/9b43cfee-11fa-4a10-a9cd-d49435b2b329/deploy-status)](https://app.netlify.com/sites/fatectq/deploys)

Para fins de testes durante o desenvolvimento, este projeto é automaticamente publicado através da [Netlify](https://netlifly.com/) quando novas mudanças são recebidas no _branch_ `master`. Portanto, para publicar uma alteração, basta enviar o _pull_ para tal _branch_.

## Licença

Copyright © 2020 Erick Eduardo Petrucelli

Licenciado sob a [licença MIT](./LICENSE).
