import { renderFilmes } from "./ui.js";
import { fetchGeneros, fetchClassificacoes } from "./api.js";
import { fetchFilmes } from "./api.js"; // certifique-se de importar isso no topo!

export async function setupFilters() {
  const filtersSection = document.getElementById("filters");

  const filterHTML = `
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <input id="filterNome" type="text" placeholder="Filtrar por nome do filme" class="input" />
      <select id="filterGenero" class="input">
        <option value="">Gênero</option>
      </select>
      <select id="filterClassificacao" class="input">
        <option value="">Classificação</option>
      </select>
    </div>
  `;

  filtersSection.innerHTML = filterHTML;

  // Buscar opções do backend
  const [generos, classificacoes] = await Promise.all([
    fetchGeneros(),
    fetchClassificacoes()
  ]);

  const generoSelect = document.getElementById("filterGenero");
  generos.forEach((g) => {
    const option = document.createElement("option");
    option.value = g.id;
    option.textContent = g.nome;
    generoSelect.appendChild(option);
  });

  const classificacaoSelect = document.getElementById("filterClassificacao");
  classificacoes.forEach((c) => {
    const option = document.createElement("option");
    option.value = c.id;
    option.textContent = `${c.sigla} - ${c.descricao}`;
    classificacaoSelect.appendChild(option);
  });

  document.querySelectorAll("#filters input, #filters select").forEach((el) => {
    el.addEventListener("change", async () => {
      const filtros = {
        nome: document.getElementById("filterNome").value,
        id_classificacao: document.getElementById("filterClassificacao").value,
        id_genero: document.getElementById("filterGenero").value
      };

      try {
        const filmes = await fetchFilmes(filtros);
        renderFilmes(filmes);
      } catch (erro) {
        console.error("Erro ao aplicar filtros:", erro);
      }
    });
  });

  const inputBusca = document.getElementById("filterNome");

  inputBusca.addEventListener("input", async (event) => {
    const termo = event.target.value;

    try {
      const filmes = await fetchFilmes({ nome: termo });
      console.log("Filmes filtrados por nome:", filmes);
      renderFilmes(filmes); // agora está definida corretamente
    } catch (erro) {
      console.error("Erro ao buscar filmes:", erro);
    }
  });
}
