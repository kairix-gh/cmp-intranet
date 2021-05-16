<template>
    <div class="flex flex-col max-w-7xl mx-auto">
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-6 px-4 mx-auto">

            <CalendarEventComponent v-for="event in events" :key="event" :Event="event" />
<!--
            <div class="bg-white border shadow-xl max-w-[18rem] rounded-3xl px-5 pt-3 pb-4" v-for="event in events" :key="event">
                <div class="flex flex-col divide-y-2 h-full">
                    <div class="flex-grow">
                        <p class="text-center mb-2 font-medium">{{ event.Title }}</p>
                        <div class="inline-flex items-center space-x-2 text-gray-400 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            <p>{{ event.StartDate.substring(5, 10) }} - {{ event.EndDate.substring(5, 10) }}</p>
                        </div>
                        <div class="inline-flex items-center space-x-2 text-gray-400 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{{ event.StartDate.substring(11, 19) }} - {{ event.EndDate.substring(11, 19) }}</span>
                        </div>
                    </div>
                    <div class="mt-2 pt-2 flex space-x-4 items-center justify-center justify-self-end flex-shrink-0">
                        <button @click.prevent="toggleModal(true)" class="inline-block bg-blue-300 hover:bg-blue-600 text-white rounded px-2.5 py-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </button>

                        <a :href="event.Url.Url" target="_blank" class="inline-block bg-blue-300 hover:bg-blue-600 text-white rounded px-2.5 py-1 truncate text-sm uppercase font-medium">
                            {{ event.Url.Description }}
                        </a>
                    </div>
                </div>
            </div> -->



        </div>

    </div>
</template>

<style scoped>

</style>

<script lang="ts">
import { defineComponent } from 'vue';

import { useStore } from "@/store/store"
import { CalendarEvent } from '@/types/types';

import CalendarEventComponent from "@/components/CalendarEvent.vue"

export default defineComponent({
    name: 'Home',
    components: {
        CalendarEventComponent,
    },
    computed: {
    },
    data() {
        return {
            store: useStore(),
            isOpen: false,

            events: [] as Array<CalendarEvent>
        }
    },
    async created() {
        this.events = this.store.getCalendarEvents();
    },
    methods: {
        closeModal() {
            this.isOpen = false;
        },
        openModal() {
            this.isOpen = true;
        },
        toggleModal(visible: boolean) {
            this.isOpen = visible;
        }
    }
});
</script>