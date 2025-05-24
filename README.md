# 🎬 UNIFLIX

Uma plataforma de gerenciamento de filmes construída com **Node.js**, **Express**, **Prisma**, **JavaScript** e **Tailwind CSS**.

## 📦 Tecnologias Utilizadas

- Backend: Node.js, Express, Prisma, SQLite
- Frontend: JavaScript Vanilla, Tailwind CSS
- Banco de dados: SQLite
- Gerenciamento de imagens: Upload para diretório local (assets)

---

## 🚀 Como Rodar o Projeto

### 🔧 Pré-requisitos

- Node.js (v18+ recomendado)
- npm ou yarn
- Git

---

## 🔙 Backend

### 📁 Navegue até a pasta raiz do projeto `~/UNIFLIX (main)/`

```bash
~/UNIFLIX/
```

### 📦 Instale as dependências

```bash
npm install
```

### ⚙️ Configure o banco de dados

1. Crie o arquivo `.env` com o seguinte conteúdo:

```
DATABASE_URL="file:./dev.db"

exemplo com postgre "postgresql://NOMESERVIDOR:SENHASERVIDOR@localhost:PORTASERVIDOR/uniflix?schema=public"
```

2. Rode as migrações e crie o banco de dados:

```bash
npx prisma migrate dev --name init
```

3. Gere o client do Prisma:

```bash
npx prisma generate
```

### ▶️ Inicie o servidor backend

```bash
npm run dev
```

> O servidor estará disponível em: [http://localhost:3000]

---

## 💻 Frontend

### 📁 Navegue até a pasta `frontend/public`

```bash
cd ../frontend/public
```

### 🌐 Inicie um servidor local

Você pode usar uma extensão do VS Code como **Live Server**, ou então rodar localmente com um servidor simples:

```bash
npx live-server
```

> Acesse: a porta fornecida.

---

## 📸 Upload de Imagens

- O caminho da imagem é salvo no banco de dados e usado para exibição no frontend (`frontend/public/assets/` pode ser simbólico, conforme o setup).

---

## 🧪 Funcionalidades

- 📄 CRUD de filmes
- 🔍 Filtros por gênero e classificação
- 📤 Upload de imagem com preview
- 📝 Modal para criação/edição
- ❌ Confirmação antes de excluir
- 📊 Interface responsiva com Tailwind

---

## 🧑‍💻 Desenvolvido por

- André Dias de Sena 
- [gitsena](https://github.com/gitsena)
