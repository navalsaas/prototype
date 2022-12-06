<script setup>
import Adicionar_streak from '../Modals/Adicionar_streak.vue';

</script>

<template>
  <div class="m-4">
     <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
           <p>Box Novo Streak</p>
            <!-- Modal Start -->
            <label for="my-modal" class="btn">Botao adicioar</label>
            <!-- Modal Content Start -->
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
               <div class="modal-box">
                  <Adicionar_streak />
               </div>
            </div>
            <!-- Modal Content End -->
            <!-- Modal End -->
        </div>
     </div>
  </div>
</template>