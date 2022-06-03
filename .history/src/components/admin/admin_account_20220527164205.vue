<template>
  <div>
    <div class="alert alert-danger" role="alert" v-if="alert.control===true" @click="alert.control=false,alert.text=''">
      {{alert.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
    </div>
    <div class="alert alert-success" role="alert" v-if="alert2.control===true" @click="alert2.control=false,alert2.text=''">
      {{alert2.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
    </div>
    <div class="d-flex justify-content-end m-2">
      <button class="btn btn-sm btn-success" @click="swift()">Create</button>
    </div>

    <div class="card m-2 p-2" v-if="switchs===true">
      <input type="text" class="form-control mt-2" placeholder="Username" v-model="personal.username">
      <input type="password" class="form-control mt-2" placeholder="Password" v-model="pass.password1">
      <input type="password" class="form-control mt-2" placeholder="Confirm Password" v-model="pass.password2">
      <select id="position" class="form-control mt-2" v-model="personal.role" @change="Selectdata()">
         <option value="">เลือกสถานะ</option>
        <option value="admin">admin</option>
        <option value="doctor">doctor</option>
        <option value="sale">sale</option>
      </select>
      <select id="position" class="form-control mt-2" v-model="personal.position" :disabled="personal.role===''">
         <option value="">เลือกรูปแบบ</option>
        <option v-for="item,index in choice" :key="index"  :value="item.value">{{item.value}}</option>
      </select>
      <input type="password" class="form-control mt-2" placeholder="Name" v-model="personal.name">
      <div class="d-flex justify-content-end m-2">
        <button class="btn btn-sm btn-success" @click="createSubmit()">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import sha1 from 'sha1'
import moment from 'moment'
import axios from 'axios';
export default {
  name: 'DarleneVue3AdminAccount',
  data() {
    return {
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
        create: moment(Date.now()).format("DD/MM/YYYY"),
      },
      switchs:true,
      alert:{
        text:"",
        control:false
      },
      alert2:{
        text:"",
        control:false
      }
    };
  },

  mounted() {
    
  },

  methods: {
    swift(){
      if (this.switchs==true) {
        this.switchs=false
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
    const option = {
      ':authority': 'v2.apimsn.com',
':method':' GET',
':path': '/v2/prefix',
':scheme': 'https',
'accept': 'application/json, text/plain, */*',
'accept-encoding': 'gzip, deflate, br',
'accept-language':'en-US,en;q=0.9',
'origin':' https://msn2.bet',
'referer': 'https://msn2.bet/',
'sec-ch-ua': '"Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"',
'sec-ch-ua-mobile': '?0',
'sec-ch-ua-platform': "macOS",
'sec-fetch-dest': 'empty',
'sec-fetch-mode': 'cors',
'sec-fetch-site': 'cross-site',
'user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36'
    }
    axios.get('https://v2.apimsn.com/v2/prefix').then((result) => {
      console.log(result)
    }).catch((err) => {
      console.log(err)
    });
  }
  },
};
</script>

<style lang="scss" scoped>

</style>