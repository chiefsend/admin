<template>
  <div>
    <v-alert v-for="ev in events" :key="ev.id" :type="ev.category" dense dismissible
             @input="removeEvent(ev)">
      {{ ev.text }}
    </v-alert>
    <v-divider class="mb-3" v-if="events && events.length > 0" />
  </div>
</template>

<script>
export default {
  name: 'events',
  data() {
    return {
      events: [
        {id: 1, category: "warning", text: "topkek"},
        {id: 2, category: "error", text: "asd"}
      ]
    }
  },
  methods: {
    removeEvent(ev) {
      this.events.splice(
          this.events.indexOf(ev),
          1
      );
    }
  }
}
</script>