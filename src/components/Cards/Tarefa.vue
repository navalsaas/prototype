<script setup>
  import Editar_tarefa from '../Modals/Editar_tarefa.vue';
</script>

<template>
  <div class="m-4">
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <div class="margin-for-input">
          <img src="https://app.naval.app.br/img/help9.7f74691d.png" width="42" class="" />
          <span class="nome-tarefa-cadastrada">Nome da tarefa</span>
          <br>
          <div class="badge badge-primary mr-1">area da vida</div>

          <div class="badge badge-primary">segunda, quarta, sexta</div>
        </div>
        <!-- Modal Start -->
        <label for="my-modal-2" class="btn btn-xs btn-circle absolute right-2 top-2">🖊️</label>
        <!-- Modal Content Start -->
        <input type="checkbox" id="my-modal-2" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box relative">
            <label for="my-modal-2" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <Editar_tarefa />
          </div>
        </div>
        <!-- Modal Content End -->
        <!-- Modal End -->
      </div>
    </div>
  </div>
</template>