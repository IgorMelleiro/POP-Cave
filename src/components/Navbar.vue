<template>
    <div>
        <b-navbar toggleable="lg" type="dark" class="navbar">
            <b-navbar-brand @click="goHome" href="#" >
                <img src="@/assets/logos/pop_2.png" alt="" style="width: 150px; height: 70px; margin-left: 20px;">                
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav style="margin-left:50px; font-size:24px">
                <b-navbar-nav>
                    <b-nav-item @click="goCinema" href="#">Cinema</b-nav-item>
                    <b-nav-item @click="goJogos" href="#">Jogos</b-nav-item>
                    <b-nav-item @click="goAnime" href="#">Animes</b-nav-item>
                    <b-nav-item @click="goQuadrinhos" href="#">Quadrinhos</b-nav-item>
                </b-navbar-nav>
            </b-collapse>

            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    
                    <b-nav-item @click="gotocart" active>
                        <i class="fas fa-shopping-cart"></i>
                    </b-nav-item>

                    <b-nav-item-dropdown right>
                        <!-- Usingo 'button-content' slot -->
                        <b-dropdown-item v-b-modal.modal-1>Admin</b-dropdown-item>    
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>


        <div>

            <b-modal hide-footer ref="my-modal" id="modal-1" title="Admin">
                <b-form @submit="onSubmit">
                    <b-form-group id="input-group-1" label="User:" label-for="input-1">
                        <b-form-input id="input-1" v-model="form.user" type="text" required placeholder="Enter User">
                        </b-form-input>   
                    </b-form-group>

                    <b-form-group id="input-group-2" label="Password:" label-for="input-2">
                        <b-form-input id="input-2" v-model="form.pass" type="password" required placeholder="Enter Password">
                        </b-form-input>
                    </b-form-group>

                    <b-button type="submit" block variant="primary">Submit</b-button>
                </b-form>
            </b-modal>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cart: '',
            form: {
                user:'',
                pass:''
            }
        }
    },
    created(){
        if (JSON.parse(localStorage.getItem('products'))) {
            this.cart = JSON.parse(localStorage.getItem('products'))
        } else {
            return
        }
    },
    methods:{
        gotocart(){
            this.$router.push('/cart')
        },
        goHome(){
            this.$router.push('/')
        },
        goCinema(){
            this.$router.push('/cinema')
        },
        goJogos(){
            this.$router.push('/jogos')
        },
        goAnime(){
            this.$router.push('/anime')
        },
        goQuadrinhos(){
            this.$router.push('/quadrinhos')
        },
        onSubmit(e){
            e.preventDefault();
            if (this.form.user == 'admin' && this.form.pass == '9999') {
                this.$refs['my-modal'].hide()
                this.$router.push('/admin')
                localStorage.setItem('admin',JSON.stringify('true'))
            } else {
                return false;
            }
        }
    }
}
</script>

<style>
    .navbar{
        background: #404040;
    }
    .fas{
        font-size: 30px;
        margin-right: 15px;
    }
</style>