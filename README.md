
# Calendário Copa 2026

Um site interativo para visualizar o calendário da Copa do Mundo de 2026, incluindo grupos, jogos, fases eliminatórias e muito mais. Este projeto foi desenvolvido com tecnologias modernas para oferecer uma experiência de usuário rica e responsiva.


## Funcionalidades

- **Página Inicial**: Visão geral da Copa 2026.
- **Calendário**: Lista completa de jogos e datas.
- **Grupos**: Detalhes dos grupos e equipes participantes.
- **Fases Eliminatórias**: Simulação das fases knockout.
- **Interface Responsiva**: Compatível com dispositivos móveis e desktop.
- **Tema Personalizado**: Utilizando Shadcn UI e Tailwind CSS para um design moderno.

## Tecnologias Utilizadas

### Dependências Principais
- **React**: 18.3.1 - Biblioteca para construção de interfaces de usuário.
- **React DOM**: 18.3.1 - Renderização do React no DOM.
- **React Router**: 7.13.0 - Roteamento para aplicações React.
- **Vite**: 6.3.5 - Ferramenta de build rápida para desenvolvimento.
- **Tailwind CSS**: 4.1.12 - Framework CSS utilitário.
- **Shadcn UI Components**: Conjunto de componentes UI baseados em Radix UI.
  - @radix-ui/react-accordion: 1.2.3
  - @radix-ui/react-alert-dialog: 1.1.6
  - @radix-ui/react-aspect-ratio: 1.1.2
  - @radix-ui/react-avatar: 1.1.3
  - @radix-ui/react-checkbox: 1.1.4
  - @radix-ui/react-collapsible: 1.1.3
  - @radix-ui/react-context-menu: 2.2.6
  - @radix-ui/react-dialog: 1.1.6
  - @radix-ui/react-dropdown-menu: 2.1.6
  - @radix-ui/react-hover-card: 1.1.6
  - @radix-ui/react-label: 2.1.2
  - @radix-ui/react-menubar: 1.1.6
  - @radix-ui/react-navigation-menu: 1.2.5
  - @radix-ui/react-popover: 1.1.6
  - @radix-ui/react-progress: 1.1.2
  - @radix-ui/react-radio-group: 1.2.3
  - @radix-ui/react-scroll-area: 1.2.3
  - @radix-ui/react-select: 2.1.6
  - @radix-ui/react-separator: 1.1.2
  - @radix-ui/react-slider: 1.2.3
  - @radix-ui/react-slot: 1.1.2
  - @radix-ui/react-switch: 1.1.3
  - @radix-ui/react-tabs: 1.1.3
  - @radix-ui/react-toggle-group: 1.1.2
  - @radix-ui/react-toggle: 1.1.2
  - @radix-ui/react-tooltip: 1.1.8
- **Material UI**: @mui/material: 7.3.5, @mui/icons-material: 7.3.5 - Componentes adicionais de UI.
- **Emotion**: @emotion/react: 11.14.0, @emotion/styled: 11.14.1 - Biblioteca para estilização.
- **Lucide React**: 0.487.0 - Ícones SVG.
- **Date-fns**: 3.6.0 - Utilitários para manipulação de datas.
- **React Hook Form**: 7.55.0 - Gerenciamento de formulários.
- **Recharts**: 2.15.2 - Biblioteca para gráficos.
- **Motion**: 12.23.24 - Animações.
- **Canvas Confetti**: 1.9.4 - Efeitos de confete.
- **Class Variance Authority**: 0.7.1 - Utilitários para classes CSS.
- **Clsx**: 2.1.1 - Condicional de classes CSS.
- **Tailwind Merge**: 3.2.0 - Mesclagem de classes Tailwind.
- Outros: cmdk, embla-carousel-react, input-otp, next-themes, react-day-picker, react-dnd, react-popper, react-resizable-panels, react-responsive-masonry, react-slick, sonner, tw-animate-css, vaul.

### Dependências de Desenvolvimento
- **@vitejs/plugin-react**: 4.7.0 - Plugin Vite para React.
- **@tailwindcss/vite**: 4.1.12 - Plugin Tailwind para Vite.
- **Tailwind CSS**: 4.1.12 - Framework CSS.
- **Vite**: 6.3.5 - Ferramenta de build.

## Estrutura de Pastas

