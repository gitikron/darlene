<template>
  <div>
    <img :src="create.display" alt="demoDisplay" v-if="create.display!=''">
     <div>
      <label for="upload">Display</label>
    <input accept="image/*" class="mt-10 w-100 form-control" type="file"  @change="onFileSelected($event,index)"/>
     </div>
    <div>
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
      }
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
  },
};
</script>

<style lang="scss" scoped>

</style>