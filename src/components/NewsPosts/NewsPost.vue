<template>
    <router-link :to="{}" href="#" class="flex flex-col shadow-lg relative rounded hover:shadow-xl">
        <img :src="Post.ImageUrl.Description" class="object-cover md:h-52"/>
        <div class="flex flex-col w-full justify-center h-full px-2 py-1 mb-2 flex-grow">
            <span class="text-sm text-gray-400 font-medium uppercase">{{ Post.Category }}</span>
            <span class="leading-tight text-xs uppercase mb-1">{{ Post.PublishDate.substring(0, 10) }}</span>
            <span class="font-medium">{{ Post.Title }}</span>
        </div>
    </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    name: "NewsPost",
    props: {
        Post: {
            type: Object,
            required: true,
            default: null
        }
    }
})
</script>