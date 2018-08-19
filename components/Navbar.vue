<template>
  <header class="navbar">
    <div class="navbar__container container">
      <nuxt-link class="navbar__brand navbar__link" to="/" v-text="brand"></nuxt-link>
      <ul class="navbar__links" :class="linksClasses">
        <li v-for="link in links" :key="link.url"
          v-if="link.url && link.label"
          class="navbar__link-item">
          <nuxt-link class="navbar__link" :to="link.url" v-text="link.label"></nuxt-link>
        </li>
      </ul>
      <button @click="toggleMenu()" class="navbar__toggle">
        <span class="navbar__toggle-icon" v-show="isMenuOpen">
          <span data-feather="x"></span>
        </span>
        <span class="navbar__toggle-icon" v-show="!isMenuOpen">
          <span data-feather="menu"></span>
        </span>
        <span class="navbar__toggle-label" v-text="toggleMenuLabel"></span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    labels: Object,
    brand: String,
    links: Array
  },
  data: () => ({
    open: undefined
  }),
  computed: {
    isMenuOpen () {
      return this.open === 'menu'
    },
    toggleMenuLabel () {
      return this.isMenuOpen
        ? this.labels.close
        : this.labels.menu
    },
    linksClasses () {
      return {
        'navbar__links--open': this.isMenuOpen
      }
    }
  }, 
  methods: {
    toggleMenu () {
      this.open = this.isMenuOpen ? undefined : 'menu'
    }
  }
}
</script>
