<template>
  <div>
    <div class="d-flex justify-content-end">
      <button class="btn btn-primary btn-sm" @click="controllerX()">create</button>
    </div>
    
    <div class="mt-2" v-if="controler===true">
    <div class="alert alert-danger" role="alert" v-if="alert.control===true" @click="alert.control=false,alert.text=''">
      {{alert.text}},click heare to close alert.
    </div>
    <div class="alert alert-success" role="alert" v-if="alert2.control===true" @click="alert2.control=false,alert2.text=''">
      {{alert2.text}},click heare to close alert.
    </div>
      <div class="d-flex justify-content-center">
        <img :src="create.display" alt="demoDisplay" class="display-100" v-if="create.display!=''">
      </div>
      <div>
        <label for="upload">Display (PNG/JPEG/GIF size:100*100px)</label>
      <input accept="image/*" class="mt-10 w-100 form-control" type="file"  @change="onFileSelected($event)"/>
      </div>
      <div class="mt-2">
        <label for="CouseName">type</label>
        <select class="form-control" v-model="create.type">
          <option value="">เลือกประเภท</option>
        <option v-for="item,index in inventory" :value="item.type" :key="index">
          {{ item.type }}
          </option>
        </select>
      </div>
      <div class="mt-2">
        <label for="CouseName">Couse Name</label>
        <input class="form-control" name="CouseName" type="tet" placeholder="Couse Name" v-model="create.couseName">
      </div>
      <div class="mt-2">
        <label for="CouseName">ราคา</label>
        <input class="form-control" type="number" placeholder="ราคา" v-model="create.price">
      </div>
      <div class="mt-2">
        <label for="CouseName">จำนวนครั้ง</label>
        <input class="form-control" type="number" placeholder="จำนวนครั้ง" v-model="create.per">
      </div>
       <div class="mt-2">
        <label for="therapistComm">ค่ามือ/ครั้ง</label>
        <input class="form-control" type="number" placeholder="ค่ามือ/ครั้ง" v-model="create.therapistComm">
      </div>
      <div class="mt-2">
        <label for="therapistComm">ค่าหมอ</label>
        <input class="form-control" type="number" placeholder="ค่ามือ/ครั้ง" v-model="create.mdHand">
      </div>
       <div class="mt-2" >
          <label for="mdCommission">MD Commission</label>
          <select  class="form-control" v-model="create.mdCommission">
            <option value="false">ไม่มี</option>
            <option value="true">มี</option>
          </select>
     </div>
      <div class="d-flex justify-content-end mt-2">
         <button class="btn btn-success btn-sm" @click="CreateCouse()">Submit</button>
      </div>
    </div>

    <div class="mt-2" v-if="controler===false">
       <table
        class="table table-hover mt-2"
        id="datatable"
        cellspacing="0"
        width="100%"
      >
        <thead>
          <tr class="px-0">
            <th class="fs-res mx-0 px-0">Display</th>
            <th class="fs-res mx-0 px-0">list</th>
            <td class="fs-res mx-0 px-0">Type</td>
            <td class="fs-res mx-0 px-0 text-center">จำนวน</td>
            <td class="fs-res mx-0 px-0 text-center">ราคา</td>
            <td class="fs-res mx-0 px-0 text-center">ค่ามือ</td>
            <td class="fs-res mx-0 px-0 text-center">ค่าหมอ</td>
            <td class="fs-res mx-0 px-0 text-center">MD Comm</td>
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
            <td class="fs-res mx-0 px-0"> <img class="display-100" :src="item.display" alt=""></td>
            <td class="fs-res mx-0 px-0">{{item.couseName}}</td>
            <td class="fs-res mx-0 px-0">{{item.type}}</td>
            <td class="fs-res mx-0 px-0 text-end">{{ Intl.NumberFormat().format(item.per) }} ครั้ง</td>
            <td class="fs-res mx-0 px-0 text-end">{{ Intl.NumberFormat().format(item.price) }} บาท</td>
            <td class="fs-res mx-0 px-0 text-end">{{ Intl.NumberFormat().format(item.therapistComm) }} บาท</td>
             <td class="fs-res mx-0 px-0 text-end">{{ Intl.NumberFormat().format(item.mdHand) }} บาท</td>
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
<!--modal-->
  <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editModalLabel">Edit</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
              <div class="alert alert-danger" role="alert" v-if="alert.control===true" @click="alert.control=false,alert.text=''">
            {{alert.text}},click heare to close alert.
          </div>
          <div class="alert alert-success" role="alert" v-if="alert2.control===true" @click="alert2.control=false,alert2.text=''">
            {{alert2.text}},click heare to close alert.
          </div>
            <div class="d-flex justify-content-center">
              <img :src="edit.arr.display" alt="demoDisplay" class="display-100" v-if="edit.arr.display!=''">
            </div>
            <div>
              <label for="upload">Display (PNG/JPEG/GIF size:100*100px)</label>
            <input accept="image/*" class="mt-10 w-100 form-control" type="file"  @change="onFileSelected2($event)"/>
            </div>
            <div class="mt-2">
              <label for="CouseName">type</label>
              <option value="">เลือกประเภท</option>
              <select class="form-control" v-model="edit.arr.type">
              <option v-for="item,index in inventory" :value="item.type" :key="index">
                {{ item.type }}
                </option>
              </select>
            </div>
            <div class="mt-2">
              <label for="CouseName">Couse Name</label>
              <input class="form-control" name="CouseName" type="tet" placeholder="Couse Name" v-model="edit.arr.couseName">
            </div>
            <div class="mt-2">
              <label for="CouseName">ราคา</label>
              <input class="form-control" type="number" placeholder="ราคา" v-model="edit.arr.price">
            </div>
            <div class="mt-2">
              <label for="CouseName">จำนวนครั้ง</label>
              <input class="form-control" type="number" placeholder="จำนวนครั้ง" v-model="edit.arr.per">
            </div>
             <div class="mt-2">
              <label for="therapistComm">ค่ามือ/ครั้ง</label>
              <input class="form-control" type="number" placeholder="ค่ามือ/ครั้ง" v-model="edit.arr.therapistComm">
            </div>
            <div class="mt-2">
              <label for="therapistComm">ค่าหมอ</label>
              <input class="form-control" type="number" placeholder="ค่ามือ/ครั้ง" v-model="edit.arr.mdHand">
            </div>
            <div class="mt-2" >
                <label for="mdCommission">MD Commission</label>
                <select  class="form-control" v-model="edit.arr.mdCommission">
                  <option value="false">ไม่มี</option>
                  <option value="true">มี</option>
                </select>
          </div>
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
  name: 'DarleneVue3CouseTbl',

  data() {
    return {
      controler:false,
      inventory:[],
      arr:[],
      create:{
        display:"",
        couseName:"",
        therapistComm:0,
        price:"",
        type:"",
        per:1,
        mdHand:0,
        mdCommission:"false"
      },
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
        arr:{},

      }
    };
  },

  mounted() {
    this.getArr()
    this.getInventory()
  },

  methods: {
    saveEdit(){
      if (this.ValidateEdit()) {
         axios.patch(`${DB_URL}/couse/list/${this.edit.index}.json`,this.edit.arr).then((result) => {
          this.alert2.text='Successfuly'
          this.alert2.control=true
        }).catch((err) => {
          this.alert.text='Somyhing went wrong'
          this.alert.control=true
        });
      }
    },
     ValidateEdit(){
      if(this.edit.arr.display==''){
        alert('Some fill is empty')
        return false
      }
      if(this.edit.arr.type==''){
         alert('Some fill is empty')
        return false
      }
      if(this.edit.arr.couseName==''){
         alert('Some fill is empty')
        return false
      }
      if(this.edit.arr.price==''){
         alert('Some fill is empty')
        return false
      }
      if(this.edit.arr.per==''){
        alert('Some fill is empty')
        return false
      }
      if(this.edit.arr.therapistComm==''){
        alert('Some fill is empty')
        return false
      }
      if(this.edit.arr.mdHand==''){
        alert('Some fill is empty')
        return false
      }
      if(this.edit.arr.mdCommission==''){
        alert('Some fill is empty')
        return false
      }
      return true
    },
    editModel(index){
      this.edit.index=index
      this.edit.arr=this.arr[index]
      console.log( this.edit)
    },

    controllerX(){
      if(this.controler==true){
        this.controler=false
      }else{
        this.controler=true
      }
    },
    onFileSelected2(event,index){
     //Recive file
      const file = event.target.files[0]
      //convert to base64
      const reader = new FileReader()
      reader.addEventListener('load', () => {
      this.edit.arr.display=reader.result
      })
      reader.readAsDataURL(file)
    },
    onFileSelected(event,index){
     //Recive file
      const file = event.target.files[0]
      //convert to base64
      const reader = new FileReader()
      reader.addEventListener('load', () => {
      this.create.display=reader.result
      })
      reader.readAsDataURL(file)
    },
    CreateCouse(){
      if(this.Validate()){
        axios.post(`${DB_URL}/couse/list.json`,this.create).then((result) => {
          this.alert2.text='Successfuly'
          this.alert2.control=true
          this.create={display:"",couseName:"",therapistComm:"",price:"",per:"",mdHand:"",mdCommission:"false"}
          this.controler=false
          this.getArr2()
        }).catch((err) => {
          this.alert.text='Somyhing went wrong'
          this.alert.control=true
        });
      }
    },
    Validate(){
      if(this.create.display==''){
        this.alert.text='Display fill is empty'
        this.alert.control=true
        return false
      }
      if(this.create.couseName==''){
        this.alert.text='Couse Name fill is empty'
        this.alert.control=true
        return false
      }
      if(this.create.type==''){
        this.alert.text='Type fill is empty'
        this.alert.control=true
        return false
      }
      if(this.create.price==''){
        this.alert.text='Price fill is empty'
        this.alert.control=true
        return false
      }
      if(this.create.per==''){
        this.alert.text='Per fill is empty'
        this.alert.control=true
        return false
      }
      if(this.create.therapistComm==''){
        this.alert.text='therapistComm fill is empty'
        this.alert.control=true
        return false
      }
      if(this.create.mdHand==''){
        this.alert.text='mdHand fill is empty'
        this.alert.control=true
        return false
      }
      if(this.create.mdCommission==''){
        this.alert.text='mdCommission fill is empty'
        this.alert.control=true
        return false
      }
      return true
    },
    getArr(){
      axios.get(`${DB_URL}/couse/list.json`).then((result) => {
        this.arr=result.data
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
        this.alert.text='DB connection went wrong'
        this.alert.control=true
      });
    },
     getArr2(){
      axios.get(`${DB_URL}/couse/list.json`).then((result) => {
        this.arr=result.data
      }).catch((err) => {
        this.alert.text='DB connection went wrong'
        this.alert.control=true
      });
    },
    getInventory(){
      axios.get(`${DB_URL}/couse/type.json`).then((result) => {
        this.inventory=result.data
      }).catch((err) => {
         this.alert.text='DB connection went wrong'
        this.alert.control=true
      });
    },
    deleteModal(index){
      axios.delete(`${DB_URL}/couse/list/${index}.json`).then((result) => {
        this.getArr2()
      }).catch((err) => {
        this.alert.text='DB connection went wrong'
        this.alert.control=true
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.display-100{
  width: 60px;
  height: 60px;
}
.fs-res {
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