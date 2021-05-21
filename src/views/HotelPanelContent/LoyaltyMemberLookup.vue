<template>
    <div class="flex flex-col w-full">
        <form class="flex flex-col">
            <div class="relative focus-within:text-blue-500">
                <label for="memberid" class="label-base">Member ID</label>
                <input type="text" class="form-base w-full focus:border-blue-500">
                <p class="text-sm italic text-gray-400">Enter a member number or e-mail address.</p>
            </div>
            <div class="self-end mt-2">
                <button type="button" class="inline-block bg-blue-300 hover:bg-blue-600 text-white rounded px-2.5 py-1 transition duration-300 form-base-focus">Search</button>
            </div>
        </form>
        <div class="flex flex-col mt-4">
            <div class="overflow-x-auto -mx-5 md:mx-0">
                <div class="py-2 align-middle inline-block min-w-full">
                    <div class="shadow overflow-hidden border border-gray-200 md:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Member ID</th>
                                    <th scope="col" class="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Member Level</th>
                                    <th scope="col" class="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Point Balance</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"><span class="sr-only">View</span></th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr v-for="member in members" :key="member" class="hover:bg-blue-50">
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-900 font-medium">{{ member.name }}</div>
                                        <div class="hidden md:inline-block text-sm text-gray-500">{{ member.email }}</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        {{ member.id }}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                                        {{ member.level }}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                                        {{ formatNumber(member.balance) }} pts.
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <a href="#" class="text-blue-600 hover:text-blue-900">View</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import "@/assets/css/form-styles.css";

export default defineComponent({
    name: "Loyalty Member Lookup",
    setup() {
        const members = [
            { name: "Sanna Kipling", id: "XXX-12-3456", email: "sanna.kipling@example.com", level: "Silver", balance: 69375 },
            { name: "Tasha Salminen", id: "XXX-12-3456", email: "tasha.salminen@example.com", level: "Platinum", balance: 102955 },
            { name: "Carolyn Boothman", id: "XXX-12-3456", email: "carolyn.boothman@example.com", level: "Bronze", balance: 1687 },
            { name: "Eemeli Kaydence", id: "XXX-12-3456", email: "eemeli.kaydence@example.com", level: "Diamond", balance: 687326 },
            { name: "Terri Niles", id: "XXX-12-3456", email: "terri.niles@example.com", level: "Silver", balance: 72699 },
        ]

        function formatNumber(num: number) {
            return num.toLocaleString(undefined, { minimumFractionDigits: 0});
        }

        return { members, formatNumber }
    }
})
</script>