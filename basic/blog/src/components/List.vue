<template>
    <div>
        <h5>{{블로그.title}}</h5>
        <p>{{블로그.date}}</p>
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
        블로그 :  Object,
    },

}
</script>

<style>

</style>