import { getClassificacoes } from "../api.js";
import { renderFilmes } from "../ui.js";

export async function openFilmeModal(filme = null) {
  const classificacoes = await getClassificacoes();

  const modalRoot = document.getElementById("modalRoot");
  modalRoot.innerHTML = `
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded p-6 w-full max-w-2xl relative">
        <h2 class="text-xl font-bold mb-4">${
          filme ? "Editar Filme" : "Novo Filme"
        }</h2>
        <form id="filmeForm" class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input name="nome" placeholder="Nome" class="border p-2 w-full rounded" required value="${
            filme?.nome || ""
          }" />
          <input name="nome_original" placeholder="Nome Original" class="border p-2 w-full rounded" required value="${
            filme?.nome_original || ""
          }" />
          <input type="date" name="data_lancamento" class="border p-2 w-full rounded" required value="${
            filme?.data_lancamento?.split("T")[0] || ""
          }" />
          <input type="date" name="data_relancamento" class="border p-2 w-full rounded" value="${
            filme?.data_relancamento?.split("T")[0] || ""
          }" />
          <input name="duracao" placeholder="Duração (ex: 120min)" class="border p-2 w-full rounded" required value="${
            filme?.duracao || ""
          }" />
          <select name="id_classificacao" class="border p-2 w-full rounded" required>
            <option value="">Selecione a Classificação</option>
            ${classificacoes
              .map(
                (c) =>
                  `<option value="${c.id}" ${
                    filme?.id_classificacao === c.id ? "selected" : ""
                  }>${c.descricao}</option>`
              )
              .join("")}
          </select>
          <textarea name="sinopse" placeholder="Sinopse" class="border p-2 w-full rounded md:col-span-2" required>${
            filme?.sinopse || ""
          }</textarea>
            <div class="md:col-span-2 flex flex-col gap-2">
              <label class="block">
                <span class="block text-sm font-medium text-gray-700">Capa do Filme</span>
                <input type="file" name="foto_capa" accept="image/*" class="border p-2 w-full rounded" id="fotoInput" />
              </label>
            </div>
            <div class="md:col-span-1 flex justify-center items-start">
              <img 
  id="previewImage" 
  src="${filme?.foto_capa || ""}" 
  class="w-24 h-32 object-cover mt-2 rounded shadow ${
    filme?.foto_capa ? "" : "hidden"
  }"
/>

            </div>

          <div class="flex justify-end gap-2 mt-4 md:col-span-2">
            <button type="button" class="bg-gray-300 px-4 py-2 rounded" onclick="document.getElementById('modalRoot').innerHTML = ''">Cancelar</button>
            <button type="submit" id="submitBtn" class="bg-blue-600 text-white px-4 py-2 rounded">
              ${filme ? "Atualizar" : "Salvar"}
            </button>
          </div>

          <!-- Mini Modal de Confirmação -->
          <div id="confirmUpdateModal" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white p-6 rounded shadow-md w-full max-w-sm">
              <p class="text-lg font-semibold mb-4">Deseja seguir com a atualização do filme?</p>
              <div class="flex justify-end gap-4">
                <button id="cancelUpdateBtn" class="px-4 py-2 bg-gray-300 rounded">Cancelar</button>
                <button id="confirmUpdateBtn" class="px-4 py-2 bg-blue-600 text-white rounded">Sim, Atualizar</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  `;

  // Preview da imagem
  document.getElementById("fotoInput").addEventListener("change", (e) => {
    const file = e.target.files[0];
    const preview = document.getElementById("previewImage");

    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Por favor, selecione um arquivo de imagem válido.");
        e.target.value = "";
        preview.classList.add("hidden");
        preview.src = "";
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        preview.src = e.target.result;
        preview.classList.remove("hidden");
      };
      reader.readAsDataURL(file);
    } else {
      preview.classList.add("hidden");
      preview.src = "";
    }
  });

  // Submit do formulário
  document.getElementById("filmeForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const formElement = e.target;
    const formData = new FormData(formElement);

    const submitBtn = document.getElementById("submitBtn");
    submitBtn.disabled = true;
    submitBtn.innerText = "Salvando..."; // ou "Atualizando..." conforme o caso

    // 🔍 Validação visual
    let isValid = true;
    formElement.querySelectorAll("[required]").forEach((input) => {
      if (!input.value.trim()) {
        input.classList.add("border-red-500");
        isValid = false;
      } else {
        input.classList.remove("border-red-500");
      }
    });

    if (!isValid) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Ajustes de campos para manter compatibilidade com backend
    formData.set(
      "data_lancamento",
      new Date(formData.get("data_lancamento")).toISOString()
    );

    const dataRelanc = formData.get("data_relancamento");
    formData.set(
      "data_relancamento",
      dataRelanc ? new Date(dataRelanc).toISOString() : ""
    );

    formData.set(
      "id_classificacao",
      parseInt(formData.get("id_classificacao"))
    );

    // Se for edição (filme existe)
    if (filme) {
      document.getElementById("confirmUpdateModal").classList.remove("hidden");

      document.getElementById("cancelUpdateBtn").onclick = () => {
        document.getElementById("confirmUpdateModal").classList.add("hidden");
      };

      document.getElementById("confirmUpdateBtn").onclick = async () => {
        await fetch(`https://uniflix.onrender.com/filmes/${filme.id}`, {
          method: "PUT",
          body: formData
        });

        document.getElementById("confirmUpdateModal").classList.add("hidden");
        document.getElementById("modalRoot").innerHTML = "";
        renderFilmes();
      };
    } else {
      await fetch(`https://uniflix.onrender.com/filmes`, {
        method: "POST",
        body: formData
      });

      document.getElementById("modalRoot").innerHTML = "";
      renderFilmes();
    }
    submitBtn.disabled = false;
    submitBtn.innerText = filme ? "Atualizar" : "Salvar";
  });
}
