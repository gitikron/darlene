<template>
  <div>
    this is index component
  </div>
</template>

<script>
const dotenv = require('dotenv')
export default {
  name: 'DarleneVue3Index',

  data() {
    return {
      
    };
  },

  mounted() {
    console.log(process.env)
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>