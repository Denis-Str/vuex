<template lang="pug">
  #id
    div state {{notes}}
    //p {{notes}}
    //button(@click='addNew') Добавить

    ul(v-for="note in notes")
      li {{note.text}}
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    computed: {
      ...mapActions(['fetchJSON']),
      ...mapState({
        notes: state => state.notes,
      }),
      // вызывает getter из store, без mapState
      // notes() {
      //   return this.$store.getters.notes;
      // }
    },
    methods: {
      // ...mapMutations(['ADD_NOTE', 'addJson']),
      // ...mapMutations(['addJson']),
      // addNew() {
      //   this.ADD_NOTE({text: "новая заметка"})
      //   // вызывает actions из store, без mapMutations
      //   // this.$store.dispatch('addNote', { text: 'новая заметка' })
      // }
    },
    created() {
      this.fetchJSON
    },
  }
</script>

<style>

</style>
