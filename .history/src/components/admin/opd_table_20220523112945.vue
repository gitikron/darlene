<template>
<div >
  <table
        class="table table-hover mt-2"
        id="datatable"
        cellspacing="0"
        width="100%"
      >
        <thead>
          <tr class="px-0">
            <th class="fs-res mx-0 px-0">ชื่อ</th>
            <th class="fs-res mx-0 px-0">ชื่อเล่น</th>
            <th class="fs-res mx-0 px-0">เบอร์โทร</th>
            <th class="fs-res mx-0 px-0">
              <span class="material-symbols-outlined text-black-50">edit</span>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item,index in arr" :key="index">
            <td class="fs-res mx-0 px-0">{{ item.firstname+" "+item.lastname}}</td>
            <td class="fs-res mx-0 x-0">{{ item.nickname }}</td>
            <td class="fs-res mx-0 px-0">{{ item.phone }}</td>
            <td class="fs-res mx-0 px-0">
              <button class="btn btn-outline-dark btn-sm material-symbols-outlined" data-bs-toggle="modal" data-bs-target="#editModal" @click="editModel(index)">edit</button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Modal -->
      <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editModalLabel">edit</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                   <form>
        <div class="form-group row">
        <label for="OPDnumber" class="col-sm-2 col-form-label">OPD</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="OPDnumber" v-model='edit.item.OPDnumber' disabled>
        </div>
      </div>
      <div class="form-group row mt-2">
        <label for="firstname" class="col-sm-2 col-form-label">Firstname</label>
        <div class="col-sm-10">
          <input type="text"  class="form-control" id="firstname" placeholder="ชื่อจริง" v-model='edit.item.firstname'>
        </div>
      </div>
      <div class="form-group row mt-2">
        <label for="lastname" class="col-sm-2 col-form-label">Lastname</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="lastname" placeholder="นามสกุล" v-model='edit.item.lastname'>
        </div>
      </div>
      <div class="form-group row mt-2">
        <label for="Nickname" class="col-sm-2 col-form-label">Nickname</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="Nickname" placeholder="ชื่อเล่น" v-model='edit.item.nickname'>
        </div>
      </div>
      <div class="form-group row mt-2">
        <label for="sex" class="col-sm-2 col-form-label">Sex</label>
        <div class="col-sm-8">
          <input type="text" class="form-control" id="sex" placeholder="sex" v-model='edit.item.sex' disabled>
        </div>
        <div class="col-sm-2 mt-1">
          <button class="btn btn-outline-dark btn-sm w-100" @click="changeS()">change</button>
          </div>
      </div>
      <div class="form-group row mt-2">
        <label for="Group" class="col-sm-2 col-form-label">Group</label>
        <div class="col-sm-8">
          <input type="text" class="form-control" id="Group" placeholder="Group" v-model='edit.item.bloodGroup' disabled>
        </div>
        <div class="col-sm-2 mt-1">
          <button class="btn btn-outline-dark btn-sm w-100" @click="changeBloods()">change</button>
          </div>
      </div>
      <div class="form-group row mt-2">
        <label for="CD" class="col-sm-2 col-form-label">Disease</label>
        <div class="col-sm-8">
          <input type="text" class="form-control" id="CD" placeholder="โรคประจำตัว" v-model='edit.item.Disease' >
        </div>
        <div class="col-sm-2 mt-1">
          <button class="btn btn-outline-dark btn-sm w-100" @click="CdControl()">NCDs</button>
          </div>
      </div>
      <div class="form-group row mt-2" v-if="edit.cd===true">
        <div class="card d-block px-2 pt-2 pb-2">
        <button class="btn btn-sm btn-outline-dark w-100-res" @click="edit.item.Disease= 'DM',cd=false">DM</button>
        <button class="btn btn-sm btn-outline-dark w-100-res" @click="edit.item.Disease= 'HT',cd=false">HT</button>
        <button class="btn btn-sm btn-outline-dark w-100-res" @click="edit.item.Disease= 'DLD',cd=false">DLD</button>
        <button class="btn btn-sm btn-outline-dark w-100-res" @click="edit.item.Disease= 'HT/DM',cd=false">HT/DM</button>
        <button class="btn btn-sm btn-outline-dark w-100-res" @click="edit.item.Disease= 'HT/DLD',cd=false">HT/DM</button>
        <button class="btn btn-sm btn-outline-dark w-100-res" @click="edit.item.Disease= 'DM/DLD',cd=false">HT/DM</button>
        <button class="btn btn-sm btn-outline-dark w-100-res" @click="edit.item.Disease= 'HT/DM/DLD',cd=false">HT/DM/DLD</button>
        </div>
        
      </div>
      <div class="form-group row mt-2">
        <label for="personalID" class="col-sm-2 col-form-label">ID</label>
        <div class="col-sm-10">
          <input type="text" maxlength="13" inputmode="numeric" pattern="[0-9]*" class="form-control" id="personalID" placeholder="เลขประจำตัวประชาชน" v-model='edit.item.personalID' >
        </div>
      </div>

      <div class="form-group row mt-2">
        <label for="phone" class="col-sm-2 col-form-label">Phone no.</label>
        <div class="col-sm-10">
          <input type="text" maxlength="10" inputmode="numeric" pattern="[0-9]*" class="form-control" id="phone" placeholder="เบอร์โทร" v-model='edit.item.phone' >
        </div>
      </div>

      <div class="form-group row mt-2">
        <label for="Address" class="col-sm-2 col-form-label">Address</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="Address" placeholder="ที่อยู่" v-model='edit.item.address' >
        </div>
      </div>
                   </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="closeEdit()" >Close</button>
              <button type="button" class="btn btn-primary" @click="saveEdit()">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <!-- end Modal -->
  </div>
