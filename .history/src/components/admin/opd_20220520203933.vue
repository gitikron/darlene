<template>
<div>
  <div class="d-flex justify-content-end pb-2">
    <button class="btn btn-sm btn-primary" @click="CreateOpds()" v-if="CreateOpd===false">
      Create OPD
    </button>
        <button class="btn btn-sm btn-danger" @click="CreateOpds()" v-if="CreateOpd===true">
      Create OPD
    </button>
  </div>

    <ADOPDCREATE class="container card p-3 mb-2" v-if="CreateOpd===true"/>
    <ADOPDTABLE class="container card p-3 mb-2" v-if="CreateOpd===false"/>
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
