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
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"><span class="sr-only">Edit</span></th>
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
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <a href="#" class="text-blue-600 hover:text-blue-900">Edit</a>
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

import Pagination from "@/components/Pagination/Pagination.vue"

import "@/assets/css/form-styles.css";

export default defineComponent({
    name: "Brand Waivers",
    components: {
        Pagination
    },
    setup() {
        const waivers = [
            { approved: "2/12/2019", standard: "Linen Standard", justification: "123I want to purchase and use linen from the upscale brand instead of what's required for the economy brand.", expiration: "12/31/2021"},
            { approved: "7/12/2017", standard: "Lobby Music", justification: "Lobby space is too large for muisic to be played at a reasonable volume and still be heard.", expiration: "N/A"},
            { approved: "3/2/2019", standard: "Welcome Amenitity", justification: "None Provided", expiration: "12/31/2021"},
            { approved: "3/12/2017", standard: "Breakfast Standard", justification: "Waiver per franchise license agreement.", expiration: "N/A"},
            { approved: "1/31/2020", standard: "HSIA Standard", justification: "Local Vendors only provide up to 100mbps.", expiration: "12/31/2021"},
        ]

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