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

export default {
  components: {
    Navbar,
    Footer
  },
  data: () => ({
    navbar: {
      brand: 'Lara',
      labels: {
        menu: 'Menu',
        search: 'Search',
        close: 'Close'
      },
      links: [
        { label: 'about', url: '/about' },
        { label: 'work', url: '/work' },
        { label: 'contact', url: '/contact' }
      ]
    },
    footer: {
      copyright: 'Copyright - Lara Studios 2018'
    }
  })
}
</script>
