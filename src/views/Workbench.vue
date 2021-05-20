<template>
<div class="relative focus-within:text-blue-500 mt-4">
  <input type="text" autocomplete="off" name="username" placeholder=" " class="block focus:outline-none appearance-none w-full text-gray-900 border focus:border-blue-500 rounded py-3 px-4 mb-3 shadow bg-transparent" />
  <label for="username" class="absolute left-2 top-3 px-2 duration-300 block tracking-wide lg:mb-2 pointer-events-none">First Name</label>
</div>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent } from 'vue';
import { useStore } from "@/store/store"

import "@/assets/css/form-floating-labels.css"

export default defineComponent({
    name: 'Workbench',
    components: {
    },
    computed: {
    },
    data() {
        return {
            store: useStore(),
            test: "",
        }
    },
    async created() {
        return;
    },
});
</script>