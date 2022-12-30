<template>
  <div class="menu">
    <a v-for="menu in menus" :key="menu" >{{ menu }}</a>
  </div>
  <div v-for="(a, i) in products" :key="(a, i)" >
    <h4>{{ products[i] }}</h4>
    <p >{{ price[i] }}만원</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      menus : ['Home', 'Shop', 'About'],
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      price : [ 50, '가격은 아무거나'],
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu{
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a{
}

</style>
