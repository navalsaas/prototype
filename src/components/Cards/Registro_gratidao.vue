<script setup>
import Editar_gratidao from '../Modals/Editar_gratidao.vue';

</script>

<template>
  <div class="m-4">
     <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
           <p>Veja sua gratidao do dia:</p>
           <p>Minha casa</p>
           <p>21/08/2022</p>
            <!-- Modal Start -->
            <label for="my-modal-2" class="btn">Editar gratidao desse dia</label>
            <!-- Modal Content Start -->
            <input type="checkbox" id="my-modal-2" class="modal-toggle" />
            <div class="modal">
               <div class="modal-box relative">
               <label for="my-modal-2" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                  <Editar_gratidao />
               </div>
            </div>
            <!-- Modal Content End -->
            <!-- Modal End -->
        </div>
     </div>
  </div>
</template>