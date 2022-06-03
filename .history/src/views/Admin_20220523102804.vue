<template>
<div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/#/admin" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Admin Dashbord</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item w-100 mt-1 mb-1" >
                        <button class="btn btn-dark btn-sm w-100" @click="load='admin'">
                             <span class="material-symbols-outlined mx-auto fs-6 text-white pt-1">nest_display</span>
                             <span class="ms-1 d-none d-sm-inline link-light hover">Index</span>
                        </button>
                    </li>
                    <li class="nav-item w-100  mt-1 mb-1">
                        <button class="btn btn-dark btn-sm  w-100" @click="load='opd'">
                             <span class="material-symbols-outlined mx-auto fs-6 text-white pt-1">list</span>
                             <span class="ms-1 d-none d-sm-inline link-light hover">OPD</span>
                        </button>
                    </li>
                    <li class="nav-item w-100  mt-1 mb-1">
                        <a class="btn btn-dark btn-sm w-100" @click="load='couse'">
                             <span class="material-symbols-outlined mx-auto fs-6 text-white pt-1">window</span>
                             <span class="ms-1 d-none d-sm-inline link-light hover">Couse</span>
                        </a>
                    </li>
                  <li class="nav-item w-100  mt-1 mb-1">
                        <button class="btn btn-dark btn-sm  w-100" @click="load='stock'">
                             <span class="material-symbols-outlined mx-auto fs-6 text-white pt-1">inventory_2</span>
                             <span class="ms-1 d-none d-sm-inline link-light hover">Stock</span>
                        </button>
                    </li>
                </ul>
                <hr>
                <div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                       <span class="material-symbols-outlined mx-auto px-0">manage_accounts</span>
                        <span class="d-none d-sm-inline mx-3">{{personal.name}}</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><a class="dropdown-item" @click="load='changePassword'">Change password</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" @click="this.singOut()">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col py-3">

            <ADINDEX class="container card d-flex justify-content-center px-2 pt-2" v-if="load==='admin'"/>
            <ADOPD class="container card d-flex justify-content-center px-2 pt-2" v-if="load==='opd'"/>
            <ADCOUSE class="container card d-flex justify-content-center px-2 pt-2" v-if="load==='couse'"/>
            <ADSTOCK class="container card d-flex justify-content-center px-2 pt-2" v-if="load==='stock'"/>
            

            <div class="container card d-flex justify-content-center px-2 pt-2" v-if="load==='changePassword'">
              <label for="Username" class="mt-1">
                Username :
                <input type="text" class="form-control" placeholder="Username" v-model="personal.username" disabled/>
              </label>
              <label for="Name"  class="mt-1">
                Name :
                <input type="text" class="form-control" placeholder="Name" v-model="personal.name" disabled/>
              </label>
              <label for="Role"  class="mt-1">
                Role :
                <input type="text" class="form-control" placeholder="Name" v-model="personal.role" disabled/>
              </label>
              <label for="Password"  class="mt-1">
                New Password :
                <input type="password" class="form-control" placeholder="New Password" v-model="changePassword.password1" required/>
              </label>
              <label for="Confirm Password"  class="mt-1">
                Confirm Password :
                <input type="password" class="form-control" placeholder="Confirm Password" v-model="changePassword.password2" required/>
              </label>
              <button class="btn btn-sm btn-success mt-3 mb-3" @click="Repass(personal.username,changePassword.password1,changePassword.password2)">Submit</button>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import axios from "axios";
import base64 from "base-64";
import sha1 from "sha1";
const token = "2k-token";
const DB_URL =
  "https://databasedarlene-default-rtdb.asia-southeast1.firebasedatabase.app";
export default {
  name: "admin",

  data() {
    return {
      page: "admin",
      load:"admin",
      personal: {
        username: this.$store.getters.getAuth.username,
        name: this.$store.getters.getAuth.name,
        role: this.$store.getters.getAuth.role,
      },
      changePassword:{
        password1:"",
        password2:""
      },
      managerbar: false,
    };
  },
  mounted() {
    if (this.personal.role != this.page) {
      const key = sessionStorage.getItem(token);
      if (key) {
        const findKey = base64.decode(key);
        axios
          .get(`${DB_URL}/auth/${findKey}.json`)
          .then((result) => {
            if (result.data.role == this.page) {
              this.$store.dispatch("setAuth", result.data);
              this.personal = {
                username: this.$store.getters.getAuth.username,
                name: this.$store.getters.getAuth.name,
                role: this.$store.getters.getAuth.role,
              };
            } else {
              sessionStorage.clear();
              this.$router.push("/login");
            }
          })
          .catch((err) => {
            this.$store.dispatch("setAuth", {
              username: "",
              name: "",
              role: "",
            });
            sessionStorage.clear();
            this.$router.push("/login");
          });
      } else {
        this.$store.dispatch("setAuth", { username: "", name: "", role: "" });
        sessionStorage.clear();
        this.$router.push("/login");
      }
    }
  },
  methods: {
    Repass(index,password1,password2){
      if (password1.length <= 7) {
      this.changePassword.password1=""
       this.changePassword.password2=""
			alert ("Mininium is 8 character");
      }else if (password1 == '') {
            this.changePassword.password1=""
       this.changePassword.password2=""
			alert ("Please enter Password"); 
      }else if (password2 == '') {
       this.changePassword.password1=""
       this.changePassword.password2=""
			alert ("Please enter confirm password"); 
    }else if (password1 != password2) { 
      this.changePassword.password1=""
      this.changePassword.password2=""
			alert ("\nPassword did not match: Please try again...") 
			return false; 
			}else{ 
        const newPass=sha1(password1)
        axios.patch(`${DB_URL}/auth/${index}.json`,{password:newPass}).then((result) => {
          this.changePassword.password1=""
          this.changePassword.password2=""
          alert ("Successfuly"); 
          this.load="index"
        }).catch((err) => {
          this.changePassword.password1=""
          this.changePassword.password2=""
          console.log(err)
        });
				return true; 
			} 
    },
    singOut(){
      sessionStorage.clear();
      this.$router.push("/login");
    }
  },
};
</script>

<style lang="scss" scoped>
.w-100{
  width: 100%;
}</style>
