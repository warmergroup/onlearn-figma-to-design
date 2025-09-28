<script setup lang="ts">
import type { Benefit } from '@/data/benefits';

const props = defineProps<{
    benefit: Benefit;
}>();
</script>

<template>
    <div class="bg-white p-8 h-full">
        <!-- First Card -->
        <div v-if="props.benefit.id === 1" class="flex flex-col lg:flex-row gap-10">
            <!-- Left Content -->
            <div class="flex-1 p-4 space-y-11">

                <div class="space-y-6">
                    <!-- Tag -->
                    <div class="inline-block mb-4">
                        <span class="px-3 py-1 rounded-lg text-sm font-medium bg-[#F5F5F5] text-[var(--primary-teal)]">
                            {{ props.benefit.tag }}
                        </span>
                    </div>

                    <!-- Title -->
                    <h3 class="text-2xl font-bold text-[var(--primary-teal)] mb-4">
                        {{ props.benefit.title }}
                    </h3>
                </div>

                <!-- Features List -->
                <div class="space-y-10">
                    <div v-for="(feature, index) in props.benefit.features" :key="index"
                        class="flex items-center justify-start space-x-8">

                        <img :src="feature.icon" alt="feature icon" class="w-6 h-6" />

                        <p class="text-gray-600 text-sm leading-relaxed">
                            {{ feature.text }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Right Image -->
            <div class="flex-1 p-4">
                <img :src="props.benefit.image" :alt="props.benefit.title" class="w-full object-contain rounded-lg">
            </div>
        </div>

        <!-- Second Card -->
        <div v-else class="flex flex-col lg:flex-row gap-10">
            <!-- Left Image -->
            <div class="flex-1 p-4 space-y-11">
                <img :src="props.benefit.image" :alt="props.benefit.title" class="w-full object-contain rounded-lg">
            </div>

            <!-- Right Content -->
            <div class="flex-1 flex flex-col space-y-11">
                <div class="space-y-6">

                    <!-- Tag -->
                    <div class="inline-block mb-4">
                        <span
                            class="px-3 py-1 rounded-lg text-sm font-medium bg-[#D4E1FF] text-[var(--primary-teal)]">
                            {{ props.benefit.tag }}
                        </span>
                    </div>

                    <!-- Title -->
                    <h3 class="text-2xl font-bold text-[var(--primary-orange)] mb-4">
                        {{ props.benefit.title }}
                    </h3>
                </div>

                <!-- Features List -->
                <div class="space-y-10">
                    <div v-for="(feature, index) in props.benefit.features" :key="index"
                        class="flex items-center justify-start space-x-8">
                        <img :src="feature.icon" alt="feature icon" class="w-6 h-6" />

                        <p class="text-gray-600 text-sm leading-relaxed">
                            {{ feature.text }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
