<script setup>
   import Nova_gratidao from '../Cards/Nova_gratidao.vue';
   import Log_gratidao from '../Cards/Log_gratidao.vue';
   import Registro_gratidao from '../Cards/Registro_gratidao.vue';
</script>

<template>
   <main id="content" class="flex-1 p-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
         <h1 class="mb-2 text-3xl font-bold">Diario de Gratidao</h1>
         <p>Lorem ipsum...</p>
         <div class="px-4 py-6 sm:px-0">
            <div class="border-dotted border-2 border-indigo-600 flex flex-wrap overflow-hidden">
               <div class="bg-primary w-full overflow-hidden">
                  <Nova_gratidao />
               </div>
            </div>
            <div class="border-dotted border-2 border-indigo-600 flex flex-wrap overflow-hidden">
               <div class="bg-primary w-full overflow-hidden xl:w-1/2">
                  <Log_gratidao />
               </div>
               <div class="bg-secondary w-full overflow-hidden xl:w-1/2">
                  <Registro_gratidao />
               </div>
            </div>
         </div>
      </div>
   </main>
</template>