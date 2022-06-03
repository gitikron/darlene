<template>
  <div>
    <form class="card p-3">
        <div class="form-group row">
        <label for="OPDnumber" class="col-sm-12 col-form-label">Couse Type Name</label>
        <div class="col-sm-12">
          <input type="text" class="form-control" id="OPDnumber" placeholder="Couse Type Name" v-model="create.type">
        </div>
      </div>
      <div class="d-flex justify-content-end mt-2">
        <button class="btn btn-sm btn-success" @click="CreateType()">Create</button>
        </div>
    </form>

    <div class="alert alert-danger" role="alert" v-if="alert.control===true" @click="alert.control=false,alert.text=''">
      {{alert.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
    </div>
    <div class="alert alert-success" role="alert" v-if="alert2.control===true" @click="alert2.control=false,alert2.text=''">
      {{alert2.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
    </div>

    <div class="mt-2">
       <table
        class="table table-hover mt-2"
        id="datatable"
        cellspacing="0"
        width="100%"
      >
        <thead>
          <tr class="px-0">
            <th class="col-10 fs-res mx-0 px-0">ชื่อ</th>
            <th class="col-1 fs-res mx-0 px-0">
              <span class="material-symbols-outlined text-warning">edit</span>
            </th>
            <th class="col-1 fs-res mx-0 px-0">
              <span class="material-symbols-outlined text-danger">delete</span>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item,index in arr" :key="index">
            <td class="fs-res mx-0 px-0">{{item.type}}</td>
            <td class="fs-res mx-0 px-0">
              <button class="btn btn-sm material-symbols-outlined text-warning" data-bs-toggle="modal" data-bs-target="#editModal" @click="edit.index=index">edit</button>
            </td>
            <td class="fs-res mx-0 px-0">
              <button class="btn btn-sm material-symbols-outlined text-danger" @click="delType(index)">delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>


<!--modal-->
  <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editModalLabel">edit</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <label for="TypeName">Type Name</label>
          <input name="TypeName" type="text" class="col12 form-control" placeholder="Type Name" v-model="edit.type">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="closeEdit()" >Close</button>
          <button type="button" class="btn btn-primary" @click="saveEdit()">Save changes</button>
        </div>
      </div>
    </div>
  </div>
<!--modal-->
  </div>
</template>

<script>
import "jquery/dist/jquery.min.js";
// import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import axios from "axios";
import $ from "jquery";
import command from '@/assets/command';
const DB_URL = command.DB_URL
export default {
  name: 'DarleneVue3CouseType',
  data() {
    return {
      create: {
        type:''
      },
      arr:[],
      alert:{
        text:'',
        control:false 
      },
      alert2:{
        text:'',
        control:false
      },
      edit:{
        index:'',
        type:''
      }
      
    };
  },

  mounted() {
    this.GetType()
  },

  methods: {
    CreateType(){
      if(this.create.type!==''){
        axios.post(`${DB_URL}/couse/type.json`,this.create).then((result) => {
          this.alert2.text='Successfuly'
          this.alert2.control=true
          this.GetType2()
          this.create.arr=[]
        }).catch((err) => {
          this.alert.text='Somthinf went worg'
          this.alert.control=true
        });
      }else{
       this.alert.text='Couse Type Name is Empty '
       this.alert.control=true
      }
    },
    GetType(){
      axios.get(`${DB_URL}/couse/type.json`).then((result) => {
        this.arr=result.data
        $(document).ready(function () {
          $("#datatable").DataTable({
            lengthMenu: [
              [ 5,10, 25, 50, -1],
              [ 5,10, 25, 50, "All"],
            ],
            order: [[1, 'desc']],
            pagging: true
          });
        });
      }).catch((err) => {
        this.alert.text=err
        this.alert.control=true
      });
    },
    GetType2(){
      axios.get(`${DB_URL}/couse/type.json`).then((result) => {
        this.arr=result.data
      }).catch((err) => {
        this.alert.text=err
        this.alert.control=true
      });
    },
    delType(index){
      axios.delete(`${DB_URL}/couse/type/${index}.json`).then((result) => {
          this.alert2.text='Successfuly'
          this.alert2.control=true
          this.GetType2()
      }).catch((err) => {
        this.alert.text=`connection error`
        this.alert.control=true
      });
    },
    closeEdit(){
      this.edit={
        index:"",
        type:"",
        cd:false
      }
    },
    saveEdit(){
      if(confirm("Press a button!\nEither OK or Cancel.")){
        axios.patch(`${DB_URL}/couse/type/${this.edit.index}.json`,{type:this.edit.type}).then((result) => {
          this.alert2.text='Successfuly'
          this.alert2.control=true
          this. GetType2()
        }).catch((err) => {
          this.alert.text=`connection error`
          this.alert.control=true
          console.log(err)
        });
      }
    }
  },
  
};
</script>

<style lang="scss" scoped>

</style>