<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

import { useStore } from "@/store/createStore"

export default defineComponent({
    name: 'Home',
    components: {
        HelloWorld,
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