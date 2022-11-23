<template>
  <div class="m-4">
     <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
         <h2 class="font-bold">Suas tarefas do dia</h2>
         <p>Hojé é quarta-feira, suas tarefas sao:</p>
            <div class="flex justify-between bg-slate-50 p-3">
               <div><span class="line-through">Meditar</span><br><span class="badge badge-xs">Saúde</span></div>
               <div><input type="checkbox" checked="checked" class="checkbox mt-3" /></div>
            </div>
            <div class="flex justify-between bg-slate-50 p-3">
               <div><span class="line-through">Meditar</span><br><span class="badge badge-xs">Saúde</span></div>
               <div><input type="checkbox" checked="checked" class="checkbox mt-3" /></div>
            </div>
            <div class="flex justify-between bg-slate-50 p-3">
               <div><span class="line-through">Meditar</span><br><span class="badge badge-xs">Saúde</span></div>
               <div><input type="checkbox" checked="checked" class="checkbox mt-3" /></div>
            </div>
            <p class="p-4 text-center text-success">Parabens! Voce completou suas tarefas do dia. Bom descanso.</p>
        </div>
     </div>
  </div>
</template>