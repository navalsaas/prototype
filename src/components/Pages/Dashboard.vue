<script setup>
import Nova_area from '../Cards/Nova_area.vue';
import Area from '../Cards/Area.vue';
import Tarefas_dia from '../Cards/Tarefas_dia.vue';
import Citacao from '../Cards/Citacao.vue';

</script>

<template>
  <main id="content" class="flex-1 p-6 lg:px-8">
     <div class="max-w-7xl mx-auto">
        <h1 class="mb-2 text-3xl font-bold">Dashboard</h1>
        <p>Lorem ipsum...</p>
        <div class="px-4 py-6 sm:px-0">
         <div class="border-dotted border-2 border-indigo-600 flex flex-wrap overflow-hidden">
              <div class="bg-primary w-full overflow-hidden">
               <Nova_area />
              </div>
           </div>
           <div class="border-dotted border-2 border-indigo-600 flex flex-wrap overflow-hidden">
              <div class="bg-primary w-full overflow-hidden xl:w-1/3">
                 <Area />
              </div>
              <div class="bg-secondary w-full overflow-hidden xl:w-1/3">
                 <Area />
              </div>
              <div class="bg-primary w-full overflow-hidden xl:w-1/3">
                 <Area />
              </div>
              <div class="bg-secondary w-full overflow-hidden xl:w-1/3">
                 <Area />
              </div>
              <div class="bg-primary w-full overflow-hidden xl:w-1/3">
                 <Area />
              </div>
              <div class="bg-secondary w-full overflow-hidden xl:w-1/3">
                 <Area />
              </div>
           </div>
           <div class="space-divider"></div>
           <div class="border-dotted border-2 border-indigo-600 flex flex-wrap overflow-hidden">
              <div class="bg-primary w-full overflow-hidden xl:w-1/2">
                 <Tarefas_dia />
              </div>
              <div class="bg-secondary w-full overflow-hidden xl:w-1/2">
                 <Citacao />
              </div>
           </div>
        </div>
     </div>
  </main>
</template>