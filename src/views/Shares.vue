<template>
  <v-data-table
      :headers="headers"
      :items="shares"
      :items-per-page="10"
      class="elevation-1"
  >
    <template v-slot:[`item.actions`]="{ item }">
      {{ item.id }}
      <v-icon small class="mr-2" @click="editShare(item.id)">mdi-pencil</v-icon>
      <v-icon small @click="deleteShare(item.id)">mdi-delete</v-icon>
    </template>
  </v-data-table>
</template>

<script>
import ax from "@/api";

export default {
  name: "Shares",
  data() {
    return {
      headers: [
        {text: 'Name', value: 'name'},
        {text: 'Download Limit', value: 'download_limit'},
        {text: 'Expires', value: 'expires'},
      ],
      shares: [],
    }
  },
  mounted() {
    ax.get('/shares')
        .then((response) => {
          this.shares = response.data
        })
        .catch((error) => {
          console.log(error)
        })
  },
  methods: {
    editShare: function(shareID) {
      this.$router.push({name: 'Share', params: {id: shareID}})
    },
    deleteShare: function(shareID) {
      console.log(`todo: delete: ${shareID}`)
    }
  }
}
</script>
