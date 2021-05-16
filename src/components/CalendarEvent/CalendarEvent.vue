<template>
    <div class="flex flex-col max-w-[18rem] rounded-3xl shadow-xl">
        <div class="bg-gray-100 rounded-t-3xl px-5 pt-3 flex-grow flex items-center justify-center">
            <p class="text-center mb-2 font-medium">{{ Event.Title }}</p>
        </div>
        <div class="bg-white rounded-b-3xl px-5 pb-4 flex-shrink-0">
            <div class="flex flex-col divide-y-2 h-full">
                <div class="flex flex-col space-y-1 mt-2">
                    <div class="inline-flex items-center space-x-2 text-gray-400 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        <p>{{ Event.StartDate.substring(5, 10) }} - {{ Event.EndDate.substring(5, 10) }}</p>
                    </div>
                    <div class="inline-flex items-center space-x-2 text-gray-400 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{{ Event.StartDate.substring(11, 19) }} - {{ Event.EndDate.substring(11, 19) }}</span>
                    </div>
                </div>
                <div class="mt-2 pt-2 flex space-x-4 items-center justify-center justify-self-end flex-shrink-0">
                    <button @click.prevent="requestModal" class="inline-block bg-blue-300 hover:bg-blue-600 text-white rounded px-2.5 py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </button>

                    <a :href="Event.Url.Url" target="_blank" class="inline-block bg-blue-300 hover:bg-blue-600 text-white rounded px-2.5 py-1 truncate text-sm uppercase font-medium">
                        {{ Event.Url.Description }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "CalendarEvent",
    components: {
    },
    props: {
        Event: {
            type: Object,
            required: true,
            default: null,
        }
    },
    methods: {
        requestModal() {
            this.$emit("requestModalShow", this.Event);
        }
    }

})
</script>