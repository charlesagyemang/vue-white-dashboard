<template>
  <div class="card shadow"
       :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">
            {{title}}
          </h3>
        </div>

      </div>
    </div>

    <div class="table-responsive">
      <base-table class="table align-items-center table-flush"
                  :class="type === 'dark' ? 'table-dark': ''"
                  :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
                  tbody-classes="list"
                  :data="tableData">
        <template slot="columns">
          <th>File name</th>
          <th>File Link</th>
          <th>Car</th>
        </template>

        <template slot-scope="{row}">

          <td scope="name">
            {{row.itemName}}
          </td>

          <td scope="link">
            <a :href="row.itemLink" target = "_blank" class="btn btn-dark">View {{row.itemName}}</a>
          </td>

          <td scope="car">
            {{carname}}
          </td>

        </template>

      </base-table>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'links-single-doc',
    props: {
      type: {
        type: String
      },
      title: String,
      tableData: {
        type:Array, required: true
      },
      carname: String,
    },
  }
</script>
<style>
</style>
