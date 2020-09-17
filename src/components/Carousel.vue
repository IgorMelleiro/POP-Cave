<template>
    <div class="slider">
        <b-carousel 
        id="carousel-1" 
        v-model="slide" 
        :interval="4000" 
        controls  
        indicators 
        background="#990000"
        img-width="1400"
        img-height="330"
        style="text-shadow: 1px 1px 2px #333;"
        >


        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
            <template v-slot:img>
                <img class="d-block img-fluid w-100"  :src="require('@/assets/banners/sketchsbanner.png')" alt="image slot">
            </template>
        </b-carousel-slide>  
        </b-carousel>
    </div>
</template>

<script>
export default {
    data() {
        return {
            slide: 0,
            sliding: null
        }
    },
    methods: {

    }
}
</script>

<style>
    .slider{
        margin-top: 5px;
    }
</style>