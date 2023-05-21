<template>
    <div class = "w-full">
        <div class="flex place-items-center shadow border border-slate-50 bg-white p-2 rounded-md w-full h-20">
                <p class="text-lg font-bold">{{ title }}</p>
        </div>
        <div>
            <div class="flex justify-center my-4">
                <div class="border bg-zinc-100 rounded py-4 px-4 w-full max-w-md"></div>
                <button class="mx-2 font-bold text-zinc-500 hover:scale-110 text-sm" @click="showFilters = !showFilters">篩選</button>
            </div>
        </div>
        <div class="flex justify-center my-4" v-if="showFilters">
                <div class="flex flex-wrap place-items-center pr-32">
                    <p class="text-xs font-bold flex-col">生理性別</p>
                    <div class="my-5"></div>
                    <div class="w-full"></div>
                    <div class="my-0"></div>
                    <button @click="filterByGender('男')" 
                    :style="{ backgroundColor: genderFilter === '男' ? '#7dd3fc' : '#f3f4f6' }"
                    class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0 focus:bg-sky-300">#男性</button>
                    <span class="mx-1"></span> 
                    <button @click="filterByGender('女')" 
                    :style="{ backgroundColor: genderFilter === '女' ? '#7dd3fc' : '#f3f4f6' }"
                    class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0 focus:bg-sky-300">#女性</button>
                    <div class="w-full"></div>
                    <div class="flex flex-wrap place-items-center">
                    <p class="text-xs font-bold flex-col">衛生</p>
                    <div class="my-5"></div>
                    <div class="w-full"></div>
                    <div class="my-0"></div>
                    <button @click="filterByHygiene('愛乾淨')" 
                    :style="{ backgroundColor: hygieneFilter === '愛乾淨' ? '#fcd34d' : '#f3f4f6' }"
                    class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0 focus:bg-amber-300">#愛乾淨</button>
                    <span class="mx-1"></span> 
                    <button @click="filterByHygiene('不髒有點亂')" 
                    :style="{ backgroundColor: hygieneFilter === '不髒有點亂' ? '#fcd34d' : '#f3f4f6' }"
                    class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0 focus:bg-amber-300">#不髒有點亂</button>
                    <span class="mx-1"></span> 
                    <button @click="filterByHygiene('衛生沒要求')" 
                    :style="{ backgroundColor: hygieneFilter === '衛生沒要求' ? '#fcd34d' : '#f3f4f6' }"
                    class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0 focus:bg-amber-300">#衛生沒要求</button>
                  </div>
                </div>
            
        </div>

        <div class="flex justify-center">
                <div class="flex flex-wrap w-full max-w-4xl justify-center gap-4">
                    <Person v-for="(person, index) in (isFiltered ? filteredPeople : people)" :key="index" :person="person" />
                </div>
        </div>
    </div>
</template>

  
  
  <script>
import Person from './Person.vue';


  export default {
    data() {
    return {
        title: '政大室友媒合',
        people: [
            { name: '詹', department: '大四', hygiene: '愛乾淨', air: '常開冷氣', sleep: '不會打呼', distance: '3', gender: "男", team: 0 },
            { name: '莉', department: '大二', hygiene: '不髒有點亂', air: '常開冷氣', sleep: '會打呼',  distance: '10', gender: "女", team: 0},
            { name: '哈', department: '大三', hygiene: '衛生沒要求', air: '不愛開冷氣', sleep: '不會打呼', distance: '5', gender: "男", team: 0},
            { name: '石', department: '大四', hygiene: '愛乾淨', air: '常開冷氣', sleep: '不會打呼', distance: '3', gender: "男", team: 0 },
            { name: '天', department: '大三', hygiene: '不髒有點亂', air: '常開冷氣', sleep: '會打呼',  distance: '10', gender: "女", team: 0},
            { name: '路', department: '大三', hygiene: '衛生沒要求', air: '不愛開冷氣', sleep: '不會打呼', distance: '5', gender: "男", team: 0},
            { name: '湯', department: '大四', hygiene: '愛乾淨', air: '常開冷氣', sleep: '不會打呼', distance: '3', gender: "男", team: 0 },
            { name: '鄧', department: '大二', hygiene: '不髒有點亂', air: '常開冷氣', sleep: '會打呼',  distance: '10', gender: "女", team: 0},
            { name: '珍', department: '大三', hygiene: '衛生沒要求', air: '不愛開冷氣', sleep: '不會打呼', distance: '5', gender: "男", team: 0},
            { name: '衛', department: '大四', hygiene: '愛乾淨', air: '常開冷氣', sleep: '不會打呼', distance: '3', gender: "男", team: 0 },
            { name: '妙', department: '大二', hygiene: '不髒有點亂', air: '常開冷氣', sleep: '會打呼',  distance: '10', gender: "女", team: 0},
            { name: '榮', department: '大三', hygiene: '衛生沒要求', air: '不愛開冷氣', sleep: '不會打呼', distance: '5', gender: "男", team: 0},
        ],
        filteredPeople: [],
        showFilters: false,
        isFiltered: false,
        genderFilter: false,
        hygieneFilter: false,
    };
  },
  computed: {
    filteredPeople() {
      let filteredPeople = this.people;

      if (this.genderFilter) {
        filteredPeople = filteredPeople.filter(person => person.gender === this.genderFilter);
      }
      if (this.hygieneFilter) {
        filteredPeople = filteredPeople.filter(person => person.hygiene === this.hygieneFilter);
      }

      return filteredPeople;
    },
    isFiltered() {
        return this.genderFilter || this.hygieneFilter;
    }
  },
  methods: {
    filterByGender(gender) {
      if (this.genderFilter === gender) {
        this.genderFilter = null;
      } else {
        this.genderFilter = gender;
      }
    },
    filterByHygiene(hygiene) {
      if (this.hygieneFilter === hygiene) {
        this.hygieneFilter = null;
        
      } else {
        this.hygieneFilter = hygiene;
        
      }
    },
  },
  components: {Person},
};
</script>
  

