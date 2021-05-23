<template>
    <div>
        <p class="">Below are a list of tasks that have been assigned to the property by the brand. If there are any questions regarding these tasks please reach out to a member of our Franchise Support team.</p>
    </div>
    <div class="flex flex-col w-full">
        <div class="flex flex-col mt-4">
            <div class="overflow-x-auto">
                <div class="py-2 align-middle inline-block min-w-full">
                    <div class="shadow overflow-hidden border border-gray-200 rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"><span class="sr-only">Item Number</span></th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task to Complete</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned By</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due By</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"><span class="sr-only">Edit</span></th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200" v-if="haveActionItems">
                                    <tr v-for="(item, index) in actionItems.slice(arrayStart, arrayEnd)" :key="item" class="hover:bg-blue-50">
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            {{ index + 1 }}
                                        </td>
                                        <td class="px-6 py-4 w-1/2">
                                            {{ item.action }}
                                        </td>
                                        <td class="px-6 py-4">
                                            {{ item.assignedBy }}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            {{ item.due }}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <a href="#" class="text-blue-600 hover:text-blue-900">View</a>
                                        </td>
                                    </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td class="px-6 py-4" colspan="5">
                                        <p class="text-sm italic">There are no assigned tasks to be completed at this time.</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <Pagination v-if="haveActionItems" :TotalItems="actionItems.length" :CurrentPage="currentPage" :ItemsOnFirstPage="itemsOnFirstPage" :ItemsPerPage="itemsPerPage" v-on:requestPageChange="requestPageChangeEvent" />
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
    name: "Action Items",
    components: {
        Pagination
    },
    setup() {
        const actionItems: unknown[] = [
            { action: "Improve breakfast scores by 15%.", assignedBy: "Operations", due: "5/31/201" },
            { action: "Replace or repair to like-new condition, the damaged soft seating in the breakfast room.", assignedBy: "Operations", due: "5/31/201" },
            { action: "Ensure all breakfast items served are not expired.", assignedBy: "Operations", due: "5/23/201" },
            { action: "Implement and offer all brand approved breakfast offerings.", assignedBy: "Operations", due: "5/31/201" },
        ]

        const haveActionItems = computed(function() {
            return actionItems.length > 0
        })

        const currentPage = ref(1);
        const itemsOnFirstPage = 10;
        const itemsPerPage = 10;

        // Calc start index of array items for template
        const arrayStart = computed(function() {
            if (!actionItems) {
                return 0;
            }

            return Math.max((((currentPage.value - 2) * itemsPerPage)) + (currentPage.value != 1 ? itemsOnFirstPage : 0), 0);
        })

        // Calc end index of array items for template
        const arrayEnd = computed(function() {
            if (!actionItems) {
                return 0;
            }

            return (arrayStart.value + (currentPage.value == 1 ? itemsOnFirstPage : itemsPerPage));
        })

        function requestPageChangeEvent(args: number) {
            currentPage.value = args;
        }


        return {
            actionItems,
            haveActionItems,
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