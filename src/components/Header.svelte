<script>
  import Container from "./container.svelte";
  import logo from "$lib/images/logo-md.png";
</script>

<Container>
  <header class="flex flex-wrap items-center justify-between mx-auto p-4">
    <a class="flex items-center" href="/"
      ><img class="w-16" src={logo} alt="Logo" />
      <h1 class="font-extrabold text-2xl">Bordacorzo</h1>
    </a>
    <nav class="">
      <ul class="flex gap-5">
        <li><a href="/">Home</a></li>
        <li><a href="/">Acerca</a></li>
        <li><a href="/">Contacto</a></li>
      </ul>
    </nav>
  </header>
</Container>

<style>
</style>
