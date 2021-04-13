<template>
  <v-container>
    <v-card>
      <v-card-title>
        Shares
        <v-spacer></v-spacer>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
          :headers="headers"
          :items="shares"
          :search="search"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editShare(item.id)">mdi-pencil</v-icon>
          <v-icon small @click="deleteShare(item.id)">mdi-delete</v-icon>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import ax from "@/api";

export default {
  name: "Shares",
  data() {
    return {
      search: "",
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
    editShare: function (shareID) {
      this.$router.push({name: 'Share', params: {id: shareID}})
    },
    deleteShare: function (shareID) {
      ax.delete(`/share/${shareID}`)
          .catch((error) => {
            console.log(error)
          })
    }
  }
}
</script>
