<script setup>
   import Adicionar_gratidao from '../Modals/Adicionar_gratidao.vue';
</script>

<template>
   <div class="m-4">
      <div class="card bg-base-100 shadow-xl">
         <div class="card-body">
            <!-- Modal Start -->
            <label for="my-modal" class="btn">Adicionar gratidao</label>
            <!-- Modal Content Start -->
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
               <div class="modal-box relative">
                  <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                  <Adicionar_gratidao />
               </div>
            </div>
            <!-- Modal Content End -->
            <!-- Modal End -->
         </div>
      </div>
   </div>
</template>