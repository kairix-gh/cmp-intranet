<template>
    <div class="flex justify-end print:hidden">
        <button class="inline-block bg-blue-300 hover:bg-blue-600 text-white rounded px-2.5 py-1 transition duration-300 form-base-focus">Request Waiver</button>
    </div>
    <div class="flex flex-col w-full">
        <div class="flex flex-col mt-4">
            <div class="overflow-x-auto">
                <div class="py-2 align-middle inline-block min-w-full">
                    <div class="shadow overflow-hidden border border-gray-200 rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Approved</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand Standard</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Justification</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiration</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                    <tr v-for="waiver in waivers.slice(arrayStart, arrayEnd)" :key="waiver" class="hover:bg-blue-50">
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            {{ waiver.approved }}
                                        </td>
                                        <td class="px-6 py-4">
                                            {{ waiver.standard }}
                                        </td>
                                        <td class="px-6 py-4">
                                            {{ waiver.justification }}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            {{ waiver.expiration }}
                                        </td>
                                    </tr>
                            </tbody>
                        </table>

                        <Pagination :TotalItems="waivers.length" :CurrentPage="currentPage" :ItemsOnFirstPage="itemsOnFirstPage" :ItemsPerPage="itemsPerPage" v-on:requestPageChange="requestPageChangeEvent" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
table {
    page-break-inside: auto;
}

thead {
    display: table-header-group;
}

tr {
    page-break-before: always;
    page-break-inside: avoid;
    page-break-after: always;
}
</style>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "@/store/store"

import Pagination from "@/components/Pagination/Pagination.vue"

import "@/mockups/waviers"
import "@/assets/css/form-styles.css";

export default defineComponent({
    name: "Brand Waivers",
    components: {
        Pagination
    },
    setup() {
        const store = useStore();
        const waivers = store.getWaiversForProperty();

        const currentPage = ref(1);
        const itemsOnFirstPage = 10;
        const itemsPerPage = 10;

        // Calc start index of array items for template
        const arrayStart = computed(function() {
            if (!waivers) {
                return 0;
            }

            return Math.max((((currentPage.value - 2) * itemsPerPage)) + (currentPage.value != 1 ? itemsOnFirstPage : 0), 0);
        })

        // Calc end index of array items for template
        const arrayEnd = computed(function() {
            if (!waivers) {
                return 0;
            }

            return (arrayStart.value + (currentPage.value == 1 ? itemsOnFirstPage : itemsPerPage));
        })

        function requestPageChangeEvent(args: number) {
            currentPage.value = args;
        }


        return {
            waivers,
            arrayStart,
            arrayEnd,
            requestPageChangeEvent,
            currentPage,
            itemsOnFirstPage,
            itemsPerPage
        }
    }
})
</script>