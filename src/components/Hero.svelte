<script>
  import maquina from "$lib/images/bg3.webp";

  import { clients } from "$lib/images/clients/clients.js";
  import client4 from "$lib/images/4.jpeg";
</script>

<section class="relative pt-10 ml-auto">
  <div class="lg:w-2/3 text-center mx-auto">
    <div class="md:flex">
      <img class="mx-auto w-96 rounded-full" src={maquina} alt="maquina" />
      <div class="md:block">
        <h1
          class="text-black dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl m-6"
        >
          Programación y <span class="text-red-600">bordados.</span>
        </h1>
        <p
          class="text-lg mt-8 text-gray-700 dark:text-gray-300 max-w-xl mx-auto"
        >
          Brindamos una calidad excepcional en servicios de digitalización de
          bordados. Nos enorgullecemos de ofrecer un alto nivel de
          profesionalismo, garantizando un cumplimiento riguroso de las fechas
          de entrega. Siempre nos esforzamos por adaptarnos a las necesidades
          individuales de nuestros clientes, priorizando su satisfacción en todo
          momento.
        </p>
      </div>
    </div>
    <div
      class="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between"
    >
      <div class="text-left">
        <h6 class="text-lg font-semibold text-gray-700 dark:text-white">
          Precios competitivos.
        </h6>
        <p class="mt-2 text-gray-500">Some text here</p>
      </div>
      <div class="text-left">
        <h6 class="text-lg font-semibold text-gray-700 dark:text-white">
          La mejor calidad de la ciudad
        </h6>
        <p class="mt-2 text-gray-500">Some text here</p>
      </div>
      <div class="text-left">
        <h6 class="text-lg font-semibold text-gray-700 dark:text-white">
          Puntualidad
        </h6>
        <p class="mt-2 text-gray-500">Calidad y cumplimiento</p>
      </div>
    </div>
  </div>
  
  <div class="pt-10 mx-auto text-center lg:px-40">
    <h1 class="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
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
  <div class="mt-8 border-y border-gray-100 dark:border-gray-800"></div>
</section>
