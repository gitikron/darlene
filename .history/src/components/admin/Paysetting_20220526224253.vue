<template>
<div>
  <div class="d-flex justify-content-end m-2">
    <button class="btn btn-sm btn-primary" @click="change()">create</button>
  </div>
  
  <div class="alert alert-danger" role="alert" v-if="alert.control===true" @click="alert.control=false,alert.text=''">
      {{alert.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
    </div>
    <div class="alert alert-success" role="alert" v-if="alert2.control===true" @click="alert2.control=false,alert2.text=''">
      {{alert2.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
    </div>

    <!--create-->

  <div class="container card p-3 mb-2" v-if="create===true">
    <label for="typename" class="mt-2">วิธีการชำระ</label>
    <input type="text" class="form-control mt-2" name="typename" placeholder="Name" v-model="createData.PayTypeName">
    <label for="typename" class="mt-2">วิธีหักยอด</label>
    <select  class="form-control mt-2" v-model="createData.PayDeduct">
       <option value="">เลือก</option>
        <option value="percent">percent</option>
        <option value="cash">cash</option>
    </select>
    
    <label for="typename" class="mt-2">จำนวนที่หัก</label>
    <input type="number" class="form-control mt-2" placeholder="หักจำนวน(ก่อนคิดค่าคอม)" v-model="createData.PayDeductHow">
    <button class="btn btn-sm btn-success mt-2" @click="createType()">submit</button>
  </div>
  <!--table-->
      <div class="mt-2 mb-2" v-if="create===false">
       <table class="table table-hover mt-2" id="datatable" cellspacing="0" width="100%">
        <thead>
          <tr class="px-0">
            <th class="fs-res mx-0 px-0">list</th>
            <th class="fs-res mx-0 px-0 text-center">วิธีการหัก</th>
            <th class="fs-res mx-0 px-0 text-center">หักจำนวน</th>
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
            <td class="fs-res mx-0 px-0">{{item.PayTypeName}}</td>
            <td class="fs-res mx-0 px-0 text-center">{{item.PayDeduct}}</td>
             <td class="fs-res mx-0 px-0 text-center">{{item.PayDeductHow}}
               <span v-if="item.PayDeduct==='percent'">%</span><span v-if="item.PayDeduct==='cash'">฿</span>
             </td>
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
    <!--modal-->
    <!--modal-->
  <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editModalLabel">Edit</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="alert alert-danger" role="alert" v-if="alert3.control===true" @click="alert3.control=false,alert3.text=''">
              {{alert3.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
            </div>
            <div class="alert alert-success" role="alert" v-if="alert4.control===true" @click="alert4.control=false,alert4.text=''">
              {{alert4.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
            </div>
          <label for="typename" class="mt-2">วิธีการชำระ</label>
          <input type="text" class="form-control mt-2" name="typename" placeholder="Name" v-model="edit.arr.PayTypeName">
          <label for="typename" class="mt-2">วิธีหักยอด</label>
          <select  class="form-control mt-2" v-model="edit.arr.PayDeduct">
            <option value="">เลือก</option>
            <option value="percent">percent</option>
            <option value="cash">cash</option>
          </select>
          <label for="typename" class="mt-2">จำนวนที่หัก</label>
          <input type="number" class="form-control mt-2" placeholder="หักจำนวน(ก่อนคิดค่าคอม)" v-model="edit.arr.PayDeductHow">
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
import { DB_URL } from '@/assets/command';
export default {
  name: 'DarleneVue3Acc',
  data() {
    return {
      create:false,
      arr:[],
      createData:{
        PayTypeName:'',
        PayDeduct:'',
        PayDeductHow:''
      },
      edit:{
        index:'',
        arr:{}
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
      }
    };
  },
  mounted() {
    this.Getdata()
  },
  methods: {
    Getdata(){
        axios.get(`${DB_URL}/finance/type.json`).then((result) => {
          this.arr=result.data
          $(document).ready(function () {
          $("#datatable").DataTable({
            lengthMenu: [
              [ 5,10, 25, 50, -1],
              [ 5,10, 25, 50, "All"],
            ],
            pagging: true
          });
        });
        }).catch((err) => {
          this.alert.text=`การเชื่อต่อผิดพลาด : ${err.status}`
          this.alert.control=true
        });
    },
    Getdata2(){
        axios.get(`${DB_URL}/finance/type.json`).then((result) => {
          this.arr=result.data
          $(document).ready(function () {
          $("#datatable").DataTable({
            lengthMenu: [
              [ 5,10, 25, 50, -1],
              [ 5,10, 25, 50, "All"],
            ],
            pagging: true
          });
        });
        }).catch((err) => {
          this.alert.text=`การเชื่อต่อผิดพลาด : ${err.status}`
          this.alert.control=true
        });
    },
    change(){
      if(this.create==true){
        this.create=false
        }else{
      this.create=true
        }
    },
    validation(){
      if (this.createData.PayTypeName=='') {
        this.alert.text='กรุณาใส่วิธีการชำระ'
        this.alert.control=true
        return false
      }
      if (this.createData.PayDeduct=='') {
        this.alert.text='กรุณาเลือกวิธีหักยอด'
        this.alert.control=true
        return false
      }
      if (this.createData.PayDeductHow<=-1) {
        this.alert.text='กรุณากรอกจำนวนที่หัก'
        this.alert.control=true
        return false
      }
        return true
    },
    validationEdit(){
      if (this.edit.arr.PayTypeName=='') {
        this.alert3.text='กรุณาใส่วิธีการชำระ'
        this.alert3.control=true
        return false
      }
      if (this.edit.arr.PayDeduct=='') {
        this.alert3.text='กรุณาเลือกวิธีหักยอด'
        this.alert3.control=true
        return false
      }
      if (this.edit.arr.PayDeductHow<=-1) {
        this.alert3.text='กรุณากรอกจำนวนที่หัก'
        this.alert3.control=true
        return false
      }
        return true
    },
    createType(){
      if (this.validation()) {
        axios.post(`${DB_URL}/finance/type.json`,this.createData).then((result) => {
          this.alert2.text=`เพิ่มวิธีการชำระเงินสำเร็จ`
          this.alert2.control=true
          this.createData={PayTypeName:'',PayDeduct:'',PayDeductHow:''}
          this.create=false
          this.Getdata2()
        }).catch((err) => {
          this.alert.text=`การเชื่อต่อผิดพลาด : ${err.status}`
          this.alert.control=true
        });
      }
    },
    saveEdit(){
      if (this.validationEdit()) {
        axios.patch(`${DB_URL}/finance/type/${this.edit.index}.json`,this.edit.arr).then((result) => {
          this.alert4.text=`แก้ไขวิธีการชำระเงินสำเร็จ`
          this.alert4.control=true
          this.Getdata2()
        }).catch((err) => {
          this.alert3.text=`การเชื่อต่อผิดพลาด : ${err.status}`
          this.alert3.control=true
        });
      }
    },
    editModel(index){
      this.edit.index=index
      this.edit.arr=this.arr[index]
    },
    deleteModal(index){
      axios.delete(`${DB_URL}/finance/type/${index}.json`).then((result) => {
        this.alert.text=`ลบรายการชำระเงินสำเร็จ`
        this.alert.control=true
        this.Getdata2()
      }).catch((err) => {
        this.alert.text=`การเชื่อต่อผิดพลาด : ${err.status}`
        this.alert.control=true
      });
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
