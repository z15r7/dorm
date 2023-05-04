<template>
  <div class="flex justify-center place-items-center shadow border border-slate-50 bg-white p-2 rounded-md">
    <div></div>
    <div class="w-full">
      <p class="text-xl font-bold text-left">{{ title }}</p>
    </div>
    <div class="flex items-center space-x-2">
      <button
        class="border rounded p-2"
        :class="{'bg-amber-400 text-white': selectedPage === 'house', 'bg-sky-300 text-white': selectedPage !== 'house'}"
        @click="handlePageSelected('house')"
      >
        找房子
      </button>
      <button
        class="border rounded p-2"
        :class="{'bg-amber-400 text-white': selectedPage === 'roommate', 'bg-sky-300 text-white': selectedPage !== 'roommate'}"
        @click="handlePageSelected('roommate')"
      >
        找室友
      </button>
      <button class="border rounded p-2 text-gray-600 hover:text-gray-900">
        購物車
      </button>
      <button class="border rounded p-2 text-gray-600 hover:text-gray-900">
        通知
      </button>
      <button class="border rounded p-2 text-gray-600 hover:text-gray-900">
        個人資訊
      </button>
    </div>
    <div></div>
  </div>
  <div class="flex flex-col sm:flex-row">
    <button
      class="w-full border border-slate-300 p-2"
      :class="[
        {'bg-amber-400 text-white': idx === selected && selectedPage === 'house'},
        {'bg-amber-400 text-white': idx === selected && selectedPage === 'roommate'},
        {'bg-sky-300 text-white': idx !== selected},
        {'rounded-t-xl sm:rounded-r-none sm:rounded-l-xl': idx === 0},
        {'rounded-b-xl sm:rounded-l-none sm:rounded-r-xl': idx === menuItem.length - 1}
      ]"
      @click="handleSelected(idx)"
      v-for="i, idx in menuItem"
      :key="i.name"
    >
      <p>{{ i.name }}</p>
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    selectedPage: 'house',
  }),
  props: ['title', 'selected', 'menuItem'],
  emits: ['handleSelected'],
  methods: {
    handleSelected: function (idx) {
      this.$emit('handleSelected', idx);
    },
    handlePageSelected: function (page) {
      this.selectedPage = page;
    },
  },
};
</script>
