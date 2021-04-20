<template>
  <div>
    <v-row class="mb-4">
      <v-col>
        <v-card color="pink" dark>
          <v-card-title class="text-h5">
            Total amount of shares
          </v-card-title>
          <v-card-subtitle>
            {{ stats.number_of_shares }}
          </v-card-subtitle>
          <v-card-actions>
            <v-btn text to="/shares">
              Show Shares
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card color="blue" dark>
          <v-card-title class="text-h5">
            Total attachment size
          </v-card-title>
          <v-card-subtitle>
            {{ humanFileSize(stats.total_size) }}
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <v-divider />

    <v-row class="mt-4">
      heatmap
    </v-row>
  </div>
</template>

<script>
import ax from "@/api";

export default {
  name: 'Home',
  data() {
    return {
      stats: {}
    }
  },
  mounted() {
    ax.get(`/shares/stats`)
        .then((response) => {
          this.stats = response.data
        })
        .catch((error) => {
          console.log(error)
        })
  }
}
</script>
