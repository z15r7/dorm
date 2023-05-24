<template>
    <button @click="tagFilterMethod(tagName)" 
    :style="{ backgroundColor: tagFilter === `${tagName}` ? `${tagEnableColor}` : `${tagDisableColor}` }"
    class="mr-2 text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0 ">{{ `#${tagName}` }}</button>
</template>


<script>
  export default {
    data() {
      return {
      };
    },
    computed: {
    },
    props: ['tagName', 'tagFilter', 'tagFilterMethod', 'tagEnableColor', 'tagDisableColor'],
    methods: {
    },
    components: {
    },
};
</script>
