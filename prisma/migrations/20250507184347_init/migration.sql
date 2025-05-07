-- CreateTable
CREATE TABLE "tbl_classificacao" (
    "id" SERIAL NOT NULL,
    "sigla" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "tbl_classificacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_genero" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "tbl_genero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_filme_genero" (
    "id" SERIAL NOT NULL,
    "id_filme" INTEGER NOT NULL,
    "id_genero" INTEGER NOT NULL,

    CONSTRAINT "tbl_filme_genero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_filme" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "nome_original" TEXT NOT NULL,
    "data_lancamento" TIMESTAMP(3) NOT NULL,
    "data_relancamento" TIMESTAMP(3),
    "duracao" TEXT NOT NULL,
    "sinopse" TEXT NOT NULL,
    "foto_capa" TEXT NOT NULL,
    "id_classificacao" INTEGER NOT NULL,

    CONSTRAINT "tbl_filme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_diretor" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "nome_artistico" TEXT NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "data_falecimento" TIMESTAMP(3),
    "biografia" TEXT NOT NULL,
    "foto" TEXT NOT NULL,
    "id_sexo" INTEGER NOT NULL,

    CONSTRAINT "tbl_diretor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_filme_diretor" (
    "id" SERIAL NOT NULL,
    "id_filme" INTEGER NOT NULL,
    "id_diretor" INTEGER NOT NULL,

    CONSTRAINT "tbl_filme_diretor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_ator" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "nome_artistico" TEXT NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "data_falecimento" TIMESTAMP(3),
    "biografia" TEXT NOT NULL,
    "foto" TEXT NOT NULL,
    "id_sexo" INTEGER NOT NULL,

    CONSTRAINT "tbl_ator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_filme_ator" (
    "id" SERIAL NOT NULL,
    "id_filme" INTEGER NOT NULL,
    "id_ator" INTEGER NOT NULL,

    CONSTRAINT "tbl_filme_ator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_nacionalidade" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "tbl_nacionalidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_diretor_nacionalidade" (
    "id" SERIAL NOT NULL,
    "id_diretor" INTEGER NOT NULL,
    "id_nacionalidade" INTEGER NOT NULL,

    CONSTRAINT "tbl_diretor_nacionalidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_ator_nacionalidade" (
    "id" SERIAL NOT NULL,
    "id_ator" INTEGER NOT NULL,
    "id_nacionalidade" INTEGER NOT NULL,

    CONSTRAINT "tbl_ator_nacionalidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_sexo" (
    "id" SERIAL NOT NULL,
    "sigla" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "tbl_sexo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tbl_filme_genero" ADD CONSTRAINT "tbl_filme_genero_id_filme_fkey" FOREIGN KEY ("id_filme") REFERENCES "tbl_filme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_filme_genero" ADD CONSTRAINT "tbl_filme_genero_id_genero_fkey" FOREIGN KEY ("id_genero") REFERENCES "tbl_genero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_filme" ADD CONSTRAINT "tbl_filme_id_classificacao_fkey" FOREIGN KEY ("id_classificacao") REFERENCES "tbl_classificacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_diretor" ADD CONSTRAINT "tbl_diretor_id_sexo_fkey" FOREIGN KEY ("id_sexo") REFERENCES "tbl_sexo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_filme_diretor" ADD CONSTRAINT "tbl_filme_diretor_id_filme_fkey" FOREIGN KEY ("id_filme") REFERENCES "tbl_filme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_filme_diretor" ADD CONSTRAINT "tbl_filme_diretor_id_diretor_fkey" FOREIGN KEY ("id_diretor") REFERENCES "tbl_diretor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_ator" ADD CONSTRAINT "tbl_ator_id_sexo_fkey" FOREIGN KEY ("id_sexo") REFERENCES "tbl_sexo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_filme_ator" ADD CONSTRAINT "tbl_filme_ator_id_filme_fkey" FOREIGN KEY ("id_filme") REFERENCES "tbl_filme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_filme_ator" ADD CONSTRAINT "tbl_filme_ator_id_ator_fkey" FOREIGN KEY ("id_ator") REFERENCES "tbl_ator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_diretor_nacionalidade" ADD CONSTRAINT "tbl_diretor_nacionalidade_id_diretor_fkey" FOREIGN KEY ("id_diretor") REFERENCES "tbl_diretor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_diretor_nacionalidade" ADD CONSTRAINT "tbl_diretor_nacionalidade_id_nacionalidade_fkey" FOREIGN KEY ("id_nacionalidade") REFERENCES "tbl_nacionalidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_ator_nacionalidade" ADD CONSTRAINT "tbl_ator_nacionalidade_id_ator_fkey" FOREIGN KEY ("id_ator") REFERENCES "tbl_ator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_ator_nacionalidade" ADD CONSTRAINT "tbl_ator_nacionalidade_id_nacionalidade_fkey" FOREIGN KEY ("id_nacionalidade") REFERENCES "tbl_nacionalidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
