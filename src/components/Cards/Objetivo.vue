<script setup>
import Editar_objetivo from '../Modals/Editar_objetivo.vue';

</script>

<template>
  <div class="m-4">
     <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
         <p>Nome do objetivo</p>
          <p>Icone da area</p>
          <p>Comentario do objetivo</p>
            <!-- Modal Start -->
            <label for="my-modal-2" class="btn">Editar objetivo</label>
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