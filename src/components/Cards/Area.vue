<script setup>
import Editar_area from '../Modals/Editar_area.vue';

</script>

<template>
  <div class="m-4">
     <div class="card bg-base-100 shadow-xl">
        <div class="card-body text-center">
         <input type="text" placeholder="Type here" class="input input-sm w-full max-w-xs font-bold text-center mx-auto mb-2" />
         <img src="https://app.naval.app.br/img/help9.7f74691d.png" width="42" class="mx-auto" />
            <!-- Modal Start -->
            <label for="my-modal" class="btn">Botao editar</label>
            <!-- Modal Content Start -->
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
               <div class="modal-box">
                  <Editar_area />
               </div>
            </div>
            <!-- Modal Content End -->
            <!-- Modal End -->
        </div>
     </div>
  </div>
</template>