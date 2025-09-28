<script setup lang="ts">
import CircularText from '@/components/ui/CircularText.vue';
</script>
<template>
    <main id="home" class="w-full max-h-[90vh] hero-bg rounded-b-[50px] relative overflow-hidden">
        <!-- Background Vector -->
        <img src="@/assets/svg/hero-section-group-vercor.svg" alt="Decorative background pattern for hero section"
            class="absolute object-cover" loading="lazy" role="presentation" aria-hidden="true">

        <!-- Hero Content -->
        <div class="relative z-10 px-[119px] pt-20 h-full">
            <div class="grid lg:grid-cols-2 gap-12 items-center h-full">
                <!-- Left Content -->
                <div class="space-y-6">
                    <!-- Tagline -->
                    <div class="inline-block">
                        <span class="bg-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm">
                            Never stop learning.
                        </span>
                    </div>

                    <!-- Main Title -->
                    <h1
                        class="text-3xl lg:text-4xl xl:text-5xl font-bold text-[var(--primary-teal)] leading-[1.1] max-w-4xl">
                        Grow up your skills by online courses with Onlearning
                    </h1>

                    <!-- Call to Action Button -->
                    <div class="pt-4 flex items-center gap-4">
                        <button
                            class="btn-primary bg-[var(--primary-orange)] hover:bg-orange-600 text-white text-lg px-8 py-4"
                            aria-label="Explore learning paths and courses">
                            EXPLORE PATH
                        </button>

                        <!-- Social Proof -->
                        <div class="flex items-center">
                            <div class="flex -space-x-2" role="img" aria-label="Student avatars">
                                <img src="/user-3.png" alt="Student avatar 1"
                                    class="w-12 h-12 rounded-full object-cover border-2 border-[var(--primary-teal)]"
                                    loading="lazy" width="48" height="48">
                                <img src="/user-2.png" alt="Student avatar 2"
                                    class="w-12 h-12 rounded-full object-cover border-2 border-[var(--primary-teal)]"
                                    loading="lazy" width="48" height="48">
                                <img src="/user-1.png" alt="Student avatar 3"
                                    class="w-12 h-12 rounded-full object-cover border-2 border-[var(--primary-teal)]"
                                    loading="lazy" width="48" height="48">
                            </div>
                            <div class="flex flex-col justify-center items-center">
                                <div class="flex items-center" role="img" aria-label="4.8 out of 5 stars rating">
                                    <img src="@/assets/svg/star.svg" alt="Full star" class="w-4 h-4" loading="lazy"
                                        width="16" height="16">
                                    <img src="@/assets/svg/star.svg" alt="Full star" class="w-4 h-4" loading="lazy"
                                        width="16" height="16">
                                    <img src="@/assets/svg/star.svg" alt="Full star" class="w-4 h-4" loading="lazy"
                                        width="16" height="16">
                                    <img src="@/assets/svg/star.svg" alt="Full star" class="w-4 h-4" loading="lazy"
                                        width="16" height="16">
                                    <img src="@/assets/svg/half-star.svg" alt="Half star" class="w-4 h-4" loading="lazy"
                                        width="16" height="16">
                                </div>
                                <span class="text-gray-600 font-medium ml-4">(10k+ Reviews)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Content -->
                <div class="relative flex justify-center lg:justify-end items-end h-full">
                    <!-- Student Image -->
                    <img src="/student-image.png" alt="Happy student learning online with OnLearn platform"
                        class="w-full max-w-md lg:max-w-lg object-contain relative z-10 self-end" loading="lazy"
                        width="400" height="500">

                    <!-- "Assisted Student" Overlay -->
                    <div class="absolute top-1/2 left-4 bg-white rounded-xl shadow-lg p-4 opacity-70 z-20">
                        <div class="flex items-center space-x-3">
                            <div class="w-8 h-8 bg-[#23BDEE] rounded-lg flex items-center justify-center">
                                <img src="@/assets/svg/calendar-1.svg"
                                    alt="Calendar icon representing student assistance" class="w-4 h-4" loading="lazy"
                                    width="16" height="16">
                            </div>
                            <div>
                                <div class="text-2xl font-bold text-[var(--primary-teal)]">250k</div>
                                <div class="text-sm text-gray-600">Assisted Student</div>
                            </div>
                        </div>
                    </div>

                    <!-- Statistics icon -->
                    <div class="absolute top-1/2 right-3 h-20 w-20">
                        <img src="@/assets/svg/statistics-icon.svg" alt="Statistics and analytics icon"
                            class="w-full h-full" loading="lazy" width="80" height="80" role="presentation"
                            aria-hidden="true">
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- Explore More Button -->
    <section class="relative w-full h-full flex justify-center mb-35 z-10" aria-label="Explore more content">
        <div
            class="hero-bg w-64 h-64 p-8 rounded-full flex items-center justify-center overflow-hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
            <button
                class="absolute w-[80%] h-[80%] p-8 bg-[var(--primary-teal)] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                aria-label="Explore more courses and content">
                <!-- Play Button -->
                <div
                    class="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <img src="../../assets/svg/polygon 2.svg" alt="Play button to explore more content"
                        class="w-full h-full" loading="lazy" width="64" height="64">
                </div>

                <!-- Circular Text -->
                <div class="absolute inset-0 flex items-center justify-center">
                    <CircularText text="Explore More - Explore More - " :radius="80" :fontSize="14" :spinDuration="50"
                        onHover="pause" />
                </div>
            </button>
        </div>
    </section>
</template>

<style scoped>
.hero-bg {
    background-color: #D2E6E4;
}

.explore-text {
    font-family: 'Clash Display', 'Inter', system-ui, sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
    text-anchor: middle;
    dominant-baseline: middle;
}
</style>