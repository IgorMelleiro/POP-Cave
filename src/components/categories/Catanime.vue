<template>
    <div>
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
                    id:12344,
                    quantity:1,
                    name: 'Camiseta Avatar',
                    size: 'P',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/anime%2Ffem%2Fafem-a.jpg?alt=media&token=0a660b97-1dc4-4929-ba7c-d587474b3f9f',
                    cart: false
                },
                {
                    id:264,
                    quantity:1,
                    name: 'Camiseta Hunter X Hunter',
                    size: 'M',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/anime%2Ffem%2Fafem-hxh.jpg?alt=media&token=70b4541e-bf94-4761-8aef-1bd14408947e',
                    cart: false
                },
                {
                    id:3123,
                    quantity:1,
                    name: 'Camiseta Naruto Shippuden',
                    size: 'P',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/anime%2Ffem%2Fafem-ns.jpg?alt=media&token=d96aa5a1-2f16-48fd-b5fb-7006fd78b9d2',
                    cart: false
                },
                {
                    id:465,
                    quantity:1,
                    name: 'Camiseta Shingeki no Kyojin',
                    size: 'P',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/anime%2Ffem%2Fafem-snk.jpg?alt=media&token=ef0f555b-d369-47d9-8802-654887c4aeb2',
                    cart: false
                },
                {
                    id:564,
                    quantity:1,
                    name: 'Camiseta Deku Boku no Hero',
                    size: 'P',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/anime%2Fmasc%2Famasc-bnh.jpg?alt=media&token=52e5bcd4-dec4-4aab-9061-d99349deae9d',
                    cart: false
                },
                {
                    id:632,
                    quantity:1,
                    name: 'Camiseta Death Note',
                    size: 'M',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/anime%2Fmasc%2Famasc-dn.jpg?alt=media&token=1e7f3a11-562b-476e-8188-184587ead310',
                    cart: false
                },
                {
                    id:712,
                    quantity:1,
                    name: 'Camiseta Deamon Slayer',
                    size: 'P',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/anime%2Fmasc%2Famasc-ds.jpg?alt=media&token=5392cf8f-7139-44a1-90f9-9ff225cea6fc',
                    cart: false
                },
                {
                    id:813,
                    quantity:1,
                    name: 'Camiseta Shingeki no Kyojin',
                    size: 'M',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/anime%2Fmasc%2Famasc-snk.jpg?alt=media&token=61beb6f7-0273-48bc-8536-062e4569cc1b',
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
    .mb-3{
        border: 1px solid #000;
    }
    .prod-pic {
        width: 300px;
        height: 300px;
    }
</style>