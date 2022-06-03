<template>
  <div>
  <table
        class="table table-hover mt-2"
        id="datatable"
        cellspacing="0"
        width="100%"
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>role</th>
            <th>
              <span class="material-symbols-outlined text-black-50">sync_lock</span>
            </th>
            <th>
              <span class="material-symbols-outlined text-danger">delete</span>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in arr" :key="item.username">
            <td>{{ item.nickname }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.role }}</td>
            <td>
              <span class="material-symbols-outlined text-black-50">sync_lock</span>
            </td>
            <td>
              <span class="material-symbols-outlined text-danger">delete</span>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
import axios from 'axios';
const DB_URL =
  "https://databasedarlene-default-rtdb.asia-southeast1.firebasedatabase.app";
export default {
  
  name: 'DarleneVue3OpdTable',

  data() {
    return {
      arr:[]
    };
  },

  mounted() {
    this.GetTable()
  },

  methods: {
    GetTable(){
      axios.get(`${DB_URL}/OPD.json`).then((result) => {
        this.arr=result.data
        this.arr.splice(0,1)
      }).catch((err) => {
        console.log(err)
      });
    }
  },
};
</script>

<style lang="scss" scoped>

</style>