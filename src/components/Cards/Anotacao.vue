<script setup>
import Editar_anotacao from '../Modals/Editar_anotacao.vue';

</script>

<template>
  <div class="m-4">
     <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
         <p class="nome-anotacao">Nome da anotacao</p>
         <div class="margin-for-input">
         <p>Conteudo da anotacao</p>
      </div>
            <!-- Modal Start -->
            <label for="my-modal-2" class="btn btn-xs btn-circle absolute right-2 top-2">🖊️</label>
            <label for="my-modal-2" class="btn btn-xs btn-circle absolute right-2 top-2">🖊️</label>
            <!-- Modal Content Start -->
            <input type="checkbox" id="my-modal-2" class="modal-toggle" />
            <div class="modal">
               <div class="modal-box relative">
               <label for="my-modal-2" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                  <Editar_anotacao />
               </div>
            </div>
            <!-- Modal Content End -->
            <!-- Modal End -->
        </div>
     </div>
  </div>
</template>