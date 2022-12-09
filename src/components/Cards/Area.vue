<script setup>
   import Editar_area from '../Modals/Editar_area.vue';
</script>

<template>
   <div class="m-4">
      <div class="card bg-base-100 shadow-xl">
         <div class="card-body">
            <h3><span class="badge badge-lg badge-primary">Area da Vida</span></h3>
            <div class="margin-for-input">
               <img src="https://app.naval.app.br/img/help9.7f74691d.png" width="42" class="mx-auto" />
            </div>
            <div class="margin-for-input text-for-comments">
               <p>Texto da area da vida...</p>
            </div>
            <!-- Modal Start -->
            <label for="my-modal-2" class="btn btn-xs btn-circle absolute right-2 top-2">🖊️</label>
            <!-- Modal Content Start -->
            <input type="checkbox" id="my-modal-2" class="modal-toggle" />
            <div class="modal">
               <div class="modal-box relative">
                  <label for="my-modal-2" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                  <Editar_area />
               </div>
            </div>
            <!-- Modal Content End -->
            <!-- Modal End -->
         </div>
      </div>
   </div>
</template>