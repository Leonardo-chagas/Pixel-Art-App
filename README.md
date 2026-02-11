Aplicação de Pixel Art cirada com React e Typescript. Foi utilizado Vite para criar o template desta aplicação.

A aplicação possui 3 componentes principais, sendo eles: as ferramentas, o canvas e as ações.

O componente de ferramentas permite a seleção de três ferramentas diferentes: o pincel, a borracha e a ferramenta conta gotas. foi instalado o pacote react-color para adicionar um componente que permita que o usuário selecione uma cor para ser utilizada com a ferramenta de pincel. A borracha remove a cor de fundo dos pixels. A ferramenta conta gotas permite que o usuário clique em um pixel e selecione a cor de fundo daquele pixel.

O canvas é a área onde o usuário cria a pixel art. O canvas é formado por um conjunto de pixels e um conjunto de divs para formar o background e indicar onde os pixels estão posicionados. O tamanho inicial do canvas é de 16x16 pixels, que pode ser reduzido ou aumentado até um máximo de 32x32 no componente de ações.

O componente de ações permite que o usuário altere o tamanho do canvas e exporte a pixel art para um arquivo png. O usuário pode alterar o tamanho do eixo X e do eixo Y separadamente, até um valor máximo de 32. Para realizar a exportação da imagem foi utilizado o pacote html-to-image, usando a referência do container de pixels para transformar a pixel art em uma imagem png.

Para rodar o programa, basta executar os seguintes comandos no terminal:

 - npm install
 - npm run dev

E depois clicar no link do localhost.