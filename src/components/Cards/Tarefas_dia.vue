<template>
  <div class="m-4">
     <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
         <h3>Suas tarefas do dia</h3>

         <div class="margin-for-input">
            <p>Hojé é quarta-feira, suas tarefas sao:</p>
         </div>
      
         <div class="margin-for-input">
               <div class="flex justify-between bg-slate-50 p-3 mb-1">
                  <div><span class="line-through">Meditar</span><br><span class="badge badge-xs">Saúde</span></div>
                  <div><input type="checkbox" checked="checked" class="checkbox mt-3" /></div>
               </div>
               <div class="flex justify-between bg-slate-50 p-3 mb-1">
                  <div><span class="line-through">Meditar</span><br><span class="badge badge-xs">Saúde</span></div>
                  <div><input type="checkbox" checked="checked" class="checkbox mt-3" /></div>
               </div>
               <div class="flex justify-between bg-slate-50 p-3 mb-1">
                  <div><span class="line-through">Meditar</span><br><span class="badge badge-xs">Saúde</span></div>
                  <div><input type="checkbox" checked="checked" class="checkbox mt-3" /></div>
               </div>
               <p class="p-4 text-center text-success parabens">Parabens! Voce completou suas tarefas do dia. Bom descanso.</p>
         </div>

        </div>
     </div>
  </div>
</template>