<template>
  <div>
    <div class="d-flex justify-content-end">
      <button class="btn btn-sm btn-success m-2" @click="swift()">create</button>
    </div>
    <div class="alert alert-danger" role="alert" v-if="alert.control===true" @click="alert.control=false,alert.text=''">
    {{alert.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
    </div>
    <div class="alert alert-success" role="alert" v-if="alert2.control===true" @click="alert2.control=false,alert2.text=''">
    {{alert2.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
    </div>
<!-- create -->
    <div class="card p-2" v-if="control==true">
      <label for="unit" class="mt-2">ชื่อรายการ</label>
      <input type="text" class="form-control" placeholder="ชื่อรายการ" v-model="create.name">
      <label for="unit" class="mt-2">ประเภท</label>
      {{typeindex}}
      <select  class="form-control mt-2" v-model="typeindex">
        <option value="">เลือก</option>
        <option v-for="item,index in type" :key="index" :value="index">{{item.type}}</option>
      </select>
      <div class="d-flex justify-content-end m-2">
        <button class="btn btn-sm btn-success" @click="createNew()">submit</button>
      </div>
    </div>
<!-- body -->
<div class="mt-2" v-if="control===false">
       <table
        class="table table-hover mt-2"
        id="datatable"
        cellspacing="0"
        width="100%"
      >
        <thead>
          <tr class="px-0">
            <th class="fs-res mx-0 px-0">list</th>
            <th class="fs-res mx-0 px-0 text-center">ประเภท</th>
            <th class="fs-res mx-0 px-0 text-center">คงเหลือ</th>
            <th class="fs-res mx-0 px-0 text-center">นำเข้า</th>
            <th class="fs-res mx-0 px-0 text-center">นำออก</th>
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
            <td class="fs-res mx-0 px-0">{{item.name}}</td>
            <td class="fs-res mx-0 px-0 text-center">{{item.type}}</td>
            <td class="fs-res mx-0 px-0 text-center">{{Intl.NumberFormat().format(item.amount)+" "+item.unit}}</td>
            <td class="fs-res mx-0 px-0  text-center">
              <span class="material-symbols-outlined  text-success" v-if="item.mdCommission==='true'">done</span>
              <span class="material-symbols-outlined  text-danger" v-if="item.mdCommission==='false'">close</span>
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

<!-- modal -->
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
  name: 'DarleneVue3StockIndex',

  data() {
    return {
      control:false,
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
      typeindex:'',
      type:[],
      create:{
        name:'',
        type:'',
        amount:0,
        unit:''
      },
      arr:[]
    };
  },

  mounted() {
    this.getType()
    this.getArr()
  },

  methods: {
    swift(){
      if (this.control==false) {
        this.control=true
      }else{
        this.control=false
      }
    },
    getType(){
      axios.get(`${DB_URL}/stock/type.json`).then((result) => {
        this.type=result.data
      }).catch((err) => {
        this.alert.text='การเชื่อมต่อผิดพลาด'
        this.alert.control=true
      });
    },
    validation(){
      if(this.create.name==''){
        this.alert.text='กรุณากรอกชื่อรายการ'
        this.alert.control=true
        return false
      }
      if(this.typeindex==''){
        this.alert.text='กรุณาเลือกประเภท'
        this.alert.control=true
        return false
      }
      return true
    },
    createNew(){
      if (this.validation()) {
        this.create.type=this.type[this.typeindex].type
        this.create.unit=this.type[this.typeindex].unit
        axios.post(`${DB_URL}/stock/list.json`,this.create).then((result) => {
          this.alert2.text='บันทึกสำเร็จ'
          this.alert2.control=true
          this.create={name:'',type:'',amount:0,unit:''}
          this.typeindex=''
          this.control=false
        }).catch((err) => {
          this.alert.text='การเชื่อต่อผิดพลาด'
          this.alert.control=true
        });
      }
    },
    getArr(){
      axios.get(`${DB_URL}/stock/list.json`).then((result) => {
          this.arr=result.data
        }).catch((err) => {
          this.alert.text='การเชื่อต่อผิดพลาด'
          this.alert.control=true
        });
    }
  }
};
</script>

<style lang="scss" scoped>

</style>