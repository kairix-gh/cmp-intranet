<template>
    <Popover open="true" class="relative bg-white shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="flex items-center justify-between py-4">
                <div class="flex items-center">
                    <router-link :to="{ name: 'Home' }">
                        <span class="sr-only">Logo</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-auto h-10 sm:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                    </router-link>

                    <!-- Menu Items -->
                    <nav class="hidden md:inline-flex items-center divide-x-2">
                        <!-- myResources -->
                        <Menu as="div" class="relative inline-block">
                            <div>
                                <MenuButton class="inline-flex justify-center w-full rounded-md px-4 py-2 bg-white text-gray-700">
                                    <span>Resources</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 -mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                                </MenuButton>
                            </div>

                            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                                <MenuItems class="origin-top-left absolute left-0 mt-2 w-[34rem] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none grid grid-cols-2 z-10">
                                    <div class="py-2" v-for="(item, index) in resourceCategories" :key="index">
                                        <div class="flex items-center px-4 py-2">
                                            <p class="block text-sm font-medium">{{ item }}</p>
                                            <MenuItem>
                                                <router-link :to="{ name: 'Resources', params: { category: item.toLowerCase() }}" class="text-sm uppercase ml-2 text-blue-500 font-medium hover:underline">+ See All</router-link>
                                            </MenuItem>
                                        </div>

                                        <MenuItem v-slot="{ active }" v-for="(item, index) in pinnedResources.filter(r => r.Category == item).slice(0, 3)" :key="index">
                                            <a :href="item.File.ServerRelativeUrl" target="_blank" :class="[ active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm ml-2']">{{ item.Title }}</a>
                                        </MenuItem>
                                    </div>
                                </MenuItems>
                            </transition>
                        </Menu>

                        <!-- NewsHub -->
                        <div class="inline-block px-2 py-2">
                            <router-link :to="{ name: 'News'}" class="py-2 px-4">News</router-link>
                        </div>

                        <!-- Hotels -->
                        <Popover v-slot="{ open }" class="relative inline-block px-2">
                            <PopoverButton :class="open ? '' : 'text-opacity-90'"
                                class="inline-flex items-center px-2 py-2 group hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                <span>Hotels</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 -mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                            </PopoverButton>


                            <transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-1 opacity-0" enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in" leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0" >
                                <PopoverPanel class="absolute z-10 w-screen max-w-sm px-4 mt-3 sm:px-0 lg:max-w-3xl origin-top transform -translate-x-1/2 left-1/2 ">
                                        <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                            <div class="bg-white">
                                                <input v-model="hotelFilterInput" class="w-full px-4 py-2 border-b focus:outline-none" type="text" placeholder="Filter Hotels">
                                            </div>
                                            <div class="overflow-x-hidden max-h-[17rem]">
                                                <PopoverButton as="div" class="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                                                    <router-link :to="{ name: 'Hotel', params: { id: item.id }}" v-for="item in filteredHotelList" :key="item"
                                                        class="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50" >
                                                        <div class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48"><rect width="48" height="48" rx="8" fill="#EEEEEE"/><path stroke-linecap="round" stroke-linejoin="round" stroke="#999999" stroke-width="2" d="m31,33l0,-16a2,2 0 0 0 -2,-2l-10,0a2,2 0 0 0 -2,2l0,16m14,0l2,0m-2,0l-5,0m-9,0l-2,0m2,0l5,0m-1,-14l1,0m-1,4l1,0m4,-4l1,0m-1,4l1,0m-5,10l0,-5a1,1 0 0 1 1,-1l2,0a1,1 0 0 1 1,1l0,5m-4,0l4,0" /></svg>
                                                        </div>

                                                        <div class="ml-4">
                                                            <p class="text-sm font-medium text-gray-900">
                                                                {{ item.name }}
                                                            </p>
                                                            <p class="text-sm text-gray-500">
                                                                {{ item.description }}
                                                            </p>
                                                        </div>
                                                    </router-link>
                                                </PopoverButton>
                                            </div>
                                        </div>
                                    </PopoverPanel>
                            </transition>
                        </Popover>


                        <!-- More: Calendar, Vendors, myApps -->
                        <Popover v-slot="{ open }" class="relative inline-block px-2">
                            <PopoverButton :class="open ? '' : 'text-opacity-90'"
                                class="inline-flex items-center px-2 py-2 group hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                <span>More</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 -mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                            </PopoverButton>

                            <transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-1 opacity-0" enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in" leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0" >
                                <PopoverPanel class="absolute z-10 w-screen max-w-sm px-4 mt-3 sm:px-0 lg:max-w-3xl origin-top transform -translate-x-1/2 left-1/2 ">
                                        <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                            <PopoverButton as="div" class="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                                                <a v-for="item in intranetSections" :key="item.name" :href="item.route"
                                                    class="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50" >
                                                    <div class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                                                        <div v-html="item.icon"></div>
                                                    </div>

                                                    <div class="ml-4">
                                                        <p class="text-sm font-medium text-gray-900">
                                                            {{ item.name }}
                                                        </p>
                                                        <p class="text-sm text-gray-500">
                                                            {{ item.description }}
                                                        </p>
                                                    </div>
                                                </a>
                                            </PopoverButton>
                                            <PopoverButton as="div" class="p-4 bg-gray-50">
                                                <a href="##" class="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                                    v-for="item in myApps" :key="item">
                                                    <span class="flex items-center">
                                                        <span class="text-sm font-medium text-gray-900">
                                                            {{ item.name }}
                                                        </span>
                                                    </span>
                                                    <span class="block text-sm text-gray-500">
                                                        {{ item.description }}
                                                    </span>
                                                </a>
                                            </PopoverButton>
                                        </div>
                                    </PopoverPanel>
                            </transition>
                        </Popover>

                        <!-- Search -->
                        <Popover v-slot="{ open }" class="inline-block px-2">
                            <PopoverButton :class="open ? '' : 'text-opacity-90'"
                                class="inline-flex items-center px-2 py-2 group hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                <span>Search</span>
                            </PopoverButton>

                            <transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-1 opacity-0" enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in" leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0" >
                                <PopoverPanel focus class="absolute z-10 w-screen left-0 mt-5">
                                    <div class="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5 bg-white max-w-7xl mx-auto rounded">

                                        <form @submit.prevent="search" class="w-full flex rounded border focus-within:ring-1 ring-primary p-2">
                                            <input v-model="searchInput" class="w-full p-2 focus:outline-none" type="text" placeholder="Search Intranet">
                                            <button type="submit" class="w-auto flex justify-end items-center bg-white text-red-500 p-2 hover:text-red-400 focus:outline-none" tabindex="-1">
                                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                            </button>
                                        </form>

                                    </div>
                                </PopoverPanel>
                            </transition>
                        </Popover>
                    </nav>
                </div>

                <div class="hidden md:flex items-center">
                    <!-- Profile -->
                    <Menu as="div" class="ml-3 relative">
                        <div>
                            <MenuButton class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span class="sr-only">Open user menu</span>
                                <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1619016984980-703b4cf09515?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            </MenuButton>
                        </div>

                        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                            <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                                <MenuItem v-slot="{ active }">
                                    <div class="inline-flex items-center w-full" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        <a href="#" class="">My Account</a>
                                    </div>
                                </MenuItem>

                                <MenuItem v-slot="{ active }">
                                    <div class="inline-flex items-center w-full" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                                        <a href="#" class="">Logout</a>
                                    </div>
                                </MenuItem>
                            </MenuItems>
                        </transition>
                    </Menu>
                </div>

                <div class="-my-2 md:hidden">
                    <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span class="sr-only">Open Menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                    </PopoverButton>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
            <PopoverPanel class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right z-50">
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div class="py-5 px-5">
                        <div class="flex items-center justify-between">
                            <form @submit.prevent="search" class="flex rounded border-2 focus-within:ring-2 ring-primary w-full mr-2">
                                <input v-model="searchInput" class="w-full p-2 focus:outline-none" type="text" placeholder="Search Intranet">
                                <button type="submit" class="w-auto flex justify-end items-center bg-white text-red-500 p-2 hover:text-red-400 focus:outline-none" tabindex="-1">
                                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </form>

                            <PopoverButton as="div">
                                <button>
                                    <span class="sr-only">Close Menu</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </PopoverButton>
                        </div>

                        <div class="mt-6">
                            <p class="font-semibold text-base mb-4">myResources</p>
                            <PopoverButton as="nav" class="grid gap-y-8">
                                <router-link :to="{ name: 'Resources', params: { category: item.toLowerCase() }}" v-for="(item, index) in resourceCategories" :key="index" href="#" class="flex items-center rounded-md hover:bg-gray-50 p-3 -m-3">
                                    <span class="ml-3 text-base text-gray-900">
                                        {{ item }}
                                    </span>
                                </router-link>
                            </PopoverButton>
                        </div>
                    </div>

                    <div class="py-5 px-5 space-y-8">
                        <PopoverButton as="div" class="grid grid-cols-2 gap-y-6 gap-x-8">
                            <router-link :to="{ name: 'News'}" class="text-base font-medium hover:text-gray-700">News</router-link>

                            <a href="#" v-for="(item, index) in ['Calendar', 'Vendors']" :key="index" class="text-base font-medium hover:text-gray-700">
                                {{ item }}
                            </a>
                        </PopoverButton>
                    </div>

                    <div class="py-5 px-5 space-y-6">
                        <p class="font-semibold text-base">myApps</p>
                        <PopoverButton as="div" class="grid grid-cols-2 gap-y-4 gap-x-8">
                            <a href="#" v-for="item in myApps" :key="item" class="self-center text-base hover:text-gray-700">
                                {{ item.name }}
                            </a>
                        </PopoverButton>
                    </div>

                    <div class="py-5 px-5 space-y-6">
                        <div class="flex flex-col space-y-6 sm:flex-row sm:justify-between sm:items-center sm:space-y-0 sm:space-x-6">
                            <p class="font-semibold text-base">myHotels</p>
                            <input v-model="hotelFilterInput" class="w-full px-4 py-2 ring-1 ring-gray-400 rounded-lg focus:outline-none" type="text" placeholder="Filter Hotels">
                        </div>
                        <PopoverButton as="div" class="grid gap-y-4 max-h-64 overflow-y-scroll">
                            <router-link :to="{ name: 'Hotel', params: { id: item.id }}" v-for="item in filteredHotelList " :key="item" class="self-center text-base hover:text-gray-700">
                                {{ item.name }}
                            </router-link>
                        </PopoverButton>
                    </div>
                </div>
            </PopoverPanel>
        </transition>
    </Popover>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { IntranetSections, IntranetSection } from "@/config/intranetSections"
