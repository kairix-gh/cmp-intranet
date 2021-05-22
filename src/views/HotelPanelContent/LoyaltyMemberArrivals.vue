<template>
    <div class="flex justify-end print:hidden">
        <button @click.prevent="printReport" class="inline-block bg-blue-300 hover:bg-blue-600 text-white rounded px-2.5 py-1 transition duration-300 form-base-focus">Print PDF</button>
    </div>
    <div ref="printContent" class="flex flex-col w-full">
        <div class="flex flex-col mt-4">
            <div class="overflow-x-auto">
                <div class="py-2 align-middle inline-block min-w-full">
                    <div class="shadow overflow-hidden border border-gray-200 rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th scope="col" class="hidden md:table-cell print:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Member Id</th>
                                    <th scope="col" class="hidden md:table-cell print:hidden px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Point Balance</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stay Dates</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider print:hidden"><span class="sr-only">View</span></th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <template v-for="tier in memberTiers" :key="tier">
                                    <tr v-if="members.filter(m => m.level == tier.name).length > 0">
                                        <td class="" colspan="6" :style="tier.style">
                                            <p class="text-center uppercase font-medium text-sm text-gray-100">{{ tier.name }} Member Arrivals</p>
                                        </td>
                                    </tr>
                                    <tr v-for="member in members.filter(m => m.level == tier.name)" :key="member" class="hover:bg-blue-50">
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900 font-medium">{{ member.name }}</div>
                                            <div class="text-sm text-gray-500 print:hidden">{{ member.email }}</div>
                                        </td>
                                        <td class="px-6 py-4 whitepsace-nowrap">
                                            {{ member.id }}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap hidden md:table-cell print:hidden">
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
                                        <td class="px-6 py-4 whitespace-nowrap print:hidden">
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
import { defineComponent, ref } from "vue";

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
            { name: "Sanna Kipling", id: "XXX-12-3456", email: "sanna.kipling@example.com", level: "Silver", balance: 6255,  arrival: "5/1/2021", departure: "5/4/2021" },
            { name: "Tasha Salminen", id: "XXX-12-3456", email: "tasha.salminen@example.com", level: "Platinum", balance: 12698,  arrival: "5/1/2021", departure: "5/6/2021" },
            { name: "Carolyn Boothman", id: "XXX-12-3456", email: "carolyn.boothman@example.com", level: "Bronze", balance: 647,  arrival: "5/1/2021", departure: "5/3/2021" },
            { name: "Eemeli Kaydence", id: "XXX-12-3456", email: "eemeli.kaydence@example.com", level: "Diamond", balance: 687326,  arrival: "5/1/2021", departure: "5/7/2021" },
            { name: "Olen Sirianni", id: "XXX-12-3456", email: "Olen.Sirianni@example.com", level: "Bronze", balance: 322,  arrival: "5/1/2021", departure: "5/2/2021" },
            { name: "Shonna Pouliot", id: "XXX-12-3456", email: "Shonna.Pouliot@example.com", level: "Iron", balance: 50,  arrival: "5/1/2021", departure: "5/2/2021" },
            { name: "Ranae Gettinger", id: "XXX-12-3456", email: "Ranae.Gettinger@example.com", level: "Platinum", balance: 22854,  arrival: "5/1/2021", departure: "5/5/2021" },
            { name: "Kyle Ragin", id: "XXX-12-3456", email: "Kyle.Ragin@example.com", level: "Iron", balance: 17,  arrival: "5/1/2021", departure: "5/2/2021" },
            { name: "Zoraida Westerlund", id: "XXX-12-3456", email: "Zoraida.Westerlund@example.com", level: "Iron", balance: 62,  arrival: "5/1/2021", departure: "5/2/2021" },
            { name: "Melina Herbst", id: "XXX-12-3456", email: "Melina.Herbst@example.com", level: "Iron", balance: 141,  arrival: "5/1/2021", departure: "5/2/2021" },
            { name: "Irma Engelhard", id: "XXX-12-3456", email: "Irma.Engelhard@example.com", level: "Silver", balance: 1369,  arrival: "5/1/2021", departure: "5/4/2021" },
            { name: "Otilia Mccree", id: "XXX-12-3456", email: "Otilia.Mccree@example.com", level: "Iron", balance: 102,  arrival: "5/1/2021", departure: "5/2/2021" },
            { name: "Graham Duda", id: "XXX-12-3456", email: "Graham.Duda@example.com", level: "Bronze", balance: 899,  arrival: "5/1/2021", departure: "5/2/2021" },
            { name: "Hilario Yeatman", id: "XXX-12-3456", email: "Hilario.Yeatman@example.com", level: "Iron", balance: 7,  arrival: "5/1/2021", departure: "5/2/2021" },
        ]

        function formatNumber(num: number) {
            return num.toLocaleString(undefined, { minimumFractionDigits: 0});
        }

        const printContent = ref(null);

        function printReport() {
            // Setup print specific CSS
            let css = "@page { size: landscape; overflow: visible !important }";
            let style = document.createElement("style");
            style.type = "text/css";
            style.media = "print";
            style.id = "printCSS";
            style.appendChild(document.createTextNode(css));

            // Create window to print
            let printWindow = window.open("", "Print Window", "");

            // As long as we were able to open the window, continue with printing
            if (printWindow) {
                // Write to the DOM
                printWindow.document.write("<!DOCTYPE html><html><head>");

                // Add existing styles, this is overkill but eaiser than
                // trying to parse which classes are needed in printing
                let styles = document.getElementsByTagName("style");
                for (let i = 0; i < styles.length; i++) {
                    printWindow.document.write(styles[i].outerHTML);
                }
                // Force landscape (only in Chrome it seems)
                printWindow.document.head.appendChild(style);
                printWindow.document.write("</head>");

                // Print the content of this component to the window
                printWindow.document.write(((printContent.value as unknown) as HTMLElement).innerHTML);
                printWindow.document.write("</html>");

                // Print, and close the window when the user is done.
                printWindow.print();
                printWindow.close();
            }
        }

        return { members, formatNumber, memberTiers, printReport, printContent }
    }
})
</script>