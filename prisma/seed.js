import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

async function main() {
  // 1. SEXO
  const [masculino, feminino] = await Promise.all([
    prisma.tbl_sexo.create({ data: { sigla: 'M', nome: 'Masculino' } }),
    prisma.tbl_sexo.create({ data: { sigla: 'F', nome: 'Feminino' } }),
  ]);

  // 2. NACIONALIDADES
  const [brasileira, americana, britanica] = await Promise.all([
    prisma.tbl_nacionalidade.create({ data: { nome: 'Brasileira' } }),
    prisma.tbl_nacionalidade.create({ data: { nome: 'Americana' } }),
    prisma.tbl_nacionalidade.create({ data: { nome: 'Britânica' } }),
  ]);

  // 3. CLASSIFICAÇÕES
  const [livre, maiores12] = await Promise.all([
    prisma.tbl_classificacao.create({
      data: { sigla: 'L', nome: 'Livre', descricao: 'Para todos os públicos' },
    }),
    prisma.tbl_classificacao.create({
      data: { sigla: '12', nome: '12 anos', descricao: 'Não recomendado para menores de 12 anos' },
    }),
  ]);

  // 4. GÊNEROS
  const [acao, drama, comedia] = await Promise.all([
    prisma.tbl_genero.create({ data: { nome: 'Ação' } }),
    prisma.tbl_genero.create({ data: { nome: 'Drama' } }),
    prisma.tbl_genero.create({ data: { nome: 'Comédia' } }),
  ]);

  // 5. DIRETORES
  const [diretor1, diretor2] = await Promise.all([
    prisma.tbl_diretor.create({
      data: {
        nome: 'Carlos Mendes',
        nome_artistico: 'C. Mendes',
        data_nascimento: new Date('1965-03-15'),
        biografia: 'Conhecido por filmes dramáticos.',
        foto: 'carlos.jpg',
        id_sexo: masculino.id,
        nacionalidades: { create: { id_nacionalidade: brasileira.id } },
      },
    }),
    prisma.tbl_diretor.create({
      data: {
        nome: 'Emma Thompson',
        nome_artistico: 'E. Thompson',
        data_nascimento: new Date('1970-09-22'),
        biografia: 'Diretora britânica de renome.',
        foto: 'emma.jpg',
        id_sexo: feminino.id,
        nacionalidades: { create: { id_nacionalidade: britanica.id } },
      },
    }),
  ]);

  // 6. ATORES
  const [ator1, ator2] = await Promise.all([
    prisma.tbl_ator.create({
      data: {
        nome: 'João Pedro',
        nome_artistico: 'J. Pedro',
        data_nascimento: new Date('1990-11-10'),
        biografia: 'Ator revelação.',
        foto: 'joao.jpg',
        id_sexo: masculino.id,
        nacionalidades: { create: { id_nacionalidade: brasileira.id } },
      },
    }),
    prisma.tbl_ator.create({
      data: {
        nome: 'Anna Taylor',
        nome_artistico: 'A. Taylor',
        data_nascimento: new Date('1988-07-20'),
        biografia: 'Atriz premiada internacionalmente.',
        foto: 'anna.jpg',
        id_sexo: feminino.id,
        nacionalidades: { create: { id_nacionalidade: americana.id } },
      },
    }),
  ]);

  // 7. FILMES
  await prisma.tbl_filme.createMany({
    data: [
      {
        nome: 'Missão Explosiva',
        nome_original: 'Explosive Mission',
        data_lancamento: new Date('2022-05-01'),
        duracao: '130min',
        sinopse: 'Um agente secreto em uma missão perigosa.',
        foto_capa: 'missao.jpg',
        id_classificacao: maiores12.id,
      },
      {
        nome: 'Coração Valente',
        nome_original: 'Brave Heart',
        data_lancamento: new Date('2021-03-12'),
        duracao: '110min',
        sinopse: 'Drama histórico de guerra.',
        foto_capa: 'coracao.jpg',
        id_classificacao: livre.id,
      },
    ],
  });

  // Pegando os filmes inseridos
  const [filme1, filme2] = await prisma.tbl_filme.findMany({ take: 2 });

  // 8. RELACIONAMENTOS
  await Promise.all([
    // gêneros
    prisma.tbl_filme_genero.createMany({
      data: [
        { id_filme: filme1.id, id_genero: acao.id },
        { id_filme: filme2.id, id_genero: drama.id },
        { id_filme: filme2.id, id_genero: comedia.id },
      ],
    }),
    // diretores
    prisma.tbl_filme_diretor.createMany({
      data: [
        { id_filme: filme1.id, id_diretor: diretor1.id },
        { id_filme: filme2.id, id_diretor: diretor2.id },
      ],
    }),
    // atores
    prisma.tbl_filme_ator.createMany({
      data: [
        { id_filme: filme1.id, id_ator: ator1.id },
        { id_filme: filme2.id, id_ator: ator2.id },
      ],
    }),
  ]);

  console.log('✅ Dados inseridos com sucesso!');
}

main()
  .catch((e) => {
    console.error('Erro ao executar seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
