<template>
    <button @click="filterByHygiene('愛乾淨')" 
    :style="{ backgroundColor: hygieneFilter === '愛乾淨' ? '#fcd34d' : '#f3f4f6' }"
    class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0 ">#愛乾淨</button>
</template>


<script>
import Person from './Person.vue';


  export default {
    data() {
    return {
        title: '政大室友媒合',
        people: [
            { name: '詹', department: '大四', hygiene: '愛乾淨', air: '常開冷氣', sleep: '不會打呼', voice: '正常音量', distance: '3', gender: "男", team: 0 },
            { name: '莉', department: '大二', hygiene: '不髒有點亂', air: '常開冷氣', sleep: '會打呼', voice: '小聲說話', distance: '10', gender: "女", team: 0},
            { name: '哈', department: '大三', hygiene: '衛生沒要求', air: '不愛開冷氣', sleep: '不會打呼', voice: '無法避免的白噪音', distance: '5', gender: "男", team: 0},
            { name: '石', department: '大四', hygiene: '愛乾淨', air: '常開冷氣', sleep: '不會打呼', voice: '無法忍受聲音', distance: '3', gender: "男", team: 0 },
            { name: '天', department: '大三', hygiene: '不髒有點亂', air: '常開冷氣', sleep: '會打呼',voice: '無法避免的白噪音', distance: '10', gender: "女", team: 0},
            { name: '路', department: '大三', hygiene: '衛生沒要求', air: '不愛開冷氣', sleep: '不會打呼',voice: '無法忍受聲音', distance: '5', gender: "男", team: 0},
            { name: '湯', department: '大四', hygiene: '愛乾淨', air: '常開冷氣', sleep: '不會打呼', voice: '無法避免的白噪音', distance: '3', gender: "男", team: 0 },
            { name: '鄧', department: '大二', hygiene: '不髒有點亂', air: '常開冷氣', sleep: '會打呼',voice: '正常音量', distance: '10', gender: "女", team: 0},
            { name: '珍', department: '大三', hygiene: '衛生沒要求', air: '不愛開冷氣', sleep: '不會打呼',voice: '無法避免的白噪音', distance: '5', gender: "男", team: 0},
            { name: '衛', department: '大四', hygiene: '愛乾淨', air: '常開冷氣', sleep: '不會打呼',voice: '無法避免的白噪音', distance: '3', gender: "男", team: 0 },
            { name: '妙', department: '大二', hygiene: '不髒有點亂', air: '常開冷氣', sleep: '會打呼',voice: '無法避免的白噪音',  distance: '10', gender: "女", team: 0},
            { name: '榮', department: '大三', hygiene: '衛生沒要求', air: '不愛開冷氣', sleep: '不會打呼', voice: '小聲說話', distance: '5', gender: "男", team: 0},
        ],
        filteredPeople: [],
        showFilters: false,
        isFiltered: false,
        genderFilter: false,
        hygieneFilter: false,
        airFilter: false,
        voiceFilter: false,
        mouseFilter: false,
        keyboardFilter: false,
        phoneFilter: false,
        alarmFilter: false,
        lightFilter: false,
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
      if (this.airFilter) {
        filteredPeople = filteredPeople.filter(person => person.air === this.airFilter);
      }
      if (this.voiceFilter) {
        filteredPeople = filteredPeople.filter(person => person.voice === this.voiceFilter);
      }
      if (this.mouseFilter) {
        filteredPeople = filteredPeople.filter(person => person.voice === this.mouseFilter);
      }
      if (this.keyboardFilter) {
        filteredPeople = filteredPeople.filter(person => person.voice === this.keyboardFilter);
      }
      if (this.phoneFilter) {
        filteredPeople = filteredPeople.filter(person => person.phone === this.phoneFilter);
      }
      if (this.alarmFilter) {
        filteredPeople = filteredPeople.filter(person => person.alarm === this.alarmFilter);
      }
      if (this.lightFilter) {
        filteredPeople = filteredPeople.filter(person => person.alarm === this.lightFilter);
      }

      return filteredPeople;
    },
    isFiltered() {
        return this.genderFilter || this.hygieneFilter || this.airFilter || this.voiceFilter || this.mouseFilter || this.keyboardFilter || this.phoneFilter || this.alarmFilter || this.lightFilter;
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
    filterByAir(air) {
      if (this.airFilter === air) {
        this.airFilter = null;
      } else {
        this.airFilter = air;
      }
    },
    filterByVoice(voice) {
      if (this.voiceFilter === voice) {
        this.voiceFilter = null;
      } else {
        this.voiceFilter = voice;
      }
    },
    filterByMouse(mouse) {
      if (this.mouseFilter === mouse) {
        this.mouseFilter = null;
      } else {
        this.mouseFilter = mouse;
      }
    },
    filterByKeyboard(keyboard) {
      if (this.keyboardFilter === keyboard) {
        this.keyboardFilter = null;
      } else {
        this.keyboardFilter = keyboard;
      }
    },
    filterByPhone(phone) {
      if (this.phoneFilter === phone) {
        this.phoneFilter = null;
      } else {
        this.phoneFilter = phone;
      }
    },
    filterByAlarm(alarm) {
      if (this.alarmFilter === alarm) {
        this.alarmFilter = null;
      } else {
        this.alarmFilter = alarm;
      }
    },
    filterByLight(light) {
      if (this.lightFilter === light) {
        this.lightFilter = null;
      } else {
        this.lightFilter = light;
      }
    },
  },
  components: {Person},
};
</script>
