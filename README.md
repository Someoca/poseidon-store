# Poseidon Store

Protótipo de catálogo comunitário para PS4 inspirado no fluxo de seleção de plataformas e no carrossel de capas mostrado nas referências do usuário. A interface usa identidade visual própria, com um guardião Poseidon original. O projeto é independente e não é afiliado à Sony Interactive Entertainment.

## Direção do projeto

A Poseidon Store será desenvolvida como um projeto independente, usando a Infinity Store apenas como referência funcional. Não reutilizar marcas, código, imagens ou outros materiais sem autorização.

## Interface demonstrativa

- Tela de escolha entre Homebrew, PS One, PS2, PS3, PS4 e PS5.
- Carrossel de capas com item selecionado em destaque, arte de fundo temática e contador.
- Detalhes do item, busca, filtro por categoria e teclas indicativas na tela.
- Navegação com teclado e controle compatível com Gamepad API: direcional/analógico, X, círculo, quadrado, triângulo, L1 e R1.
- Arte do guardião Poseidon em `assets/poseidon-guardian.svg`.
- Os itens atuais em `catalog/catalog.json` são fictícios e servem somente como prévia de interface; não há arquivos nem links de download associados.

## Regras para catálogo e downloads

- Manter os links de download da Infinitykkj somente quando forem confirmados e autorizados para uso.
- Disponibilizar apenas conteúdo legalmente distribuível ou cujo uso tenha sido autorizado.
- Não incluir links para cópias não autorizadas de jogos, BIOS, firmware ou outros materiais protegidos.
- Identificar a origem e o estado de cada link; não apresentar links indisponíveis como funcionais.

## Estado atual

- Repositório público: `Someoca/poseidon-store`.
- Branch principal: `main`.
- Branch de desenvolvimento: `development`.
- Interface web em HTML, CSS e JavaScript sem dependências de build.
- Catálogo carregado de `catalog/catalog.json`.
- Os cartões de demonstração devem ser substituídos por registros com licença, procedência e distribuição autorizada verificadas antes de qualquer publicação.
- Ainda não há estrutura de aplicação PS4, pipeline de PKG, testes automatizados ou releases publicados.

## Fluxo de trabalho

1. Adicionar itens ao manifesto somente após confirmar licença, origem e disponibilidade.
2. Completar detalhes do item e o fluxo de saída para a fonte autorizada.
3. Avaliar a arquitetura do aplicativo nativo e compatibilidade com o ambiente PS4.
4. Validar a navegação em navegador e, quando aplicável, no console-alvo.
5. Publicar builds e releases somente após validação.

## Próximas etapas

1. Aprovar a direção visual Poseidon e ajustar as telas às referências completas.
2. Substituir os cartões fictícios por títulos, capas e fontes de distribuição autorizadas.
3. Avaliar a arquitetura do aplicativo nativo e validar a navegação no browser e no ambiente PS4.
