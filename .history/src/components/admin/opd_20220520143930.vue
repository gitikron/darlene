<template>
<div>
  <div class="d-flex justify-content-end">
    <button class="btn btn-sm btn-primary" @click="load = 'createNew'">
      Create OPD
    </button>
  </div>
  <div class="container card m-2 p-3">

  </div>
  </div>
</template>

<script>
export default {
  name: "DarleneVue3Index",

  data() {
    return {
      load: "",
      newOpd:{
        OPDnumber:'1',
        firstname:'',
        lastname:'',
        sex:'male',
        address:'',
        phone:'',
        congenitalDisease:'',
        bloodGroup:''
      },
      sex:[
        {id:'1',sex:'male'},
        {id:'2',sex:'female'}
      ]
    };
  },

  mounted() {},

  methods: {
    changeS(){
      if (this.newOpd.sex=='male') {
        this.newOpd.sex='female'
      } else {
        this.newOpd.sex='male'
      }
    }
  },
};
</script>

<style lang="scss" scoped></style>
