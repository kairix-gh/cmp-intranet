<template>
    <div class="flex flex-col mx-4">
        <NewsPostHero v-if="currentPage == 1" :Post="firstPost"/>

        <div class="grid md:grid-cols-3 gap-x-8 gap-y-8 mt-6">
            <NewsPostComponent :Post="item" v-for="item in newsPosts.slice(arrayStart, arrayEnd)" :key="item" />
        </div>

        <Pagination :TotalItems="newsPosts.length" :CurrentPage="currentPage" v-on:requestPageChange="requestPageChangeEvent" />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import { useStore } from "@/store/store"

import NewsPostHero from "@/components/NewsPosts/NewsPostHero.vue"
import NewsPostComponent from "@/components/NewsPosts/NewsPost.vue"

import Pagination from "@/components/Pagination/Pagination.vue"

export default defineComponent({
    name: "News",
    components: {
        NewsPostComponent,
        NewsPostHero,
        Pagination,
    },
    setup() {
        const store = useStore();

        const newsPosts = store.getNewsPosts();
        const firstPost = computed(function() {
            if (newsPosts.length > 0) {
                return newsPosts[0];
            }

            return {}
        })

        const currentPage = ref(1);
        const itemsOnFirstPage = 4;
        const itemsPerPage = 6;

        // Calc start index of array items for template
        const arrayStart = computed(function() {
            if (!newsPosts) {
                return 0;
            }

            return Math.max((((currentPage.value - 2) * itemsPerPage) + 1) + (currentPage.value != 1 ? itemsOnFirstPage : 0), 1);
        })

        // Calc end index of array items for template
        const arrayEnd = computed(function() {
            if (!newsPosts) {
                return 0;
            }

            return (arrayStart.value + (currentPage.value == 1 ? itemsOnFirstPage - 1 : itemsPerPage));
        })

        function requestPageChangeEvent(args: number) {
            currentPage.value = args;
        }

        return {
            newsPosts,
            firstPost,
            currentPage,
            itemsOnFirstPage,
            itemsPerPage,
            arrayStart,
            arrayEnd,
            requestPageChangeEvent,
        }

    }
})
</script>