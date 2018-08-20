<template>
  <div class="app">
    <Navbar v-bind="navbar" />
    <nuxt/>
    <Footer v-bind="footer" />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'
import Settings from '~/static/_pages/settings.json'

export default {
  components: {
    Navbar,
    Footer
  },
  data: () => Settings
}
</script>
