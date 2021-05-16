<template>
    <router-link :to="{}" class="flex flex-col md:flex-row w-full rounded shadow-lg group md:max-h-[21.25rem] hover:shadow-xl">
        <div class="md:w-1/2">
            <img :src="Post.ImageUrl.Description" class="md:h-[21.25rem] w-full object-cover"/>
        </div>

        <div class="flex flex-col items-start bg-white py-4 px-4 md:w-1/2 relative">
            <span class="text-sm text-gray-400 font-medium uppercase">{{ Post.Category }}</span>
            <p class="text-lg md:text-2xl ">{{ Post.Title }}</p>
            <p class="leading-tight text-xs uppercase mb-1">{{ Post.PublishDate.substring(0, 10) }}</p>
            <p class="text-base mb-12 max-h-32 md:max-h-48 overflow-y-hidden fadeBox">{{ Post.Description }}{{ Post.Description }}</p>
            <p class="absolute bottom-4 px-2.5 py-1 uppercase text-white text-sm font-medium bg-blue-300 rounded group-hover:bg-blue-600">Read More</p>
        </div>
    </router-link>
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
import { defineComponent } from "vue"

export default defineComponent({
    name: "NewsPostHero",
    props: {
        Post: {
            type: Object,
            required: true,
            default: null
        }
    }
})
</script>