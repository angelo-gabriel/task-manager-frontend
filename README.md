# Task Manager App (Front-end)

Trabalho para a faculdade UNINASSAU, Desenvolvido com [Next.js](https://nextjs.org) e [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). <br>
Para funcionar, é necessário que o back-end seja iniciado.

## Como rodar

Inicie o servidor back-end.
Utilize o comando para rodar a aplicação com o NPM (ou similares):

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador.

## Funcionamento

A página principal contém uma dashboard com um menu de tasks e um calendário. <br>
No topo da página é possível navegar entre as páginas de dashboard, anotações e o chatroom,
que utiliza o Ollama para <br> simular um assistente virtual.
