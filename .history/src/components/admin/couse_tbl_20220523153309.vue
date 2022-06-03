<template>
  <div class="form-group">
    <div>
      <label for="CouseName">Couse Name</label>
      <input class="form-control" name="CouseName" type="tet" placeholder="Couse Name" v-model="create.couseName">
    </div>
     <div><label for="CouseName">ราคา</label>
     <input class="form-control" type="number" placeholder="ราคา" v-model="create.price">
    </div>
    <div>
      <label for="CouseName">จำนวนครั้ง</label>
      <input class="form-control" type="number" placeholder="จำนวนครั้ง" v-model="create.per">
    </div>
   
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