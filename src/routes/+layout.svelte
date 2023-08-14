<script>
  import "../app.css";
  import Header from "../components/Header.svelte";
 
</script>

<svelte:head>
  <title>Bordacorzo - Bordados Computarizados</title>
  <meta name="description" content="Bordacorzo" />
</svelte:head>

<main class="">
  <Header />
  <slot />
</main>

<style>
</style>
