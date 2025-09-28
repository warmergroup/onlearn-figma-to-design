<script setup lang="ts">
import SectionTitle from '../../components/ui/SectionTitle.vue';
import CategoryCard from '../../components/ui/CategoryCard.vue';
import { categories } from '../../data/categories';
</script>

<template>
    <section id="categories" class="py-20 bg-white">
        <div class="max-w-6xl mx-auto px-4">
            <!-- Section Title -->
            <div class="text-center mb-12">
                <SectionTitle title="Courses Category" textColor="text-[var(--primary-teal)]"
                    underlineColor="var(--primary-orange)" />

                <!-- Description -->
                <p class="text-gray-600 text-lg mt-6 max-w-2xl mx-auto text-center leading-relaxed">
                    Onlearing is one powerful online software suite that combines all the tools needed to run a
                    successful school or office.
                </p>
            </div>

            <!-- Categories Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <CategoryCard v-for="category in categories" :key="category.id" :category="category" />
            </div>

            <!-- View All Button -->
            <div class="text-center">
                <button
                    class="w-fit py-2 px-4 rounded-lg font-medium transition-all border border-[var(--primary-teal)] duration-200 mt-auto bg-white hover:bg-[var(--primary-teal)] hover:text-white text-[var(--primary-teal)]">
                    Explore courses
                </button>
            </div>
        </div>
    </section>
</template>
