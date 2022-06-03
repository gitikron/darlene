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
        <label for="CouseName">Couse Name</label>
        <input class="form-control" name="CouseName" type="tet" placeholder="Couse Name" v-model="create.couseName">
      </div>
      <div class="mt-2">
        <label for="description">Description</label>
        <input class="form-control" name="description" type="tet" placeholder="Couse description" v-model="create.description">
      </div>
      <div class="mt-2">
        <label for="CouseName">ราคา</label>
        <input class="form-control" type="number" placeholder="ราคา" v-model="create.price">
      </div>
      <div class="mt-2">
        <label for="CouseName">จำนวนครั้ง</label>
        <input class="form-control" type="number" placeholder="จำนวนครั้ง" v-model="create.per">
      </div>
      <div class="d-flex justify-content-end mt-2">
         <button class="btn btn-success btn-sm" @click="CreateCouse()">Submit</button>
      </div>
    </div>

    <div v-if="controler===false">
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
            <td class="fs-res mx-0 px-0">{{item.couseName}}</td>
            <td class="fs-res mx-0 x-0">{{ item.nickname }}</td>
            <td class="fs-res mx-0 px-0">{{ item.phone }}</td>
            <td class="fs-res mx-0 px-0">
              <button class="btn btn-outline-dark btn-sm material-symbols-outlined" data-bs-toggle="modal" data-bs-target="#editModal" @click="editModel(index)">edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { DB_URL } from '@/assets/command';
export default {
  name: 'DarleneVue3CouseTbl',

  data() {
    return {
      controler:false,
      arr:[],
      create:{
        display:"",
        couseName:"",
        description:'',
        price:"",
        per:""
      },
      alert:{
        text:'',
        control:false
      },
      alert2:{
        text:'',
        control:false
      },
    };
  },

  mounted() {
    this.getArr()
  },

  methods: {
    controllerX(){
      if(this.controler==true){
        this.controler=false
      }else{
        this.controler=true
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
    CreateCouse(){
      if(this.Validate()){
        axios.post(`${DB_URL}/couse/list.json`,this.create).then((result) => {
          this.alert2.text='Successfuly'
          this.alert2.control=true
          this.create={display:"",couseName:"",description:'',price:"",per:""}
          this.controler=false
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
      if(this.create.description==''){
        this.alert.text='Description fill is empty'
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
      return true
    },
    getArr(){
      axios.get(`${DB_URL}/couse/list.json`).then((result) => {
        this.arr=result.data
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
  width: 100px;
  height: 100px;
}
</style>