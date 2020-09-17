<template>
    <div>
        <b-navbar toggleable="lg" type="dark" class="navbar">
            <b-navbar-brand @click="goHome" href="#">
                Admin                
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item @click="gotocart" active>Shopping Cart</b-nav-item>

                    <b-collapse id="nav-collapse" is-nav>
                        <!-- RIGHT ALIGNED NAV ITEM  -->
                        <b-navbar-nav class="ml-auto">
                            <b-nav-item @click="gohome" active>Exit</b-nav-item>
                        </b-navbar-nav>
                    </b-collapse>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'navbarAdmin',
    data() {
        return {

        }
    },
    created() {

    },
    methods: {
        gohome(){
            this.$router.push('/')
        }
    }
}
</script>