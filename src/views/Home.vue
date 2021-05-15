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
import { Resource } from "@/types/types"

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
            resourceCategories: {} as string[],
            resources: [] as Resource[],
        }
    },
    async created() {
        // this.store?.loadAll();
        this.resourceCategories = this.store.getResourceCategories();

        this.resources = this.store.getResourcesInCategory("Operations");
    }
});
</script>