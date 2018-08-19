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

export default {
  components: {
    Hero
  },
  mounted () {
    window.feather.replace()
  },
  data: () => ({
    hero: {
      title: 'Lara',
      description: '<p>anything can happen.</p>'
    },
    intro: {
      title: 'Be proud of your website.',
      description: `<p>Don't let an outdated site give the wrong first impression.</p>`,
      tiles: [
        { icon: 'zap', title: 'Fast.', description: '<p>Lightning-fast websites that can deliver.</p>' },
        { icon: 'heart', title: 'Beautiful.', description: '<p>Rich animations for creating a beautiful experience.</p>' },
        { icon: 'search', title: 'Simple.', description: '<p>SEO best practices from experts in the field.</p>' },
      ]
    }
  })
}
</script>