```
CalendárioCopa2026/Site/
├── ATTRIBUTIONS.md          # Atribuições e créditos
├── default_shadcn_theme.css # Tema padrão Shadcn
├── index.html               # Arquivo HTML principal
├── package.json             # Configurações do projeto e dependências
├── pnpm-lock.yaml           # Lockfile do pnpm
├── pnpm-workspace.yaml      # Configuração do workspace pnpm
├── postcss.config.mjs       # Configuração PostCSS
├── README.md                # Este arquivo
├── vite.config.ts           # Configuração do Vite
├── guidelines/              # Diretrizes do projeto
│   └── Guidelines.md
├── src/                     # Código fonte
│   ├── main.tsx             # Ponto de entrada da aplicação
│   ├── app/
│   │   ├── App.tsx          # Componente principal da aplicação
│   │   ├── routes.tsx       # Definição de rotas
│   │   └── components/      # Componentes reutilizáveis
│   │       ├── Layout.tsx   # Layout da aplicação
│   │       ├── figma/       # Componentes específicos do Figma
│   │       │   └── ImageWithFallback.tsx
│   │       └── ui/          # Componentes UI (Shadcn)
│   │           ├── accordion.tsx
│   │           ├── alert-dialog.tsx
│   │           ├── alert.tsx
│   │           ├── aspect-ratio.tsx
│   │           ├── avatar.tsx
│   │           ├── badge.tsx
│   │           ├── breadcrumb.tsx
│   │           ├── button.tsx
│   │           ├── calendar.tsx
│   │           ├── card.tsx
│   │           ├── carousel.tsx
│   │           ├── chart.tsx
│   │           ├── checkbox.tsx
│   │           ├── collapsible.tsx
│   │           ├── command.tsx
│   │           ├── context-menu.tsx
│   │           ├── dialog.tsx
│   │           ├── drawer.tsx
│   │           ├── dropdown-menu.tsx
│   │           ├── form.tsx
│   │           ├── hover-card.tsx
│   │           ├── input-otp.tsx
│   │           ├── input.tsx
│   │           ├── label.tsx
│   │           ├── menubar.tsx
│   │           ├── navigation-menu.tsx
│   │           ├── pagination.tsx
│   │           ├── popover.tsx
│   │           ├── progress.tsx
│   │           ├── radio-group.tsx
│   │           ├── resizable.tsx
│   │           ├── scroll-area.tsx
│   │           ├── select.tsx
│   │           ├── separator.tsx
│   │           ├── sheet.tsx
│   │           ├── sidebar.tsx
│   │           ├── skeleton.tsx
│   │           ├── slider.tsx
│   │           ├── sonner.tsx
│   │           ├── switch.tsx
│   │           ├── table.tsx
│   │           ├── tabs.tsx
│   │           ├── textarea.tsx
│   │           ├── toggle-group.tsx
│   │           ├── toggle.tsx
│   │           ├── tooltip.tsx
│   │           ├── use-mobile.ts
│   │           └── utils.ts
│   ├── data/                 # Dados estáticos
│   │   └── matches.ts        # Dados dos jogos
│   ├── pages/                # Páginas da aplicação
│   │   ├── Calendar.tsx      # Página do Calendário
│   │   ├── Groups.tsx        # Página dos Grupos
│   │   ├── Home.tsx          # Página Inicial
│   │   └── Knockout.tsx      # Página das Fases Eliminatórias
│   └── styles/               # Estilos
│       ├── fonts.css         # Fontes
│       ├── index.css         # Estilos principais
│       ├── tailwind.css      # Configuração Tailwind
│       └── theme.css         # Tema personalizado
```

## Instalação e Execução

### Pré-requisitos
- Node.js (versão 18 ou superior)
- pnpm (gerenciador de pacotes)

### Passos para Instalação
1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd CalendárioCopa2026/Site
   ```

2. Instale as dependências:
   ```bash
   pnpm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   pnpm run dev
   ```

4. Abra o navegador em `http://localhost:5173` (ou a porta indicada).

### Build para Produção
```bash
pnpm run build
```

## Screenshots

Aqui estão alguns screenshots do programa funcionando:

- **Página Inicial**: ![Página Inicial](inicio.png)
- **Calendário de Jogos**: ![Calendário de Jogos](calendario.png)
- **Grupos**: ![Grupos](grupos.png)
- **Fases Eliminatórias**: ![Fases Eliminatórias](eliminatorias.png)

## Contribuição

Contribuições são bem-vindas! Siga estes passos:

1. Fork o projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Contato

Para dúvidas ou sugestões, entre em contato através do [GitHub Issues](https://github.com/Geehnna/CalendarioCopa2026/issues).
  

  
