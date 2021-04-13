<template>
  <v-container>
    hallo
  </v-container>
</template>

<script>
import ax from "@/api";

export default {
  name: "Share",
  data (){
    return {
      share: {},
    }
  },
  mounted() {
    ax.get(`/share/${ this.$router.params.id }`)
        .then((response) => {
          this.shares = response.data
        })
        .catch((error) => {
          console.log(error)
        })
  },
}
</script>
