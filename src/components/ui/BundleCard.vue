<script setup lang="ts">

import type { Course } from '@/data/courses';

const props = defineProps<{
    bundle: Course;
}>();
</script>

<template>
    <div
        class="bg-white flex rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex-shrink-0 w-[600px]">
        <!-- Course Image -->
        <div class="flex-1">
            <img :src="props.bundle.image" :alt="props.bundle.title" class="w-full h-full object-cover">
        </div>

        <!-- Course Content -->
        <div class="p-6 flex-1 flex flex-col">
            <!-- Time -->
            <div class="text-sm text-gray-500 mb-2">{{ props.bundle.time }}</div>

            <!-- Title -->
            <h3 class="text-lg font-extrabold text-[var(--primary-teal)] leading-[150%] mb-2">{{ props.bundle.title }}
            </h3>

            <!-- Description -->
            <p class="text-gray-600 text-xs leading-[160%] flex-grow mb-4">{{ props.bundle.description }}</p>

            <!-- Students Count -->
            <div class="flex items-center space-x-2 mb-4">
                <div class="flex -space-x-2">
                    <img v-for="(avatar, index) in props.bundle.avatars" :key="index" :src="`/src/assets/svg/${avatar}`"
                        :alt="`student-${index + 1}`" class="w-4 h-4">
                </div>
                <span class="font-clash font-semibold">+</span>
                <span class="font-raleway">{{ props.bundle.students }} students</span>
            </div>

            <!-- Price and Button - Always at bottom -->
            <div class="flex justify-between items-center mt-auto">
                <!-- Price and Original Price -->
                <div class="flex items-center gap-2">
                    <span class="text-lg font-bold text-[var(--primary-orange)]">
                        ${{ props.bundle.price }}
                    </span>
                    <span class="text-sm text-gray-400 font-inter line-through">
                        ${{ props.bundle.originalPrice }}
                    </span>
                </div>

                <!-- Enroll Button -->
                <button
                    class="bg-[var(--primary-teal)] text-white py-2 px-4 rounded-md font-medium hover:bg-[var(--dark-teal)] transition-colors duration-200">
                    Enroll Now
                </button>
            </div>
        </div>
    </div>
</template>
