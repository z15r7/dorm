<template>
      <div class="flex flex-wrap w-full max-w-4xl justify-center gap-4">
        <Person v-for="(person, index) in people" :key="index" :person="person"/>
      </div>
  </template>

<script>
import Person from '/src/components/Person.vue';

export default {
    data: () => ({
        people: [
            { name: '詹', department: '大四', habits: '愛乾淨 常開冷氣 不會打呼', distance: '3', sex: "男", team: 0 },
            { name: '莉', department: '大二', habits: '不髒有點亂 常開冷氣 會打呼',  distance: '10', sex: "女", team: 0},
            { name: '哈', department: '大三', habits: '衛生沒要求 不愛開冷氣 不會打呼', distance: '5', sex: "男", team: 0},
            { name: '石', department: '大四', habits: '愛乾淨 常開冷氣 不會打呼', distance: '3', sex: "男", team: 0 },
            { name: '天', department: '大三', habits: '不髒有點亂 常開冷氣 會打呼',  distance: '10', sex: "女", team: 0},
            { name: '路', department: '大三', habits: '衛生沒要求 不愛開冷氣 不會打呼', distance: '5', sex: "男", team: 0},
            { name: '湯', department: '大四', habits: '愛乾淨 常開冷氣 不會打呼', distance: '3', sex: "男", team: 0 },
            { name: '鄧', department: '大二', habits: '不髒有點亂 常開冷氣 會打呼',  distance: '10', sex: "女", team: 0},
            { name: '珍', department: '大三', habits: '衛生沒要求 不愛開冷氣 不會打呼', distance: '5', sex: "男", team: 0},
            { name: '衛', department: '大四', habits: '愛乾淨 常開冷氣 不會打呼', distance: '3', sex: "男", team: 0 },
            { name: '妙', department: '大二', habits: '不髒有點亂 常開冷氣 會打呼',  distance: '10', sex: "女", team: 0},
            { name: '榮', department: '大三', habits: '衛生沒要求 不愛開冷氣 不會打呼', distance: '5', sex: "男", team: 0},
            
        ]
    }),
    components: {
        Person
    }
}
</script>

