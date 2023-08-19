<script>
  import { works } from "../lib/images/works";
</script>

<section class="dark:text-gray-400">
  <div class="container px-5 py-10 mx-auto text-center lg:px-40">
    <div class="flex flex-col w-full mb-20">
      <p>Icon</p>
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
        Nuestro Trabajo
      </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
        Info about the job im doing
      </p>
    </div>
    <div class="sm:flex sm:flex-wrap -m-4">
      {#each works as work}
        <div class="w-1/3 p-4">
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
