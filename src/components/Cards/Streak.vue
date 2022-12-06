<script setup>
import Editar_streak from '../Modals/Editar_streak.vue';

</script>

<template>
    <div class="m-4">
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <p>Box Streak</p>
            <!-- Modal Start -->
            <label for="my-modal-2" class="btn">Botao editar</label>
            <!-- Modal Content Start -->
            <input type="checkbox" id="my-modal-2" class="modal-toggle" />
            <div class="modal">
               <div class="modal-box">
                  <Editar_streak />
               </div>
            </div>
            <!-- Modal Content End -->
            <!-- Modal End -->
        </div>
      </div>
    </div>
    </template>