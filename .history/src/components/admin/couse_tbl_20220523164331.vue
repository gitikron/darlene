<template>
  <div>
    <div>
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
         <button class="btn btn-success btn-sm" @click="CreateCouse()">Create</button>
      </div>
     
    </div>
  </div>
</template>

<script>
export default {
  name: 'DarleneVue3CouseTbl',

  data() {
    return {
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
    
  },

  methods: {
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