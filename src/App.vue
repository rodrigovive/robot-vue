<template>
    <div id="app">
        <header>
            <nav>
                <ul>
                    <li class="nav-item">
                        <img src="./assets/build-a-bot-logo.png" class="logo" alt="">
                        Contruye tu robot
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <router-view/>
        </main>
    </div>
</template>

<script>


export default {
  name: 'app',
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
        margin: 0 auto;
        padding: 30px;
        background-color: white;
        width: 1024px;
        min-height: 300px;
    }

    header {
        background-color: #999;
        width: 1084px;
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
    .logo {
        vertical-align: middle;
        height: 30px;
    }
    .content >>> .robot-name{
        font-size: 1em;
    }
</style>
