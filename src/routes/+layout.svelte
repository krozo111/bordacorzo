<script>
  import "../app.css";
  import Header from "../components/Header.svelte";
  import Hero from "../components/Hero.svelte";
</script>

<svelte:head>
  <title>Bordacorzo - Bordados Computarizados</title>
  <meta name="description" content="Bordacorzo" />
</svelte:head>

<main class="mx-12 my-6">
  <Header />
  <slot />
</main>

<style>
</style>
