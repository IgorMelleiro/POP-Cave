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
                    id:14,
                    quantity:1,
                    name: 'Camiseta Destiny 2',
                    size: 'M',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/games%2Ffem%2Fgfem-d2.jpg?alt=media&token=c7690f7a-55b1-4700-93ff-a8ad1093b0c1',
                    cart: false
                },
                {
                    id:26,
                    quantity:1,
                    name: 'Camiseta God of war',
                    size: 'M',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/games%2Ffem%2Fgfem-gow.jpg?alt=media&token=5e61ce99-cba0-47fd-9579-0c1859867c6c',
                    cart: false
                },
                {
                    id:38,
                    quantity:1,
                    name: 'Camiseta Hitman',
                    size: 'P',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/games%2Ffem%2Fgfem-hit.png?alt=media&token=3599e1d9-4eb0-4823-a137-b068bc460f07',
                    cart: false
                },
                {
                    id:4245,
                    quantity:1,
                    name: 'Camiseta Metal Gear',
                    size: 'M',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/games%2Ffem%2Fgfem-mg.jpg?alt=media&token=22e85584-a1cd-45be-a897-f55b0782d9a3',
                    cart: false
                },
                {
                    id:565,
                    quantity:1,
                    name: 'Camiseta DOOM',
                    size: 'P',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/games%2Fmasc%2Fgmasc-doom.jpg?alt=media&token=655b3964-4736-4a7d-8c45-f42a2a28efd8',
                    cart: false
                },
                {
                    id:624,
                    quantity:1,
                    name: 'Camiseta Dark Souls 3',
                    size: 'M',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/games%2Fmasc%2Fgmasc-ds3.jpg?alt=media&token=fdd25cef-1a6f-4c28-918b-c5d567e492b2',
                    cart: false
                },
                {
                    id:765,
                    quantity:1,
                    name: 'Camiseta God of War',
                    size: 'P',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/games%2Fmasc%2Fgmasc-gow.jpg?alt=media&token=2ec0bf03-a6a7-44f2-b604-892066a0fa0f',
                    cart: false
                },
                {
                    id:898,
                    quantity:1,
                    name: 'Camiseta GTA vice city',
                    size: 'M',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/games%2Fmasc%2Fgmasc-gta.jpg?alt=media&token=d12f17b6-9c24-4825-9ad1-3b68d9486d79',
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