# TCC Inatel 2018: SSR vs CSR
Este repositório contém os código da comparação das técnicas SSR e CSR. Seguindo os passos abaixo é possível subir um server NodeJS na máquina local e acessar duas páginas diferentes, CSR e SSR, no qual cada uma delas renderiza uma lista de imagem utilizando as duas técnicas propostas.

# Links
- [Tutorial Hackernoon](https://hackernoon.com/server-side-vs-client-side-rendering-in-react-apps-443efd6f2e87)
- [Repositório com código exemplo](https://github.com/builderbook/builderbook/tree/master/tutorials/3-end)

# Configurar ambiente e subir server
- Instalar o NPM no PC
- (Opcional) Instalar o Yarn no PC
- Clonar este repositório
- (Opcional) Trocar do branch master para o branch de teste que contém o frontend do tutorial
- Exercutar um dos comandos a seguir para baixar as dependências: npm install ou yarn
- Subir o servidor através de um dos comandos a seguir: npm run dev ou yarn dev
- Acessar localhost:8000

# Endpoints
É possível acessar os endpoints abaixo para cadastrar novas imagens no Firebase e baixar a lista de imagens cadastradas.

    GET: http://localhost:8000/api/images
Retorna uma lista com todas as imagens salvas no Firebase em base64.
    
    GET: http://localhost:8000/api/image?image=https://www.w3schools.com/w3css/img_lights.jpg
Salva uma nova imagem no firebase. A URL providenciada deve ser de uma imagem (observar extensão).
