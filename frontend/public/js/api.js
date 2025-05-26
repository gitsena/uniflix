//const API_URL = "http://localhost:3000"; // ajuste se necessário
//const API_URL = "https://uniflix.onrender.com"; // por exemplo
const API_URL = window.location.hostname.includes("localhost")
  ? "http://localhost:3000"
  : "https://uniflix.onrender.com";

export async function fetchFilmes(filtros = {}) {
  const queryParams = new URLSearchParams();

  if (filtros.nome) queryParams.append("nome", filtros.nome);
  if (filtros.id_genero) queryParams.append("id_genero", filtros.id_genero);
  if (filtros.id_classificacao)
    queryParams.append("id_classificacao", filtros.id_classificacao);

  const url = `${API_URL}/filmes?${queryParams.toString()}`;

  const resposta = await fetch(url);
  if (!resposta.ok) throw new Error("Erro ao buscar filmes");
  return resposta.json();
}

export async function createFilme(data) {
  const res = await fetch(`${API_URL}/filmes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function updateFilme(id, data) {
  const res = await fetch(`${API_URL}/filmes/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function deleteFilme(id) {
  const res = await fetch(`${API_URL}/filmes/${id}`, {
    method: "DELETE"
  });
  return res.ok;
}

export async function getClassificacoes() {
  const res = await fetch(`${API_URL}/api/classificacoes`);
  return res.json();
}

export async function fetchGeneros() {
  const res = await fetch(`${API_URL}/api/generos`);
  return res.json();
}

export async function fetchClassificacoes() {
  const res = await fetch(`${API_URL}/api/classificacoes`);
  return res.json();
}
