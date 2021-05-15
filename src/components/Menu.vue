<template>
    <Popover open="true" class="relative bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="flex items-center justify-between border-b border-blue-100 py-6">
                <div class="flex items-center">
                    <a href="#">
                        <span class="sr-only">Logo</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-auto h-10 sm:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                    </a>

                    <!-- Menu Items -->
                    <nav class="hidden md:inline-block divide-x-2">
                        <!-- myResources -->
                        <Menu as="div" class="relative inline-block">
                            <div>
                                <MenuButton class="inline-flex justify-center w-full rounded-md px-4 py-2 bg-white text-gray-700">
                                    <span>myResources</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 -mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                                </MenuButton>
                            </div>

                            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                                <MenuItems class="origin-top-left absolute left-0 mt-2 w-[34rem] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none grid grid-cols-2">
                                    <div class="py-1" v-for="(item, index) in [1, 2, 3, 4, 5, 6]" :key="index">
                                        <p class="block px-4 py-2 text-sm">Resource Category</p>
                                        <MenuItem v-slot="{ active }" v-for="(item, index) in [1, 2, 3]" :key="index">
                                            <a href="#" :class="[ active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Item</a>
                                        </MenuItem>
                                    </div>
                                </MenuItems>
                            </transition>
                        </Menu>

                        <!-- NewsHub -->
                        <Menu as="div" class="relative inline-block">
                            <div>
                                <MenuButton class="inline-flex justify-center w-full rounded-md px-4 py-2 bg-white text-gray-700">
                                    NewsHub
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 -mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                                </MenuButton>
                            </div>

                            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                                <MenuItems class="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div class="py-1" v-for="(item, index) in [1, 2, 3, 4, 5, 6]" :key="index">
                                        <MenuItem v-slot="{ active }">
                                                <a href="#" :class="[ active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Category</a>
                                        </MenuItem>
                                    </div>
                                </MenuItems>
                            </transition>
                        </Menu>

                        <!-- Calendar -->
                        <div class="relative inline-block">
                            <a href="#" class="py-2 px-4">Calendar</a>
                        </div>

                        <!-- Vendors -->
                        <div class="relative inline-block">
                            <a href="#" class="py-2 px-4">Vendors</a>
                        </div>

                        <!-- myApps -->
                        <Menu as="div" class="relative inline-block">
                            <div>
                                <MenuButton class="inline-flex justify-center w-full rounded-md px-4 py-2 bg-white text-gray-700">
                                    myApps
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 -mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                                </MenuButton>
                            </div>

                            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                                <MenuItems class="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div class="py-1" v-for="(item, index) in [1, 2, 3]" :key="index">
                                        <MenuItem v-slot="{ active }">
                                                <a href="#" :class="[ active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">App</a>
                                        </MenuItem>
                                    </div>
                                </MenuItems>
                            </transition>
                        </Menu>
                    </nav>
                </div>

                <!-- Profile -->
                <Menu as="div" class="ml-3 relative">
                    <div>
                        <MenuButton class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span class="sr-only">Open user menu</span>
                            <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </MenuButton>
                    </div>

                    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                        <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
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
        <PopoverPanel focus class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right">
            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div class="py-5 px-5">
                    <div class="flex items-center justify-between">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                        </div>
                        <PopoverButton>
                            <span class="sr-only">Close Menu</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" /></svg>
                        </PopoverButton>
                    </div>

                    <div class="mt-6">
                        <p class="font-semibold text-base mb-4">myResources</p>
                        <nav class="grid gap-y-8">
                            <a v-for="(item, index) in [1, 2, 3, 4, 5, 6]" :key="index" href="#" class="flex items-center rounded-md hover:bg-gray-50 p-3 -m-3">
                                <span class="ml-3 text-base text-gray-900">
                                    Resource Category
                                </span>
                            </a>
                        </nav>
                    </div>
                </div>

                <div class="py-5 px-5 space-y-8">
                    <div class="grid grid-cols-2 gap-y-6 gap-x-8">
                        <a href="#" v-for="(item, index) in ['NewsHub', 'Calendar', 'Vendors']" :key="index" class="text-base font-medium hover:text-gray-700">
                            {{ item }}
                        </a>
                    </div>
                </div>

                <div class="py-5 px-5 space-y-6">
                    <p class="font-semibold text-base">myApps</p>
                    <div class="grid grid-cols-2 gap-y-4 gap-x-8">
                        <a href="#" v-for="(item, index) in ['RLH University', 'Reputation Performance Platform', 'RLH ePay']" :key="index" class="self-center text-base hover:text-gray-700">
                            {{ item }}
                        </a>
                    </div>
                </div>

                <div class="py-5 px-5 space-y-6">
                    <p class="font-semibold text-base">myHotels</p>
                    <div class="grid gap-y-4">
                        <a href="#" v-for="(item, index) in Array.from({length: 5}, (v,k)=>k+1)" :key="index" class="self-center text-base hover:text-gray-700">
                            Hotel Anywhere ABC
                        </a>
                    </div>
                </div>
            </div>
        </PopoverPanel>
        </transition>
    </Popover>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent, ref } from 'vue';

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, Popover, PopoverPanel, PopoverButton } from '@headlessui/vue'
import { useStore } from "@/store/store"

export default defineComponent({
    name: "MainMenu",
    components: {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        Popover,
        PopoverPanel,
        PopoverButton
    },
    data: function() {
        return {
            store: useStore(),
            open: false,
            navigation: [
                { name: "myResources", href: "#", current: true },
                { name: "NewsHub", href: "#", current: false },
                { name: "myHotel", href: "#", current: false },
                { name: "Calendar", href: "#", current: false },
                { name: "Vendors", href: "#", current: false },
                { name: "myApps", href: "#", current: false },
            ]
        }
    },
})
</script>