</template>

<script>
import "jquery/dist/jquery.min.js";
// import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import axios from "axios";
import $ from "jquery";
const DB_URL =
  "https://databasedarlene-default-rtdb.asia-southeast1.firebasedatabase.app";
export default {
  
  name: 'DarleneVue3OpdTable',

  data() {
    return {
      arr:[],
      edit:{
        index:"",
        item:[],
        cd:false
      }
    };
  },

  mounted() {
    this.GetTable()
  },

  methods: {
    GetTable(){
      axios.get(`${DB_URL}/OPD.json`).then((result) => {
        this.arr=result.data
        this.arr.splice(0,1)
        $(document).ready(function () {
          $("#datatable").DataTable({
            lengthMenu: [
              [ 5,10, 25, 50, -1],
              [ 5,10, 25, 50, "All"],
            ],
            order: [[3, 'desc']],
            pagging: true
          });
        });
      }).catch((err) => {
        console.log(err)
      });
    },
    editModel(index){
      this.edit.index=index
      this.edit.item=this.arr[index]
    },
        changeS(){
      if (this.edit.item.sex=='male') {
        this.edit.item.sex='female'
      } else {
        this.edit.item.sex='male'
      }
    },
    CdControl(){
      if (this.edit.cd==false) {
        this.edit.cd=true
      } else {
        this.edit.cd=false
      }
    },
    changeBloods(){
      if (this.edit.item.bloodGroup == 'A') {
        this.edit.item.bloodGroup ='B'
        return false
      }
      if (this.edit.item.bloodGroup == 'B'){
        this.edit.item.bloodGroup ='AB'
         return false
      }
      if (this.edit.item.bloodGroup == 'AB'){
        this.edit.item.bloodGroup ='O'
         return false
      }
      if (this.edit.item.bloodGroup == 'O'){
        this.edit.item.bloodGroup ='A'
         return false
      }
    },
    closeEdit(){
      this.edit={
        index:"",
        item:[],
        cd:false
      }
    },
    saveEdit(){
      if(confirm("Press a button!\nEither OK or Cancel.")){
        axios.patch(`${DB_URL}/OPD/${this.edit.item.OPDnumber}.json`,this.edit.item).then((result) => {
          this. closeEdit()
          this.GetTable
        }).catch((err) => {
          alert('ERROR:Somthing went worng')
          console.log(err)
        });
      }
    }
  },
};
</script>

<style lang="scss" scoped>
fs-res {
    font-size: 14px;
  }
/* On screens that are 992px or less, set the background color to blue */
@media screen and (max-width: 992px) {
  .fs-res {
    font-size: 10px;
  }
}

/* On screens that are 600px or less, set the background color to olive */
@media screen and (max-width: 600px) {
  .fs-res {
    font-size: 8px;
  }
}
</style>