<template>
    <div>
        <!-- <h5>{{블로그.title}}</h5>
        <p>{{블로그.date}}</p> -->

        <h5>{{블로그글[0].title}}</h5>
        <p>{{블로그글[0].date}}</p>
    </div>
</template>

<script>

export default {
    //eslint-disable-next-line
    name: 'List',
    data(){
        return{

        }
    },
    props: {
        // 블로그 :  Object,
        블로그글 :  Object,
    },

}
</script>

<style>

</style>