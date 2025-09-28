<script setup lang="ts">
import type { Course } from '../../data/courses';

const props = defineProps<{
    course: Course;
}>();
</script>

<template>
    <article
        class="bg-white relative w-full h-full rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
        itemscope itemtype="https://schema.org/Course">
        <!-- Course Image -->
        <div class="relative">
            <img :src="props.course.image" :alt="`${props.course.title} course preview image`"
                class="w-full aspect-video object-cover" loading="lazy" width="300" height="200" itemprop="image">

            <!-- Students Count -->
            <div class="absolute w-full bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-40">
                <div
                    class="flex items-center justify-center mx-auto w-fit space-x-2 py-1 px-2 bg-white rounded-full border border-gray-200 shadow-sm">
                    <div class="flex -space-x-2" role="img" aria-label="Student avatars">
                        <img v-for="(avatar, index) in props.course.avatars" :key="index"
                            :src="`/src/assets/svg/${avatar}`" :alt="`Student avatar ${index + 1}`" class="w-4 h-4"
                            loading="lazy" width="16" height="16">
                    </div>
                    <span class="font-clash font-semibold">+</span>
                    <span class="font-raleway">{{ props.course.students }} students</span>
                </div>
            </div>
        </div>

        <!-- Course Content -->
        <div class="p-4 flex flex-col flex-grow">
            <!-- Time -->
            <div class="text-sm text-gray-500 mb-2" itemprop="timeRequired">{{ props.course.time }}</div>

            <!-- Title -->
            <h3 class="text-lg font-extrabold text-[var(--primary-teal)] leading-[150%] mb-2" itemprop="name">
                {{ props.course.title }}
            </h3>

            <!-- Description -->
            <p class="text-gray-600 text-xs leading-[160%] flex-grow mb-4" itemprop="description">
                {{ props.course.description }}
            </p>

            <!-- Price and Button-->
            <div class="flex justify-between items-center mt-auto">
                <!-- Price and Original Price -->
                <div class="flex items-center gap-2">
                    <span class="text-lg font-bold text-[var(--primary-orange)]" itemprop="offers" itemscope
                        itemtype="https://schema.org/Offer">
                        <span itemprop="price">${{ props.course.price }}</span>
                        <meta itemprop="priceCurrency" content="USD">
                    </span>
                    <span class="text-sm text-gray-400 font-inter line-through">
                        ${{ props.course.originalPrice }}
                    </span>
                </div>

                <!-- Enroll Button -->
                <button
                    class="bg-[var(--primary-teal)] text-white py-2 px-4 rounded-md font-medium hover:bg-[var(--dark-teal)] transition-colors duration-200"
                    :aria-label="`Enroll in ${props.course.title} course for $${props.course.price}`">
                    Enroll Now
                </button>
            </div>
        </div>
    </article>
</template>
