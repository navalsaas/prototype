<template>
    <h2>Adicionar Tarefa Mensal/Anual</h2>
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
      <p class="mt-2">Voce escolheu os dias:
      <div class="badge badge-primary mr-1">23/03</div>
      
      <div class="badge badge-primary mr-1">23/03</div>
      
      <div class="badge badge-primary mr-1">23/03</div>
      </p>
    </div>
    <div class="modal-action">
      <label for="my-modal" class="btn">Adicionar tarefa</label>
    </div>
  </template>