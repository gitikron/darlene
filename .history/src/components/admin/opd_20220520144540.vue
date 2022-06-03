<template>
<div>
  <div class="d-flex justify-content-end pb-2">
    <button class="btn btn-sm btn-primary" @click="CreateOpds()">
      Create OPD
    </button>
  </div>

    <ADOPDCREATE class="container card m-2 p-3" v-if="CreateOpd===true"/>

  </div>
</template>

<script>
export default {
  name: "DarleneVue3Index",

  data() {
    return {
      CreateOpd:false,
      load: "",
    }
  },

  mounted() {

  },

  methods: {
    CreateOpds(){
      if (this.CreateOpd==false) {
        this.CreateOpd=true        
      }else{
        this.CreateOpd=false  
      }
    }
  },
};
</script>

<style lang="scss" scoped></style>
