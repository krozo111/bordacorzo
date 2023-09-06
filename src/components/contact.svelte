<script>
  import Icon from "@iconify/svelte";
  const mapInfo =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d823.5942787766048!2d-74.20512754740047!3d4.580851929890924!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9fcfeb7ec303%3A0x94368817f2a178ec!2sBordacorzo!5e0!3m2!1sen!2sau!4v1626056909519!5m2!1sen!2sau";
</script>

<section id="contact" class="my-10">
  <div class="mt-8 border-y border-gray-100 dark:border-gray-800" />
  <h1 class=" text-4xl font-medium my-10 text-center">Contacto</h1>
  <div class="md:flex">
    <div class="md:grow">
      <div class="mb-10 flex justify-center">
        <span class="flex justify-center items-center mx-6">
          <Icon icon="streamline-emojis:telephone" width="36" />
        </span>
        <div class="text-center">
          <p class="text-lg dark:text-gray-500">Teléfono</p>
          <p class="text-xl select-none ">1 7078649</p>
        </div>
      </div>
      <div class="mb-10 flex justify-center">
        <span class="justify-center flex items-center mx-6">
          <Icon
            icon="streamline-emojis:open-mailbox-with-raised-flag"
            width="36"
          />
        </span>
        <div class="text-center">
          <p class="text-lg dark:text-gray-500">Email</p>
          <p class="text-xl select-none">bordacorzo@gmail.com</p>
        </div>
      </div>
      <div class="mb-10 flex justify-center">
        <span class="justify-center flex items-center mx-6">
          <Icon icon="twemoji:flag-colombia" width="36" />
        </span>
        <div class="text-center">
          <p class="text-lg dark:text-gray-500">Localización</p>
          <a
            href="https://goo.gl/maps/zRg4dHvZq5G7FM98A"
            class="text-xl hover:text-red-500"
            target="_blank"
            >Cra 4a Este 29 - 41 San Mateo, <br /> Soacha, Cundinamarca</a
          >
        </div>
      </div>
    </div>

    <iframe
      src={mapInfo}
      title="bordacorzo"
      class="rounded-xl mx-auto md:grow bg-white"
      loading="lazy"
    />
  </div>
</section>
