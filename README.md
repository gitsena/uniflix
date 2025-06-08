
# 🎬 UNIFLIX

Uma plataforma de gerenciamento de filmes construída com **Node.js**, **Express**, **Prisma**, **JavaScript** e **Tailwind CSS**.

---

## 📦 Tecnologias Utilizadas

- **Backend:** Node.js, Express, Prisma ORM
- **Frontend:** JavaScript Vanilla, Tailwind CSS
- **Banco de Dados:** PostgreSQL (via [Neon](https://neon.tech))
- **Deploy Backend:** [Render](https://render.com)
- **Deploy Frontend:** [Netlify](https://netlify.com)
- **Gerenciamento de Imagens:** [Cloudinary](https://cloudinary.com)

---

## 🚀 Deploy

- 🔗 Frontend: [https://uniflix.netlify.app](https://uniflix.netlify.app)
- 🔗 Backend (API): [https://uniflix.onrender.com](https://uniflix.onrender.com)
- 🖼️ Imagens: armazenadas na nuvem via [Cloudinary](https://cloudinary.com)

---

## 🧪 Funcionalidades

- 📄 CRUD de filmes
- 🔍 Filtros por gênero e classificação
- 📤 Upload de imagem com preview (via Cloudinary)
- 📝 Modal para criação/edição de filmes
- ❌ Modal de confirmação antes de excluir
- 📊 Interface responsiva com Tailwind

---

## 🔧 Como Rodar o Projeto Localmente

### ✅ Pré-requisitos

- Node.js (v18+ recomendado)
- npm ou yarn
- Git

---

### 🔙 Backend

```bash
# Clone o repositório e entre na pasta do projeto
git clone https://github.com/gitsena/uniflix.git
cd uniflix

# Instale as dependências
npm install
```

#### ⚙️ Configure o banco de dados

Crie o arquivo `.env` com o seguinte conteúdo:

```env
DATABASE_URL="postgresql://USUARIO:SENHA@ep-ENDERECONEON.us-east-2.aws.neon.tech/uniflix?schema=public"
CLOUDINARY_CLOUD_NAME=seu_cloud_name
CLOUDINARY_API_KEY=sua_api_key
CLOUDINARY_API_SECRET=sua_api_secret
```

#### 📦 Rode as migrações

```bash
npx prisma migrate dev --name init
npx prisma generate
```

#### ▶️ Inicie o servidor

```bash
npm run dev
```

> O servidor estará disponível em: [http://localhost:3000](http://localhost:3000)

---

### 💻 Frontend

```bash
# Acesse a pasta do frontend
cd frontend/public
```

#### 🌐 Inicie um servidor local

Você pode usar uma extensão do VS Code como **Live Server**, ou um servidor simples com:

```bash
npx live-server
```

> Acesse a URL fornecida, geralmente [http://127.0.0.1:8080](http://127.0.0.1:8080)

---

## 🖼️ Upload de Imagens

- As imagens são **enviadas para o Cloudinary**.
- Apenas o **caminho/URL da imagem** é salvo no banco de dados.
- O frontend **consome e exibe a imagem diretamente da nuvem**, sem depender de diretórios locais.

---

## 🧑‍💻 Desenvolvido por

**André Dias de Sena**

[GitHub: gitsena](https://github.com/gitsena)
