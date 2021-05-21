<template>
    <div class="flex justify-end">
        <button class="inline-block bg-blue-300 hover:bg-blue-600 text-white rounded px-2.5 py-1 transition duration-300 form-base-focus">Print PDF</button>
    </div>
    <div class="flex flex-col w-full">
        <div class="flex flex-col mt-4">
            <div class="overflow-x-auto">
                <div class="py-2 align-middle inline-block min-w-full">
                    <div class="shadow overflow-hidden border border-gray-200 rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Member Level</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Point Balance</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stay Dates</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"><span class="sr-only">View</span></th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <template v-for="tier in memberTiers" :key="tier">
                                    <tr v-if="members.filter(m => m.level == tier.name).length > 0">
                                        <td class="" colspan="5" :style="tier.style">
                                            <p class="text-center uppercase font-medium text-sm text-gray-100">{{ tier.name }} Member Arrivals</p>
                                        </td>
                                    </tr>
                                    <tr v-for="member in members.filter(m => m.level == tier.name)" :key="member" class="hover:bg-blue-50">
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900 font-medium">{{ member.name }}</div>
                                            <div class="text-sm text-gray-500">{{ member.email }}</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            {{ member.level }}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            {{ formatNumber(member.balance) }} pts.
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm space-y-1">
                                            <div class="">
                                                A: {{ member.arrival }}
                                            </div>
                                            <div class="">
                                                D: {{ member.departure }}
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <a href="#" class="text-blue-600 hover:text-blue-900">View</a>
                                        </td>
                                    </tr>
                                </template>

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
    name: "Loyalty Member Arrivals",
    setup() {
        const memberTiers = [
            { name: "Diamond", style: "background: #6e9dd4" },
            { name: "Platinum", style: "background: #6f9695" },
            { name: "Gold", style: "background: #ebe3b9" },
            { name: "Silver", style: "background: #8c9f9e" },
            { name: "Bronze", style: "background: #976a58" },
            { name: "Iron", style: "background: #6b696a" },
        ]

        const members = [
            { name: "Sanna Kipling", email: "sanna.kipling@example.com", level: "Silver", balance: 6255,  arrival: "5/1/2021", departure: "5/4/2021" },
            { name: "Tasha Salminen", email: "tasha.salminen@example.com", level: "Platinum", balance: 12698,  arrival: "5/1/2021", departure: "5/6/2021" },
            { name: "Carolyn Boothman", email: "carolyn.boothman@example.com", level: "Bronze", balance: 647,  arrival: "5/1/2021", departure: "5/3/2021" },
            { name: "Eemeli Kaydence", email: "eemeli.kaydence@example.com", level: "Diamond", balance: 687326,  arrival: "5/1/2021", departure: "5/7/2021" },
            { name: "Olen Sirianni", email: "Olen.Sirianni@example.com", level: "Bronze", balance: 322,  arrival: "5/1/2021", departure: "5/2/2021" },
            { name: "Shonna Pouliot", email: "Shonna.Pouliot@example.com", level: "Iron", balance: 50,  arrival: "5/1/2021", departure: "5/2/2021" },
            { name: "Ranae Gettinger", email: "Ranae.Gettinger@example.com", level: "Platinum", balance: 22854,  arrival: "5/1/2021", departure: "5/5/2021" },
            { name: "Kyle Ragin", email: "Kyle.Ragin@example.com", level: "Iron", balance: 17,  arrival: "5/1/2021", departure: "5/2/2021" },
            { name: "Zoraida Westerlund", email: "Zoraida.Westerlund@example.com", level: "Iron", balance: 62,  arrival: "5/1/2021", departure: "5/2/2021" },
            { name: "Melina Herbst", email: "Melina.Herbst@example.com", level: "Iron", balance: 141,  arrival: "5/1/2021", departure: "5/2/2021" },
            { name: "Irma Engelhard", email: "Irma.Engelhard@example.com", level: "Silver", balance: 1369,  arrival: "5/1/2021", departure: "5/4/2021" },
            { name: "Otilia Mccree", email: "Otilia.Mccree@example.com", level: "Iron", balance: 102,  arrival: "5/1/2021", departure: "5/2/2021" },
            { name: "Graham Duda", email: "Graham.Duda@example.com", level: "Bronze", balance: 899,  arrival: "5/1/2021", departure: "5/2/2021" },
            { name: "Hilario Yeatman", email: "Hilario.Yeatman@example.com", level: "Iron", balance: 7,  arrival: "5/1/2021", departure: "5/2/2021" },
        ]

        function formatNumber(num: number) {
            return num.toLocaleString(undefined, { minimumFractionDigits: 0});
        }

        return { members, formatNumber, memberTiers }
    }
})
</script>