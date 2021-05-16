<template>
    <div class="flex flex-col max-w-7xl mx-auto">
        <div class="flex flex-col mx-4">
            <NewsPostHero :Post="firstPost"/>

            <div class="grid md:grid-cols-3 gap-x-8 gap-y-8 mt-6">
                <NewsPostComponent :Post="item" v-for="item in newsPosts.slice(1, 4)" :key="item" />
            </div>

            <a href="#" class="inline-flex items-center mt-4 uppercase text-white text-sm font-medium bg-blue-300 rounded px-2.5 py-1 hover:bg-blue-600 w-full md:w-auto justify-center md:self-end">
                See All News
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>

            <div class="w-full mt-8 mb-2">
                <p class="text-2xl pb-1 mb-3 border-b">Upcoming Events</p>
                <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 mx-auto">
                    <CalendarEventComponent v-for="event in events" :key="event" :Event="event" v-on:requestModalShow="requestModalShowEvent" />
                </div>
            </div>
        </div>

        <CalendarEventModal :Event="selectedEvent" :IsOpen="eventModalOpen" v-on:requestModalHide="requestModalHideEvent" />
    </div>
</template>

<style scoped>
.fadeBox:after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background: linear-gradient(to top, white 20%, rgba(0, 0, 0, 0) 80%);
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

import { useStore } from "@/store/store"
import { CalendarEvent, NewsPost } from "@/types/types"

import NewsPostHero from "@/components/NewsPosts/NewsPostHero.vue"
import NewsPostComponent from "@/components/NewsPosts/NewsPost.vue"

import CalendarEventComponent from "@/components/CalendarEvent/CalendarEvent.vue"
import CalendarEventModal from "@/components/CalendarEvent/CalendarEventModal.vue"

export default defineComponent({
    name: 'Home',
    components: {
        NewsPostHero,
        NewsPostComponent,
        CalendarEventComponent,
        CalendarEventModal,
    },
    computed: {
        firstPost(): NewsPost | null {
            if (this.newsPosts.length > 0) {
                return this.newsPosts[0];
            }

            return null;
        }
    },
    data() {
        return {
            count: 1,
            store: useStore(),

            newsPosts: [] as Array<NewsPost>,
            events: [] as Array<CalendarEvent>,

            eventModalOpen: false as boolean,
            selectedEvent: {} as CalendarEvent,
        }
    },
    async created() {
        this.newsPosts = this.store.getNewsPosts();
        this.events = this.store.getCalendarEvents(4);
    },
    methods: {
        requestModalShowEvent(calendarEvent: CalendarEvent) {
            this.selectedEvent = calendarEvent;
            this.eventModalOpen = true;
        },
        requestModalHideEvent() {
            this.eventModalOpen = false;
        }

    }
});
</script>