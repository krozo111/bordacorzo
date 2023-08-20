<script>
  import { works } from "../lib/images/works";
</script>

<section class="dark:text-gray-400">
  <div class="px-5 py-10 mx-auto text-center lg:px-40">
    <div class="mb-10">
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
        Nuestro Trabajo
      </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
        Los mejores bordados de la ciduad.
      </p>
    </div>
    <div class="flex flex-wrap justify-around">
      {#each works as work}
        <div class="p-4">
          <div class="flex relative">
            <img
              alt="Trabajos"
              class="absolute inset-0 w-full h-full object-cover object-center"
              src={work.image}
            />
            <div
              class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100"
            >
              <h2
                class="tracking-widest text-sm title-font font-medium text-green-700 mb-1"
              >
                {work.title}
              </h2>
              <p class="leading-relaxed">{work.description}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
