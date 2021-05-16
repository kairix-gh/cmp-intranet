<template>
    <span></span>
</template>

<style scoped>

</style>

<script lang="ts">
/* eslint-disable */
import { defineComponent } from 'vue';

import { useStore } from "@/store/store"
import { Resource } from '@/types/types';


export default defineComponent({
    name: 'Workbench',
    components: {
    },
    computed: {
    },
    data() {
        return {
            store: useStore(),
        }
    },
    // async created() {
    // },
});
</script>