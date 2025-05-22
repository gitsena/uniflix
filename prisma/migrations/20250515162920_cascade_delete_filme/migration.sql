-- DropForeignKey
ALTER TABLE "tbl_filme_ator" DROP CONSTRAINT "tbl_filme_ator_id_filme_fkey";

-- DropForeignKey
ALTER TABLE "tbl_filme_diretor" DROP CONSTRAINT "tbl_filme_diretor_id_filme_fkey";

-- DropForeignKey
ALTER TABLE "tbl_filme_genero" DROP CONSTRAINT "tbl_filme_genero_id_filme_fkey";

-- AlterTable
ALTER TABLE "tbl_filme" ALTER COLUMN "foto_capa" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "tbl_filme_genero" ADD CONSTRAINT "tbl_filme_genero_id_filme_fkey" FOREIGN KEY ("id_filme") REFERENCES "tbl_filme"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_filme_diretor" ADD CONSTRAINT "tbl_filme_diretor_id_filme_fkey" FOREIGN KEY ("id_filme") REFERENCES "tbl_filme"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_filme_ator" ADD CONSTRAINT "tbl_filme_ator_id_filme_fkey" FOREIGN KEY ("id_filme") REFERENCES "tbl_filme"("id") ON DELETE CASCADE ON UPDATE CASCADE;
