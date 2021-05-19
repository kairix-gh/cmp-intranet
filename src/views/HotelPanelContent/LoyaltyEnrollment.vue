<template>
    <div class="flex flex-col mt-4">
        <!-- Row -->
        <div class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            <div class="w-full lg:w-1/3">
                <label for="title" class="block uppercase tracking-wide text-xs font-bold lg:mb-2">
                    Title
                </label>
                <div class="relative">
                    <select class="block appearance-none w-full bg-gray-50 border py-3 px-4 pr-8 rounded" id="title">
                        <option selected>Mr.</option>
                        <option>Mrs.</option>
                        <option>Ms.</option>
                        <option>Miss</option>
                        <option>Mx.</option>
                    </select>
                    <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-900 right-0 top-4">
                        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-1/3">
                <label for="first" class="block uppercase tracking-wide text-xs font-bold lg:mb-2">
                    First Name
                </label>
                <input type="text" id="first" class="appearance-none w-full bg-gray-50 text-gray-900 border rounded py-3 px-4 mb-3" placeholder="First Name">
            </div>
            <div class="w-full lg:w-1/3">
                <label for="last" class="block uppercase tracking-wide text-xs font-bold lg:mb-2">
                    Last Name
                </label>
                <input type="text" id="last" class="appearance-none w-full bg-gray-50 text-gray-900 border rounded py-3 px-4 mb-3" placeholder="Last Name">
            </div>
        </div>

        <!-- Row -->
        <div class="flex space-x-4">
            <div class="w-full">
                <label for="email" class="block uppercase tracking-wide text-xs font-bold mb-2">
                    E-mail
                </label>
                <input type="text" id="email" class="appearance-none w-full bg-gray-50 text-gray-900 border rounded py-3 px-4 mb-3" placeholder="E-Mail">
            </div>
        </div>

        <!-- Row -->
        <div class="flex space-x-4">
            <div class="flex w-full justify-end">
                <button @click="closePanel" class="py-1 px-3 rounded inline-flex items-center transition duration-300 ease-in-out select-none focus:outline-none focus:shadow-outline bg-blue-500 text-white">Save</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Loyalty Enrollment",
    setup() {
        const z = "???"

        return { z }
    }
})
</script>