<template>
  <div class="menu">
    <a v-for="menu in menus" :key="menu" >{{ menu }}</a>
  </div>
  <div>
    <h4>{{products[0]}}</h4>
    <p>50만원</p>    <!-- 함수를 선언할때는 ()를 빼고 -->
    <button @click="신고수[0]++">허위매물신고</button><span>신고수 : {{신고수[0]}}</span>
  </div>
  <div>
    <h4>{{products[1]}}</h4>
    <p>50만원</p>
    <button @click="신고수[1]++">허위매물신고</button><span>신고수 : {{신고수[1]}}</span>
  </div>
  <div>
    <h4>{{products[2]}}</h4>
    <p>50만원</p>
    <button @click="신고수[2]++">허위매물신고</button><span>신고수 : {{신고수[2]}}</span>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {    // 변수 만드는 공간
      menus : ['Home', 'Shop', 'About'],
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      price : [ 50, '가격은 아무거나'],
      신고수 : [0,0,0]
    }
  },
  methods: {    // 함수 만드는 공간
    increase(){
      this.신고수++;
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

</style>
