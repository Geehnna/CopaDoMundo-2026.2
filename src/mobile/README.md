# Versão Mobile

Esta pasta contém a versão mobile do app, com layout e navegação otimizados para telas pequenas.

## Como usar

1. Altere o import em `src/main.tsx` para:

```ts
import App from "./mobile/App";
```

2. Mantenha o import de estilos em `src/main.tsx`:

```ts
import "./styles/index.css";
```

3. Rode o projeto normalmente com `pnpm run dev`.

## O que está diferente

- Navegação mobile sempre visível
- Sem menu desktop
- Layout com espaçamento menor e melhor para telas pequenas
- Navegação horizontal com scroll
