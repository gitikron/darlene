<template>
  <div>
    <div class="d-flex justify-content-end mt-2">
      <button class="btn btn-sm btn-primary" @click="swiftUnit()">create</button>
    </div>

    <label for="unit" v-if="unitControl===true"> หน่วย
      <input type="text" name="unit" id="unit" class="form-control" placeholder="หน่วย" v-model="unit">
      <div class="d-flex justify-content-end mt-2">
        <button class="btn btn-sm btn-success">Submit</button>
      </div>
    </label>


  </div>
</template>

<script>
export default {
  name: 'DarleneVue3ItemUnit',

  data() {
    return {
      load:false,
      unitControl:true,
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