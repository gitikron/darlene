<template>
  <div>
    this is index component
  </div>
</template>

<script>
export default {
  name: 'DarleneVue3Index',

  data() {
    return {
      
    };
  },

  mounted() {
    console.log(process.env.DB_url)
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>