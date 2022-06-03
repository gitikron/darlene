<template>
  <div>
    <input class="from-input" type="tet" placeholder="Couse Name" v-model="create.couseName">
    <input class="from-input" type="number" placeholder="ราคา" v-model="create.price">
    <input class="from-input" type="number" placeholder="จำนวนครั้ง" v-model="create.per">
  </div>
</template>

<script>
export default {
  name: 'DarleneVue3CouseTbl',

  data() {
    return {
      create:{
        couseName:"",
        price:"",
        per:""
      }
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>