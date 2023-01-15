<template>
<span>
  <!-- 모달창 ui -->
  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <h4>{{원룸들[누른거].title}}</h4>
        <img :src="원룸들[누른거].image" style="width : 100%">
        <h4>{{원룸들[누른거].title}}</h4>
        <p>{{원룸들[누른거].content}}</p>
        <p>{{원룸들[누른거].price}}</p>
      <button @click="모달창열렸니 =false">닫기</button>
    </div>
  </div>

  <!-- 할인 배너 -->
  <Discount/>

  <div class="menu">
    <a v-for="menu in menus" :key="menu" >{{ menu }}</a>
  </div>
  <div v-for="(item, i) in 원룸들" :key="i">
    <img :src= "item.image" class="room-img"/>
    <h4 @click="모달창열렸니 = true; 누른거 = i;">{{item.title}}</h4>
    <!-- <p>{{item.content}}</p> -->
    <p>{{item.price}}원</p>
  </div>

</span>
</template>

<script>
import oneroom from "./assets/oneroom.js";
import Discount from "./Discount.vue";

export default {
  name: 'App',
  data(){
    return {    // 변수 만드는 공간
      누른거 : 0,
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
    Discount : Discount,  // es6 : 왼쪽오른쪽 항목이 같으므로 그냥 "Discount"만 사용해도 동작
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

.discount{
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
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
