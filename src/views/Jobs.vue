<template>
  <div>
    <v-row class="mb-4">
      todo redis status und anzahl gequeueter jobs und so
    </v-row>

    <v-divider/>

    <v-card class="mt-4">
      <v-card-title>
        Jobs
      </v-card-title>
      <v-data-table :headers="headers" :items="jobs">
      </v-data-table>
    </v-card>

  </div>
</template>

<script>
// import ax from "@/api";

export default {
  name: "Jobs",
  data() {
    return {
      headers: [
        {text: 'ID', value: 'id'},
        {text: 'Name', value: 'name'},
        {text: 'Enqueued At', value: 'enqueued_at'},
        {text: 'Scheduled At', value: 'scheduled_at'},
      ],
      jobs: []
    }
  },
  // mounted() {
  //   ax.get(`/jobs`)
  //       .then((response) => {
  //         this.jobs = response.data
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       })
  // }
}
</script>