import { Properties as PropertyList, Hotel } from "@/mockups/properties"
import { myApps as myAppList, myApp } from "@/config/myapps"

import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Popover,
    PopoverPanel,
    PopoverButton,
} from '@headlessui/vue'
import { useStore } from "@/store/store"
import { Resource } from "@/types/types"

export default defineComponent({
    name: "MainMenu",
    components: {
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        Popover,
        PopoverPanel,
        PopoverButton,
    },
    computed: {
        filteredHotelList(): Array<Hotel> {
            let filterText = this.hotelFilterInput;

            if (!filterText) {
                return this.hotelList;
            }

            return this.hotelList.filter(function(e: Hotel) {
                return e.name.toLowerCase().includes(filterText.toLowerCase());
            })
        }
    },
    data() {
        return {
            store: useStore(),

            resourceCategories: [] as string[],
            pinnedResources: [] as Resource[],
            intranetSections: [] as Array<IntranetSection>,
            myApps: [] as Array<myApp>,

            searchPanelOpen: false as boolean,
            searchPanelBluring: false as boolean,
            searchInput: "" as string,

            hotelList: [] as Array<Hotel>,
            hotelFilterInput: "" as string,
        }
    },
    async created() {
        this.resourceCategories = this.store.getResourceCategories();
        this.pinnedResources = this.store.getPinnedResources();

        this.intranetSections = IntranetSections;
        this.hotelList = PropertyList;
        this.myApps = myAppList;
    },
    methods: {
        search() {
            return;
        },
    },
})
</script>