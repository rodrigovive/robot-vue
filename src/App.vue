<template>
    <div id="app">

        <header>
            <nav>
                <ul>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'Home'}" exact>
                            <img src="./assets/build-a-bot-logo.png" class="logo" alt="">
                            Contruye tu robot
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'Build'}" exact>
                            Build
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link cart" to="/cart" exact>
                            Cart
                        </router-link>
                        <div class="cart-items">
                            {{cart.length}}
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
        <div class="content">
            <aside class="aside">
                <router-view name="sidebar"/>
            </aside>
            <main>
                <router-view/>
            </main>
        </div>

    </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex';


export default {
  name: 'app',
  computed: {
    ...mapState({
      rootFoo: 'foo',
      usersFoo: state => state.users.foo,
    }),
    ...mapState('robots', {
      robotsFoo: 'foo',
    }),
    ...mapGetters({
      rootGetterFoo: 'foo',
    }),
    ...mapGetters('robots', {
      robotsGetterFoo: 'foo',
    }),
    cart() {
      return this.$store.state.robots.cart;
    },
  },
};
</script>

<style>
    body {
        background: linear-gradient(to bottom, #555, #999);
        background-attachment: fixed;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }
</style>
<style scoped>

    main {
        padding: 30px;
        background-color: white;
        width: 964px;
        min-height: 300px;
    }

    header {
        background-color: #999;
        width: 1184px;
        margin: 0 auto;
    }
    ul {
        padding: 3px;
        display: flex;
    }
    .nav-item {
        display: inline-block;
        padding: 5px 10px;
        font-size: 22px;
        border-right: 1px solid #bbb;
    }
    .nav-item car {
        position: relative;
        border-right: none;
        margin-left: auto;
    }
    .logo {
        vertical-align: middle;
        height: 30px;
    }

    .nav-link {
        text-decoration: none;
        color: inherit;
    }
    .router-link-active {
        color: white;
    }
    .content {
        display: flex;
        margin: 10px auto 0 auto;
        justify-content: center;
    }
    .aside {
        padding: 30px;
        background-color: #aaa;
        width: 100px;
        min-height: 300px;
    }
    .cart-items {
        position: relative;
        top: -5px;
        right: -9px;
        font-size: 18px;
        width: 20px;
        text-align: center;
        display: inline-block;
        border-radius: 100px;
        background-color: mediumseagreen;
    }
</style>
