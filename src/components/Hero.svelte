<script>
  import maquina from "$lib/images/bg3.webp";

  import { clients } from "$lib/images/clients/clients.js";
</script>

<section class="relative pt-10 ml-auto">
  <div class=" text-center mx-auto">
    <div class="md:flex">
      <img
        class="mx-auto w-96 rounded-xl hidden md:block"
        src={maquina}
        alt="maquina"
      />
      <div class="md:block">
        <h1
          class="text-black dark:text-white font-bold text-4xl md:text-5xl xl:text-6xl"
        >
          Programación y bordados en <br /> <span class="text-red-600">San Mateo, Soacha</span>
        </h1>
        <p
          class="text-xl mt-8 text-gray-700 dark:text-gray-300 max-w-xl mx-auto"
        >
          Brindamos una calidad excepcional en servicios de digitalización y
          bordados de tus ideas o logos. Bordamos tus prendas con los más altos
          estándares de calidad. <br /> <br />Estamos localizados en el barrio San Mateo
          en el municipio de Soacha, Cundinamarca.
        </p>
      </div>
    </div>
    <div
      class="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between"
    >
      <div class="text-left">
        <h6 class="text-lg font-semibold text-gray-700 dark:text-white">
          Bordados de Calidad.
        </h6>
        <p class="mt-2 text-gray-500">Cumplimiento en la entrega.</p>
      </div>
      <div class="text-left">
        <h6 class="text-lg font-semibold text-gray-700 dark:text-white">
          Bordamos tus ideas.
        </h6>
        <p class="mt-2 text-gray-500">Bordados corporativos</p>
      </div>
      <div class="text-left">
        <h6 class="text-lg font-semibold text-gray-700 dark:text-white">
          Programacion de bordados
        </h6>
        <p class="mt-2 text-gray-500">Diseñamos tus ideas</p>
      </div>
    </div>
  </div>

  <div class="pt-10 mx-auto text-center lg:px-40">
    <h1
      class="sm:text-4xl text-3xl font-medium title-font mb-4 dark:text-white"
    >
      Nuestros Clientes
    </h1>
  </div>
  <div class="mt-6 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6">
    {#each clients as client}
      <div class="p-4 transition duration-400 hover:scale-110">
        <img
          src={client.name}
          class="h-12 w-auto mx-auto"
          loading="lazy"
          alt={client.alt}
        />
      </div>
    {/each}
  </div>
  <div class="mt-8 border-y border-gray-100 dark:border-gray-800" />
</section>
