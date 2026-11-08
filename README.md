# Poseidon Store

Protótipo de catálogo comunitário para PS4 inspirado no fluxo de seleção de plataformas e no carrossel de capas mostrado nas referências do usuário. A interface usa identidade visual própria, com um guardião Poseidon original. O projeto é independente e não é afiliado à Sony Interactive Entertainment.

## Direção do projeto

A Poseidon Store será desenvolvida como um projeto independente, usando a Infinity Store apenas como referência funcional. Não reutilizar marcas, código, imagens ou outros materiais sem autorização.

## Interface demonstrativa

- Tela de escolha entre Homebrew, PS3, PS One, PS2 e PS4, conforme as plataformas visíveis na Sandro Store de referência.
- Carrossel de capas com item selecionado em destaque, arte de fundo temática e contador.
- Importação de capas verticais (`cover`) e artes horizontais (`background`) no manifesto, preservando o formato de caixa usado no carrossel.
- Detalhes do item, busca, filtro por categoria e teclas indicativas na tela.
- Navegação com teclado e controle compatível com Gamepad API: direcional/analógico, X, círculo, quadrado, triângulo, L1 e R1.
- Arte do guardião Poseidon em `assets/poseidon-guardian.svg`.
- O manifesto inclui uma seleção inicial de homebrew com páginas oficiais de download e de código-fonte. A Poseidon Store encaminha para os releases dos autores; não hospeda os pacotes.
- A interface conserva a estrutura de biblioteca por plataforma, carrossel, detalhes e navegação por controle. A marca e a arte do personagem foram substituídas pela identidade original Poseidon.
- O arquivo Sandro Store enviado é um pacote instalável de PS4, não o projeto-fonte. Ele não disponibiliza um manifesto legível com a lista completa de itens e capas para migração direta.
- A inspeção do pacote não encontrou uma lista legível de jogos/capas. O catálogo inicial não representa uma migração integral da Sandro Store.

### Formato para catálogo importado

Cada item pode informar `id`, `name`, `category`, `platforms`, `cover`, `background`, `releaseUrl` e `sourceUrl`. Coloque capas autorizadas em `assets/covers/` e indique um caminho relativo, por exemplo `"cover": "assets/covers/meu-jogo.jpg"`. O carrossel usa proporção vertical de caixa de jogo; `background` aceita arte horizontal para o fundo quando o item estiver selecionado. `releaseUrl` e `sourceUrl` devem apontar para páginas HTTPS oficiais. `description` e `colors` são opcionais. Categorias como `Jogos Homebrew`, `Aplicativos` e `Emuladores` aparecem no filtro.

## Regras para catálogo e downloads

- Usar páginas de download mantidas pelos autores ou fontes com distribuição autorizada.
- Disponibilizar apenas conteúdo legalmente distribuível ou cujo uso tenha sido autorizado.
- Não incluir links para cópias não autorizadas de jogos, BIOS, firmware ou outros materiais protegidos.
- Identificar a origem e o estado de cada link; não apresentar links indisponíveis como funcionais.

## Estado atual

- Repositório público: `Someoca/poseidon-store`.
- Branch principal: `main`.
- Branch de desenvolvimento: `development`.
- Interface web em HTML, CSS e JavaScript sem dependências de build.
- Catálogo carregado de `catalog/catalog.json`.
- Cada registro publicado precisa ter fonte e distribuição autorizadas. Não incluir jogos comerciais, BIOS, firmware ou capas protegidas sem autorização de publicação. Para importar os itens Sandro, é necessário um manifesto/exportação legível e mídia autorizada.
- Ainda não há estrutura de aplicação PS4, pipeline de PKG, testes automatizados ou releases publicados.

## Fluxo de trabalho

1. Adicionar itens ao manifesto somente após confirmar licença, origem e disponibilidade.
2. Completar detalhes do item e o fluxo de saída para a fonte autorizada.
3. Avaliar a arquitetura do aplicativo nativo e compatibilidade com o ambiente PS4.
4. Validar a navegação em navegador e, quando aplicável, no console-alvo.
5. Publicar builds e releases somente após validação.

## Próximas etapas

1. Aprovar a direção visual Poseidon e ajustar as telas às referências completas.
2. Ampliar o catálogo com homebrew, emuladores e capas com fonte e permissão de uso confirmadas.
3. Avaliar a arquitetura do aplicativo nativo e validar a navegação no browser e no ambiente PS4.
