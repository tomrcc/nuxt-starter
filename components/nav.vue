<template>
  <header>
    <nav>
      <NuxtLink to="/" exact>
        <img format="webp" :src="nav.logo" alt="Nav-Logo" v-if="nav.logo" />
      </NuxtLink>
      <ul>
        <li v-for="item in nav.items">
          <NuxtLink :to="item.link">
            {{ item.text }}
          </NuxtLink>
        </li>
      </ul>
      <NuxtLink :to="nav.button.link" exact>
        {{ nav.button.text }}
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup>
import navData from '../data/nav.json';
const nav = navData;
</script>
