<template>
<span>
  <!-- 모달창 ui -->
  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>내용</p>
      <button @click="모달창열렸니 =false">닫기</button>
    </div>
  </div>

  <div class="menu">
    <a v-for="menu in menus" :key="menu" >{{ menu }}</a>
  </div>
  <div v-for="(item, i) in 원룸들" :key="(item, i)">
    <!-- <img v-bind:src= "require(`./assets/room${i}.jpg`)" class="room-img"/> -->
    <img :src= "`${item.image}`" class="room-img"/>
    <h4>{{item.title}}</h4>
    <p>{{item.content}}</p>
    <p>{{item.price}}</p>
  </div>

</span>
</template>

<script>
import oneroom from "./assets/oneroom.js";

export default {
  name: 'App',
  data(){
    return {    // 변수 만드는 공간
      원룸들 : oneroom,
      모달창열렸니 : false,
      menus : ['Home', 'Shop', 'About'],
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
body {
  margin: 0;
}
div{
  box-sizing: border-box;
}

.black-bg{
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed;
  padding: 20px;
}
.white-bg{
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}


.room-img{
  width: 100%;
  margin-top: 40px;
}

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
  color: white;
  padding: 10px;
}

</style>
