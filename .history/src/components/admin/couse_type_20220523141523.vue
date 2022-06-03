<template>
  <div>
    <form class="card p-3">
        <div class="form-group row">
        <label for="OPDnumber" class="col-sm-12 col-form-label">Couse Type Name</label>
        <div class="col-sm-12">
          <input type="text" class="form-control" id="OPDnumber" v-model="create.type">
        </div>
      </div>
      <div class="d-flex justify-content-end mt-2">
        <button class="btn btn-sm btn-success" @click="CreateType()">Create</button>
        </div>
    </form>

    <div class="alert alert-danger" role="alert" v-if="alert.control===true" @click="alert.control=false,alert.text=''">
      {{alert.text}},click heare to close alert.
    </div>
    <div class="alert alert-success" role="alert" v-if="alert2.control===true" @click="alert2.control=false,alert2.text=''">
      {{alert2.text}},click heare to close alert.
    </div>

    <div>
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
              <span class="material-symbols-outlined text-black-50">edit</span>
            </th>
            <th class="col-1 fs-res mx-0 px-0">
              <span class="material-symbols-outlined text-black-50">delete</span>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item,index in arr" :key="index">
            <td class="fs-res mx-0 px-0">{{item.type}}</td>
            <td class="fs-res mx-0 px-0">
              <button class="btn btn-outline-dark btn-sm material-symbols-outlined" data-bs-toggle="modal" data-bs-target="#editModal" @click="editModel(index)">edit</button>
            </td>
            <td class="fs-res mx-0 px-0">
              <button class="btn btn-outline-dark btn-sm material-symbols-outlined" data-bs-toggle="modal" data-bs-target="#editModal" @click="delType(index)">delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

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
          this.GetType()
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
    delType(index){
      axios.delete(`${DB_URL}/couse/type/${index}.json`).then((result) => {
          this.alert2.text='Successfuly'
          this.alert2.control=true
          this.GetType()
      }).catch((err) => {
        this.alert.text=err
        this.alert.control=true
      });
    }
  },
};
</script>

<style lang="scss" scoped>

</style>