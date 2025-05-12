import { createFilme, updateFilme, getClassificacoes } from "../api.js";
import { renderFilmes } from "../ui.js";

export async function openFilmeModal(filme = null) {
  const classificacoes = await getClassificacoes();

  const modalRoot = document.getElementById("modalRoot");
  modalRoot.innerHTML = `
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded p-6 w-full max-w-md relative">
        <h2 class="text-xl font-bold mb-4">${
          filme ? "Editar Filme" : "Novo Filme"
        }</h2>
        <form id="filmeForm" class="space-y-4">
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
          <textarea name="sinopse" placeholder="Sinopse" class="border p-2 w-full rounded" required>${
            filme?.sinopse || ""
          }</textarea>

          <select name="id_classificacao" class="border p-2 w-full rounded" required>
            <option value="">Selecione a Classificação</option>
            ${classificacoes
              .map(
                (c) => `
              <option value="${c.id}" ${
                  filme?.id_classificacao === c.id ? "selected" : ""
                }>${c.descricao}</option>
            `
              )
              .join("")}
          </select>

          <input type="file" name="foto_capa" accept="image/*" class="border p-2 w-full rounded" id="fotoInput" />
          <img id="previewImage" src="${
            filme?.foto_capa || ""
          }" class="w-32 mt-2 ${filme?.foto_capa ? "" : "hidden"}" />

          <div class="flex justify-end gap-2 mt-4">
            <button type="button" class="bg-gray-300 px-4 py-2 rounded" onclick="document.getElementById('modalRoot').innerHTML = ''">Cancelar</button>
            <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">${
              filme ? "Atualizar" : "Salvar"
            }</button>
          </div>
        </form>
      </div>
    </div>
  `;

  // Preview da imagem
  document.getElementById("fotoInput").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        document.getElementById("previewImage").src = e.target.result;
        document.getElementById("previewImage").classList.remove("hidden");
      };
      reader.readAsDataURL(file);
    }
  });

  // Submit do formulário
  document.getElementById("filmeForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Simulação simples de upload
    if (
      formData.get("foto_capa") instanceof File &&
      formData.get("foto_capa").name !== ""
    ) {
      data.foto_capa = document.getElementById("previewImage").src;
    } else {
      data.foto_capa = filme?.foto_capa || "";
    }
    data.data_lancamento = new Date(data.data_lancamento).toISOString(); // necessário
    if (data.data_relancamento) {
      data.data_relancamento = new Date(data.data_relancamento).toISOString();
    } else {
      data.data_relancamento = null; // valor opcional
    }
    data.id_classificacao = parseInt(data.id_classificacao);
    if (filme) {
      await updateFilme(filme.id, data);
    } else {
      await createFilme(data);
    }

    document.getElementById("modalRoot").innerHTML = "";
    renderFilmes();
  });
}
