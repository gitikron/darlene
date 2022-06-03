<template>
<div>
  <div class="d-flex justify-content-end">
    <button class="btn btn-sm btn-primary" @click="load = 'createNew'">
      Create OPD
    </button>
  </div>
  <div class="container card m-2 p-3">
    {{newOpd}}
      <form>
        <div class="form-group row">
        <label for="OPDnumber" class="col-sm-2 col-form-label">OPD</label>
        <div class="col-sm-10">
          <input type="text" class="form-control-plaintext" id="OPDnumber" v-model='newOpd.OPDnumber'>
        </div>
      </div>
      <div class="form-group row mt-2">
        <label for="firstname" class="col-sm-2 col-form-label">Firstname</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="firstname" placeholder="firstname" v-model='newOpd.firstname'>
        </div>
      </div>
      <div class="form-group row mt-2">
        <label for="lastname" class="col-sm-2 col-form-label">Lastname</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="lastname" placeholder="lastname" v-model='newOpd.lastname'>
        </div>
      </div>
      <div class="form-group row mt-2">
        <label for="sex" class="col-sm-2 col-form-label">Sex</label>
        <div class="col-sm-8">
          <input type="text" class="form-control" id="sex" placeholder="sex" v-model='newOpd.sex'>
        </div>
        <div class="col-sm-2 mt-1"><button class="btn btn-outline-dark btn-sm" @click="sexHandle()">change</button></div>
      </div>

    </form>
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
        sex:'หญิง',
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
    sexHandle(){
      if (this.newOpd.sex=='male') {
        this.newOpd.sex=='female'
      } else {
        this.newOpd.sex=='male'
      }
    }
  },
};
</script>

<style lang="scss" scoped></style>
