<template>
  <div>
     <nav class="navbar d-flex justify-content-end">
      <button class="btn btn-sm btn-dark" @click="load=true">items</button>
      <button class="btn btn-sm btn-dark m-2" @click="load=false">type</button>
    </nav>
<!--END header-->
    <div class="mb-2">
    <div class="d-flex justify-content-end mt-2">
      <button class="btn btn-sm btn-primary" @click="swiftUnit()">create</button>
    </div>

    <label for="unit" class="form-control mt-2" v-if="unitControl===true"> หน่วย
      <input type="text" name="unit" id="unit" class="form-control" placeholder="หน่วย" v-model="unit">
      <div class="d-flex justify-content-end mt-2">
        <button class="btn btn-sm btn-success">Submit</button>
      </div>
    </label>


    </div>


  </div>
</template>

<script>
export default {
  name: 'DarleneVue3Item',

  data() {
    return {
      load:true,
      unitControl:false,
      unit:''
    };
  },

  mounted() {
    
  },

  methods: {
    swiftUnit(){
      if(this.unitControl==false){
        this.unitControl=true
      }else{
        this.unitControl=false
      }
    }
  },
};
</script>

<style lang="scss" scoped>

</style>