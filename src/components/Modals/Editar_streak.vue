<template>
  <h2>Editar Streak</h2>
  <div class="margin-for-input">
    <label class="label">
      <span class="label-text">Label aqui:</span>
    </label>
    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
  </div>
  <div class="margin-for-input">
    <label class="label">
      <span class="label-text">Label aqui:</span>
    </label>
    <select class="select select-bordered w-full">
      <option disabled selected>Who shot first?</option>
      <option>Han Solo</option>
      <option>Greedo</option>
    </select>
  </div>
  <div class="margin-for-input">
    <label class="label">
      <span class="label-text">Label aqui:</span>
    </label>
    <input type="date" class="input input-bordered w-full" />
  </div>
  <div class="modal-action">
    <label for="my-modal-2" class="btn">Salvar streak</label>
    <label for="my-modal-2" class="btn btn-outline btn-error">Deletar streak</label>
  </div>
</template>