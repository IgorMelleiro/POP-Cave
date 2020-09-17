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
                    id:974,
                    quantity:1,
                    name: 'Camiseta Batman',
                    size: 'P',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/quadrinhos%2Ffem%2Fqfem-bat.jpg?alt=media&token=6d9511ad-8fdc-4097-a29e-84c64947714b',
                    cart: false
                },
                {
                    id:184,
                    quantity:1,
                    name: 'Camiseta Liga da Justiça',
                    size: 'M',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/quadrinhos%2Ffem%2Fqfem-dc.jpg?alt=media&token=485bbb21-aead-4ec1-bb0f-ebb48c29f0c0',
                    cart: false
                },
                {
                    id:662,
                    quantity:1,
                    name: 'Camiseta Dead Pool',
                    size: 'P',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/quadrinhos%2Ffem%2Fqfem-dp.jpg?alt=media&token=aecd9b3e-ef53-47bc-b38f-2859e8eb2ebb',
                    cart: false
                },
                {
                    id:413,
                    quantity:1,
                    name: 'Camiseta Marvel',
                    size: 'M',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/quadrinhos%2Ffem%2Fqfem-marvel.jpg?alt=media&token=ff5e110e-3bec-488b-8b79-d8ec7c6133d5',
                    cart: false
                },
                {
                    id:554,
                    quantity:1,
                    name: 'Camiseta Herois DC',
                    size: 'P',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/quadrinhos%2Fmasc%2Fqmasc-dc.jpg?alt=media&token=3b546239-a608-4cb4-81a5-912951895cb1',
                    cart: false
                },
                {
                    id:617,
                    quantity:1,
                    name: 'Camiseta Dead Pool father',
                    size: 'M',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/quadrinhos%2Fmasc%2Fqmasc-dp.jpg?alt=media&token=8f3edc0d-e84d-440f-9368-de6901b1c54d',
                    cart: false
                },
                {
                    id:757,
                    quantity:1,
                    name: 'Camiseta Liga da Justiça',
                    size: 'P',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/quadrinhos%2Fmasc%2Fqmasc-ldj.jpg?alt=media&token=e1c1559f-2540-455a-b2f9-b455d1b94a4b',
                    cart: false
                },
                {
                    id:813,
                    quantity:1,
                    name: 'Camiseta Xavier Xmen',
                    size: 'M',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/quadrinhos%2Fmasc%2Fqmasc-xi.jpg?alt=media&token=d10ed209-433c-48fd-a410-2f9d63674ccd',
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