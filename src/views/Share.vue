<template>
  <v-container>
    <v-card class="mb-4">
      <v-card-title>Share</v-card-title>
      <v-card-subtitle>Edit share properties</v-card-subtitle>
      <v-card-text>
        <v-form>
          <v-row>
            <v-col>
              <v-text-field v-model="share.name" label="Name"/>
            </v-col>
            <v-col>
              <v-text-field v-model="share.download_limit" label="Download Limit"/>
            </v-col>
            <v-col>
              <v-checkbox label="Public" v-model="share.is_public"/>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field v-model="share.expires" type="time" label="Expires"
                            prepend-icon="mdi-calendar"></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="red">
          Delete
        </v-btn>
        <v-btn color="blue">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-divider/>

    <v-card class="mt-4">
      <v-card-title>
        Attachments
        <v-spacer></v-spacer>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
        ></v-text-field>
      </v-card-title>

      <v-data-table :headers="headers" :items="share.files" :search="search">
        <template v-slot:item.actions="{ item }">
          <v-icon small @click="console.log('delete attachment' + item.filename)">mdi-delete</v-icon>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import ax from "@/api"

export default {
  name: "Share",
  data() {
    return {
      menu: false,
      search: "",
      headers: [
        {text: 'UUID', value: 'id'},
        {text: 'Filename', value: 'filename'},
        {text: 'Size', value: 'filesize'},
        {text: 'Actions', value: 'actions', sortable: false},
      ],
      share: {},
    }
  },
  mounted() {
    ax.get(`/share/${this.$route.params.id}`)
        .then((response) => {
          this.share = response.data
        })
        .catch((error) => {
          console.log(error)
        })
  },
}
</script>
