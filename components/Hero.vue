<template>
  <div class="hero">
    <div class="hero__container container">
      <h1 v-if="title" class="hero__title" v-text="title"></h1>
      <h2 v-if="description" class="hero__description" v-html="description"></h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String
  }
}
</script>
