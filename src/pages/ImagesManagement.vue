<template>
  <div class="images-management-container">
    <div class="images-management-options-bar">
      <span class="images-management-options-label">Filter:</span>
      <a-select :default-value="value" style="width: 120px" @change="handleChangeFilter">
        <a-select-option value="pending">
          Pending
        </a-select-option>
        <a-select-option value="approved">
          Approved
        </a-select-option>
        <a-select-option value="rejected">
          Rejected
        </a-select-option>
      </a-select>
    </div>
    <a-table :columns="columns" :data-source="data" :scroll="{ x: 1366, y: 'calc(100vh - 350px)' }" bordered>
      <div slot="action" slot-scope="text, record">
        <a-button v-if="record.status === 'pending'">Approve</a-button>
        <a-button v-if="record.status === 'pending'">Reject</a-button>
        <a-button>Delete</a-button>
      </div>
    </a-table>
  </div>
</template>

<script>
const columns = [
  {
    title: 'No.',
    key: 'index',
    align: 'center',
    width: 50,
    customRender: (text, record, index) => {
      return index + 1;
    }
  },
  {
    title: 'Thumbnail',
    key: 'url',
    align: 'center',
    width: 100,
    // customRender: (text, record, index) => {
    //   return index + 1;
    // }
  },
  {
    title: "Likes",
    key: 'likes',
    align: 'center',
    width: 100,
  },
  {
    title: "Owner's Email",
    key: 'email',
    align: 'center',
    width: 100,
  },
  {
    title: "Status",
    key: 'status',
    align: 'center',
    width: 100,
  },
  {
    title: "Publish Time",
    key: 'time',
    align: 'center',
    width: 100,
  },
  {
    title: "Actions",
    key: 'action',
    align: 'center',
    width: 100,
    scopedSlots: {customRender: 'action'}
  },
]

const data = [{status: 'pending'}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
export default {
  name: "ImagesManagement",
  data() {
    return {
      columns,
      data,
      value: "pending"
    }
  },
  methods: {
    handleChangeFilter(value) {
      this.value = value
    }
  }
}
</script>

<style scoped lang="scss">
.images-management-container {
  .images-management-options-bar {
    margin-bottom: 20px;

    .images-management-options-label {
      margin-right: 10px;
    }
  }
}
</style>