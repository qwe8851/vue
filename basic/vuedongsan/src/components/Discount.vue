<template>
    <div class="discount" v-if="showDiscount == true">
        <h4>지금 결제하면 {{discount}}% 할인</h4>
    </div>
</template>

<script>
export default {
    //eslint-disable-next-line
    name: 'Discount',
    data(){
        return{
            discount : 20,
            showDiscount : true,
        }
    },
    mounted(){  //mount 후 
        setInterval(()=>{  // setTimeout안에서 this.변수를 가져다 쓰기 위해 arrowF function을 씀 
        this.discount --;
        if(this.discount == 0){
            this.showDiscount = false;
        }
        }, 1000)
    },
}
</script>

<style>

</style>