import { fetchFilmes, deleteFilme } from "./api.js";
import { openFilmeModal } from "./components/filmeModal.js";

export async function renderFilmes(filmes = []) {
  const container = document.getElementById("filmeList");
  container.innerHTML = "<p>Carregando...</p>";

  if (!filmes.length) {
    filmes = await fetchFilmes();
  }

  container.innerHTML = filmes
    .map(
      (filme, index) => `
    <div class="bg-white shadow p-4 rounded relative transition-opacity duration-300" data-filme-id="${filme.id}">
      <img src="${filme.foto_capa}" alt="${filme.nome}" class="w-full h-48 object-cover rounded" />
      <h3 class="text-xl font-semibold mt-2">${filme.nome}</h3>
      <p class="text-sm text-gray-600">${filme.sinopse}</p>
      <div class="mt-4 flex justify-between">
        <button class="bg-yellow-400 px-3 py-1 rounded text-sm editar-btn">Editar</button>
        <button class="bg-red-500 px-3 py-1 rounded text-sm text-white excluir-btn">Excluir</button>
      </div>

      <!-- Modal de confirmação de exclusão -->
      <div class="confirm-delete-modal hidden absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center z-10 transition-opacity duration-300">
        <div class="bg-white p-4 rounded shadow w-full max-w-xs">
          <p class="text-center font-semibold mb-4">Tem certeza que deseja excluir este filme?</p>
          <div class="flex justify-around">
            <button class="cancelar-exclusao bg-gray-300 px-4 py-1 rounded">Cancelar</button>
            <button class="confirmar-exclusao bg-red-600 text-white px-4 py-1 rounded">Sim, Excluir</button>
          </div>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  // Botões de editar
  document.querySelectorAll(".editar-btn").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      openFilmeModal(filmes[index]);
    });
  });

  // Botões de excluir
  document.querySelectorAll(".excluir-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest("[data-filme-id]");
      card.querySelector(".confirm-delete-modal").classList.remove("hidden");
    });
  });

  // Cancelar exclusão
  document.querySelectorAll(".cancelar-exclusao").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".confirm-delete-modal");
      modal.classList.add("hidden");
    });
  });

  // Confirmar exclusão
  document.querySelectorAll(".confirmar-exclusao").forEach((btn, index) => {
    btn.addEventListener("click", async () => {
      const card = btn.closest("[data-filme-id]");
      const modal = card.querySelector(".confirm-delete-modal");
      const filmeId = filmes[index].id;

      modal.classList.add("opacity-0"); // animação
      await new Promise((resolve) => setTimeout(resolve, 300)); // aguarda a transição

      const sucesso = await deleteFilme(filmeId);
      if (sucesso) {
        showToast("Filme excluído com sucesso!");
        renderFilmes();
      }
    });
  });
}

// Toast de sucesso
function showToast(message) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.className =
    "fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow z-50 animate-fade-in-out";

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
