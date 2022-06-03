<template>
  <div>
    <div class="d-flex justify-content-end">
      <button class="btn btn-sm btn-success mx-2" @click="swiftUnit()">create</button>
    </div>
    <div class="alert alert-danger" role="alert" v-if="alert.control===true" @click="alert.control=false,alert.text=''">
    {{alert.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
    </div>
    <div class="alert alert-success" role="alert" v-if="alert2.control===true" @click="alert2.control=false,alert2.text=''">
    {{alert2.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
    </div>

    <!--create-->
    <div v-if="unitControl===true">
      <div class="d-flex justify-content-center">
        <img :src="create.display" alt="demoDisplay" class="display-100" v-if="create.display!=''">
      </div>
      <div>
        <label for="upload">Display (PNG/JPEG/GIF size:100*100px)</label>
      <input accept="image/*" class="mt-10 w-100 form-control" type="file"  @change="onFileSelected($event)"/>
      </div>
      <label for="itemName" class="mt-2">ชื่อสินค้า</label>
      <input type="text" class="form-control mt-2" placeholder="Item Name" v-model="create.ItemName">

      <label for="price" class="mt-2">ราคา</label>
      <input type="number" class="form-control mt-2" placeholder="Price" v-model="create.price">

      <label for="amount" class="mt-2">จำนวน</label><span class="text-danger">{{textspan}}</span>
      <input type="number" class="form-control mt-2" placeholder="amount" v-model="create.amount">
        
      <label for="unit" class="mt-2">หน่วย</label>
      <select  class="form-control mt-2" v-model="create.unit">
        <option value="">เลือก</option>
        <option v-for="item,index in unit" :key="index" :value="item.units">{{item.units}}</option>
      </select>

      <label for="therapistComm" class="mt-2">ค่ามือ (ได้ทุกครั้งที่บริการ)</label>
      <input type="number" class="form-control mt-2" placeholder="amount" v-model="create.therapistComm">

      <label for="mdhand" class="mt-2">ค่าหมอ</label>
      <input type="number" class="form-control mt-2" placeholder="amount" v-model="create.mdHand">

      <label for="mdCommission"  class="mt-2">MD Commission</label>
          <select  class="form-control" v-model="create.mdCommission">
            <option value="">เลือก</option>
            <option value="false">ไม่มี</option>
            <option value="true">มี</option>
          </select>

      <div class="d-flex justify-content-end m-2">
        <button class="btn btn-sm btn-success" @click="createItems()">submit</button>
      </div>
    </div>
  <!--body-->
<div class="mt-2" v-if="unitControl===false">
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
            <th class="fs-res mx-0 px-0">ราคา</th>
            <th class="fs-res mx-0 px-0">จำนวน</th>
            <th class="fs-res mx-0 px-0 text-center">ราคา:หน่วย</th>
            <th class="fs-res mx-0 px-0 text-center">ค่ามือ</th>
            <th class="fs-res mx-0 px-0 text-center">ค่าหมอ</th>
            <th class="fs-res mx-0 px-0 text-center">MD Comm.</th>
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
            <td class="fs-res mx-0 px-0">{{item.ItemName}}</td>
            <td class="fs-res mx-0 px-0 text-center">{{Intl.NumberFormat().format(item.price)}} บาท</td>
            <td class="fs-res mx-0 px-0 text-center">{{Intl.NumberFormat().format(item.amount)+" "+item.unit}}</td>
            <td class="fs-res mx-0 px-0 text-center">{{ Intl.NumberFormat().format(item.therapistComm) }} บาท</td>
            <td class="fs-res mx-0 px-0 text-center">{{ Intl.NumberFormat().format(item.mdHand) }} บาท</td>
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
           <div class="d-flex justify-content-center">
        <img :src="edit.arr.display" alt="demoDisplay" class="display-100" v-if="edit.arr.display!=''">
      </div>
      <div>
        <label for="upload">Display (PNG/JPEG/GIF size:100*100px)</label>
      <input accept="image/*" class="mt-10 w-100 form-control" type="file"  @change="onFileSelected2($event)"/>
      </div>
      <label for="itemName" class="mt-2">ชื่อสินค้า</label>
      <input type="text" class="form-control mt-2" placeholder="Item Name" v-model="edit.arr.ItemName">

      <label for="price" class="mt-2">ราคา</label>
      <input type="number" class="form-control mt-2" placeholder="Price" v-model="edit.arr.price">

      <label for="amount" class="mt-2">จำนวน</label><span class="text-danger">{{textspanEdit}}</span>
      <input type="number" class="form-control mt-2" placeholder="amount" v-model="edit.arr.amount">
        
      <label for="unit" class="mt-2">หน่วย</label>
      <select  class="form-control mt-2" v-model="edit.arr.unit">
        <option value="">เลือก</option>
        <option v-for="item,index in unit" :key="index" :value="item.units">{{item.units}}</option>
      </select>

      <label for="therapistComm" class="mt-2">ค่ามือ (ได้ทุกครั้งที่บริการ)</label>
      <input type="number" class="form-control mt-2" placeholder="amount" v-model="edit.arr.therapistComm">

      <label for="mdhand" class="mt-2">ค่าหมอ</label>
      <input type="number" class="form-control mt-2" placeholder="amount" v-model="edit.arr.mdHand">

      <label for="mdCommission"  class="mt-2">MD Commission</label>
          <select  class="form-control" v-model="edit.arr.mdCommission">
            <option value="">เลือก</option>
            <option value="false">ไม่มี</option>
            <option value="true">มี</option>
          </select>

      <div class="d-flex justify-content-end m-2">
        <button class="btn btn-sm btn-success" @click="createItems()">submit</button>
      </div>
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
  name: 'DarleneVue3ItemList',

  data() {
    return {
      textspanEdit:'',
      textspan:'',
      PricePerUnit:0,
      create:{
        display:'',
        ItemName:'',
        price:0,
        amount:1,
        unit:'',
        therapistComm:0,
        mdHand:0,
        mdCommission:""
      },
      edit:{
        index:'',
        arr:[]
      },
      unitControl:false,
      unit:[],
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
      arr:[]
    };
  },

  mounted() {
    this.getUnit()
    this.getArr()
  },

  methods: {
    saveEdit(){
      this.validation2()
    },
    editModel(index){
      this.edit.index=index
      this.edit.arr=this.arr[index]
    },
    deleteModal(index){
    axios.delete(`${DB_URL}/items/list/${index}.json`).then((result) => {
        this.alert2.text='ลบรายการสำเร็จ'
        this.alert2.control=true
        this.getArr2()
      }).catch((err) => {
        this.alert.text='DB connection went wrong'
        this.alert.control=true
      });
    },
    getArr(){
      axios.get(`${DB_URL}/items/list.json`).then((result) => {
          this.arr=result.data
          $(document).ready(function () {
          $("#datatable").DataTable({
            lengthMenu: [
              [ 10, 25, 50, -1],
              [ 10, 25, 50, "All"],
            ],
            order: [[3, 'desc']],
            pagging: true
          });
        });
        }).catch((err) => {
          this.alert.text="การเชื่อมต่อล้มเหลว"
          this.alert.control=true
        });
    },
    getArr2(){
      axios.get(`${DB_URL}/items/list.json`).then((result) => {
          this.arr=result.data
        }).catch((err) => {
          this.alert.text="การเชื่อมต่อล้มเหลว"
          this.alert.control=true
        });
    },
    validation(){
      if (this.create.display=='') {
        this.alert.text="กรุณาเลือกรูป"
        this.alert.control=true
        return false
      }
      if (this.create.price<=-1) {
        this.alert.text="กรุณากรอกราคา"
        this.alert.control=true
        return false
      }
      if (this.create.amount<=0) {
        this.alert.text="กรุณากรอกจำนวน"
        this.alert.control=true
        return false
      }
      if (this.create.ItemName=='') {
        this.alert.text="กรุณากรอกชื่อรายการ"
        this.alert.control=true
        return false
      }
      if (this.create.unit=='') {
        this.alert.text="กรุณาเลือกหน่วย"
        this.alert.control=true
        return false
      }
      if (this.create.therapistComm<=-1) {
        this.alert.text="กรุณากรอกค่ามือ"
        this.alert.control=true
        return false
      }
      if (this.create.mdHand<=-1) {
        this.alert.text="กรุณากรอกค่าหมอ"
        this.alert.control=true
        return false
      }
      if (this.create.mdCommission=='') {
        this.alert.text="กรุณาเลือกการให้ค่าคอมมิสชั่นหมอ"
        this.alert.control=true
        return false
      }
      return true
    },
    validation2(){
      if (this.edit.arr.display=='') {
        this.alert3.text="กรุณาเลือกรูป"
        this.alert3.control=true
        return false
      }
      if (this.edit.arr.price<=-1) {
        this.alert3.text="กรุณากรอกราคา"
        this.alert3.control=true
        return false
      }
      if (this.edit.arr.amount<=0) {
        this.alert3.text="กรุณากรอกจำนวน"
        this.alert3.control=true
        return false
      }
      if (this.edit.arr.ItemName=='') {
        this.alert3.text="กรุณากรอกชื่อรายการ"
        this.alert3.control=true
        return false
      }
      if (this.edit.arr.unit=='') {
        this.alert3.text="กรุณาเลือกหน่วย"
        this.alert3.control=true
        return false
      }
      if (this.edit.arr.therapistComm<=-1) {
        this.alert3.text="กรุณากรอกค่ามือ"
        this.alert3.control=true
        return false
      }
      if (this.edit.arr.mdHand<=-1) {
        this.alert3.text="กรุณากรอกค่าหมอ"
        this.alert3.control=true
        return false
      }
      if (this.edit.arr.mdCommission=='') {
        this.alert3.text="กรุณาเลือกการให้ค่าคอมมิสชั่นหมอ"
        this.alert3.control=true
        return false
      }
      return true
    },
    createItems(){
      if(this.validation()){
        axios.post(`${DB_URL}/items/list.json`,this.create).then((result) => {
          this.alert.text=""
          this.alert.control=false
          this.alert2.text="บันทึกสำเร็จ"
          this.alert2.control=true
          this.unitControl=false
          this.getArr2()
        }).catch((err) => {
          this.alert.text="การเชื่อมต่อล้มเหลว"
          this.alert.control=true
        });
      }
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
    swiftUnit(){
      if(this.unitControl==false){
        this.unitControl=true
      }else{
        this.unitControl=false
      }
    },
    getUnit(){
       axios.get(`${DB_URL}/items/unit.json`).then((result) => {
        this.unit=result.data
      }).catch((err) => {
        this.alert.text='การเชื่อต่อผิดพลาด'
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