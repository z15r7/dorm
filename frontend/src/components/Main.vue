<template>
    <div class="product-list">
      <h1>室友列表</h1>
      <div class="search-bar">
        <label for="search">搜尋室友:</label>
        <input type="text" id="search" v-model="searchTerm">
      </div>
      <ul>
        <li v-for="(product, index) in filteredProducts" :key="index" class="product-item">
          <h2 class="product-name">{{ product.name }}</h2>
          <div class="tags">
            <span class="tag" v-for="(tag, tagIndex) in product.description.split(' ')" :key="tagIndex">{{ tag }}</span>
          </div>
          <button class="add-to-cart" @click="addToCart(index)">邀請加入組隊</button>
        </li>
      </ul>
    </div>
  </template>
  
  <style>
  .product-list {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .product-item {
    margin-bottom: 20px;
    padding: 20px;
    background-color: #f2f2f2;
    border-radius: 5px;
  }
  
  .product-name {
    margin-top: 0;
    font-size: 24px;
    font-weight: bold;
  }
  
  .product-description {
    margin-bottom: 10px;
    font-size: 16px;
  }
  
  .add-to-cart {
    display: block;
    margin-top: 10px;
    padding: 10px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  
  .add-to-cart:hover {
    background-color: #3e8e41;
  }
  
  .search-bar {
    margin-bottom: 20px;
  }
  
  label {
    font-size: 18px;
    font-weight: bold;
  }
  
  input[type="text"] {
    padding: 10px;
    font-size: 18px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  .tags {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
  }
  
  .tag {
    background-color: #ddd;
    color: #333;
    font-size: 14px;
    padding: 5px;
    margin-right: 5px;
    margin-bottom: 5px;
    border-radius: 5px;
  }
  </style>
  
  <script>
  export default {
    data() {
      return {
        products: [
          { name: '室友1', description: '早睡 開冷氣 在房間講電話' },
          { name: '室友2', description: '晚睡 不開冷氣 不在房間講電話'},
          { name: '室友3', description: '晚睡 開冷氣 不在房間講電話'}
        ],
        cart: [],
        searchTerm: ''
      }
    },
    computed: {
      filteredProducts() {
        return this.products.filter(product => {
          return product.description.toLowerCase().includes(this.searchTerm.toLowerCase())
        })
      }
    },
    methods: {
      addToCart(index){
        this.cart.push(this.products[index])
      }
    }
  }
  </script>
