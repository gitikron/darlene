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
          <input type="text" class="form-control" id="sex" placeholder="sex" v-model='newOpd.sex' disabled>
        </div>
        <div class="col-sm-2 mt-1">
          <button class="btn btn-outline-dark btn-sm" @click="changeS()">change</button>
          </div>
      </div>
      <div class="form-group row mt-2">
        <label for="sex" class="col-sm-2 col-form-label">Group</label>
        <div class="col-sm-8">
          <input type="text" class="form-control" id="Group" placeholder="Group" v-model='newOpd.bloodGroup' disabled>
        </div>
        <div class="col-sm-2 mt-1">
          <button class="btn btn-outline-dark btn-sm" @click="changeBloods()">change</button>
          </div>
      </div>
      <div class="form-group row mt-2">
        <label for="sex" class="col-sm-2 col-form-label">CD</label>
        <div class="col-sm-8">
          <input type="text" class="form-control" id="CD" placeholder="Congenital Disease" v-model='newOpd.congenitalDisease' >
        </div>
        <div class="col-sm-2 mt-1">
          <button class="btn btn-outline-dark btn-sm" @click="CdControl()">NCDs</button>
          </div>
      </div>
      <div class="form-group row mt-2" v-if="cd===true">
        <button @click="newOpd.congenitalDisease=array(...'HT')">HT</button>
        <button @click="newOpd.congenitalDisease= ''">DM</button>
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
        bloodGroup:'A'
      },
      cd:false
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
    },
    CdControl(){
      if (this.cd==false) {
        this.cd=true
      } else {
        this.cd=false
      }
    },
    changeBloods(){
      if (this.newOpd.bloodGroup == 'A') {
        this.newOpd.bloodGroup ='B'
        return false
      }
      if (this.newOpd.bloodGroup == 'B'){
        this.newOpd.bloodGroup ='AB'
         return false
      }
      if (this.newOpd.bloodGroup == 'AB'){
        this.newOpd.bloodGroup ='O'
         return false
      }
      if (this.newOpd.bloodGroup == 'O'){
        this.newOpd.bloodGroup ='A'
         return false
      }

    }
  },
};
</script>

<style lang="scss" scoped></style>
