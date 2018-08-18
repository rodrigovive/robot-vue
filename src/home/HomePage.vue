<template>
  <div class="home">
    <div>
      <img class="robot" src="../assets/robot-home.png" />
    </div>
    <div class="get-started">
      <a href="">Get started</a> contruye tu primer robot!
    </div>
  </div>

</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    text-align: center;
  }
  .robot {
    heigth: 300px;
  }
</style>
