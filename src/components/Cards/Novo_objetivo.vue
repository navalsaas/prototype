<script setup>
   import Adicionar_objetivo from '../Modals/Adicionar_objetivo.vue';
</script>

<template>
   <div class="m-4">
      <div class="card bg-base-100 shadow-xl">
         <div class="card-body">
            <!-- Modal Start -->
            <label for="my-modal" class="btn">Adicionar objetivo</label>
            <!-- Modal Content Start -->
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
               <div class="modal-box relative">
                  <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                  <Adicionar_objetivo />
               </div>
            </div>
            <!-- Modal Content End -->
            <!-- Modal End -->
         </div>
      </div>
   </div>
</template>