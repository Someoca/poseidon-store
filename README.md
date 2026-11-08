# Poseidon Store

Projeto de loja para PS4, com identidade visual própria e foco em navegação simples, catálogo organizado e compatibilidade com o ambiente do console.

## Direção do projeto

A Poseidon Store será desenvolvida como um projeto independente, usando a Infinity Store apenas como referência funcional. Não reutilizar marcas, código, imagens ou outros materiais sem autorização.

## Requisitos funcionais planejados

- Interface principal otimizada para navegação com controle DualShock 4.
- Identidade visual Poseidon, incluindo avatar/logotipo próprio.
- Catálogo organizado por categorias, incluindo jogos e emuladores.
- Capas e artes dos itens, com estados claros para conteúdo sem imagem.
- Pesquisa, filtros, favoritos e ordenação.
- Páginas/detalhes dos itens e fluxo de download.
- Preparação e validação de pacote PKG para instalação no PS4.

## Regras para catálogo e downloads

- Manter os links de download da Infinitykkj somente quando forem confirmados e autorizados para uso.
- Disponibilizar apenas conteúdo legalmente distribuível ou cujo uso tenha sido autorizado.
- Não incluir links para cópias não autorizadas de jogos, BIOS, firmware ou outros materiais protegidos.
- Identificar a origem e o estado de cada link; não apresentar links indisponíveis como funcionais.

## Estado inicial auditado

- Repositório público: `Someoca/poseidon-store`.
- Branch principal: `main`.
- Branch de desenvolvimento: `development`.
- Base atual: landing page estática em HTML, CSS e JavaScript.
- Arquivos presentes: `index.html`, `styles.css`, `script.js` e este README.
- Ainda não há estrutura de aplicação PS4, catálogo integrado, pipeline de PKG, testes automatizados ou releases publicados.

## Fluxo de trabalho

1. Auditar a implementação e definir a arquitetura compatível com o PS4.
2. Implementar em branches de desenvolvimento, preservando `main`.
3. Validar cada alteração em navegador e, quando aplicável, no ambiente PS4.
4. Registrar mudanças e limitações no changelog.
5. Publicar builds e releases somente após testes e validação.

## Próxima etapa técnica

Transformar a landing page atual na base funcional da loja: arquitetura de navegação, componentes de catálogo e suporte inicial ao controle, antes de integrar fontes de conteúdo e downloads.
