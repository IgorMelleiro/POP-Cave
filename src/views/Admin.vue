<template>
    <div>
        <navbarAdmin />
            <b-container class="mt-4" fluid>
                <b-table :busy="busy" bordered :fields="fields" hover :items="items">
                    <template v-slot:cell(products)="data">
                        <h5>Id: {{data.item.id}}</h5>
                        <ul v-for="(product,index) in data.item.products" :key="index">
                            <li>Nome: {{product.name}}</li>
                            <li>Preço: R$:{{product.price}}</li>
                            <li>Quantidade: {{product.quantity}}</li>

                            <hr />
                        </ul>
                    </template>
                    <template v-slot:cell(total)="data">
                        <h2>$ {{data.item.total}}.00</h2>
                    </template>
                    <template v-slot:cell(delete)="data">
                        <b-button @click="deletesale(data.item.id)" block class="mt-4"
                        style="top:50%!important;" size="lg" variant="danger">Danger Sale
                        </b-button>
                    </template>
                    <template v-slot:tablhe-busy>
                        <div class="text-center text-success my-2">
                            <b-spinner class="align-middle"></b-spinner>
                            <strong>Loading...</strong>
                        </div>
                    </template>
                </b-table>
            </b-container>
        <footervue />
    </div>
</template>

<script>
import { db } from "@/firebase";
import navbarAdmin from "@/components/NavbarAdmin";
import footervue from '@/components/Footer.vue'

export default {
    data() {
        return {
            data: "",
            busy: true,
            items: [],
            fields: [
                { key: "products", label: "Sales" },
                { key: "total", label: "Total" },
                { key: "delete", label: "Delete" }
            ]
        };
    },
    componets: {
        footervue,
        navbarAdmin
    },
    created() {
        db.collection("vue").onSnapshot(querySnapshot => {
            this.items=[]
            this.busy=true
            querySnapshot.forEach(doc => {
                const doc2 = doc.data();
                doc2.id = doc.id;
                this.items.push(doc2);
            })
            if (this.items.lenght) {
                this.busy=false
            } else {
                this.busy= false
            }
        })
    },
    methods: {
        deletesale(id){
            db.collection("vue").doc(id).delete().then(function(){

            })
        }
    }
};
</script>