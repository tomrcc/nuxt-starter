<template>
  <section :data-cms-bind="dataBinding">
    <h1>{{ block.title }}</h1>
    <div>
      <p v-html="block.description"></p>
    </div>
    <a :href="block.button.link">
      {{ block.button.text }}
    </a>
    <img
      format="webp"
      :src="block.image"
      alt="hero-two-images"
      v-if="block.image"
    />
  </section>
</template>

<script>
export default {
  props: ['block', 'dataBinding'],
};
</script>
