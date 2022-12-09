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
      <div class="badge badge-info gap-2 mr-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      23 de jan
      </div>
      
      <div class="badge badge-info gap-2 mr-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      23 de jan
      </div>
      
      <div class="badge badge-info gap-2 mr-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      23 de jan
      </div>
      </p>
    </div>
    <div class="modal-action">
      <label for="my-modal" class="btn">Adicionar tarefa</label>
    </div>
  </template>