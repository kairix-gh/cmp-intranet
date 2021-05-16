<template>
    <TransitionRoot appear :show="IsOpen" as="template">
        <Dialog as="div" :open="IsOpen" @close="requestModalHide">
            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="min-h-screen px-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                        <DialogOverlay class="fixed inset-0 bg-gray-50 bg-opacity-70"/>
                    </TransitionChild>

                    <span class="inline-block h-screen align-middle">
                        &#8203;
                    </span>

                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">

                        <div class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl border">
                            <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                                {{ Event.Title }}
                            </DialogTitle>

                            <div class="flex flex-col sm:flex-row justify-between mt-2">
                                <div class="inline-flex items-center space-x-2 text-gray-400 text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    <p>{{ Event?.StartDate.substring(5, 10) }} - {{ Event?.EndDate.substring(5, 10) }}</p>
                                </div>
                                <div class="inline-flex items-center space-x-2 text-gray-400 text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <p>{{ Event?.StartDate.substring(11, 19) }} - {{ Event?.EndDate.substring(11, 19) }}</p>
                                </div>

                            </div>

                            <div class="mt-2">
                                <p class="text-sm text-gray-500">
                                    {{ Event?.Description }}
                                </p>
                            </div>

                            <div class="mt-4 w-full inline-flex justify-end space-x-4">
                                <a href="#" class="inline-block bg-blue-300 hover:bg-blue-600 text-white rounded px-2.5 py-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                </a>

                                <button type="button" @click="requestModalHide" class="inline-block bg-blue-300 hover:bg-blue-600 text-white rounded px-2.5 py-1">
                                    Close
                                </button>
                            </div>
                        </div>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { CalendarEvent } from "@/types/types"

import { TransitionRoot, TransitionChild, Dialog, DialogOverlay, DialogTitle } from "@headlessui/vue"

export default defineComponent({
    name: "CalendarEventModal",
    components: {
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogOverlay,
        DialogTitle,
    },
    props: {
        Event: {
            type: Object as PropType<CalendarEvent>,
            required: true,
            default: () => { return {
                Title: "",
                StartDate: "",
                EndDate: "",
                Description: "",
            } },
        },
        IsOpen: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    setup(props, { emit }: { emit: ((eventName: string) => void) }) {
        function requestModalHide() {
            emit("requestModalHide");
        }

        return {
            requestModalHide
        }
    },
})
</script>