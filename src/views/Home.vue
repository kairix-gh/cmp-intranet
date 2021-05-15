<template>
  <div class="home">
      <Menu/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

import Menu from "@/components/Menu.vue"

import { useStore } from "@/store/store"

export default defineComponent({
    name: 'Home',
    components: {
        // HelloWorld,
        Menu
    },
    data() {
        return {
            count: 1,
            store: useStore(),
        }
    },
    async created() {
        // this.store?.loadAll();
    }
});
</script>