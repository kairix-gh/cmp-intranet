<template>
    <footer class="bg-gray-600 text-white w-full p-4 flex flex-col justify-between">
        &copy; {{ currentYear }} Chris Miller
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Footer",
    data() {
        return {
            currentYear: new Date().getFullYear(),
        }
    }
})
</script>