# gameclasses

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada


## Usage

```
//install node_modules if you want to build a CSS file with Tailwind CSS
$ npm install

//start watching to automatically rebuild a CSS file
$ npx tailwindcss -i ./public/css/input.css -o ./public/css/output.css --watch

// install http-server to use js modules without CORS errors (run with sudo)
$ npm install -g http-server

// run http-server in 8080
$ http-server
```

## Used Technologies

The project was developed using the following technologies:

- **Programming Language:** [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

- **Styling:** [TailwindCSS](https://tailwindcss.com/)

- **Dev Server:** [http-server](https://www.npmjs.com/package/http-server)