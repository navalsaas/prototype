<script setup>
import Editar_streak from '../Modals/Editar_streak.vue';

</script>

<template>
    <div class="m-4">
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <p>Nome do streak</p>
          <img src="https://app.naval.app.br/img/help9.7f74691d.png" width="42" class="mx-auto" />
          <p>voce esta a x dias nesse streak</p>
          <p>Data de inicio</p>
          <p>01/07/1987</p>
            <!-- Modal Start -->
            <label for="my-modal-2" class="btn btn-xs">Editar streak</label>
            <!-- Modal Content Start -->
            <input type="checkbox" id="my-modal-2" class="modal-toggle" />
            <div class="modal">
              <div class="modal-box relative">
               <label for="my-modal-2" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                  <Editar_streak />
               </div>
            </div>
            <!-- Modal Content End -->
            <!-- Modal End -->
        </div>
      </div>
    </div>
    </template>