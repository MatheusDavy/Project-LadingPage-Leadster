
# Landig Page Leadster

Landing Page desenvolvida com:
* Next.js
* Typescript 
* Jest / Testing Library
* Styled Components

Aqui você encontrará informações sobre a estrutura de pastas, as decisões tomadas, as funcionalidades e as instruções para executar o projeto. 

# Rodando o Projeto em sua Máquina
## Requisitos

- Node.js (versão X.X.X ou superior)
- npm (ou yarn)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/MatheusDavy/Project-LadingPage-Leadster.git

2. Navegue até a pasta do projeto e rode os comandos
* Instalar as dependências
```
    npm install
```
* Rodar o Projeto
```
    npm run dev
```
O servidor de desenvolvimento será iniciado e o projeto estará disponível no endereço http://localhost:3000. (Fique atento ao terminal, se houver algo rodando na porta 3000, o projeto irá rodar na 3001 e assim sucessivamente)

## Executantos os testes
Para executar os testes usando Jest, execute o seguinte comando:
```
npm run test
```
O Jest executará todos os arquivos de teste e exibirá os resultados no terminal.

# Estruturas de pastas
O projeto possui a seguinte estrutura de pastas (dentro de SRC):
```
|-- @types/
|-- animation/
|   |-- scripts/
|   |-- styles/
|-- app/
|-- assets/
|   |-- data/
|   |-- images/
|-- components/
|-- context/
|-- styles/
|   |-- utils/
```

`@types/`: Onde contém a configuração do Typescript com StyledComponents.

`animation`: Pasta para armazenar arquivos de referentes as animações dos elementos ('scripts' e 'css' das animações)

`app/`: Pasta que contém os arquivos de rotas e layout do Next.js.

`assets`: Pasta para armazenar arquivos de (fontes/imagens/mocks)

`components`: Onde contém os components dos projetos, dentro de cada pasta de component, contém uma estrutra de (index/style/spec) referentes aquele componente

`context`: Pasta para armazenar o arquivo que contém dados de múltiplos components podem utilizar para o funcionamento da aplicação

`styles`: Pasta para armazenar os 'css' e 'theme' de toda a aplicação como: variáveis de estilo, css padrão. Dentro da pasta útil/ há funções personalizadas que retornam css deixando o código mais limpo e reduzido.



# Descrição de Funcionalidade
## Filtro de Posts
Esta funcionalidade permite filtrar os posts com base em diferentes critérios, como categoria, paginação e ordenação. Os filtros proporcionam aos usuários uma maneira conveniente de encontrar os posts desejados e melhorar sua experiência de navegação.

## Filtros Disponíveis
### Categoria
O filtro de categoria permite que os usuários selecionem uma categoria específica para visualizar apenas os posts relacionados a essa categoria. Isso facilita a busca por conteúdo relevante e específico de interesse do usuário.

### Paginação
A paginação permite que os usuários naveguem pelos posts de forma organizada, dividindo o conteúdo em várias páginas. Os usuários podem avançar para a próxima página ou voltar para a página anterior, facilitando a visualização de um grande número de posts.

### Ordenação por Data de Publicação
A ordenação por data de publicação permite que os usuários classifiquem os posts com base na sua data de publicação. Isso é útil para acompanhar os posts mais recentes ou encontrar posts mais antigos que possam ser relevantes.

### Ordenação por Relevância
A ordenação por relevância permite que os usuários classifiquem os posts com base em sua relevância. A relevância pode ser determinada por critérios como popularidade, número de visualizações, comentários ou outros indicadores. Isso ajuda os usuários a encontrar os posts mais relevantes e interessantes com facilidade.

Ao combinar esses filtros, os usuários podem refinar sua pesquisa e obter resultados mais específicos e relevantes.

## Scroll Suave
```
|-- src/
|   |-- animation/
|   |   |-- scripts/
|   |   |   |-- scroll.ts
```
A implementação do código fornecido permite deixar o site mais suave por meio do scroll suave. A animação suave do scroll proporciona uma experiência mais agradável aos usuários durante a navegação pelo site.

## Animações de Entrada dos Elementos
```
|-- src/
|   |-- animation/
|   |   |-- scripts/
|   |   |   |-- enter.ts
```
O código fornecido é responsável por adicionar animações de entrada a elementos específicos do site. As animações visam melhorar a experiência do usuário, trazendo elementos gradualmente à medida que o usuário rola a página ou quando a página é carregada.

### Animação de Elementos
A função animateElement é responsável por animar elementos individuais com base em sua posição na página.

### Animação Sequencial de Elementos
A função animateSequentialElement é responsável por animar elementos sequencialmente em um contêiner específico. A função verifica se o contêiner está visível na tela e, se estiver, utiliza a biblioteca gsap para animar cada elemento filho dentro do contêiner. Os elementos dentro do contêiner devem possuir o atributo data-sequential, e os elementos individuais a serem animados devem possuir o atributo data-sequential-stagger.

### Animações de Caracteres
A função charAnimations é responsável por animar caracteres individuais dentro de um elemento. A função utiliza a biblioteca gsap para animar cada caractere. Os caracteres devem estar dentro do elemento fornecido como argumento (el) e possuir a classe CSS .char.

### Chamada das Animações
As funções de animação são chamadas em dois eventos: scroll e load.

