<template>
    <div class="content">
        <Menu/>
        <main class="my-4 flex flex-col max-w-7xl mx-auto">
            <router-view/>
        </main>
    </div>
    <Footer />
</template>

<style>
html, body, div#app {
    height: 100%;
}

body, div#app {
    display: flex;
    flex-direction: column;
}

.content {
    flex: 1 0 auto;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

import Menu from "@/components/Menu.vue"
import Footer from "@/components/Footer.vue"

export default defineComponent({
    name: "App",
    components: {
        Menu,
        Footer,
    }
})
</script>