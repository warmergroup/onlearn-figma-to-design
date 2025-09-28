<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    textColor: {
        type: String,
        default: 'text-[var(--primary-orange)]'
    },
    underlineColor: {
        type: String,
        default: 'var(--primary-teal)'
    }
})
</script>

<template>
    <div class="text-center">
        <h2 class="text-5xl font-bold relative inline-block" :class="props.textColor">
            {{ props.title }}

            <svg class="absolute -bottom-4 right-0 w-24 h-3" width="178" height="10" viewBox="0 0 178 10" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8.32205C49.5338 0.233062 116.717 -0.441062 177.834 8.32205" :stroke="props.underlineColor"
                    stroke-width="2.24694" />
            </svg>

        </h2>
    </div>
</template>