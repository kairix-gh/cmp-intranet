<template>
    <div class="bg-white py-3 flex items-center justify-between border-t sm:px-6">
        <!-- Mobile -->
        <div class="flex-1 flex justify-between sm:hidden">
            <a href="#" @click.prevent="requestPageChange(CurrentPage - 1)" class="relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                Previous
            </a>
            <div class="inline-flex items-center text-sm font-medium text-gray-900">
                {{ CurrentPage }} / {{ totalPages }}
            </div>
            <a href="#" @click.prevent="requestPageChange(CurrentPage + 1)" class="relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                Next
            </a>
        </div>

        <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
                <p class="text-sm text-gray-700 py-2.5">
                    Showing <span class="font-medium">{{ startingCount }}</span> to <span class="font-medium">{{ endingCount }}</span> of <span class="font-medium">{{ TotalItems }}</span> posts.
                </p>
            </div>
            <div v-if="totalPages > 1">
                <nav class="relative inline-flex rounded-md shadow-sm -space-x-px">
                    <a href="#" @click.prevent="requestPageChange(CurrentPage - 1)" class="relative inline-flex items-center px-2 py-2 rounded-l-md border bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                    </a>
                    <a href="#" @click.prevent="requestPageChange(item)" class="relative inline-flex items-center px-4 py-2 border text-sm font-medium bg-white text-gray-500 hover:bg-gray-50"
                        :class="[ item == CurrentPage ? 'bg-blue-50 border-blue-500 text-blue-600 z-10' : '']"
                        v-for="item in Array.from({length: totalPages}, (k,v) => v+1)" :key="item"
                    >
                        {{ item }}
                    </a>
                    <a href="#" @click.prevent="requestPageChange(CurrentPage + 1)" class="relative inline-flex items-center px-2 py-2 rounded-r-md border bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                    </a>
                </nav>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"

export default defineComponent({
    name: "Pagination",
    props: {
        CurrentPage: {
            type: Number,
            default: 1,
        },
        ItemsOnFirstPage: {
            type: Number,
            default: 4
        },
        ItemsPerPage: {
            type: Number,
            default: 6
        },
        TotalItems: {
            type: Number,
            required: true,
            default: 1
        },
    },
    setup(props,  { emit }: { emit: ((eventName: string, payload: number) => void) }) {
        const totalPages = computed(function(): number {
            return Math.ceil(((props.TotalItems - props.ItemsOnFirstPage) / props.ItemsPerPage) + 1);
        })

        const startingCount = computed(function(): number {
            let count = 0;

            if (props.CurrentPage > 1) {
                count += props.ItemsOnFirstPage;
            }
            count += ((props.CurrentPage - 2) * props.ItemsPerPage) + 1;

            return Math.max(count, 1);
        })

        const endingCount = computed(function(): number {
            return Math.min((startingCount.value + (props.CurrentPage == 1 ? props.ItemsOnFirstPage : props.ItemsPerPage)) - 1, props.TotalItems);
        })

        function requestPageChange(page: number) {
            emit("requestPageChange", Math.min(Math.max(page, 1), totalPages.value));
        }

        return {
            totalPages,
            startingCount,
            endingCount,
            requestPageChange,
        }
    }
})
</script>