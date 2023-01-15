<template>
    <div class="black-bg" v-if="모달창열렸니 == true">
        <div class="white-bg">
            <h4>{{원룸들[누른거].title}}</h4>
            <img :src="원룸들[누른거].image" style="width : 100%">
            <h4>{{원룸들[누른거].title}}</h4>
            <p>{{원룸들[누른거].content}}</p>
            <!-- <input @input="month = $event.target.value"> 와 동일 -->
            <input v-model="month" type="number" style="width: 30px">개월 할부 
            <p>{{원룸들[누른거].price / month}} 원</p>
            <button @click="$emit('closeModal')">닫기</button>
        </div>
    </div>
</template>

<script>
export default {
    //eslint-disable-next-line
    name : 'Modal',
    data() {
        return {
            month : 1,
        }
    },
    props : {
        원룸들 : Array,
        누른거 : Number,
        모달창열렸니 : Boolean,
    }
}
</script>

<style>

</style>