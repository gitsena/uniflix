import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  // 1. SEXO
  const [masculino, feminino] = await Promise.all([
    prisma.tbl_sexo.create({ data: { sigla: "M", nome: "Masculino" } }),
    prisma.tbl_sexo.create({ data: { sigla: "F", nome: "Feminino" } })
  ]);

  // 2. NACIONALIDADES
  const [brasileira, americana, britanica] = await Promise.all([
    prisma.tbl_nacionalidade.create({ data: { nome: "Brasileira" } }),
    prisma.tbl_nacionalidade.create({ data: { nome: "Americana" } }),
    prisma.tbl_nacionalidade.create({ data: { nome: "Britânica" } })
  ]);

  // 3. CLASSIFICAÇÕES
  const [livre, maiores10, maiores12, maiores14, maiores16, maiores18] =
    await Promise.all([
      prisma.tbl_classificacao.create({
        data: {
          sigla: "L",
          nome: "Livre",
          descricao: "Livre Para todos os públicos"
        }
      }),
      prisma.tbl_classificacao.create({
        data: {
          sigla: "10",
          nome: "10 anos",
          descricao: "Não recomendado para menores de 10 anos"
        }
      }),
      prisma.tbl_classificacao.create({
        data: {
          sigla: "12",
          nome: "12 anos",
          descricao: "Não recomendado para menores de 12 anos"
        }
      }),
      prisma.tbl_classificacao.create({
        data: {
          sigla: "14",
          nome: "14 anos",
          descricao: "Não recomendado para menores de 14 anos"
        }
      }),
      prisma.tbl_classificacao.create({
        data: {
          sigla: "16",
          nome: "16 anos",
          descricao: "Não recomendado para menores de 16 anos"
        }
      }),
      prisma.tbl_classificacao.create({
        data: {
          sigla: "18",
          nome: "18 anos",
          descricao: "Não recomendado para menores de 18 anos"
        }
      })
    ]);

  // 4. GÊNEROS
  const [
    acao,
    aventura,
    animacao,
    comedia,
    documentario,
    drama,
    familia,
    fantasia,
    ficcaoCientifica,
    musical,
    romance,
    suspense,
    terror,
    biografia,
    esporte
  ] = await Promise.all([
    prisma.tbl_genero.create({ data: { nome: "Ação" } }),
    prisma.tbl_genero.create({ data: { nome: "Aventura" } }),
    prisma.tbl_genero.create({ data: { nome: "Animação" } }),
    prisma.tbl_genero.create({ data: { nome: "Comédia" } }),
    prisma.tbl_genero.create({ data: { nome: "Documentário" } }),
    prisma.tbl_genero.create({ data: { nome: "Drama" } }),
    prisma.tbl_genero.create({ data: { nome: "Família" } }),
    prisma.tbl_genero.create({ data: { nome: "Fantasia" } }),
    prisma.tbl_genero.create({ data: { nome: "Ficção Científica" } }),
    prisma.tbl_genero.create({ data: { nome: "História" } }),
    prisma.tbl_genero.create({ data: { nome: "Musical" } }),
    prisma.tbl_genero.create({ data: { nome: "Romance" } }),
    prisma.tbl_genero.create({ data: { nome: "Suspense" } }),
    prisma.tbl_genero.create({ data: { nome: "Terror" } }),
    prisma.tbl_genero.create({ data: { nome: "Biografia" } }),
    prisma.tbl_genero.create({ data: { nome: "Esporte" } })
  ]);

  // 5. DIRETORES
  const [diretor1, diretor2] = await Promise.all([
    prisma.tbl_diretor.create({
      data: {
        nome: "Carlos Mendes",
        nome_artistico: "C. Mendes",
        data_nascimento: new Date("1965-03-15"),
        biografia: "Conhecido por filmes dramáticos.",
        foto: "carlos.jpg",
        id_sexo: masculino.id,
        nacionalidades: { create: { id_nacionalidade: brasileira.id } }
      }
    }),
    prisma.tbl_diretor.create({
      data: {
        nome: "Emma Thompson",
        nome_artistico: "E. Thompson",
        data_nascimento: new Date("1970-09-22"),
        biografia: "Diretora britânica de renome.",
        foto: "emma.jpg",
        id_sexo: feminino.id,
        nacionalidades: { create: { id_nacionalidade: britanica.id } }
      }
    })
  ]);

  // 6. ATORES
  const [ator1, ator2] = await Promise.all([
    prisma.tbl_ator.create({
      data: {
        nome: "João Pedro",
        nome_artistico: "J. Pedro",
        data_nascimento: new Date("1990-11-10"),
        biografia: "Ator revelação.",
        foto: "joao.jpg",
        id_sexo: masculino.id,
        nacionalidades: { create: { id_nacionalidade: brasileira.id } }
      }
    }),
    prisma.tbl_ator.create({
      data: {
        nome: "Anna Taylor",
        nome_artistico: "A. Taylor",
        data_nascimento: new Date("1988-07-20"),
        biografia: "Atriz premiada internacionalmente.",
        foto: "anna.jpg",
        id_sexo: feminino.id,
        nacionalidades: { create: { id_nacionalidade: americana.id } }
      }
    })
  ]);

  // 7. FILMES
  await prisma.tbl_filme.createMany({
    data: [
      {
        nome: "Mickey 17",
        nome_original: "Mickey 17",
        data_lancamento: new Date("2024-01-01"),
        duracao: "120min",
        sinopse: "sdam ma ,da",
        foto_capa: "mickey17.jpg",
        id_classificacao: maiores14.id
      },
      {
        nome: "Os Incríveis",
        nome_original: "The Incredibles",
        data_lancamento: new Date("2004-11-05"),
        duracao: "115min",
        sinopse: "Uma família incrível de super heróis da Pixar",
        foto_capa: "os_incriveis.jpg",
        id_classificacao: livre.id
      },
      {
        nome: "A Culpa é das Estrelas",
        nome_original: "The Fault in Our Stars",
        data_lancamento: new Date("2014-06-06"),
        duracao: "126min",
        sinopse: "Filme romance",
        foto_capa: "culpa_das_estrelas.webp",
        id_classificacao: maiores12.id
      },
      {
        nome: "Rei Leão",
        nome_original: "The Lion King",
        data_lancamento: new Date("1994-06-24"),
        duracao: "88min",
        sinopse: "Um rei leão simba.",
        foto_capa: "rei_leao.webp",
        id_classificacao: livre.id
      },
      {
        nome: "Matrix",
        nome_original: "The Matrix",
        data_lancamento: new Date("1999-03-31"),
        duracao: "136min",
        sinopse: "Um programador descobre a verdade sobre a realidade.",
        foto_capa: "matrix.jpg",
        id_classificacao: maiores16.id
      },
      {
        nome: "Coração Valente",
        nome_original: "Braveheart",
        data_lancamento: new Date("1995-05-24"),
        duracao: "177min",
        sinopse: "Drama histórico de guerra.",
        foto_capa: "coracao.jpg",
        id_classificacao: maiores16.id
      },
      {
        nome: "Harry Potter",
        nome_original: "Harry Potter and the Sorcerer's Stone",
        data_lancamento: new Date("2001-11-16"),
        duracao: "152min",
        sinopse: "Uma história de um bruxo e seus amigos",
        foto_capa: "harry_potter.jpg",
        id_classificacao: maiores10.id
      },
      {
        nome: "Carros",
        nome_original: "Cars",
        data_lancamento: new Date("2006-06-09"),
        duracao: "117min",
        sinopse: "Carros de corrida",
        foto_capa: "carros.jpg",
        id_classificacao: livre.id
      },
      {
        nome: "Carga Explosiva",
        nome_original: "Explosive Mission",
        data_lancamento: new Date("2022-05-01"),
        duracao: "130min",
        sinopse: "Um agente secreto em uma missão perigosa.",
        foto_capa: "foto_capa-1747242541685-22273362.jpg",
        id_classificacao: maiores12.id
      }
    ]
  });

  // Pegando os filmes inseridos
  const [filme1, filme2, filme3, filme4, filme5, filme6] =
    await prisma.tbl_filme.findMany({ take: 6 });

  // 8. RELACIONAMENTOS
  await Promise.all([
    // gêneros
    prisma.tbl_filme_genero.createMany({
      data: [
        { id_filme: filme1.id, id_genero: acao.id },
        { id_filme: filme1.id, id_genero: aventura.id },
        { id_filme: filme1.id, id_genero: ficcaoCientifica.id },
        { id_filme: filme2.id, id_genero: drama.id },
        { id_filme: filme2.id, id_genero: romance.id },
        { id_filme: filme2.id, id_genero: comedia.id },
        { id_filme: filme3.id, id_genero: terror.id },
        { id_filme: filme3.id, id_genero: suspense.id },
        { id_filme: filme4.id, id_genero: animacao.id },
        { id_filme: filme4.id, id_genero: familia.id },
        { id_filme: filme4.id, id_genero: fantasia.id },
        { id_filme: filme5.id, id_genero: documentario.id },
        { id_filme: filme5.id, id_genero: biografia.id },
        { id_filme: filme6.id, id_genero: musical.id },
        { id_filme: filme6.id, id_genero: esporte.id }
      ]
    }),
    // diretores
    prisma.tbl_filme_diretor.createMany({
      data: [
        { id_filme: filme1.id, id_diretor: diretor1.id },
        { id_filme: filme2.id, id_diretor: diretor2.id }
      ]
    }),
    // atores
    prisma.tbl_filme_ator.createMany({
      data: [
        { id_filme: filme1.id, id_ator: ator1.id },
        { id_filme: filme2.id, id_ator: ator2.id }
      ]
    })
  ]);

  console.log("✅ Dados inseridos com sucesso!");
}

main()
  .catch((e) => {
    console.error("Erro ao executar seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
