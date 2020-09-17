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
                    id:15,
                    quantity:1,
                    name: 'Camiseta Gryffindor',
                    size: 'P',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/cinema%2Ffem%2Fcfem-hp.jpg?alt=media&token=51c32862-421a-49ba-90e0-a8982747d3dc',
                    cart: false
                },
                {
                    id:287,
                    quantity:1,
                    name: 'Camiseta Kill Bill',
                    size: 'M',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/cinema%2Ffem%2Fcfem-kb.jpg?alt=media&token=88ce0a38-5260-41c3-be4c-4c4db6b7493a',
                    cart: false
                },
                {
                    id:323,
                    quantity:1,
                    name: 'Camiseta Senhor dos Anéis',
                    size: 'P',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/cinema%2Ffem%2Fcfem-lotr.jpg?alt=media&token=e7b5db00-4a19-46fe-be5f-77623aaae16e',
                    cart: false
                },
                {
                    id:45,
                    quantity:1,
                    name: 'Camiseta Star Wars',
                    size: 'M',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/cinema%2Ffem%2Fcfem-sw.jpg?alt=media&token=d6e802e7-fbae-4709-a808-250f99d4f6a1',
                    cart: false
                },
                {
                    id:528,
                    quantity:1,
                    name: 'Camiseta Django',
                    size: 'P',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/cinema%2Fmasc%2Fcmasc-django.jpg?alt=media&token=1d1cda3e-08ea-41c9-bf61-9ca2d40d9a6a',
                    cart: false
                },
                {
                    id:687,
                    quantity:1,
                    name: 'Camiseta Labirinto do Fauno',
                    size: 'M',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/cinema%2Fmasc%2Fcmasc-ldf.jpg?alt=media&token=47bfefce-60e9-4c94-8ccc-8dc38766b04a',
                    cart: false
                },
                {
                    id:788,
                    quantity:1,
                    name: 'Camiseta Gandalf the Grey',
                    size: 'P',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/cinema%2Fmasc%2Fcmasc-lotr.jpg?alt=media&token=5e2ff72a-10ca-426c-86ad-bc8658fec692',
                    cart: false
                },
                {
                    id:866,
                    quantity:1,
                    name: 'Camiseta Pulp Fiction',
                    size: 'M',
                    price: 45,
                    img: 'https://firebasestorage.googleapis.com/v0/b/vuestest02.appspot.com/o/cinema%2Fmasc%2Fcmasc-pf.jpg?alt=media&token=89bd58c8-7980-4e74-bc5c-10f80a93ec0a',
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