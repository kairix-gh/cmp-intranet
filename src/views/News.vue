<template>
    <div class="flex flex-col mx-4">
        <NewsPostHero v-if="currentPage == 1" :Post="firstPost"/>

        <div class="grid md:grid-cols-3 gap-x-8 gap-y-8 mt-6">
            <NewsPostComponent :Post="item" v-for="item in newsPosts.slice(arrayStart, arrayEnd)" :key="item" />
        </div>

        <div class="mt-4">
            <Pagination :TotalItems="newsPosts.length-1" :CurrentPage="currentPage" :ItemsOnFirstPage="itemsOnFirstPage" :ItemsPerPage="itemsPerPage" v-on:requestPageChange="requestPageChangeEvent" ItemDescriptor="posts" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from "vue";
import { useRouter, useRoute } from "vue-router"

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
        const router = useRouter();
        const route = useRoute();

        const newsPosts = store.getNewsPosts();
        const firstPost = computed(function() {
            if (newsPosts.length > 0) {
                return newsPosts[0];
            }

            return {}
        })

        const currentPage = ref(getPageNumber(route.params.page));
        const itemsOnFirstPage = 7;
        const itemsPerPage = 6;

        // Update currentPage when we change pages
        watch(
            () => route.params.page, async newId => {
                currentPage.value = getPageNumber(newId);
            }
        )

        // Update route when we change pages
        function requestPageChangeEvent(args: number) {
            router.push({
                name: "News",
                params: {
                    page: args
                }
            });
        }

        // Take value from router param and determine what page we're on
        // if it's not valid, default to page 1
        function getPageNumber(value: string | string[]) {
            if (value) {
                return parseInt(value.toString())
            } else {
                return 1;
            }
        }

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