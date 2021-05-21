<template>
<div class="focus-within:text-blue-500 mt-4">
    <label for="username" class="label-base">First Name</label>
    <input type="text" autocomplete="off" name="username" placeholder=" " class="form-base w-full focus:border-blue-500" />
</div>

<div class="focus-within:text-blue-500">
    <label for="date" class="label-base">Arrival Date</label>
    <input type="date" id="date" class="form-base w-full focus:border-blue-500">
</div>

</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent } from 'vue';
import { useStore } from "@/store/store"

import "@/assets/css/form-styles.css"

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