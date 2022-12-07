<script setup>
import Editar_anotacao from '../Modals/Editar_anotacao.vue';

</script>

<template>
  <div class="m-4">
     <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
         <p>Nome da anotacao</p>
         <p>Conteudo da anotacao</p>
         <p>fav icon</p>
            <!-- Modal Start -->
            <label for="my-modal-2" class="btn btn-xs">Editar anotacao</label>
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