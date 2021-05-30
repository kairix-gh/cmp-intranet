<template>
    <div class="flex flex-col md:flex-row">
        <div class="bg-white w-full md:w-1/4 flex-shrink-0 space-y-1 mb-4 md:order-2 md:ml-4">
            <template v-for="(item, index) in MenuItems" :key="index">
                <Disclosure v-slot="{ open }" v-if="item.subItems">
                    <DisclosureButton class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left bg-gray-100 rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <span>{{ item.name }}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :class="open ? 'transform rotate-180' : ''" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" /></svg>
                    </DisclosureButton>
                    <DisclosurePanel class="px-4 pt-4 pb-2 text-sm">
                        <template v-for="(subItem, index) in item.subItems" :key="index">
                            <div v-if="subItem.action.isRoute == true" class="flex flex-col space-y-4 -ml-1">
                                <router-link :to="getMenuItemActionRoute(item.action?.route)" class="flex items-center p-2 ease-in-out rounded-lg hover:bg-gray-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
                                    <span class="text-sm font-medium text-gray-900">{{ subItem.name }}</span>
                                </router-link>
                            </div>
                            <div v-else class="flex flex-col space-y-4 -ml-1">
                                <a href="#" @click.prevent="callMenuItemAction(subItem.action?.action)" class="flex items-center p-2 ease-in-out rounded-lg hover:bg-gray-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
                                    <span class="text-sm font-medium text-gray-900">{{ subItem.name }}</span>
                                </a>
                            </div>
                        </template>
                    </DisclosurePanel>
                </Disclosure>
                <template v-else>
                    <router-link v-if="item.action.isRoute == true" :to="item.action?.route ?? { name: null }" class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left bg-gray-100 rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <span>{{ item.name }}</span>
                    </router-link>
                    <a href="#" @click.prevent="callMenuItemAction(item.action?.action)" v-else class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left bg-gray-100 rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <span>{{ item.name }}</span>
                    </a>
                </template>
            </template>
        </div>
        <div class="flex-grow flex flex-col">
            <div class="relative bg-red-50 h-80 bg-center rounded-lg" style="background-image: linear-gradient(to right, rgba(30, 30, 30, 0.6), rgba(0, 0, 0, 0)), url('https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80')">
                <div class="text-white absolute bottom-5 left-10 flex flex-col">
                    <p class="text-2xl">{{ propertyInfo?.name ?? "" }}</p>
                    <a href="#" class="hover:text-blue-500 inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                        <span class="text-sm uppercase">Edit</span>
                    </a>
                    <a href="#" class="hover:text-blue-500 inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        <span class="text-sm uppercase">Brand.com</span>
                    </a>
                </div>
            </div>

            <div class="w-full mt-8 mb-2">
                <div class="flex items-center pb-1 mb-3 border-b">
                    <p class="text-2xl">Franchise Support</p>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8 mx-auto">


                    <div class="flex flex-col shadow-lg">
                        <div class="rounded-t-xl flex flex-col">
                            <img class="rounded-t-xl" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=80&crop=faces" alt="">
                        </div>
                        <div class="flex flex-col p-2">
                            <p>Alicia Bell</p>
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between">
                                <div>
                                    <p>Operations</p>
                                </div>
                                <a href="#" class="inline-flex items-center hover:text-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    <span>E-Mail</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col shadow-lg">
                        <div class="rounded-t-xl flex flex-col">
                            <img class="rounded-t-xl" src="https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=80&crop=faces" alt="">
                        </div>
                        <div class="flex flex-col p-2">
                            <p>Leonard Miles</p>
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between">
                                <div>
                                    <p>Marketing</p>
                                </div>
                                <a href="#" class="inline-flex items-center hover:text-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    <span>E-Mail</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col shadow-lg">
                        <div class="rounded-t-xl flex flex-col">
                            <img class="rounded-t-xl" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=80&crop=faces" alt="">
                        </div>
                        <div class="flex flex-col p-2">
                            <p>Shang-Chi Yang</p>
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between">
                                <div>
                                    <p>Accounting</p>
                                </div>
                                <a href="#" class="inline-flex items-center hover:text-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    <span>E-Mail</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col shadow-lg">
                        <div class="rounded-t-xl flex flex-col">
                            <img class="rounded-t-xl" src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=80&crop=faces" alt="">
                        </div>
                        <div class="flex flex-col p-2">
                            <p>Vincent Foster</p>
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between">
                                <div>
                                    <p>Sales</p>
                                </div>
                                <a href="#" @click.prevent="openPanel('loyaltyenrollment')" class="inline-flex items-center hover:text-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    <span>E-Mail</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full mt-8 mb-2">
                <div class="flex items-center pb-1 mb-3 border-b">
                    <p class="text-2xl">Upcoming Events</p>
                    <a href="#" class="text-sm uppercase ml-2 mt-1 text-blue-500 font-medium hover:underline">+ See All</a>
                </div>
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 mx-auto">
                    <CalendarEventComponent v-for="event in events" :key="event" :Event="event" v-on:requestModalShow="requestModalShowEvent" />
                </div>
            </div>

        </div>
    </div>

    <CalendarEventModal :Event="selectedEvent" :IsOpen="eventModalOpen" v-on:requestModalHide="requestModalHideEvent" />
    <SidePanel :panelOpen="isPanelOpen" @panelClose="closePanel">
        <template v-slot:title>{{ selectedContent.title }}</template>
        <component :is="selectedContent.componentId || MissingSidePanelComponent" />
    </SidePanel>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

