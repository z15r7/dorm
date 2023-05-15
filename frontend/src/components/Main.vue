<template>
    <div class="w-full max-w-full item-center flex-row flex-grow-0 bg-white space-y-4 min-h-screen"> 
      <div class="flex justify-center items-center">
        <Header />
      </div>
    </div>
  </template>
  
  <script>
  import Header from '/src/components/Header.vue';
  
  export default {
    components: {
      Header,
    },
  };
  </script>
  
  