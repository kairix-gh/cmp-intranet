<template>
  <div class="">
      <div class="flex flex-col">

      </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useStore } from "@/store/store"
import { NewsPost } from "@/types/types"

export default defineComponent({
    name: 'Home',
    components: {
    },
    data() {
        return {
            count: 1,
            store: useStore(),

            newsPosts: [] as Array<NewsPost>,
        }
    },
    async created() {
        this.newsPosts = this.store.getNewsPosts();
    }
});
</script>