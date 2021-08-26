<template>
    <div class="">
        <img :src="article.ImageUrl.Url" class="object-cover h-56 md:h-72 lg:h-96 w-full">
        <div class="flex flex-col w-full px-2 xl:px-0 mt-2 mb-6">
            <span class="text-sm text-gray-400 font-medium uppercase">{{ article.Category }}</span>
            <span class="leading-tight text-xs uppercase mb-1">{{ article.PublishDate.substring(0, 10) }}</span>
            <span class="font-medium text-lg md:text-xl lg:text-2xl">{{ article.Title }}</span>
        </div>

        <div class="px-2 xl:px-0">
            <p v-html="articleContent"></p>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

import { useStore } from "@/store/store";
import { useRoute } from "vue-router";

export default defineComponent({
    name: "",
    components: {
    },
    setup() {
        const store = useStore();
        const route = useRoute();

        const articleId = ref(route.params.id);
        const article = computed(() => {
            let id = null;

            if (Array.isArray(articleId.value)) {
                id = Number.parseInt(articleId.value[0]);
            } else {
                id = Number.parseInt(articleId.value);
            }

            if (isNaN(id)) {
                return null;
            }

            return store.getNewsPost(id);
        })

        // Since our data comes from SharePoint there is a lot of garbage css, so we use regex to try and clean it up a bit
        const articleContent = computed(() => {
            if (!article.value) {
                return "";
            }

            const regex = /(style=".+?"|class=".+?"|align=".+?")/gm

            return article.value.Post.replace(regex, "");
        })



        return {
            article,
            articleContent
        }
    }
})
</script>