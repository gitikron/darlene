<template>
  <div>
    <div class="alert alert-danger" id="alert" role="alert" v-if="alert.control===true" @click="alert.control=false,alert.text=''">
      {{alert.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
    </div>
    <div class="alert alert-success" id="alert" role="alert" v-if="alert2.control===true" @click="alert2.control=false,alert2.text=''">
      {{alert2.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
    </div>
    <div class="d-flex justify-content-end m-2">
      <button class="btn btn-sm btn-success" @click="swift()">Create</button>
    </div>

    <div class="card m-2 p-2" v-if="switchs===true">
      <label class="mt-2" for="username">Username</label>
      <input type="text" min="8" max="32" class="form-control mt-2" placeholder="Username" v-model="personal.username">
      <label class="mt-2" for="username">Password</label>
      <input type="password" min="8" max="32" class="form-control mt-2" placeholder="Password" v-model="pass.password1">
      <label class="mt-2" for="username">Confirm Password</label>
      <input type="password" min="8" max="32" class="form-control mt-2" placeholder="Confirm Password" v-model="pass.password2">
      <label class="mt-2" for="username">สถานะ</label>
      <select id="position" class="form-control mt-2" v-model="personal.role" @change="Selectdata()">
         <option value="">เลือกสถานะ</option>
        <option value="admin">admin</option>
        <option value="doctor">doctor</option>
        <option value="sale">sale</option>
      </select>
      <label class="mt-2" for="username">รูปแบบ</label>
      <select id="position" class="form-control mt-2" v-model="personal.position" :disabled="personal.role===''">
         <option value="">เลือกรูปแบบ</option>
          <option v-for="item,index in choice" :key="index"  :value="item.value">{{item.value}}</option>
      </select>
      <label class="mt-2" for="username">ชื่อ</label>
      <input type="text" class="form-control mt-2" placeholder="Name" v-model="personal.name">
      <div class="d-flex justify-content-end m-2">
        <button class="btn btn-sm btn-success" @click="createSubmit()">Submit</button>
      </div>
    </div>

    <div class="card m-2 p-2" v-if="switchs===false">
      <table class="table table-hover mt-2" id="datatable" cellspacing="0" width="100%">
        <thead>
          <tr class="px-0">
            <th class="fs-res mx-0 px-0">Username</th>
            <th class="fs-res mx-0 px-0">ชื่อ</th>
            <th class="fs-res mx-0 px-0">ตำแหน่ง</th>
            <th class="fs-res mx-0 px-0">รูปแบบ</th>
            <th class="fs-res mx-0 px-0">Create</th>
            <th class="fs-res mx-0 px-0 text-center">
              <span class="material-symbols-outlined text-black-50">key</span>
            </th>
            <th class="fs-res mx-0 px-0 text-center">
              <span class="material-symbols-outlined text-black-50">delete</span>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item,index in arr" :key="index">
            <td class="fs-res mx-0 x-0">{{ item.username }}</td>
            <td class="fs-res mx-0 px-0">{{item.name}}</td>
            <td class="fs-res mx-0 px-0">{{item.role}}</td>
            <td class="fs-res mx-0 x-0">{{item.position}}</td>
            <td class="fs-res mx-0 px-0">{{ item.create }}</td>
            <td class="fs-res mx-0 px-0 text-center">
              <button class="btn btn-sm material-symbols-outlined" data-bs-toggle="modal" data-bs-target="#editModal" @click="repass.username=item.username,repass.index=index,editModel(index)">key</button>
            </td>
            <td class="fs-res mx-0 px-0 text-center">
              <button class="btn btn-sm material-symbols-outlined text-danger" @click="deleteModel(index)">delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    
    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editModalLabel">edit</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <!-- body -->
        <label for="username">Username</label>
        <input type="text" class="form-control" v-model="repass.username" disabled>
        <label for="username">Password</label>
        <input type="text" class="form-control" v-model="repass.password1" placeholder="Password">
        <label for="username">Confirm Password</label>
        <input type="text" class="form-control" v-model="repass.password2" placeholder="Confirm Password">
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
import $ from "jquery";
import sha1 from 'sha1'
import moment from 'moment'
import axios from 'axios';
import command from '../../assets/command'
const _ =require("lodash")
export default {
  name: 'DarleneVue3AdminAccount',
  data() {
    return {
      repass:{
        index:'',
        username:'',
        password1:'',
        password2:''
      },
      choice:{},
      pass:{
        password1:'',
        password2:''
      },
      personal: {
        username: "",
        password: "",
        name: "",
        role: "",
        position: "",
        create: ""
      },
      switchs:false,
      alert:{
        text:"",
        control:false
      },
      alert2:{
        text:"",
        control:false
      },
      aler3:{
        text:"",
        control:false
      },
      alert4:{
        text:"",
        control:false
      },
      arr:[]
    };
  },

  mounted() {
    this.GetArr()
    setInterval(() => {
      if(this.alert.control==true){
          this.alert.control=false
      }
      if(this.alert2.control==true){
          this.alert.control=false
      }
      if(this.alert3.control==true){
          this.alert.control=false
      }
      if(this.alert4.control==true){
          this.alert.control=false
      }
    }, 30000);
  },

  methods: {
    deleteModel(index){
      axios.delete(`${command.DB_URL}/auth/${index}.json`).then((result) => {
        this.alert2.text='ลบรายการสำเร็จ'
        this.alert2.control=true 
        this.GetArr()
      }).catch((err) => {
        this.alert.text='การเชื่อมต่อผิดพลาด'
        this.alert.control=true
      });
    },
    GetArr(){
        axios.get(`${command.DB_URL}/auth.json`).then((result) => {
        this.arr=result.data
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
      }).catch((err) => {
        this.alert.text='การเชื่อมต่อผิดพลาด'
        this.alert.control=true
      });

    },
    swift(){
      if (this.switchs==true) {
        this.switchs=false
        this.GetArr()
      }else{
        this.switchs=true
      }
    },
    Selectdata(){
      if (this.personal.role=='admin') {
        this.choice=[{value:"admin"},{value:"manager"}]
      }
      if (this.personal.role=='doctor') {
        this.choice=[{value:"normal"},{value:"CBC commission"}]
      }
      if (this.personal.role=='sale') {
        this.choice=[{value:"normal"},{value:"CBC commission"}]
      }
      if (this.personal.role=='') {
        this.personal.position=''
        this.choice=[]
      }
    },
    createSubmit(){
    if(this.validation()){
      axios.get(`${command.DB_URL}/auth/${this.personal.username}.json`).then((result) => {
        if (result.data==null){
          this.personal.create=moment(Date.now()).format("DD/MM/YYYY");
        this.personal.password=sha1(this.pass.password1)
        axios.patch(`${command.DB_URL}/auth/${this.personal.username}.json`,this.personal).then((result) => {
          this.alert2.text = 'บันทึกข้อมูลสำเร็จ'
          this.alert2.control = false
          this.pass={password1:'',password2:''}
          this.personal= {username: "",password: "",name: "",role: "",position: "",create: ""}
          this.swift()
        }).catch((err) => {
          this.alert.text='การเชื่อมต่อผิดพลาด'
          this.alert.control=true
        });
        }else{
          this.alert.text='Uername ข้อมูลซ้ำในระบบ'
          this.alert.control=true
          this.personal.username=''
          this.pass.password1=''
          this.pass.password2=''
        return false
        }
         
      }).catch((err) => {
        this.alert.text='การเชื่อมต่อผิดพลาด'
        this.alert.control=true
      });
    }
    },
    validation(){
      if (this.personal.username.length<=7) {
        this.alert.text='กรุณากรอก Username อย่างน้อย 8 ตัว'
        this.alert.control=true
        return false
      }
      if (this.pass.password1.length<=7) {
        this.alert.text='กรุณากรอก Password อย่างน้อย 8 ตัว'
        this.alert.control=true
        return false
      }
      if (this.personal.username=='') {
        this.alert.text='กรุณากรอก Username'
        this.alert.control=true
        return false
      }
      if (this.pass.password1=='') {
        this.alert.text='กรุณากรอก Password'
        this.alert.control=true
        return false
      }
      if (this.pass.password2=='') {
        this.alert.text='กรุณากรอก Confirm Password'
        this.alert.control=true
        return false
      }
      if (this.pass.password2!=this.pass.password1) {
        this.alert.text='กรุณากรอก Password ให้ตรงกัน'
        this.alert.control=true
        return false
      }
      if (this.personal.name=='') {
        this.alert.text='กรุณากรอกชื่อ'
        this.alert.control=true
        return false
      }
      if (this.personal.role=='') {
        this.alert.text='กรุณาเลือกสถานะ'
        this.alert.control=true
        return false
      }
      if (this.personal.position=='') {
        this.alert.text='กรุณาเลือกรูปแบบ'
        this.alert.control=true
        return false
      }
      return true
       
    },
    
  }
};
</script>

<style lang="scss" scoped>

</style>