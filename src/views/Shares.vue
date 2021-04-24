<template>
  <div>
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

      <v-data-table :headers="headers" :items="shares" :search="search">
        <template v-slot:item.is_public="{ item }">
          <v-simple-checkbox
              v-model="item.is_public"
              disabled
          ></v-simple-checkbox>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editShare(item.id)">mdi-pencil</v-icon>
          <v-icon small @click="showDeleteDialog(item)">mdi-delete</v-icon>
        </template>
      </v-data-table>

    </v-card>


    <v-dialog v-model="dialogDelete">
      <v-card>
        <v-card-title class="headline">Are you sure you want to delete this share?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialogDelete=false">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="deleteShare()">OK</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
import ax from "@/api";
import em from "@/eventHub";

export default {
  name: "Shares",
  data() {
    return {
      search: "",
      headers: [
        {text: 'UUID', value: 'id'},
        {text: 'Name', value: 'name'},
        {text: 'Public', value: 'is_public'},
        {text: 'Download Limit', value: 'download_limit'},
        {text: 'Expires', value: 'expires'},
        {text: 'Actions', value: 'actions', sortable: false},
      ],
      shares: [],
      dialogDelete: false,
      indexDelete: -1
    }
  },
  mounted() {
    ax.get('/shares')
        .then((response) => {
          this.shares = response.data
        })
        .catch((error) => {
          em.emit('error', error);
        })
  },
  methods: {
    editShare: function (shareID) {
      this.$router.push({name: 'Share', params: {id: shareID}})
    },
    showDeleteDialog: function (item) {
      this.indexDelete = this.shares.indexOf(item);
      this.dialogDelete = true;
    },
    deleteShare: function () {
      ax.delete(`/share/${this.shares[this.indexDelete].id}`)
          .then(() => {
            this.shares.splice(this.indexDelete, 1);
          })
          .catch((error) => {
            em.emit('error', error);
          })
      this.dialogDelete = false;
    }
  }
}
</script>
