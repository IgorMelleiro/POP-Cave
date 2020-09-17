<template>
    <div class="slider">
        <b-carousel 
            id="carousel-1" 
            v-model="slide" 
            :interval="4000" 
            controls  
            indicators 
            background="#9900"
            img-width="500"
            img-height="330"
            style="text-shadow: 1px 1px 2px #333;">

            <b-carousel-slide>
                <template v-slot:img>
                    <img class="d-block img-fluid" style="width:500px; margin-left: 35%;" :src="require('@/assets/banners/15.png')" alt="image slot">
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
    template {
        text-align: center;
    }
    @font-face {
        font-family: 'badaboom';
        src: url('../../../font/badabb__-webfont.woff2') format('woff2'),
             url('../../../font/badabb__-webfont.woff') format('woff');
        font-weight: normal;

    }
    .slogan {
        font-family: 'badaboom';
        margin-top: 15px;
        text-align: center;
        font-size: 24px;
    }
    .slider {
        margin-top: 5px;
        text-align: center;
    }
</style>