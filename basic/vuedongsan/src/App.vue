<template>
<div>

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
  <!-- 함수를 선언할때는 ()를 빼고 -->
  <!-- <div>
    <h4>{{products[0]}}</h4>
    <p>50만원</p>
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
  </div> -->

  <div v-for="(item, index) in menus" :key="(item, index)">
    <img v-bind:src= "require(`./assets/room${index}.jpg`)" class="room-img"/>
    <h4 @click="모달창열렸니 = true">{{products[index]}}</h4>
    <p>50만원</p>
    <button @click="신고수[index]++">허위매물신고</button><span>신고수 : {{신고수[index]}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {    // 변수 만드는 공간
      모달창열렸니 : false,
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
