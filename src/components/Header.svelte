<script>
  import Container from "./container.svelte";
  import logomain from "$lib/images/logomain.webp";
</script>

<Container>
  <header class="flex flex-wrap items-center justify-between mx-auto p-4">
   
    <img class="h-12" src={logomain} alt="logoMain">
    <nav class="">
      <ul class="flex gap-5">
        <li><a class="hover:text-red-500 font-medium" href="#contact">Contáctanos</a></li>
      </ul>
    </nav>
  </header>
</Container>

<style>
</style>
