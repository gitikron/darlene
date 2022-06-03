<template>
  <div>
    <input accept="image/*" class="mt-10 w-100 uploadButton" type="file" required  @change="onFileSelected($event,index)" :disabled="validated == true"/>
    <div>
      <label for="CouseName">Couse Name</label>
      <input class="form-control" name="CouseName" type="tet" placeholder="Couse Name" v-model="create.couseName">
    </div>
     <div class="mt-2">
      <label for="description">Description</label>
      <input class="form-control" name="description" type="tet" placeholder="Couse description" v-model="create.description">
    </div>
     <div class="mt-2">
      <label for="CouseName">ราคา</label>
      <input class="form-control" type="number" placeholder="ราคา" v-model="create.price">
    </div>
    <div class="mt-2">
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
        description:'',
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