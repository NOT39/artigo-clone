type ArticleMockData = {
  title: string
  content: {
    type: 'sub-title' | 'paragraph'
    text: string
  }[]
}

export const articleMock: ArticleMockData = {
  title: 'Next.js',
  content: [
    {
      type: 'sub-title',
      text: 'Resumo',
    },
    {
      type: 'paragraph',
      text: 'Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React. É uma estrutura pronta para produção que permite que os desenvolvedores criem rapidamente sites JAMstack estáticos e dinâmicos e é amplamente usada por muitas grandes empresas.',
    },
    {
      type: 'sub-title',
      text: 'Plano de fundo',
    },
    {
      type: 'paragraph',
      text: 'Next.js é uma estrutura React que permite vários recursos extras, incluindo renderização do lado do servidor e geração de sites estáticos.[5] React é uma biblioteca JavaScript tradicionalmente usada para construir aplicações web renderizadas no navegador do cliente com JavaScript.[6] Os desenvolvedores reconhecem vários problemas com esta estratégia, no entanto, como não atender aos usuários que não têm acesso ao JavaScript ou o desativaram, problemas de segurança em potencial, tempos de carregamento de página significativamente estendidos e pode prejudicar a otimização geral do mecanismo de pesquisa do site.[6] Frameworks como Next.js contornam esses problemas, permitindo que parte ou todo o site seja renderizado no lado do servidor antes de ser enviado ao cliente.[6][7] Next.js é um dos componentes mais populares disponíveis no React.[8]',
    },
    {
      type: 'paragraph',
      text: 'O Google fez uma doação para o projeto Next.js, contribuindo com 43 solicitações pull em 2019, onde ajudaram na remoção de JavaScript não utilizado, reduzindo o tempo de sobrecarga e adicionando métricas aprimoradas.[9] Em março de 2020, a estrutura é usada por muitos sites, incluindo Netflix, GitHub, Uber, Ticketmaster e Starbucks.[6] No início de 2020, foi anunciado que Vercel havia garantido 21 milhões de dólares americanos em financiamento da Série A para apoiar melhorias no software.[1] O autor original do framework, Guillermo Rauch, é atualmente o CEO da Vercel e o desenvolvedor principal do projeto é Tim Neutkens.[10]',
    },
    {
      type: 'paragraph',
      text: 'Depois disso eu lembro de um pós festa, não lembro que porra tava rolando direito, mas lembro de ir pra casa todo animado pra falar contigo, mas aí você não tava acordada, foi ali que eu comecei a perceber que eu tava na merda.',
    },
    {
      type: 'sub-title',
      text: 'Estilo e recursos',
    },
    {
      type: 'paragraph',
      text: 'A estrutura Next.js utiliza a arquitetura JAMstack, que distingue entre front-end e back-end e permite o desenvolvimento de front-end eficiente que é independente de quaisquer APIs de back-end.[1] A estrutura suporta CSS comum, bem como Scss e Sass pré-compilados, CSS-in-JS e JSX estilizado.[11] Além disso, é construído com suporte TypeScript e pacote inteligente.[12]',
    },
  ],
}