import { useStore } from "@/store/store";
import { useRoute, useRouter } from "vue-router";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import CalendarEventComponent from "@/components/CalendarEvent/CalendarEvent.vue";
import CalendarEventModal from "@/components/CalendarEvent/CalendarEventModal.vue";
import SidePanel from "@/components/SlideOverPanel.vue"

// Side Panel Content
import LoyaltyEnrollmentPanelContent from "@/views/HotelPanelContent/LoyaltyEnrollment.vue"
import LoyaltyMemberLookupPanelContent from "@/views/HotelPanelContent/LoyaltyMemberLookup.vue"
import LoyaltyMemberArrivals from "@/views/HotelPanelContent/LoyaltyMemberArrivals.vue"
import BrandStandardWaivers from "@/views/HotelPanelContent/BrandWaivers.vue"
import ActionItems from "@/views/HotelPanelContent/ActionItems.vue"
import CreativeResources from "@/views/HotelPanelContent/CreativeResources.vue"

import MissingSidePanelComponent from "@/views/HotelPanelContent/MissingComponentError.vue"

import { Properties as PropertyList } from "@/mockups/properties"
import { HotelMenuItems as MenuItems, HotelPanelContent } from "@/config/hotelMenu"

import { CalendarEvent } from "@/types/types";

export default defineComponent({
    name: "Hotel",
    components: {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        CalendarEventComponent,
        CalendarEventModal,
        SidePanel,
        LoyaltyEnrollmentPanelContent,
        LoyaltyMemberLookupPanelContent,
        MissingSidePanelComponent,
        LoyaltyMemberArrivals,
        BrandStandardWaivers,
        ActionItems,
        CreativeResources
    },
    setup() {
        const store = useStore();
        const router = useRouter();
        const route = useRoute();

        // Get Property Info
        const propertyInfo = ref(getPropertyInfo(route.params.id))

        // If no property info, direct the user back to home page
        // TODO: 404 Page
        if (!propertyInfo.value) {
            router.push({
                name: "Home",
            });
        }

        // Update propertyInfo when we change pages
        watch(
            () => route.params.id, async newId => {
                propertyInfo.value = getPropertyInfo(newId);
            }
        )

        // Get property info, return null if it doesn't exist.
        function getPropertyInfo(id: string | string[]) {
            if (id) {
                let info = PropertyList.find(p => p.id.toLowerCase() == id.toString().toLowerCase());

                return info ?? null;
            } else {
                return null;
            }
        }

        // Events
        const selectedEvent = ref({});
        const eventModalOpen = ref(false);
        const events = store.getCalendarEvents(3);

        function requestModalShowEvent(calendarEvent: CalendarEvent) {
            selectedEvent.value = calendarEvent;
            eventModalOpen.value = true;
        }

        function requestModalHideEvent() {
            eventModalOpen.value = false;
        }

        function callMenuItemAction(args: HotelPanelContent): void {
            openPanel(args);
        }

        function getMenuItemActionRoute(args: Record<string, unknown>) {
            if (args) {
                if (args.name) {
                    return args;
                }
            }

            return { name: null}
        }

        // Side Panel
        const isPanelOpen = ref(false);

        const selectedContent = ref({});
        function openPanel(panelContent: HotelPanelContent) {
            selectedContent.value = panelContent ?? { title: "Unknown Content Id", content: null }
            isPanelOpen.value = true;
        }

        function closePanel() {
            isPanelOpen.value = false;
        }

        return {
            propertyInfo,
            events,
            selectedEvent,
            eventModalOpen,
            requestModalShowEvent,
            requestModalHideEvent,
            MenuItems,
            callMenuItemAction,
            getMenuItemActionRoute,
            isPanelOpen,
            openPanel,
            closePanel,
            selectedContent,
        }


    }
})
</script>