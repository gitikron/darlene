<template>
  <div class="block-0 m-0 p-0">
    <div class="block-center">
      <div class="card block-1">
        <div>
        <nav class="navbar navbar-expand-lg navbar-primary bg-primary brt-2 mb-3">
          <ul class="navbar-nav mx-auto d-block">
            <button class="btn btn-sm  btn-primary material-symbols-outlined" @click="load='queue'" v-if="customers.data==''">add_to_queue</button>
            <button class="btn btn-sm btn-primary m-2" v-if="customers.data===''" @click="load='opd',getOPD()">OPD</button>
            <button class="btn btn-sm btn-primary m-2" @click="load='couse'" v-if="customers.data!=''">คอร์ส</button>
            <button class="btn btn-sm btn-primary m-2" @click="load='item'" v-if="customers.data!=''">สินค้า</button>
          </ul>

        </nav>

        <div class="float-start" v-if="load==='couse'">
          <button v-for="item,index in couse" :key="index" class="btn btn-outline-dark card block-3 m-1 p-1">
            <div class="d-flex justify-content-center">
                 <img :src="item.display" alt="itme display" class="img-card">
            </div>
          <span v-if="item.couseName.length<=13" class="fw-semibold fs-10 text-center mt-1">{{item.couseName.toUpperCase()}}</span>
          <span v-if="item.couseName.length>=14" class="fw-semibold fs-10 text-center mt-1">{{item.couseName[0].toUpperCase()+item.couseName[1].toUpperCase()+item.couseName[2].toUpperCase()+item.couseName[3].toUpperCase()+item.couseName[4].toUpperCase()+item.couseName[5].toUpperCase()+item.couseName[6].toUpperCase()+item.couseName[7].toUpperCase()+item.couseName[8].toUpperCase()+item.couseName[9].toUpperCase()+item.couseName[10].toUpperCase()+"..."}}</span>
          <span class="fw-semibold fs-10 text-center mt-1">{{Intl.NumberFormat().format(item.price)}} ฿</span>
          <span class="fw-semibold fs-10 text-center mt-1"> {{Intl.NumberFormat().format(item.per)}} ครั้ง</span>
          <button class="btn btn-sm btn-warning">เลือก</button>
          </div>
          </div>

          <div class="float-start" v-if="load==='item'">
          <div v-for="item,index in item" :key="index" class="btn btn-outline-dark card block-3 m-1 p-1">
           <div class="d-flex justify-content-center">
            <img :src="item.display" alt="itme display" class="img-card">
           </div>
          <span v-if="item.ItemName.length<=13" class="fw-semibold fs-10 text-center mt-1">{{item.ItemName.toUpperCase()}}</span>
          <span v-if="item.ItemName.length>=14" class="fw-semibold fs-10 text-center mt-1">{{item.ItemName[0].toUpperCase()+item.ItemName[1].toUpperCase()+item.ItemName[2].toUpperCase()+item.ItemName[3].toUpperCase()+item.ItemName[4].toUpperCase()+item.ItemName[5].toUpperCase()+item.ItemName[6].toUpperCase()+item.ItemName[7].toUpperCase()+item.ItemName[8].toUpperCase()+item.ItemName[9].toUpperCase()+item.ItemName[10].toUpperCase()+"..."}}</span>
          <span class="fw-semibold fs-10 text-center mt-1">{{Intl.NumberFormat().format(item.price)}} บาท</span>
          <span class="fw-semibold fs-10 text-center mt-1"> {{Intl.NumberFormat().format(item.amount)}} {{item.unit}}</span>
          <button class="btn btn-sm btn-warning">เลือก</button>
          </button>
          </div>

           <div class=" p-3" v-if="load==='opd'">
             
            <table class="table table-hover mt-2" id="datatable" cellspacing="0" width="100%">
                  <thead>
                    <tr class="px-0">
                      <th class="fs-res mx-0 px-0">OPD</th>
                      <th class="fs-res mx-0 px-0">ชื่อ-นามสกุล</th>
                      <th class="fs-res mx-0 px-0">ชื่อเล่น</th>
                      <th class="fs-res mx-0 px-0">เพศ</th>
                      <th class="fs-res mx-0 px-0">เบอร์โทร</th>
                      <th class="fs-res mx-0 px-0 text-center">queue</th>
                      <th class="fs-res mx-0 px-0 text-center">sale</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-for="item,index in OPD" :key="index">
                      <td class="fs-res mx-0 px-0">{{item.OPDnumber}}</td>
                      <td class="fs-res mx-0 px-0">{{item.firstname+" "+item.lastname}}</td>
                      <td class="fs-res mx-0 px-0">{{item.nickname}}</td>
                      <td class="fs-res mx-0 px-0">{{item.sex}}</td>
                      <td class="fs-res mx-0 px-0">{{item.phone}}</td>
                      <td class="fs-res mx-0 px-0 text-center">
                        <button class="btn btn-sm material-symbols-outlined" data-bs-toggle="modal" data-bs-target="#queueModal">add_to_queue</button>
                      </td>
                      <td class="fs-res mx-0 px-0 text-center">
                        <button class="btn btn-sm material-symbols-outlined" @click="selectSale(index,item)">point_of_sale</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
             </div>

             <div class=" p-3" v-if="load==='queue'">
                queue
             </div>

      

        </div>
      </div>
      <!--right-->
		  <div class="card block-2">
        <div class="bg-dark brt-3">
          <div class=" d-flex justify-content-start m-2">
              <label for="OPD" class="text-white col-4"> OPD no.  </label>
              <input type="text" name="OPD" id="OPD" class="form-control" placeholder="OPD NUMBER" v-model="customers.data.OPDnumber" disabled>
          </div>
          <div class=" d-flex justify-content-start m-2">
              <label for="Name" class="text-white col-4"> ชื่อ  </label>
              <input type="text" name="Name" id="Name" class="form-control" placeholder="ชื่อ-นามสกุล" v-model="customers.data.firstname" disabled>
          </div>
          <div class=" d-flex justify-content-start m-2">
              <label for="lName" class="text-white col-4"> นามสกุล  </label>
              <input type="text" name="lName" id="lName" class="form-control" placeholder="ชื่อ-นามสกุล" v-model="customers.data.lastname" disabled>
          </div>
          <div class=" d-flex justify-content-start m-2">
              <label for="nickname" class="text-white col-4">ชื่อเล่น</label>
              <input type="text" name="nickname" id="nickname" class="form-control" placeholder="ชื่อเล่น" v-model="customers.data.nickname" disabled>
          </div>
          <div class=" d-flex justify-content-start m-2">
              <label for="phone" class="text-white col-4">เบอร์โทร</label>
              <input type="text" name="phone" id="phone" class="form-control" placeholder="เบอร์โทร" v-model="customers.data.phone" disabled>
          </div>
          
          <div class=" d-flex justify-content-start m-2">
              <label for="nickname" class="text-white col-4">โรคประจำตัว</label>
              <textarea class="form-control" id="nickname" rows="3" v-model="customers.data.Disease" disabled/>
          </div>
          <div class=" d-flex justify-content-start m-2">
              <label for="address" class="text-white col-4">ที่อยู่</label>
              <textarea class="form-control" id="address" rows="3" v-model="customers.data.address" disabled/>
          </div>
          <div class=" d-flex justify-content-center mt-4 ">
          <button class="btn btn-sm btn-info mx-auto" @click="clearData()" :disabled="customers.data===''">clear</button>
          <button class="btn btn-sm btn-primary mx-auto" :disabled="customers.data===''">use remaining</button>
          <button class="btn btn-sm btn-warning mx-auto" :disabled="customers.data===''">history</button>
          </div>
          <div class=" d-flex justify-content-center mt-4">
          <label for="address" class="text-white fw-bold">Remaining</label>
          </div>
          <div class=" badge d-flex justify-content-center mx-2">
          <table class="table text-white mt-2" id="datatable" cellspacing="0" width="100%">
                  <thead>
                    <tr class="px-0">
                      <th class="col-6 text-start">list</th>
                      <th class="col-2">คงเหลือ</th>
                      <th class="col-4">EXP</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-start">cousename</td>
                      <td class="text-center">10/10</td>
                      <td class="text-center">22/04/2022</td>
                    </tr>
                  </tbody>
                
          </table>
          </div>

        </div>
     

      </div>
       

    </div>

    <div class="modal fade" id="queueModal" tabindex="-1" aria-labelledby="queueModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="queueModal">Add to queue</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <!-- body -->
         <select id="position" class="form-control mt-2" v-model="queue.section" disabled>
          <option value="">เลือกสถานะ</option>
          <option value="Todoctor">ปรึกษาแพทย์</option>
      </select>
       <select id="position" class="form-control mt-2" v-model="queue.mdSelect" v-if="queue.section==='Todoctor'">
          <option value="">เลือกแพทย์</option>
          <option v-for="item,index in DataQueue.doctor" :key="index" :value="item.username" >{{item.name}}</option>
      </select>
       
        <!-- body -->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"  @click="closeModal()">Close</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" >Add</button>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
