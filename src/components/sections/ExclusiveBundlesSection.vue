<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import SectionTitle from '../../components/ui/SectionTitle.vue';
import BundleCard from '../../components/ui/BundleCard.vue';
import { courses } from '../../data/courses';

const currentIndex = ref(0);
const progress = ref(0);

// Infinite scroll
const visibleBundles = computed(() => {
    const result: any[] = [];
    const total = courses.length;

    const prevIndex = currentIndex.value === 0 ? total - 1 : currentIndex.value - 1;
    result.push({ ...courses[prevIndex], isBlurred: true, isPrev: true, isNext: false, isActive: false });

    result.push({ ...courses[currentIndex.value], isBlurred: false, isActive: true, isPrev: false, isNext: false });

    const nextIndex = currentIndex.value === total - 1 ? 0 : currentIndex.value + 1;
    result.push({ ...courses[nextIndex], isBlurred: true, isNext: true, isPrev: false, isActive: false });

    return result;
});

const nextSlide = () => {
    if (progressInterval) {
        clearInterval(progressInterval);
        progressInterval = null;
    }
    progress.value = 0;

    currentIndex.value = (currentIndex.value + 1) % courses.length;

    setTimeout(() => {
        startAutoPlay();
    }, 50);
};

const prevSlide = () => {
    if (progressInterval) {
        clearInterval(progressInterval);
        progressInterval = null;
    }
    progress.value = 0;

    currentIndex.value = currentIndex.value === 0 ? courses.length - 1 : currentIndex.value - 1;

    setTimeout(() => {
        startAutoPlay();
    }, 50);
};

const goToSlide = (index: number) => {

    if (progressInterval) {
        clearInterval(progressInterval);
        progressInterval = null;
    }
    progress.value = 0;

    currentIndex.value = index;

    setTimeout(() => {
        startAutoPlay();
    }, 50);
};

// Auto-play
let autoPlayInterval: ReturnType<typeof setInterval> | null = null;
let progressInterval: ReturnType<typeof setInterval> | null = null;
let startTime: number = 0;
let pausedTime: number = 0;

const startAutoPlay = () => {

    startTime = Date.now();
    pausedTime = 0;
    progress.value = 0;

    progressInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progressPercent = Math.min((elapsed / 5000) * 100, 100);
        progress.value = progressPercent;

        if (progressPercent >= 100) {
            if (progressInterval) {
                clearInterval(progressInterval);
                progressInterval = null;
            }
            nextSlide();
        }
    }, 16);
};

const stopAutoPlay = () => {
    if (progressInterval) {
        clearInterval(progressInterval);
        progressInterval = null;
    }

    pausedTime = Date.now() - startTime;
};

onMounted(() => {
    startAutoPlay();
});

onUnmounted(() => {
    if (progressInterval) {
        clearInterval(progressInterval);
    }
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
    }
});
</script>

<template>
    <section id="exclusive-bundles" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4">
            <!-- Section Title -->
            <div class="text-center mb-16">
                <SectionTitle title="Exclusive Bundles" textColor="text-[var(--primary-teal)]"
                    underlineColor="var(--primary-orange)" />

                <!-- Description -->
                <p class="text-gray-600 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
                    Onlearing is one powerful online software suite that combines all the tools needed to run a
                    successful school or office.
                </p>
            </div>

            <!-- Carousel Container -->
            <div class="relative" @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay">
                <!-- Navigation Buttons -->
                <button @click="prevSlide"
                    class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200">
                    <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button @click="nextSlide"
                    class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200">
                    <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <!-- Carousel -->
                <div class="overflow-hidden">
                    <div class="flex justify-center items-center gap-8">
                        <div v-for="(bundle, index) in visibleBundles" :key="`${bundle.id}-${index}`"
                            class="transition-all duration-1500 ease-in-out" :class="{
                                'scale-75 opacity-50 blur-sm': bundle.isBlurred,
                                'scale-100 opacity-100': !bundle.isBlurred,
                                'transform -translate-x-40': bundle.isPrev,
                                'transform translate-x-40': bundle.isNext,
                                'transform translate-x-0': bundle.isActive
                            }">
                            <BundleCard :bundle="bundle" />
                        </div>
                    </div>
                </div>

                <!-- Custom Indicators -->
                <div class="flex justify-center mt-8 space-x-2">
                    <button v-for="(course, index) in courses" :key="course.id" @click="goToSlide(index)"
                        class="transition-all duration-300 rounded-full relative overflow-hidden" :class="index === currentIndex
                            ? 'w-8 h-2 bg-[#818C96]'
                            : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'">
                        <!-- Progress bar for active indicator -->
                        <div v-if="index === currentIndex"
                            class="absolute inset-0 bg-[var(--primary-teal)] transition-all duration-100 ease-linear"
                            :style="{ width: `${progress}%` }">
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
