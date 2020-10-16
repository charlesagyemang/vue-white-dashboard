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
          <th>Provider(Type)</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Car</th>
        </template>

        <template slot-scope="{row}">

          <td scope="startDate">
            {{row.provider}}
          </td>

          <td scope="startDate">
            {{row.startDate}}
          </td>

          <td class="endDate">
            {{row.endDate}}
          </td>

          <td class="car">
            {{carname}}
          </td>

        </template>

      </base-table>
    </div>

  </div>
</template>
<script>
export default {
  name: 'income-tax-single',
  props: {
    type: {
      type: String
    },
    title: String,
    tableData: {
      type:Array, required: true
    },
    carname: String,
  }
}
</script>
<style>
</style>
