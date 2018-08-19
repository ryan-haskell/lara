<template>
  <footer class="footer">
    <div class="footer__container container">
      <p v-if="copyright" v-text="copyright"></p>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    copyright: String,
    links: Array
  }
}
</script>
