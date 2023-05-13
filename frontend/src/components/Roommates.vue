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
            { name: '詹姆斯', department: '資工系大四', habits: '愛乾淨 常開冷氣 不會打呼', distance: '3', sex: "男", team: 0 },
            { name: '莉莉', department: '英文系大二', habits: '不髒有點亂 常開冷氣 會打呼',  distance: '10', sex: "女", team: 0},
            { name: '哈利', department: '數學系大三', habits: '衛生沒要求 不愛開冷氣 不會打呼', distance: '5', sex: "男", team: 0},
            { name: '石內普', department: '中文系大四', habits: '愛乾淨 常開冷氣 不會打呼', distance: '3', sex: "男", team: 0 },
            { name: '天狼星', department: '廣告系大三', habits: '不髒有點亂 常開冷氣 會打呼',  distance: '10', sex: "女", team: 0},
            { name: '路平', department: '心理系大三', habits: '衛生沒要求 不愛開冷氣 不會打呼', distance: '5', sex: "男", team: 0},
            { name: '湯姆', department: '外交系大四', habits: '愛乾淨 常開冷氣 不會打呼', distance: '3', sex: "男", team: 0 },
            { name: '鄧不利多', department: '法律系大二', habits: '不髒有點亂 常開冷氣 會打呼',  distance: '10', sex: "女", team: 0},
            { name: '珍妮', department: '地政系大三', habits: '衛生沒要求 不愛開冷氣 不會打呼', distance: '5', sex: "男", team: 0},
            { name: '衛斯理', department: '金融系大四', habits: '愛乾淨 常開冷氣 不會打呼', distance: '3', sex: "男", team: 0 },
            { name: '妙麗', department: '財管系大二', habits: '不髒有點亂 常開冷氣 會打呼',  distance: '10', sex: "女", team: 0},
            { name: '榮恩', department: '國貿系大三', habits: '衛生沒要求 不愛開冷氣 不會打呼', distance: '5', sex: "男", team: 0},
            
        ]
    }),
    components: {
        Person
    }
}
</script>

