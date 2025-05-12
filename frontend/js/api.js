const API_URL = 'http://localhost:3000'; // ajuste se necessário

export async function fetchFilmes(filtros = {}) {
  const params = new URLSearchParams(filtros).toString();
  const res = await fetch(`${API_URL}/filmes?${params}`);
  return res.json();
}

export async function createFilme(data) {
  const res = await fetch(`${API_URL}/filmes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateFilme(id, data) {
  const res = await fetch(`${API_URL}/filmes/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function getClassificacoes() {
  const res = await fetch(`${API_URL}/classificacoes`);
  return res.json();
}


// Demais funções para editar, deletar, etc.
