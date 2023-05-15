<template>
    <div class="border border-slate-50 shadow shadow-slate-300 bg-white p-4 h-60 w-48 rounded-md cursor-pointer flex flex-col">
        <div class="flex justify-between">
            <p class="font-extrabold text-lg">{{ person.name + '同學' }}</p>
            <p class="font-extrabold text-right text-xs mt-auto">{{ person.department }}</p>
        </div>
        <p class="font-bold text-xs text-zinc-500">
            <span class = "bg-zinc-100 rounded px-2 py-0 mr-2 " v-for="(habit, index) in person.habits.split(' ')" :key="index">{{ '#' + habit }}</span>
            <p>{{ '最遠離學校' + person.distance + '分鐘' }}</p>
        </p>
        <div class="flex justify-between mt-auto">
            <p class = "text-xs mt-auto text-left text-zinc-500 ">{{'已加入' + person.team +'個隊伍'}}</p>
            <button class="border-2 rounded border-zinc-500 text-xs text-right font-bold inline-block  hover:scale-110 px-2 py-1">
                邀請
            </button>
        </div>
    </div>
</template>


<script>
export default { 
    props: ['person'],
  }
</script>
