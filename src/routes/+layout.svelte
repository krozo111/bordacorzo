<script>
  import "../app.css";
  import Header from "../components/Header.svelte";
  import Container from "../components/container.svelte";
</script>

<svelte:head>
  <title>Bordacorzo - Bordados Computarizados</title>
  <meta name="description" content="Bordacorzo" />
</svelte:head>

<main class="">
  <Header />
  <Container>
    <slot />
  </Container>
</main>

<style>
</style>
