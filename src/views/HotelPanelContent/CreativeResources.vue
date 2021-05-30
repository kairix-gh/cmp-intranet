<template>
    <div>
        <p class="">Below are the brand and hotel level creative resources that have been created for your property. If you have any questions regarding the usage of these resources, or would like to request additional resources be created for your property, please contact your Marketing Franchise Support manager for further assistance.</p>
    </div>
    <div class="flex flex-col mt-8 space-y-12">
        <div v-for="creator in resourceCreators" :key="creator">
            <div class="border-b font-medium mb-4">
                {{ creator ?? "Other" }} Level Resources
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:mx-4">
                <div class="" v-for="category in getResourceCategories(creator)" :key="category">
                    <p class="uppercase text-sm font-medium">{{ category }}</p>
                    <a href="#" target="_blank" class="flex items-center bg-white rounded-lg px-2 py-2 hover:bg-gray-50" v-for="creativeResource in getCreativeResources(creator, category)" :key="creativeResource">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 mr-2" fill="none" viewBox="0 0 36 36">
                                <rect width="36" height="36" rx="8" fill="#EEEEEE" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke="#999999" stroke-width="2" d="m15,18l6,0m-6,4l6,0m2,5l-10,0a2,2 0 0 1 -2,-2l0,-14a2,2 0 0 1 2,-2l5.586,0a1,1 0 0 1 0.707,0.293l5.414,5.414a1,1 0 0 1 0.293,0.707l0,9.586a2,2 0 0 1 -2,2z" />
                            </svg>
                        </div>
                        <div class="font-medium">
                            {{ creativeResource.name }}
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "@/store/store"
import { CreativeResource } from "@/types/types";

export default defineComponent({
    name: "Creative Resources",
    components: {
    },
    setup() {
        const store = useStore();

        const creativeResources = store.getCreativeResourcesForProperty();

        const resourceCreators = ref([... new Set(creativeResources.map(r => r.creator))]);
        const resourceCategories = ref([... new Set(creativeResources.map(r => r.category))]);

        function getResourceCategories(creator: string): string[] {
            let ret: string[] = [];

            resourceCategories.value.forEach((category: string) => {
                if (creativeResources.filter(r => r.creator == creator && r.category == category).length > 0) {
                    ret.push(category);
                }
            })

            return ret;
        }

        function getCreativeResources(creator: string, category: string): CreativeResource[] {
            return creativeResources.filter(r => r.category == category && r.creator == creator)
        }

        return {
            resourceCreators,
            resourceCategories,
            creativeResources,
            getCreativeResources,
            getResourceCategories
        }
    }
})
</script>