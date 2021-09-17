<template>
  <div>
    <ul v-for="item in items" :key="item.id">
      <li><nuxt-link :to="`/${pathName}/${item.id}`">{{ item.title }}</nuxt-link></li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  async asyncData({ app }) {
    const response = await axios.get('http://jsonplaceholder.typicode.com/albums');

    const items = response.data.slice(0,5);

    return {
      items,
      pathName: app.$pathName,
    };
  }
}
</script>