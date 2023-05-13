<template>
    <div class="border border-slate-50 shadow shadow-slate-300 bg-white p-4 h-52 w-48 rounded-md cursor-pointer flex flex-col">
        <div class="flex justify-between">
            <p class="font-extrabold text-lg">{{ person.name }}</p>
            <p class="font-extrabold text-right text-xs mt-auto">{{ person.department }}</p>
        </div>
        <p class="font-bold text-xs text-zinc-500">
            <span class = "bg-stone-200 px-2 mr-2 " v-for="(habit, index) in person.habits.split(' ')" :key="index">{{ '#' + habit }}</span>
            <p>{{ '最遠離學校' + person.distance + '分鐘' }}</p>
        </p>
        <button class="text-xs text-right font-bold mt-auto inline-block mb-0">
            邀請
        </button>
    </div>
</template>


<script>
export default { 
    props: ['person'],
  }
</script>
