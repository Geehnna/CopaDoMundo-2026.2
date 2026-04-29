# Versão Desktop

Esta pasta contém a versão desktop do app, com layout e navegação pensados para telas maiores.

## Como usar

1. Altere o import em `src/main.tsx` para:

```ts
import App from "./desktop/App";
```

2. Mantenha o import de estilos em `src/main.tsx`:

```ts
import "./styles/index.css";
```

3. Rode o projeto normalmente com `pnpm run dev`.

## O que está diferente

- Navegação desktop sempre visível
- Sem menu mobile
- Layout com espaçamento maior e melhor para telas grandes
