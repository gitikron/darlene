<template>
  <div>
    <div class="d-flex justify-content-end m-2">
      <button class="btn btn-sm btn-primary" @click="swift()">create</button>
    </div>
    <div class="alert alert-danger" role="alert" v-if="alert.control===true" @click="alert.control=false,alert.text=''">
    {{alert.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
    </div>
    <div class="alert alert-success" role="alert" v-if="alert2.control===true" @click="alert2.control=false,alert2.text=''">
    {{alert2.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
    </div>
    <!--body-->
    <div v-if="createControl===true">
      <label for="typename">ประเภท</label>
      <input type="text" class="form-control" placeholder="ชื่อประเภท" v-model="data.type">
      {{data}}
      <div class="d-flex justify-content-end m-2">
        <button class="btn btn-sm btn-success" v-on:click="submitCreate()">Submit</button>
      </div>
    </div>
    <!--body-->
    <div v-if="createControl===false">
      <table class="table table-hover mt-2"  id="datatable" cellspacing="0" width="100%">
        <thead>
          <tr class="px-0">
            <th class="fs-res mx-0 px-0">list</th>
            <th class="fs-res mx-0 px-0 text-center">
              <span class="material-symbols-outlined text-warning">edit</span>
            </th>
            <th class="fs-res mx-0 px-0 text-center">
              <span class="material-symbols-outlined text-danger">delete</span>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item,index in arr" :key="index">
            <td class="fs-res mx-0 px-0">{{item.type}}</td>
            <td class="fs-res mx-0 px-0 text-center">
              <button class="btn btn-sm material-symbols-outlined  text-warning" data-bs-toggle="modal" data-bs-target="#editModal" @click="editModel(index)">edit</button>
            </td>
            <td class="fs-res mx-0 px-0 text-center">
              <button class="btn btn-sm material-symbols-outlined text-danger" @click="deleteModal(index)">delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- modal -->
<div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editModalLabel">edit</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- body -->
          <div class="alert alert-danger" role="alert" v-if="alert3.control===true" @click="alert3.control=false,alert3.text=''">
          {{alert3.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
          </div>
          <div class="alert alert-success" role="alert" v-if="alert4.control===true" @click="alert4.control=false,alert4.text=''">
          {{alert4.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
          </div>
          <!-- body -->
          <input type="text" class="form-control" v-model="edit.arr.type">
          <!-- body -->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
          <button type="button" class="btn btn-primary" @click="saveEdit()">Save changes</button>
        </div>
      </div>
    </div>
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
  name: 'DarleneVue3StockType',
  data() {
    return {
      edit:{
        index:'',
        arr:[]
      },
      arr:[],
      createControl:false,
      data:{
        type:''
      },
      alert:{
        text:'',
        control:false
      },
      alert2:{
        text:'',
        control:false
      },
      alert3:{
        text:'',
        control:false
      },
      alert4:{
        text:'',
        control:false
      },
    };
  },

  mounted() {
    this.getArr()
    $(document).ready(function () {
          $("#datatable").DataTable({
            lengthMenu: [
              [ 10, 25, 50, -1],
              [ 10, 25, 50, "All"],
            ],
            order: [[1, 'desc']],
            pagging: true
          });
        });
  },
  methods: {
    edtValidation(){
      if(this.edit.arr.type==''){
        this.alert3.text='กรุณากรอกข้อมูล'
        this.alert3.control=true
        return false
      }
      return true
    },
    saveEdit(){
      if (this.edtValidation()) {
        axios.patch(`${DB_URL}/stock/type/${this.edit.index}.json`,this.edit.arr).then((result) => {
          this.alert4.text='แก้ไขรายการสำเร็จ'
          this.alert4.control=true
          this.getArr2()
        }).catch((err) => {
          this.alert3.text='การเชื่อต่อผิดพลาด'
          this.alert3.control=true
        });
      }
    },
    editModel(index){
      this.edit.index=index
      this.edit.arr=this.arr[index]
    },
    swift(){
      if (this.createControl==true) {
        this.createControl=false
      }else{
        this.createControl=true
      }
    },
    validation(){
      if(this.data.type==''){
        this.alert.text='กรุณากรอกข้อมูล'
        this.alert.control=true
        return false
      }
      return true
    },
    submitCreate(){
      if (this.validation()) {
            axios.post(`${DB_URL}/stock/type.json`,this.data).then((result) => {
            this.alert2.text='กรุณากรอกข้อมูล'
            this.alert2.control=true
            this.createControl=false
            this.data.type=''
            this.createControl=false
            this.getArr2()
          }).catch((err) => {
            this.alert.text='การเชื่อต่อผิดพลาด'
            this.alert.control=true
          });
        }
      },
    getArr(){
      axios.get(`${DB_URL}/stock/type.json`).then((result) => {
        this.arr=result.data
      }).catch((err) => {
        this.alert.text='การเชื่อต่อผิดพลาด'
        this.alert.control=true
      });
    },
    getArr2(){
      axios.get(`${DB_URL}/stock/type.json`).then((result) => {
        this.arr=result.data
      }).catch((err) => {
        this.alert.text='การเชื่อต่อผิดพลาด'
        this.alert.control=true
      });
    },
    deleteModal(index){
      axios.delete(`${DB_URL}/stock/type/${index}.json`).then((result) => {
        this.getArr2()
      }).catch((err) => {
        this.alert.text='การเชื่อต่อผิดพลาด'
        this.alert.control=true
      });
    }
      
  },

};
</script>

<style lang="scss" scoped>

</style>