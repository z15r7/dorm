<template>
    <div class = "w-full">
        <div class="flex place-items-center shadow border border-slate-50 bg-white p-2 rounded-md w-full h-20">
                <p class="text-lg font-bold">{{ title }}</p>
        </div>
        <div>
            <div class="flex justify-center my-4">
                <div class="border bg-zinc-100 rounded py-4 px-4 w-full max-w-md"></div>
                <button class="mx-2 font-bold text-zinc-500 text-s" @click="showFilters = !showFilters">篩選</button>
            </div>
        </div>
        <div class="flex justify-center my-4" v-if="showFilters">
            <div class="flex flex-wrap place-items-center pr-64">
                <p class="text-xs font-bold flex-col">生理性別</p>
                <div class="my-5"></div>
                <div class="w-full"></div>
                <div class="my-0"></div>
                <button @click="filterByGender('男');isFiltered = true" class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0 focus:bg-sky-300">#男性</button>
                <span class="mx-2"></span> 
                <button @click="filterByGender('女');isFiltered = true" class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0 focus:bg-sky-300">#女性</button>
                
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
            { name: '詹', department: '大四', habits: '愛乾淨 常開冷氣 不會打呼', distance: '3', gender: "男", team: 0 },
            { name: '莉', department: '大二', habits: '不髒有點亂 常開冷氣 會打呼',  distance: '10', gender: "女", team: 0},
            { name: '哈', department: '大三', habits: '衛生沒要求 不愛開冷氣 不會打呼', distance: '5', gender: "男", team: 0},
            { name: '石', department: '大四', habits: '愛乾淨 常開冷氣 不會打呼', distance: '3', gender: "男", team: 0 },
            { name: '天', department: '大三', habits: '不髒有點亂 常開冷氣 會打呼',  distance: '10', gender: "男", team: 0},
            { name: '路', department: '大三', habits: '衛生沒要求 不愛開冷氣 不會打呼', distance: '5', gender: "男", team: 0},
            { name: '湯', department: '大四', habits: '愛乾淨 常開冷氣 不會打呼', distance: '3', gender: "男", team: 0 },
            { name: '鄧', department: '大二', habits: '不髒有點亂 常開冷氣 會打呼',  distance: '10', gender: "男", team: 0},
            { name: '珍', department: '大三', habits: '衛生沒要求 不愛開冷氣 不會打呼', distance: '5', gender: "女", team: 0},
            { name: '衛', department: '大四', habits: '愛乾淨 常開冷氣 不會打呼', distance: '3', gender: "男", team: 0 },
            { name: '妙', department: '大二', habits: '不髒有點亂 常開冷氣 會打呼',  distance: '10', gender: "女", team: 0},
            { name: '榮', department: '大三', habits: '衛生沒要求 不愛開冷氣 不會打呼', distance: '5', gender: "男", team: 0},
        ],
        filteredPeople: [],
        showFilters: false,
        isFiltered: false,
        };
       
    },

    methods: {
        filterByGender(gender) {
            this.filteredPeople = this.people.filter((person) => {
                return person.gender === gender;
            });
        },
    },
    components: { Person }
};
  </script>
  

