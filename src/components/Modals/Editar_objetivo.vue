<template>
    <h2>Editar Objetivo</h2>
                 <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                 <select class="select select-bordered w-full max-w-xs">
  <option disabled selected>Who shot first?</option>
  <option>Han Solo</option>
  <option>Greedo</option>
</select>
                 <textarea class="textarea textarea-bordered" placeholder="Bio"></textarea>
    <div class="modal-action">
                     <label for="my-modal-2" class="btn">Salvar objetivo</label>
                     <label for="my-modal-2" class="btn btn-outline btn-error">Deletar objetivo</label> 
    </div>
</template>