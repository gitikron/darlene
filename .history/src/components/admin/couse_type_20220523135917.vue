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
            <th class="fs-res mx-0 px-0">ชื่อ</th>
            <th class="fs-res mx-0 px-0">
              <span class="material-symbols-outlined text-black-50">edit</span>
            </th>
            <th class="fs-res mx-0 px-0">
              <span class="material-symbols-outlined text-black-50">delete</span>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item,index in arr" :key="index">
            <td class="fs-res mx-0 px-0">{{arr.name}}</td>
            <td class="fs-res mx-0 px-0">
              <button class="btn btn-outline-dark btn-sm material-symbols-outlined" data-bs-toggle="modal" data-bs-target="#editModal" @click="editModel(index)">edit</button>
            </td>
            <td class="fs-res mx-0 px-0">
              <button class="btn btn-outline-dark btn-sm material-symbols-outlined" data-bs-toggle="modal" data-bs-target="#editModal" @click="editDel(index)">delete</button>
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
        control:true
      },
      alert2:{
        text:'',
        control:true
      }
      
    };
  },

  mounted() {
    
  },

  methods: {
    CreateType(){
      if(this.create.type!==''){
        axios.post(`${DB_URL}/couse/type.json`,this.create)
      }else{
        alert('ss')
      }
      
    }
  },
};
</script>

<style lang="scss" scoped>

</style>