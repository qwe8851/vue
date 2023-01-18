<template>
<span>
  <!-- 모달창 -->
  <Transition name="fade">
    <Modal @closeModal="모달창열렸니=false" :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니" />
  </Transition>
  <!-- 할인 배너 -->
  <Discount/>

  <!-- Card -->
  <div class="menu">
    <a v-for="menu in menus" :key="menu" >{{ menu }}</a>
  </div>
  
  <button @click="priceSort">가격순정렬</button>
  <button @click="sortBack">되돌리기</button>

  <Card @openModal="모달창열렸니=true; 누른거=$event" :원룸="원룸" v-for="원룸 in 원룸들" :key="원룸"/>

</span>
</template>

<script>
import oneroom from "./assets/oneroom.js";
import Discount from "./components/Discount.vue";
import Modal from "./components/Modal.vue";
import Card from "./components/Card.vue";

export default {
  name: 'App',
  data(){
    return {    // 변수 만드는 공간
      원룸들오리지널 : [...oneroom],
      원룸들 : oneroom,  // shallow copy
      누른거 : 0,
      모달창열렸니 : false,
      menus : ['Home', 'Shop', 'About'],
    }
  },
  methods: {    // 함수 만드는 공간
    increase(){
      this.신고수++;
    },
    priceSort(){
      this.원룸들.sort(function(a, b){
        return a.price-b.price;
      });
    },
    sortBack(){
      this.원룸들 = [...this.원룸들오리지널];
    }
  },
  components: {
    Discount : Discount,  // es6 : 왼쪽오른쪽 항목이 같으므로 그냥 "Discount"만 사용해도 동작
    Modal : Modal,
    Card : Card, 
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
/* ui 애니메이션 주는 법 1 { class명 : 조건} */
.start {
  opacity: 0;
  transition: all 1s;
}
.end {
  opacity: 1;
}
/* ui 애니메이션 주는 법 2 transition태그로 애니메이션 주기  */
.fade-enter-from {   /* 시작 */
  /* opacity: 0; */
  transform: translateY(-1000px);
}
.fade-enter-active {    /* transition */
  transition: all 1s;
}
.fade-enter-to {    /* 끝 */
  /* opacity: 1; */
  transform: translateY(0px);

}
/* 퇴장 애니메이션 */
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
}
</style>
