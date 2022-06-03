<template>
<div>
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
        <div class="col-sm-2 mt-1">
          <button class="btn btn-outline-dark btn-sm" @click="changeS()">change</button>
          </div>
      </div>
      <div class="form-group row mt-2">
        <label for="sex" class="col-sm-2 col-form-label">Group</label>
        <div class="col-sm-8">
          <input type="text" class="form-control" id="sex" placeholder="sex" v-model='newOpd.sex'>
        </div>
        <div class="col-sm-2 mt-1">
          <button class="btn btn-outline-dark btn-sm" @click="changeBloods()">change</button>
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
