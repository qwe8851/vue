<template>
    <div>
        <div class="menu">
            <a v-for="menu in menus" :key="menu" >{{ menu }}</a>
        </div>
        <div v-for="(item, i) in 원룸들" :key="i">
            <img :src= "item.image" class="room-img"/>
            <!-- <h4 @click="모달창열렸니 = true; 누른거 = i;">{{item.title}}</h4> -->
            <p>{{item.price}}원</p>
        </div>
    </div>
</template>

<script>
export default {
    //eslint-disable-next-line
    name: "Card",
    props: {
        menus : Array,
        원룸들 : Array,
        모달창열렸니 : Boolean,
    }

}
</script>

<style>

</style>