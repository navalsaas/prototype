<script setup>

</script>

<template>
    <div class="relative min-h-screen md:flex" data-dev-hint="">
       <input type="checkbox" id="menu-open" class="hidden" />
       <label for="menu-open" class="hidden absolute right-2 bottom-2 shadow-lg rounded-full p-2 bg-gray-100 text-gray-600 md:hidden" data-dev-hint="">
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
       </label>
       <header class="bg-white border-b-4 sticky top-0 bg-gray-100 text-gray-600 flex justify-between md:hidden" data-dev-hint="">
          <span class="block p-4 text-success font-bold whitespace-nowrap truncate">
          <span class="whitespace-nowrap truncate"><img class="w-24" src="./assets/logo-naval.png"></span>
          </span>
          <label for="menu-open" id="mobile-menu-button" class="p-2 focus:outline-none hover:bg-success hover:bg-secondary">
             <svg id="menu-open-icon" class="m-3 h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
             </svg>
             <svg id="menu-close-icon" class="m-3 h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
             </svg>
          </label>
       </header>
       <aside id="sidebar" class="bg-secondary border-r-4 text-gray-600 md:w-64 w-3/4 space-y-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto" data-dev-hint="">
          <div class="">
             <span class="bg-white p-4 text-white flex items-center space-x-2 px-4" title="Your App is cool">
                   <span class="truncate"><img class="w-28" src="./assets/logo-naval.png"></span>
             </span>
             <nav data-dev-hint="">
               <div class="border-solid border-2 border-indigo-600">
               <RouterLink :to="{ name: 'dashboard' }" class="space-x-2 px-4 py-4 flex items-center transition duration-200 hover:bg-primary hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                   </svg>
                  <span>Dashboard</span>
               </RouterLink>
               <RouterLink :to="{ name: 'tarefas' }" class="flex items-center space-x-2 py-4 px-4 transition duration-200 hover:bg-primary hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                   </svg>
                  <span>Tarefas do Dia</span>
               </RouterLink>
               <RouterLink :to="{ name: 'streaks' }" class="flex items-center space-x-2 py-4 px-4 transition duration-200 hover:bg-primary hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                   </svg>
                  <span>Streaks</span>
               </RouterLink>
               <RouterLink :to="{ name: 'objetivos' }" class="flex items-center space-x-2 py-4 px-4 transition duration-200 hover:bg-primary hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                   </svg> 
                  <span>Objetivos</span>
               </RouterLink>
               </div>
               <RouterLink :to="{ name: 'anotacoes' }" class="flex items-center space-x-2 py-4 px-4 transition duration-200 hover:bg-primary hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                   </svg> 
                  <span>Anotacoes</span>
               </RouterLink>
               <RouterLink :to="{ name: 'gratidao' }" class="flex items-center space-x-2 py-4 px-4 transition duration-200 hover:bg-primary hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                   </svg>
                  <span>Diario de Gratidao</span>
               </RouterLink>
               <hr>
               <span class="bg-accent flex items-center space-x-2 py-4 px-4 text-sm">bmorejonsilva@gmail.com</span>
               <RouterLink :to="{ name: 'configuracoes' }" class="flex items-center space-x-2 py-4 px-4 transition duration-200 hover:bg-primary hover:text-white">
                  <span>Minhas configurações</span>
               </RouterLink>
               <a src="#" class="flex items-center space-x-2 py-4 px-4 transition duration-200 hover:bg-primary hover:text-white">
                   Logout
               </a>
             </nav>
             <div class="text-sm text-center m-3">Versão beta 0.1</div>
          </div>
       </aside>
       <router-view></router-view>
    </div>
 </template>

<style scoped>
/* Menu CSS */
#sidebar {
    --tw-translate-x: -100%;
    z-index: 10;
    max-width: 20em;
    position: fixed;
}
#menu-close-icon {
    display: none;
}

#menu-open:checked ~ #sidebar {
    --tw-translate-x: 0;
}
#menu-open:checked ~ * #mobile-menu-button {
    background-color: green;
}
#menu-open:checked ~ * #menu-open-icon {
    display: none;
}
#menu-open:checked ~ * #menu-close-icon {
    display: block;
}

@media (min-width: 768px) {
    #sidebar {
        --tw-translate-x: 0;
        position: unset;
    }
}
header {
   z-index: 10;
}
</style>