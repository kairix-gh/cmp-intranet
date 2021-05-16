<template>
        <div class="flex flex-col mx-4">
            <NewsPostHero v-if="currentPage == 1" :Post="firstPost"/>

            <div class="grid md:grid-cols-3 gap-x-8 gap-y-8 mt-6">
                <NewsPostComponent :Post="item" v-for="item in newsPosts.slice(startingCount, currentPage == 1 ? endingCount : endingCount + 1)" :key="item" />
            </div>


            <div class="bg-white py-3 flex items-center justify-between border-t sm:px-6 mt-4">
                <!-- Mobile -->
                <div class="flex-1 flex justify-between sm:hidden">
                    <a href="#" class="relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                        Previous
                    </a>
                    <div class="inline-flex items-center text-sm font-medium text-gray-900">
                        {{ currentPage }} / {{ totalPages }}
                    </div>
                    <a href="#" class="relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                        Next
                    </a>
                </div>

                <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                        <p class="text-sm text-gray-700">
                            Showing <span class="font-medium">{{ startingCount }}</span> to <span class="font-medium">{{ endingCount }}</span> of <span class="font-medium">{{ totalItems }}</span> posts.
                        </p>
                    </div>
                    <div>
                        <nav class="relative inline-flex rounded-md shadow-sm -space-x-px">
                            <a href="#" @click.prevent="changePage(currentPage - 1)" class="relative inline-flex items-center px-2 py-2 rounded-l-md border bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                            </a>
                            <a href="#" @click.prevent="changePage(item)" class="relative inline-flex items-center px-4 py-2 border text-sm font-medium bg-white text-gray-500 hover:bg-gray-50 "
                                v-for="item in Array.from({length: totalPages}, (k,v) => v+1)" :key="item"
                            >
                                {{ item }}
                            </a>
                            <a href="#" @click.prevent="changePage(currentPage + 1)" class="relative inline-flex items-center px-2 py-2 rounded-r-md border bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
</template>

<style scoped>

</style>

<script lang="ts">
import { defineComponent } from 'vue';

import { useStore } from "@/store/store"
import { NewsPost } from '@/types/types';

import NewsPostHero from "@/components/NewsPosts/NewsPostHero.vue"
import NewsPostComponent from "@/components/NewsPosts/NewsPost.vue"

export default defineComponent({
    name: 'Workbench',
    components: {
        NewsPostComponent,
        NewsPostHero
    },
    computed: {
        firstPost(): NewsPost | [] {
            if (this.newsPosts .length > 0) {
                return this.newsPosts[0];
            }

            return []
        },
        totalPages(): number {
            if (!this.newsPosts || this.newsPosts.length == 0) {
                return 0;
            }

            return Math.ceil((this.newsPosts.length - this.itemsOnFirstPage) / this.itemsPerPage) + 1;
        },
        totalItems(): number {
            if (!this.newsPosts) {
                return 0;
            }

            return this.newsPosts.length;
        },
        startingCount(): number {
            if (!this.newsPosts) {
                return 0;
            }

            let count = 0;
            if (this.currentPage > 1) {
                count += this.itemsOnFirstPage;
            }
            count += ((this.currentPage - 2) * this.itemsPerPage) + 1;

            return Math.max(count, 1);
        },
        endingCount(): number {
            return Math.min((this.startingCount + (this.currentPage == 1 ? this.itemsOnFirstPage : this.itemsPerPage)) - 1, this.totalItems);
        }
    },
    data() {
        return {
            store: useStore(),
            isOpen: false,

            currentPage: 1 as number,

            itemsOnFirstPage: 4 as number,
            itemsPerPage: 6 as number,

            newsPosts: [] as NewsPost[]
        }
    },
    async created() {
        this.newsPosts = this.store.getNewsPosts();
    },
    methods: {
        changePage(page: number) {
            this.currentPage = Math.min(Math.max(page, 1), this.totalPages);
        }
    }
});
</script>