# TCC Inatel 2018: SSR vs CSR
Este repositório contém os código da comparação das técnicas SSR e CSR. Seguindo os passos abaixo é possível subir um server NodeJS na máquina local e acessar duas páginas diferentes, CSR e SSR, no qual cada uma delas renderiza uma lista de imagem utilizando as duas técnicas propostas.

# Links
- [Build publicada do projeto](https://ssr-vs-csr.herokuapp.com/ )
- [Tutorial Hackernoon](https://hackernoon.com/server-side-vs-client-side-rendering-in-react-apps-443efd6f2e87)
- [Repositório com código exemplo](https://github.com/builderbook/builderbook/tree/master/tutorials/3-end)

# Branchs
- Master: Contém o código principal para uso no TCC.
- Feature: Contém um código misto, utilizando o backend do TCC com o frontend do tutorial do Hackernoon.

# Configurar ambiente e subir server
- Instalar o [Node](https://nodejs.org/en/download/) no PC, versão mais recente
- (Opcional) Instalar o [Yarn](https://yarnpkg.com/lang/en/docs/install/) no PC, versão mais recente
- Clonar este repositório
- Exercutar um dos comandos a seguir para baixar as dependências: npm install ou yarn
- Subir o servidor através de um dos comandos a seguir: npm run dev ou yarn dev
- Acessar localhost:8000

# Endpoints
É possível acessar os endpoints abaixo para cadastrar novas imagens no Firebase e baixar a lista de imagens cadastradas.

    GET: http://localhost:8000/api/images
Retorna uma lista com todas as imagens salvas no Firebase em base64.
    
    POST: http://localhost:8000/api/images
Salva uma nova imagem no firebase. A URL providenciada deve ser de uma imagem (observar extensão).
Para enviar a imagem, marcar a opção x-www-form-urlencoded no Postman e criar uma chave image com a URL da imagem como valor, ou utilizar um JSON no body da requisição ou no Postman, como o exemplo a seguir:

{ "image"="https://www.w3schools.com/w3css/img_lights.jpg" }

    DELETE: http://localhost:8000/api/images
Deleta toda as imagens salvas no Firebase caso não seja passado o argumento "index" no body.
Para deletar uma imagem específica, é necessário enviar o index da imagem desejada no body da requisição (de 0 a n). Para deletar a imagem, marcar a opção x-www-form-urlencoded no Postman e criar uma chave index com o index da imagem como valor, ou utilizar um JSON no body da requisição ou no Postman, como o exemplo a seguir:

{ "index"=2 }
