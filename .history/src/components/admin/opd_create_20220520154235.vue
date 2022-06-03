<template>
<div>
    {{newOpd}}
      <form>
        <div class="form-group row">
        <label for="OPDnumber" class="col-sm-2 col-form-label">OPD</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="OPDnumber" v-model='newOpd.OPDnumber' disabled>
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
          <button class="btn btn-outline-dark btn-sm w-100" @click="changeS()">change</button>
          </div>
      </div>
      <div class="form-group row mt-2">
        <label for="sex" class="col-sm-2 col-form-label">Group</label>
        <div class="col-sm-8">
          <input type="text" class="form-control" id="Group" placeholder="Group" v-model='newOpd.bloodGroup' disabled>
        </div>
        <div class="col-sm-2 mt-1">
          <button class="btn btn-outline-dark btn-sm w-100" @click="changeBloods()">change</button>
          </div>
      </div>
      <div class="form-group row mt-2">
        <label for="sex" class="col-sm-2 col-form-label">Disease</label>
        <div class="col-sm-8">
          <input type="text" class="form-control" id="CD" placeholder="Congenital Disease" v-model='newOpd.Disease' >
        </div>
        <div class="col-sm-2 mt-1">
          <button class="btn btn-outline-dark btn-sm w-100" @click="CdControl()">NCDs</button>
          </div>
      </div>
      <div class="form-group row mt-2" v-if="cd===true">
        <div class="card p-3 d-block">
        <button class="btn btn-sm btn-outline-dark m-2 w-100" @click="newOpd.Disease= 'DM'">DM</button>
        <button class="btn btn-sm btn-outline-dark m-2" @click="newOpd.Disease= 'HT'">HT</button>
        <button class="btn btn-sm btn-outline-dark m-2" @click="newOpd.Disease= 'DLD'">DLD</button>
        <button class="btn btn-sm btn-outline-dark m-2" @click="newOpd.Disease= 'HT/DM'">HT/DM</button>
        <button class="btn btn-sm btn-outline-dark m-2" @click="newOpd.Disease= 'HT/DLD'">HT/DM</button>
        <button class="btn btn-sm btn-outline-dark m-2" @click="newOpd.Disease= 'DM/DLD'">HT/DM</button>
        <button class="btn btn-sm btn-outline-dark m-2" @click="newOpd.Disease= 'HT/DM/DLD'">HT/DM/DLD</button>
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
        bloodGroup:'A',
        sex:'male',
        Disease:'',
        phone:'',
        address:{
          number:'',
          Village:'',
          VillageNo:'',
          Alley:'',
          Lane:'',
          Road:'',
          SubArea:'',
          Area:'',
          Province:'',
          PostalCode:''
        }
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
