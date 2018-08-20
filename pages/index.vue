<template>
  <div class="page">
    <hero v-bind="hero"></hero>
    <section class="section">
      <div class="section__container container">
        <h3 v-if="intro.title" class="section__title" v-text="intro.title"></h3>
        <div v-if="intro.description" class="section__description" v-html="intro.description"></div>
        <ul v-if="intro.tiles" class="section__content tiles">
          <li v-for="(tile, i) in intro.tiles" :key="i"
            v-if="tile.title && tile.icon"
            class="tiles__tile">
            <span class="tiles__icon" :data-feather="tile.icon"></span>
            <div class="tiles__content">
              <h4 class="tiles__title" v-text="tile.title"></h4>
              <div class="tiles__description" v-html="tile.description"></div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from '~/components/Hero'
import Homepage from '~/static/_pages/homepage.json'

export default {
  components: {
    Hero
  },
  mounted () {
    window.feather.replace()
  },
  data: () => Homepage
}
</script>