<script setup>
import Configuracao from '../Cards/Configuracao.vue';


</script>

<template>
  <main id="content" class="flex-1 p-6 lg:px-8">
     <div class="max-w-7xl mx-auto">
        <h1 class="mb-2 text-3xl font-bold">Configuracoes</h1>
        <p>Lorem ipsum...</p>
        <div class="px-4 py-6 sm:px-0">
           <div class="border-dotted border-2 border-indigo-600 flex flex-wrap overflow-hidden">
              <div class="bg-primary w-full overflow-hidden">
               <Configuracao />
              </div>
           </div>
        </div>
     </div>
  </main>
</template>