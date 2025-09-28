<script setup lang="ts">
import type { Category } from '../../data/categories';

const props = defineProps<{
    category: Category;
}>();

const handleClick = () => {
    // Category click logic here
    console.log('Category clicked:', props.category.title);
};
</script>

<template>
    <div class="bg-white rounded-xl hover:shadow-xl transition-all duration-300 p-6 cursor-pointer h-full flex flex-col justify-between items-center"
        :class="{ 'shadow-lg': props.category.isActive }" @click="handleClick">
        <!-- Icon -->
        <div class="flex items-center justify-center w-12 h-12 rounded-full mb-4" :class="props.category.iconBg">
            <img :src="props.category.icon" alt="category icon" class="text-2xl" />
        </div>

        <!-- Title -->
        <h3 class="text-lg font-bold text-[var(--primary-teal)] mb-2">
            {{ props.category.title }}
        </h3>

        <!-- Description -->
        <p class="text-sm text-gray-500 mb-4 leading-relaxed text-center flex-grow">
            {{ props.category.description }}
        </p>

        <!-- Button - Always at bottom -->
        <button class="w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 mt-auto"
            :class="props.category.isActive
                ? 'bg-[var(--primary-orange)] text-white hover:bg-orange-600'
                : 'bg-gray-100 text-[var(--primary-teal)] hover:bg-[var(--primary-orange)] transition-all duration-200 hover:text-white '">
            {{ props.category.isActive ? 'Explore courses' : 'More' }}
        </button>
    </div>
</template>
