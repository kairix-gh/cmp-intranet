<template>
    <div class="flex justify-between items-end mb-4">
        <div class="w-full lg:w-1/3 focus-within:text-blue-500">
            <label for="first" class="label-base label-focus-base">
                Search Users
            </label>
            <input v-model="filterInput" type="text" id="first" class="form-base form-base-focus w-full" placeholder="Search">
        </div>
        <button @click="showUserEditProfileModal(-1)" type="button" class="inline-block bg-blue-300 hover:bg-blue-600 text-white rounded px-2.5 py-1 transition duration-300 form-base-focus">
            <span class="flex items-center">
            <svg class="w-5 h-5 md:mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            <span class="hidden md:table-cell">New User</span>
            </span>
        </button>
    </div>

    <div class="flex flex-col w-full">
        <div class="flex flex-col mt-4">
            <div class="overflow-x-auto">
                <div class="py-2 align-middle inline-block min-w-full">
                    <div class="shadow overflow-hidden border border-gray-200 rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">E-Mail</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr v-for="(user, index) in filteredUsers.slice(arrayStart, arrayEnd)" :key="index" class="hover:bg-blue-50">
                                    <td class="px-4 py-2 hidden md:table-cell">{{ user.firstName }}</td>
                                    <td class="px-4 py-2 hidden md:table-cell">{{ user.lastName }}</td>
                                    <td class="px-4 py-2 hidden md:table-cell">{{ user.role }}</td>
                                    <td class="px-4 py-2">{{ user.brandEmail }}</td>
                                    <td class="px-4 py-2">
                                        <div class="flex md:space-x-4 items-center">
                                            <button  @click.prevent="showUserEditProfileModal(user.id)" class="hover:bg-blue-600 hover:text-white rounded transition-all ease-in-out p-2">
                                                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                            </button>
                                            <button   @click.prevent="showUserEditPermissionsModal(user.id)" class="hover:bg-blue-600 hover:text-white rounded transition-all ease-in-out p-2">
                                                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
                                            </button>
                                            <button @click.prevent="showUserDeleteModal(user.id)" class="hover:bg-red-600 hover:text-white rounded transition-all ease-in-out p-2">
                                                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <Pagination :TotalItems="filteredUsers.length" :CurrentPage="currentPage" :ItemsOnFirstPage="itemsOnFirstPage" :ItemsPerPage="itemsPerPage" v-on:requestPageChange="requestPageChangeEvent" />
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
/* eslint-disable */
import { defineComponent, ref, computed } from "vue";
import { useStore } from "@/store/store"

import Pagination from "@/components/Pagination/Pagination.vue"

import "@/mockups/waviers"
import "@/assets/css/form-styles.css";

export default defineComponent({
    name: "User Management",
    components: {
        Pagination
    },
    setup() {
        const store = useStore();
        const users = ref(store.getUserProfilesForProperty());

        const currentPage = ref(1);
        const itemsOnFirstPage = 10;
        const itemsPerPage = 10;

        // Calc start index of array items for template
        const arrayStart = computed(function() {
            if (!filteredUsers.value) {
                return 0;
            }

            return Math.max((((currentPage.value - 2) * itemsPerPage)) + (currentPage.value != 1 ? itemsOnFirstPage : 0), 0);
        })

        // Calc end index of array items for template
        const arrayEnd = computed(function() {
            if (!filteredUsers.value) {
                return 0;
            }

            return (arrayStart.value + (currentPage.value == 1 ? itemsOnFirstPage : itemsPerPage));
        })

        function requestPageChangeEvent(args: number) {
            currentPage.value = args;
        }


        const filterInput = ref("")
        const filteredUsers = computed(function() {
            if (!filterInput.value) {
                return users.value;
            } else {
                let filter = filterInput.value.toLowerCase();

                // Reset to first page just to make sure visible items are displayed
                currentPage.value = 1;

                return users.value.filter(function(user) {
                    return user.firstName.toLowerCase().includes(filter) ||
                           user.lastName.toLowerCase().includes(filter) ||
                           user.brandEmail?.toLowerCase().includes(filter) ||
                           user.personalEmail.toLowerCase().includes(filter);
                })
            }
        })


        return {
            users,
            filterInput,
            filteredUsers,
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