<template>
  <div class="home">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useStore } from "@/store/store"
import { Resource } from "@/types/types"

export default defineComponent({
    name: 'Home',
    components: {
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