<template>
    <div class="flex flex-col max-w-7xl mx-auto">
        <div class="flex flex-col mx-4">
            <div href="#" v-if="firstPost" class="relative flex h-52 md:h-[22.5rem] w-full bg-cover rounded" :style="'background-image: url(' + firstPost.ImageUrl.Url + ')'">
                <span class="absolute top-2 right-2 z-10 rounded ring-1 ring-gray-700 px-2 py-1 bg-gray-700 text-white bg-opacity-80">{{ firstPost.Category }}</span>

                <div class="bg-opacity-60 flex h-full w-full absolute bg-gradient-to-tr md:bg-gradient-to-r from-gray-700">
                    <div class="self-end md:self-center mb-6 md:mb-0 ml-4 md:ml-8 md:mt-16 space-y-4">
                        <p class="text-lg md:text-2xl text-white">{{ firstPost.Title }}</p>
                        <a href="#" class="bg-blue-300 py-2.5 px-6 text-white font-medium uppercase text-xs rounded inline-block">Read More</a>
                    </div>
                </div>
            </div>

            <div class="grid md:grid-cols-3 gap-x-8 gap-y-8 mt-6">
                <a href="#" v-for="item in newsPosts.slice(1, 4)" :key="item" class="flex flex-col shadow-lg relative">
                    <img :src="item.ImageUrl.Description" class="object-cover"/>
                    <div class="flex flex-col w-full justify-center h-full">
                        <span class="absolute top-2 right-2 z-10 rounded ring-1 ring-gray-700 px-2 py-1 bg-gray-700 text-white bg-opacity-80">{{ item.Category }}</span>
                        <span class="py-1 px-2 font-medium">{{ item.Title }}</span>
                        <span class="px-2 leading-tight text-xs uppercase mb-1">{{ item.PublishDate.substring(0, 10) }}</span>
                    </div>
                </a>
            </div>
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