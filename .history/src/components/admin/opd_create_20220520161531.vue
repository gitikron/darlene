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
          <input type="text"  class="form-control" id="firstname" placeholder="firstname" v-model='newOpd.firstname'>
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
        <label for="Group" class="col-sm-2 col-form-label">Group</label>
        <div class="col-sm-8">
          <input type="text" class="form-control" id="Group" placeholder="Group" v-model='newOpd.bloodGroup' disabled>
        </div>
        <div class="col-sm-2 mt-1">
          <button class="btn btn-outline-dark btn-sm w-100" @click="changeBloods()">change</button>
          </div>
      </div>
      <div class="form-group row mt-2">
        <label for="CD" class="col-sm-2 col-form-label">Disease</label>
        <div class="col-sm-8">
          <input type="text" class="form-control" id="CD" placeholder="โรคประจำตัว" v-model='newOpd.Disease' >
        </div>
        <div class="col-sm-2 mt-1">
          <button class="btn btn-outline-dark btn-sm w-100" @click="CdControl()">NCDs</button>
          </div>
      </div>
      <div class="form-group row mt-2" v-if="cd===true">
        <div class="card d-block px-2 pt-2 pb-2">
        <button class="btn btn-sm btn-outline-dark w-100-res" @click="newOpd.Disease= 'DM'">DM</button>
        <button class="btn btn-sm btn-outline-dark w-100-res" @click="newOpd.Disease= 'HT'">HT</button>
        <button class="btn btn-sm btn-outline-dark w-100-res" @click="newOpd.Disease= 'DLD'">DLD</button>
        <button class="btn btn-sm btn-outline-dark w-100-res" @click="newOpd.Disease= 'HT/DM'">HT/DM</button>
        <button class="btn btn-sm btn-outline-dark w-100-res" @click="newOpd.Disease= 'HT/DLD'">HT/DM</button>
        <button class="btn btn-sm btn-outline-dark w-100-res" @click="newOpd.Disease= 'DM/DLD'">HT/DM</button>
        <button class="btn btn-sm btn-outline-dark w-100-res" @click="newOpd.Disease= 'HT/DM/DLD'">HT/DM/DLD</button>
        </div>
        
      </div>
      <div class="form-group row mt-2">
        <label for="personalID" class="col-sm-2 col-form-label">ID</label>
        <div class="col-sm-10">
          <input type="text" maxlength="13" inputmode="numeric" pattern="[0-9]*" class="form-control" id="personalID" placeholder="เลขประจำตัวประชาชน" v-model='newOpd.personalID' >
        </div>
      </div>

      <div class="form-group row mt-2">
        <label for="personalID" class="col-sm-2 col-form-label">Phone no.</label>
        <div class="col-sm-10">
          <input type="text" maxlength="10" inputmode="numeric" pattern="[0-9]*" class="form-control" id="phone" placeholder="เบอร์โทร" v-model='newOpd.phone' >
        </div>
      </div>

      <!-- ส่วนของที่อยู่ -->
      <div>


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
        personalID:'',
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

<style lang="scss" scoped>
.w-100-res{
  width: 18%;
  margin-left:10px;
  margin-top: 10px ;
}
@media screen and (max-width:400px) {
  .w-100-res{
  width: 100%;
  margin-top: 1rem;
}
}
</style>
