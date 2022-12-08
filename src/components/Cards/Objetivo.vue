<script setup>
import Editar_objetivo from '../Modals/Editar_objetivo.vue';

</script>

<template>
  <div class="m-4">
     <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
         <h3>Nome do objetivo</h3>
         <div class="margin-for-input text-center">
            <div class="badge badge-primary mb-2">area da vida</div>
         <img src="https://app.naval.app.br/img/help9.7f74691d.png" width="42" class="mx-auto" />
          
      </div>
      <div class="margin-for-input">
          <p>Comentario do objetivo</p>
         </div>
            <!-- Modal Start -->
            <label for="my-modal-2" class="btn btn-xs btn-circle absolute right-2 top-2">🖊️</label>
            <!-- Modal Content Start -->
            <input type="checkbox" id="my-modal-2" class="modal-toggle" />
            <div class="modal">
               <div class="modal-box relative">
               <label for="my-modal-2" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                  <Editar_objetivo />
               </div>
            </div>
            <!-- Modal Content End -->
            <!-- Modal End -->
        </div>
     </div>
  </div>
</template>