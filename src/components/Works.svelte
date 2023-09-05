<script>
  import { works } from "../lib/images/works";
</script>

<section class="dark:text-gray-400">
  <div class="px-5 py-10 mx-auto text-center lg:px-40">
    <div class="mb-10">
      <h1
        class="sm:text-4xl text-3xl font-medium title-font mb-4 dark:text-white"
      >
        Nuestro Trabajo
      </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
        Los mejores bordados de la ciduad.
      </p>
    </div>
    <div class="flex flex-wrap justify-around bg-white rounded-3xl">
      {#each works as work}
      <div class="">
        <img alt="{work.title}" class="p-4" src={work.image} />
      </div>
      {/each}
    </div>
  </div>
</section>
