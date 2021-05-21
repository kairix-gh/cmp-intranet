<template>
    <div class="flex flex-col space-y-3">
        <!-- Row -->
        <div class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            <div class="w-full lg:w-1/3 focus-within:text-blue-500">
                <label for="title" class="label-base">Title</label>
                <Listbox v-model="selectedTitle" id="title" class="">
                    <div class="relative">
                        <ListboxButton class="relative w-full py-3.5 pl-3 pr-10 text-left bg-white rounded border shadow cursor-default form-base-focus sm:text-sm">
                            <span class="block truncate text-gray-900">{{ selectedTitle }}</span>
                            <span class="text-gray-400 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>
                            </span>
                        </ListboxButton>

                        <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
                            <ListboxOptions class="z-10 absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded shadow max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                <ListboxOption v-slot="{ active, selected }" as="template" :value="title" v-for="title in titleOptions" :key="title">
                                    <li :class="[ active ? 'text-blue-900 bg-blue-100' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-10 pr-4' ]">
                                        <span :class="[ selected ? 'font-medium' : 'font-nromal', 'block truncate']">{{ title }}</span>
                                        <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                        </span>
                                    </li>
                                </ListboxOption>
                            </ListboxOptions>
                        </transition>
                    </div>
                </Listbox>
            </div>
            <div class="w-full lg:w-1/3 focus-within:text-blue-500">
                <label for="first" class="label-base label-focus-base">
                    First Name
                </label>
                <input type="text" id="first" class="form-base form-base-focus w-full" placeholder="First Name">
            </div>
            <div class="w-full lg:w-1/3 focus-within:text-blue-500">
                <label for="last" class="label-base">
                    Last Name
                </label>
                <input type="text" id="last" class="form-base w-full form-base-focus " placeholder="Last Name">
            </div>
        </div>

        <!-- Row -->
        <div class="flex space-x-4">
            <div class="w-full relative focus-within:text-blue-500">
                <label for="email" class="label-base">
                    E-mail
                </label>
                <input type="text" id="email" class="form-base w-full form-base-focus " placeholder="E-Mail">
            </div>
        </div>

        <!-- Row -->
        <div class="flex space-x-4">
            <div class="flex w-full justify-end">
                <button @click="closePanel" class="py-1 px-3 rounded inline-flex items-center transition duration-300 ease-in-out select-none bg-blue-500 text-white form-base-focus">Save</button>
            </div>
        </div>

        <div>

        </div>
    </div>
</template>

<style scoped>
.form-base-focus ~ .label-base {
    color: red;
}
</style>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/vue";

import "@/assets/css/form-styles.css";

export default defineComponent({
    name: "Loyalty Enrollment",
    components: {
        Listbox,
        ListboxButton,
        ListboxOptions,
        ListboxOption,
    },
    setup() {
        const selectedTitle = ref("");

        const titleOptions = [
            "Mr.",
            "Mrs.",
            "Ms.",
            "Miss",
            "Mx.",
        ]
        selectedTitle.value = titleOptions[0];

        return {
            selectedTitle,
            titleOptions,
        }
    }
})
</script>