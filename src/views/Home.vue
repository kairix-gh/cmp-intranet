<template>
  <div class="home bg-red-100">
    <img alt="Vue logo" class="h-[100px]" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

import { useStore } from "@/store/store"

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