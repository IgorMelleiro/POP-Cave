<template>
    <div>
        <div class="slogan"> 
            As melhores camisetas Para Cinefilos e Geeks!<br>
            Venha Conhecer nossos Produtos!
        </div>
        <b-container fluid class="bv-example-row mt-3">
            <b-row class="justify-content-md-center">
                <b-col cols="3" v-for="(prod,index) in prod" :key="index">
                    <b-card
                            tag="article"
                            class="mb-3"
                            style="border: 1px solid #cccccc;">
                        <img class="prod-pic" style="border: 1px solid #cccccc;" v-bind:src="prod.img" alt="">
                        <b-card-text>
                            <h4>{{prod.name}}</h4>
                            <h5>Preço: ${{prod.price}}.00</h5>
                            <h5>Tamanho: {{prod.size}}</h5>
                        </b-card-text>

                        <b-button v-if="!prod.cart" :disabled="prod.cart" @click="prod.cart=true, 
                        addtocart(JSON.parse(JSON.stringify(prod)))"
                        block href="#" variant="success"> Adicionar ao Carrinho
                        </b-button>

                        <b-button v-if="prod.cart" :disabled="prod.cart" block href="#"
                        variant="warning">Adicionado ao Carrinho!</b-button>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    data(){
        return {
            prod:[
                {
                    id:1,
                    quantity:1,
                    name: 'Camiseta Avatar',
                    size: 'M',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/anime%2Ffem%2Fafem-a.jpg?alt=media&token=0a660b97-1dc4-4929-ba7c-d587474b3f9f',
                    cart: false
                },
                {
                    id:2,
                    quantity:1,
                    name: 'Camiseta Demon Slayer',
                    size: 'M',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/anime%2Fmasc%2Famasc-ds.jpg?alt=media&token=5392cf8f-7139-44a1-90f9-9ff225cea6fc',
                    cart: false
                },
                {
                    id:3,
                    quantity:1,
                    name: 'Camiseta Harry Potter',
                    size: 'P',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/cinema%2Ffem%2Fcfem-hp.jpg?alt=media&token=51c32862-421a-49ba-90e0-a8982747d3dc',
                    cart: false
                },
                {
                    id:4,
                    quantity:1,
                    name: 'Camiseta Django',
                    size: 'M',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/cinema%2Fmasc%2Fcmasc-django.jpg?alt=media&token=1d1cda3e-08ea-41c9-bf61-9ca2d40d9a6a',
                    cart: false
                },
                {
                    id:5,
                    quantity:1,
                    name: 'Camiseta God of War 2018',
                    size: 'P',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/games%2Ffem%2Fgfem-gow.jpg?alt=media&token=5e61ce99-cba0-47fd-9579-0c1859867c6c',
                    cart: false
                },
                {
                    id:6,
                    quantity:1,
                    name: 'Camiseta Dark Souls 3',
                    size: 'M',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/games%2Fmasc%2Fgmasc-ds3.jpg?alt=media&token=fdd25cef-1a6f-4c28-918b-c5d567e492b2',
                    cart: false
                },
                {
                    id:7,
                    quantity:1,
                    name: 'Camiseta Liga da Justiça',
                    size: 'P',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/quadrinhos%2Ffem%2Fqfem-dc.jpg?alt=media&token=485bbb21-aead-4ec1-bb0f-ebb48c29f0c0',
                    cart: false
                },
                {
                    id:8,
                    quantity:1,
                    name: 'Camiseta Dead Pool Father',
                    size: 'M',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/quadrinhos%2Fmasc%2Fqmasc-dp.jpg?alt=media&token=8f3edc0d-e84d-440f-9368-de6901b1c54d',
                    cart: false
                },
            ]
        }
    },
    methods: {
        addtocart(product){

            let cart= []
             if (JSON.parse(localStorage.getItem('products'))){
                 cart= JSON.parse(localStorage.getItem('products'))
             } else {
                 cart = []
             }
             cart.push(product);
             localStorage.setItem('products',JSON.stringify(cart))
        }
    },
    created(){
        let cart=[]
         if (JSON.parse(localStorage.getItem('products'))){
             cart= JSON.parse(localStorage.getItem('products'))
         } else {
             cart = []
         }
         for (let index = 0; index < cart.length; index++){
             for (let index2 = 0; index2 < this.prod.length; index2++) {
                 if (cart[index].id == this.prod[index2].id) {
                     this.prod[index2].cart=true
                 }
             }
         }
    }
}
</script>

<style>
    @font-face {
        font-family: 'badaboom';
        src: url('../../font/badabb__-webfont.woff2') format('woff2'),
            url('../../font/badabb__-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;

    }
    .slogan {
        font-family: 'badaboom';
        margin-top: 15px;
        text-align: center;
        font-size: 24px;
    }
    .mb-3{
        border: 1px solid #000;
    }
    .prod-pic {
        width: 300px;
        height: 300px;
    }
</style>