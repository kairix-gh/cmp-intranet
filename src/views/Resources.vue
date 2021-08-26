<template>
    <div class="mb-4 px-4">
        <p class="text-2xl">{{ resourceCategory }}</p>
    </div>
    <div class="grid sm:grid-cols-2 gap-x-24 gap-y-8 px-4">
        <div v-for="category in resourceSubcategories" :key="category">
            <div class="border-b font-medium mb-1">
                {{ category ?? "Other" }}
            </div>

            <a :href="resource.File.ServerRelativeUrl" target="_blank" class="flex items-center bg-white rounded-lg px-2 py-2 hover:bg-gray-50" v-for="resource in resources.filter(r => r.Subcategory == category)" :key="resource">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 mr-2" fill="none" viewBox="0 0 36 36">
                        <rect width="36" height="36" rx="8" fill="#EEEEEE" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke="#999999" stroke-width="2" d="m15,18l6,0m-6,4l6,0m2,5l-10,0a2,2 0 0 1 -2,-2l0,-14a2,2 0 0 1 2,-2l5.586,0a1,1 0 0 1 0.707,0.293l5.414,5.414a1,1 0 0 1 0.293,0.707l0,9.586a2,2 0 0 1 -2,2z" />
                    </svg>
                </div>
                <div class="font-medium">
                    {{ resource.Title }}
                </div>
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "@/store/store"

export default defineComponent({
    name: "Resources",
    setup() {
        const store = useStore();
        const route = useRoute();

        const resourceCategory = ref(propercaseCategory(route.params.category.toString()));
        const resources = ref(store.getResourcesInCategory(route.params.category.toString()));
        const resourceSubcategories = ref([... new Set(resources.value.map(r => r.Subcategory))]);

        watch(
            () => route.params.category, async category => {
                if (route.params.category) {
                    resourceCategory.value = propercaseCategory(route.params.category.toString());
                    resources.value = store.getResourcesInCategory(category.toString());
                    resourceSubcategories.value = [... new Set(resources.value.map(r => r.Subcategory))];
                }
            }
        )

        function propercaseCategory(category: string): string {
            let words = category.split(" ");

            for (let i = 0; i < words.length; i++) {
                words[i] = words[i][0].toUpperCase() + words[i].substr(1);
            }

            return words.join(" ");
        }

        return {
            resourceCategory,
            resources,
            resourceSubcategories,
        }
    }
})
</script>