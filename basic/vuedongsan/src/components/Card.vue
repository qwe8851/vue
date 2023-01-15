<template>
    <div>
    <img :src="원룸.image" class="room-img">
    <h4 @click=send()>{{원룸.title}}</h4>
    <p>{{원룸.price}}원</p>
</div>
</template>

<script>
export default {
    //eslint-disable-next-line
    name: "Card",
    props: {
        원룸 : Object,
    },
    methods: {
        send(){
            // 함수안에서 props, data, $변수를 사용할때는 무조건 this.으로 시작!
            this.$emit('openModal', this.원룸.id)
        }
    },

}
</script>

<style>

</style>