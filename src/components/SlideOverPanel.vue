<template>
    <div id="slideOver">
        <div v-if="panelOpen" @click.prevent="closePanel" class="bg-gray-800 w-full h-full top-0 left-0 fixed z-10 opacity-75 cursor-pointer"></div>
        <transition name="slide">
            <div v-if="panelOpen" class="fixed top-0 right-0 h-full padding-3 overflow-x-hidden overflow-y-auto w-full md:w-3/4 lg:w-2/3 z-20 p-5 lg:border-l border-gray-500" :class="backgroundColor">
                <div class="flex items-center justify-between">
                    <span class="text-3xl font-light text-gray-900"><slot name="title"></slot></span>
                    <button @click.prevent="closePanel">
                        <svg class="w-6 h-6 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                <div class="mt-6">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: all 50ms ease-in 0s;
}

.slide-enter-from {
    transform: translateX(100%);
}

.slide-enter-to {
    transform: translateX(0%);
}

.slide-enter,
.slide-leave-to {
    transform: translateX(100%);
    transition: all 150ms ease-in 0s;
}
</style>

<script lang="ts">
import { defineComponent, watch } from "vue"

export default defineComponent({
    name: "SlideOverPanel",
    props: {
        panelOpen: {
            type: Boolean,
            required: true,
            default: false
        },
        backgroundColor: {
            type: String,
            required: false,
            default: "bg-white"
        }
    },
    setup(props, { emit }: { emit: ((eventName: string, payload?: unknown) => void) }) {

        watch(() => props.panelOpen, async newVal => {
            if (newVal === true) {
                document.body.classList.add("overflow-hidden");
                document.onkeyup = (e) => { onEscape(e); }
            } else {
                document.body.classList.remove("overflow-hidden");
                document.onkeyup = null;
            }
        })

        function closePanel() {
             emit("panelClose");
        }

        function onEscape(e: KeyboardEvent) {
            if (e.key === "Escape" || e.key === "Esc") {
                closePanel();
            }
        }

        return {
            closePanel
        }
    }
})
</script>