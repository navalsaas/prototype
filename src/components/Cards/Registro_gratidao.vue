<script setup>
import Editar_gratidao from '../Modals/Editar_gratidao.vue';

</script>

<template>
  <div class="m-4">
     <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
           <p>Box Registro Gratidao</p>
            <!-- Modal Start -->
            <label for="my-modal" class="btn">Botao editar</label>
            <!-- Modal Content Start -->
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
               <div class="modal-box">
                  <Editar_gratidao />
               </div>
            </div>
            <!-- Modal Content End -->
            <!-- Modal End -->
        </div>
     </div>
  </div>
</template>