<script setup>
   import Adicionar_tarefa from '../Modals/Adicionar_tarefa.vue';
   import Adicionar_tarefa_mensal_anual from '../Modals/Adicionar_tarefa_mensal_anual.vue';
</script>

<template>
   <div class="m-4">
      <div class="card bg-base-100 shadow-xl">
         <div class="card-body">
            <!-- Modal Start -->
            <label for="my-modal" class="btn">Adicionar Tarefa Semanal</label>
            <label for="my-modal-x" class="btn">Adicionar Tarefa Anual ou Mensal</label>
            <!-- Modal Content Start -->
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
               <div class="modal-box relative">
                  <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                  <Adicionar_tarefa />
               </div>
            </div>
            <!-- Modal Content End -->
            <!-- Modal Content Start -->
            <input type="checkbox" id="my-modal-x" class="modal-toggle" />
            <div class="modal">
               <div class="modal-box relative">
                  <label for="my-modal-x" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                  <Adicionar_tarefa_mensal_anual />
               </div>
            </div>
            <!-- Modal Content End -->
            <!-- Modal End -->
         </div>
      </div>
   </div>
</template>