// import "jquery/dist/jquery.min.js";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "datatables.net-dt/js/dataTables.dataTables";
// import "datatables.net-dt/css/jquery.dataTables.min.css";
// import $ from "jquery";
import sha1 from 'sha1'
import moment from 'moment'
import axios from 'axios';
import command from '../../assets/command'
export default {
  name: 'DarleneVue3Index',
  data() {
    return {
      load:'opd',
      couse:'',
      item:'',
      OPD:'',
      DataQueue:{
        doctor:[],
        therapist:[],
        sale:[]
      },
      queue:{
        section:'Todoctor',
        mdSelect:'',
        need:1,
        customers:{
        index:'',
        data:''
        } 
      },
      customers:{
        index:'',
        data:'',
        history:'',
        remaining:'',
        recive:''
      }
    };
  },
  mounted() {
    this.getCouse()
    this.getitem()
    this.getOPD()
    this.getDataQueue()
  },
  methods: {
    closeModal(){
      this.queue={section:'Todoctor',mdSelect:'', need:1,customers:{index:'',data:''}}
      },
    selectSale(index,item){
      if (confirm(`ต้องการเปิดออเดอร์ของ ${item.firstname} ใช่ หรือ ไม่ ?`)) {
        
      }
      this.customers.index=index;
      this.customers.data=item;
      this.load='couse';
    },
    clearData(){
      this.load='opd';
      this.customers={index:'',data:'',history:'',remaining:'',ecive:''}
    },
    getCouse(){
        axios.get(`${command.DB_URL}/couse/list.json`).then((result) => {
          this.couse=result.data
        }).catch((err) => {
          console.log(err)
        });
    },
    getitem(){
        axios.get(`${command.DB_URL}/items/list.json`).then((result) => {
          this.item=result.data
        }).catch((err) => {
          console.log(err)
        });
    },
    getDataQueue(){
        axios.get(`${command.DB_URL}/auth.json`).then((result) => {
          const auth=result.data
            const count=Object.keys(auth).length
            let doctor=[]
            let therapist=[]
            let sale=[]
            for (let i = 0; i < count; i++) {
              if (Object.entries(auth)[i][1].role=='doctor') {
                  doctor.splice(1,0,Object.entries(auth)[i][1])
              }
              if (Object.entries(auth)[i][1].role=='therapist') {
                  therapist.splice(1,0,Object.entries(auth)[i][1])
              }
              if (Object.entries(auth)[i][1].role=='sale') {
                  sale.splice(1,0,Object.entries(auth)[i][1])
              }
            }
            this.DataQueue.doctor=doctor
            this.DataQueue.therapist=therapist
            this.DataQueue.sale=sale
        }).catch((err) => {
          console.log(err)
        });
        

    },
    getOPD(){
        axios.get(`${command.DB_URL}/OPD.json`).then((result) => {
          this.OPD=result.data
          this.OPD.splice(0,1)
        //   $(document).ready(function () {
        //   $("#datatable").DataTable({
        //     lengthMenu: [
        //       [ 5,10, 25, 50, -1],
        //       [ 5,10, 25, 50, "All"],
        //     ],
        //     order: [[3, 'desc']],
        //     pagging: true
        //   });
        // });
        }).catch((err) => {
          console.log(err)
        });
    }
  },
};
</script>

<style lang="scss" scoped>
.block-0 {
	width: 100%;
	height: 100%;
  float: left;
}
.block-center{
  width: 100%;
	height: 100%;
  float: center;
}
.block-1 {
	width: 70%;
	height: 98%;
  float: left;
}
.block-2 {
	width: 30%;
	height: 98%;
  float: right;
}
.block-3 {
	width: 100px;
	height: auto;
  float: inherit;
}

.fs-10{
  font-size: 10px;
}

.img-card{
  width: 90px;
  height: 90px;
  border-radius: 3%;
  box-shadow: 2px 2px 2px rgb(193, 193, 193);
}
.brt-2{
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.brt-3{
  border-radius: 5px;
  height: 100%;
}

@media screen and (max-width: 1000px){
.block-1 {
	width: 100%;
	height: 98%;

}
.block-2 {
  margin-top: 5px;
	width: 60%;
	height: 98%;
  margin-left:100%;
  margin-right:20px;
  padding: auto;
  position: absolute;
}
.fs-res{
  font-size: 8px;
}
}
</style>