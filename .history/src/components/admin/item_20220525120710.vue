<template>
  <div>
     <nav class="navbar d-flex justify-content-end">
      <button class="btn btn-sm btn-dark" @click="load=true">items</button>
      <button class="btn btn-sm btn-dark m-2" @click="load=false">type</button>
    </nav>
<!--END header-->
  <ADITEMUNIT/>

  </div>
</template>

<script>
export default {
  name: 'DarleneVue3Item',

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