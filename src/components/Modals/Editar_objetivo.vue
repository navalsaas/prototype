<template>
  <h2>Editar Objetivo</h2>
  <div class="margin-for-input">
    <label class="label">
      <span class="label-text">Label aqui:</span>
    </label>
    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
    <div class="margin-for-input"></div>
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
    <textarea class="textarea textarea-bordered w-full" placeholder="Bio"></textarea>
  </div>
  <div class="modal-action">
    <label for="my-modal-2" class="btn">Editar objetivo</label>
    <label for="my-modal-2" class="btn btn-outline btn-error">Deletar objetivo</label>
  </div>
</template>