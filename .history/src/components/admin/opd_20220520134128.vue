<template>
  <div class="d-flex justify-content-end">
    <button class="btn btn-sm btn-primary" @click="load = 'createNew'">
      Create OPD
    </button>
  </div>
  <div class="container card m-2 p-3">
   <form>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">OPD NUMBER</label>
    <div class="col-sm-10">
      <input type="text" class="form-control-plaintext" id="OPDnumber" v-model='newOpd.OPDnumber'>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" placeholder="Password">
    </div>
  </div>
</form>
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
        sex:'',
        address:'',
        phone:'',
        congenitalDisease:'',
        bloodGroup:''
      }
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
