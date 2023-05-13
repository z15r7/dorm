<template>
    
    <div class="flex justify-between">
        <div class="flex place-items-center shadow border border-slate-50 bg-white p-2 rounded-md w-full h-20">
            <p class="text-lg font-bold">{{ title }}</p>
        </div>
        
    </div>
        <div class="flex justify-center my-4">
            <input type="text" placeholder="搜尋生活習慣" class="border bg-zinc-100 rounded py-2 px-4 w-full max-w-md">
        </div>
  </template>
  
  
  <script>
  export default {
    data: () => ({
        title: "政大室友媒合平台",
    })
  };
  </script>
  

