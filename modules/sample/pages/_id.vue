<template>
  <div>
    <h2>{{ data.title }}</h2>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  async asyncData({ params }) {
    const { data } = await axios.get(`http://jsonplaceholder.typicode.com/albums/${params.id}`);

    return {
      data,
    };
  }
}
</script>