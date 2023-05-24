<template>
    <div class = "w-full">
        <div class="flex place-items-center shadow border border-slate-50 bg-white p-2 rounded-md w-full h-20 pl-32 fixed">
                <p class="text-lg font-bold">{{ title }}</p>
        </div>
        <div class = "mt-20">
            <div class="flex justify-center my-4">
                <div class="border bg-zinc-100 rounded py-4 px-4 w-full max-w-md mt-6"></div>
                <button class="mx-2 font-bold text-zinc-500 hover:scale-110 text-sm mt-6 " @click="showFilters = !showFilters">篩選</button>
            </div>
        </div>
      <div>
        <div class="flex justify-center w-10/12 my-4 pl-80" v-if="showFilters">
                <div class="flex flex-wrap items-center h-fit">
                    <p class="text-xs font-bold flex-col">生理性別</p>
                    <div class="my-5"></div>
                    <div class="w-full"></div>
                      <Hashtag :tagName="`男`"
                      :tagFilterMethod="filterByGender"
                      :tagFilter="genderFilter"
                      :tagEnableColor="`#7dd3fc`"
                      :tagDisableColor="`#f3f4f6`"
                      />
                      <Hashtag :tagName="`女`"
                      :tagFilterMethod="filterByGender"
                      :tagFilter="genderFilter"
                      :tagEnableColor="`#7dd3fc`"
                      :tagDisableColor="`#f3f4f6`"
                      />
                      <button @click="filterByGender('男')" 
                      :style="{ backgroundColor: genderFilter === '男' ? '#7dd3fc' : '#f3f4f6' }"
                      class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0 ">#男性</button>
                      <span class="mx-1"></span> 
                      <button @click="filterByGender('女')" 
                      :style="{ backgroundColor: genderFilter === '女' ? '#7dd3fc' : '#f3f4f6' }"
                      class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0">#女性</button>
                    <div class="w-full"></div>
                    <div class="flex flex-wrap items-center">
                        <p class="text-xs font-bold flex-col">衛生習慣</p>
                        <div class="my-5"></div>
                        <div class="w-full"></div>
                        <button @click="filterByHygiene('愛乾淨')" 
                        :style="{ backgroundColor: hygieneFilter === '愛乾淨' ? '#fcd34d' : '#f3f4f6' }"
                        class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0 ">#愛乾淨</button>
                        <span class="mx-1"></span> 
                        <button @click="filterByHygiene('不髒有點亂')" 
                        :style="{ backgroundColor: hygieneFilter === '不髒有點亂' ? '#fcd34d' : '#f3f4f6' }"
                        class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0 ">#不髒有點亂</button>
                        <span class="mx-1"></span> 
                        <button @click="filterByHygiene('衛生沒要求')" 
                        :style="{ backgroundColor: hygieneFilter === '衛生沒要求' ? '#fcd34d' : '#f3f4f6' }"
                        class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0 my-2">#衛生沒要求</button>
                    </div>
                    <div class="w-full"></div>
                    <div class="flex flex-wrap items-center">
                        <p class="text-xs font-bold flex-col">開冷氣頻率</p>
                        <div class="my-5"></div>
                        <div class="w-full"></div>
                        <button @click="filterByAir('常開冷氣')" 
                        :style="{ backgroundColor: airFilter === '常開冷氣' ? '#7dd3fc' : '#f3f4f6' }"
                        class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0 ">#常開冷氣</button>
                        <span class="mx-1"></span> 
                        <button @click="filterByAir('不愛開冷氣')" 
                        :style="{ backgroundColor: airFilter === '不愛開冷氣' ? '#7dd3fc' : '#f3f4f6' }"
                        class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0 ">#不愛開冷氣</button>
                  </div>
                  <div class="w-full"></div>
                    <div class="flex flex-wrap items-center">
                        <p class="text-xs font-bold flex-col">睡眠時對光的忍受度</p>
                        <div class="my-5"></div>
                        <div class="w-full"></div>
                        <button @click="filterByLight('大燈')" 
                        :style="{ backgroundColor: lightFilter === '大燈' ? '#fcd34d' : '#f3f4f6' }"
                        class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0 ">#大燈</button>
                        <span class="mx-1"></span> 
                        <button @click="filterByLight('檯燈')" 
                        :style="{ backgroundColor: lightFilter === '檯燈' ? '#fcd34d' : '#f3f4f6' }"
                        class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0 ">#檯燈</button>
                        <span class="mx-1"></span> 
                        <button @click="filterByLight('小夜燈')" 
                        :style="{ backgroundColor: lightFilter === '小夜燈' ? '#fcd34d' : '#f3f4f6' }"
                        class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0 ">#小夜燈</button>
                        <span class="mx-1"></span> 
                        <button @click="filterByLight('不能忍受')" 
                        :style="{ backgroundColor: lightFilter === '不能忍受' ? '#fcd34d' : '#f3f4f6' }"
                        class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0 ">#不能忍受</button>
                  </div>
                  <div class="w-full"></div>
                    <div class="flex flex-wrap items-center">
                        <p class="text-xs font-bold flex-col">睡眠習慣</p>
                        <div class="my-5"></div>
                        <div class="w-full"></div>
                        <button @click="filterBySnore('不會打呼')" 
                        :style="{ backgroundColor: snoreFilter === '不會打呼' ? '#fcd34d' : '#f3f4f6' }"
                        class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0 ">#不會打呼</button>
                        <span class="mx-1"></span>
                        <button @click="filterBySpeak('不會講夢話')" 
                        :style="{ backgroundColor: speakFilter === '不會講夢話' ? '#fcd34d' : '#f3f4f6' }"
                        class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0 my-2">#不會講夢話</button>
                    </div>
                  
                </div>
                <div class="flex flex-wrap items-center h-fit">
                    <p class="text-xs font-bold flex-col">睡眠時對聲音的忍受度</p>
                    <div class="my-5"></div>
                    <div class="w-full"></div>
                    <button @click="filterByVoice('正常音量')" 
                    :style="{ backgroundColor: voiceFilter === '正常音量' ? '#fcd34d' : '#f3f4f6' }"
                    class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0 ">#正常音量</button>
                    <span class="mx-1"></span> 
                    <button @click="filterByVoice('小聲說話')" 
                    :style="{ backgroundColor: voiceFilter === '小聲說話' ? '#fcd34d' : '#f3f4f6' }"
                    class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0">#小聲說話</button>
                    <span class="mx-1"></span> 
                    <button @click="filterByVoice('無法避免的白噪音')" 
                    :style="{ backgroundColor: voiceFilter === '無法避免的白噪音' ? '#fcd34d' : '#f3f4f6' }"
                    class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0">#無法避免的白噪音</button>
                    <span class="mx-1"></span> 
                    <button @click="filterByVoice('無法忍受聲音')" 
                    :style="{ backgroundColor: voiceFilter === '無法忍受聲音' ? '#fcd34d' : '#f3f4f6' }"
                    class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0">#無法忍受聲音</button>
                    <div class="w-full"></div>
                    <div class="flex flex-wrap items-center">
                        <p class="text-xs font-bold flex-col">使用電器的習慣</p>
                        <div class="my-5"></div>
                        <div class="w-full"></div>
                        <button @click="filterByMouse('靜音滑鼠')" 
                        :style="{ backgroundColor: mouseFilter === '靜音滑鼠' ? '#7dd3fc' : '#f3f4f6' }"
                        class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0 ">#靜音滑鼠</button>
                        <span class="mx-1"></span>
                        <button @click="filterByKeyboard('靜音鍵盤')"
                        :style="{ backgroundColor: keyboardFilter === '靜音鍵盤' ? '#fcd34d' : '#f3f4f6' }"
                        class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0 ">#靜音鍵盤</button>
                        <div class="w-full my-1"></div> 
                        <button @click="filterByPhone('在房內講十分鐘電話')"
                        :style="{ backgroundColor: phoneFilter === '在房內講十分鐘電話' ? '#7dd3fc' : '#f3f4f6' }"
                        class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0">#在房內講十分鐘電話</button>
                        <span class="mx-1"></span> 
                        <button @click="filterByPhone('不在房內講電話')"
                        :style="{ backgroundColor: phoneFilter === '不在房內講電話' ? '#7dd3fc' : '#f3f4f6' }"
                        class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0">#不在房內講電話</button>
                        <div class="w-full my-1"></div>
                        <button @click="filterByAlarm('不設鬧鐘或震動')"
                        :style="{ backgroundColor: alarmFilter === '不設鬧鐘或震動' ? '#fcd34d' : '#f3f4f6' }"
                        class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0">#不設鬧鐘或震動</button>
                        <span class="mx-1"></span> 
                        <button @click="filterByAlarm('馬上關鬧鐘')"
                        :style="{ backgroundColor: alarmFilter === '馬上關鬧鐘' ? '#fcd34d' : '#f3f4f6' }"
                        class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0">#馬上關鬧鐘</button>
                        <span class="mx-1"></span> 
                        <button @click="filterByAlarm('30秒內關鬧鐘')"
                        :style="{ backgroundColor: alarmFilter === '30秒內關鬧鐘' ? '#fcd34d' : '#f3f4f6' }"
                        class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0">#30秒內關鬧鐘</button>
                        <span class="mx-1"></span>
                        
                        

                    </div>
                    <div class="w-full"></div>
                    <div class="flex flex-wrap items-center">
                        <p class="text-xs font-bold flex-col">開冷氣頻率</p>
                        <div class="my-5"></div>
                        <div class="w-full"></div>
                        <button @click="filterByAir('常開冷氣')" 
                        :style="{ backgroundColor: airFilter === '常開冷氣' ? '#fcd34d' : '#f3f4f6' }"
                        class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0 ">#常開冷氣</button>
                        <span class="mx-1"></span> 
                        <button @click="filterByAir('不愛開冷氣')" 
                        :style="{ backgroundColor: airFilter === '不愛開冷氣' ? '#fcd34d' : '#f3f4f6' }"
                        class="text-xs font-bold text-zinc-500 pr-2 bg-gray-100 rounded px-2 py-0 ">#不愛開冷氣</button>
                  </div>
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
import Hashtag from './Hashtag.vue';

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
  components: {
    Person,
    Hashtag
  },
};
</script>
  

