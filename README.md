# Distribuidora Robaski

Landing page institucional desenvolvida com React, Vite e TypeScript.

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

## Logo oficial

Antes da publicação, adicione o logo oficial em:

```text
public/assets/robaski-logo.png
```

Enquanto o arquivo não estiver disponível, o cabeçalho e o rodapé exibem um fallback visual discreto. O mesmo arquivo será usado como favicon após ser adicionado.

## Informações da empresa

Telefone, endereço, e-mail e links estão centralizados em `src/data/company.ts`.
