# Distribuidora Robaski

Landing page institucional da Distribuidora Robaski, desenvolvida com React, Vite e TypeScript.

## Desenvolvimento local

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
```

O conteúdo de `dist/` é gerado pelo build. O projeto inclui `vercel.json` para que a rota `/politica-de-privacidade` funcione ao ser acessada diretamente na Vercel.

## Estrutura

- `src/data/company.ts`: dados institucionais, navegação e URLs de contato.
- `src/pages/HomePage.tsx`: landing page institucional.
- `src/pages/PrivacyPage.tsx`: política de privacidade.
- `src/components`: cabeçalho, rodapé e marca.
- `public/assets/robaski-logo-transparent.png`: ativo de marca com fundo transparente usado no site.

O projeto não usa formulários, banco de dados, contas ou ferramentas próprias de rastreamento.
