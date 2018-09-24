## TCC Inatel 2018: SSR vs CSR
Repositório contendo o código da comparação das técnicas SSR e CSR.

- [link do  tutorial](https://hackernoon.com/server-side-vs-client-side-rendering-in-react-apps-443efd6f2e87).

## Configurar ambiente e subir server
- Instalar o NPM no PC
- (Opcional) Instalar o Yarn no PC
- Clonar este repositório
- (Opcional) Trocar do branch master para o branch de teste que contém o frontend do tutorial
- Exercutar um dos comandos a seguir para baixar as dependências: npm install ou yarn
- Subir o servidor através de um dos comandos a seguir: npm run dev ou yarn dev
- Acessar localhost:8000

## Endpoints
- GET: http://localhost:8000/api/images
Retorna uma lista com todas as imagens salvas no Firebase em base64.
- GET: http://localhost:8000/api/image?image=https://www.w3schools.com/w3css/img_lights.jpg
Salva uma nova imagem no firebase. A URL providenciada deve ser de uma imagem (observar extensão).
