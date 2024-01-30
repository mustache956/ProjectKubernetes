<template>
    <div>
      <h2>Shop</h2>
      <div v-if="items.length === 0">
        <p>No items available in the shop.</p>
      </div>
      <div v-else>
        <ul>
          <li v-for="item in items" :key="item.id">
            {{ item.name }} - ${{ item.price }}
            <button @click="addToCart(item)">Add to Cart</button>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [],
      };
    },
    mounted() {
      this.fetchItems();
    },
    methods: {
      fetchItems() {
        // Replace the URL with your backend API endpoint for fetching shop items
        const apiUrl = 'https://your-backend-api.com/shop';
  
        fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
            this.items = data;
          })
          .catch(error => {
            console.error('Error fetching shop items:', error);
          });
      },
      addToCart(item) {
        // Implement the logic to add the selected item to the cart
        console.log('Added to cart:', item);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  h2 {
    text-align: center;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  button {
    background-color: #4caf50;
    color: white;
    padding: 5px 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  