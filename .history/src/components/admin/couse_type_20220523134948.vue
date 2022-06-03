<template>
  <div>
    <form class="card p-3">
        <div class="form-group row">
        <label for="OPDnumber" class="col-sm-12 col-form-label">Couse Type Name</label>
        <div class="col-sm-12">
          <input type="text" class="form-control" id="OPDnumber">
        </div>
      </div>
      <div class="d-flex justify-content-end mt-2">
        <button class="btn btn-sm btn-success">Create</button>
        </div>
    </form>

    <div>
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
            <td class="fs-res mx-0 px-0">{{ item.firstname+" "+item.lastname}}</td>
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
export default {
  name: 'DarleneVue3CouseType',

  data() {
    return {
      create: {
        type:''
      }
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>