<template>
    <div class="w-full max-w-full item-center flex-row flex-grow-0 bg-white space-y-4 min-h-screen">
      <Header /> 
      <div class="flex justify-center items-center">
        <Roommates />
      </div>
    </div>
  </template>
  
  <script>
  import Roommates from '/src/components/Roommates.vue';
  import Header from '/src/components/Header.vue';
  
  export default {
    components: {
      Header,
      Roommates,
    },
  };
  </script>
  
  