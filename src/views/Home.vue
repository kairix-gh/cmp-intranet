<template>
    <div class="flex flex-col max-w-7xl mx-auto">
        <div class="flex flex-col mx-4">
            <NewsPostHero :NewsPost="firstPost"/>

            <div class="grid md:grid-cols-3 gap-x-8 gap-y-8 mt-6">
                <a href="#" v-for="item in newsPosts.slice(1, 4)" :key="item" class="flex flex-col shadow-lg relative rounded hover:shadow-xl">
                    <img :src="item.ImageUrl.Description" class="object-cover"/>
                    <div class="flex flex-col w-full justify-center h-full px-2 py-1 mb-2">
                        <span class="text-sm text-gray-400 font-medium uppercase">{{ item.Category }}</span>
                        <span class="leading-tight text-xs uppercase mb-1">{{ item.PublishDate.substring(0, 10) }}</span>
                        <span class="font-medium">{{ item.Title }}</span>
                    </div>
                </a>
            </div>

            <a href="#" class="inline-flex items-center mt-4 uppercase text-white text-sm font-medium bg-blue-300 rounded px-2.5 py-1 hover:bg-blue-600 w-full md:w-auto justify-center md:self-end">
                See All News
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
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
import { NewsPost } from "@/types/types"

import NewsPostHero from "@/components/NewsPosts/NewsPostHero.vue"

export default defineComponent({
    name: 'Home',
    components: {
        NewsPostHero
    },
    computed: {
        firstPost(): NewsPost | null {
            if (this.newsPosts.length > 0) {
                return this.newsPosts[0];
            }

            return null;
        }
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