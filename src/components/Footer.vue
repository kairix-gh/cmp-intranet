<template>
    <footer class="bg-gray-600 text-white flex-shrink-0 w-full p-4 flex flex-col justify-between mt-4">
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