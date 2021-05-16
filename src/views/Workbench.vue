<template>
    <div class="flex flex-col max-w-7xl mx-auto">
        <div class="bg-gray-100">

        </div>
    </div>
</template>

<style scoped>
.fadeBox:after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background: linear-gradient(to top, white 20%, rgba(0, 0, 0, 0) 80%);
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

import { useStore } from "@/store/store"
import { CalendarEvent } from '@/types/types';

export default defineComponent({
    name: 'Home',
    components: {
    },
    computed: {
    },
    data() {
        return {
            store: useStore(),

            events: [] as Array<CalendarEvent>
        }
    },
    async created() {

    }
});
</script>