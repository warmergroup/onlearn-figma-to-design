<script setup lang="ts">
import { ref, computed } from 'vue';
import SectionTitle from '../../components/ui/SectionTitle.vue';
import CourseCard from '../../components/ui/CourseCard.vue';
import { courses } from '../../data/courses';

const activeTab = ref('all programs');

const tabs = [
    { id: 'all programs', label: 'All Programe' },
    { id: 'design', label: 'UX/UI Design' },
    { id: 'development', label: 'Web Development' },
    { id: 'marketing', label: 'Digital Marketing' },
    { id: 'business', label: 'Business Analytics' }
];

const setActiveTab = (tabId: string) => {
    activeTab.value = tabId;
};

const filteredCourses = computed(() => {
    if (activeTab.value === 'all programs') {
        return courses.slice(0, 4);
    }
    if (activeTab.value === 'business') {
        return courses.filter(course => course.category === activeTab.value);
    }
    return courses.filter(course => course.category === activeTab.value);
});
</script>

<template>
    <section id="courses" class="min-h-screen bg-white py-20 space-y-12" aria-labelledby="courses-heading">
        <SectionTitle title="Popular Courses" textColor="text-[var(--primary-orange)]"
            underlineColor="var(--primary-teal)" />

        <!-- Course Category Tabs -->
        <div class="w-full mx-auto flex justify-center items-center" role="tablist" aria-label="Course categories">
            <div class="flex rounded-lg p-1 gap-6">
                <button v-for="tab in tabs" :key="tab.id" @click="setActiveTab(tab.id)" :class="[
                    'min-w-0 px-4 py-3 rounded-md font-medium text-center whitespace-nowrap transition-colors duration-200',
                    activeTab === tab.id
                        ? 'bg-[var(--primary-teal)] text-white'
                        : 'text-gray-600 border border-gray-300 hover:text-[var(--primary-teal)]'
                ]" role="tab" :aria-selected="activeTab === tab.id" :aria-controls="`${tab.id}-panel`"
                    :id="`${tab.id}-tab`" :aria-label="`Filter courses by ${tab.label}`">
                    <span class="block">{{ tab.label }}</span>
                </button>
            </div>
        </div>

        <!-- Course Cards Grid -->
        <div class="w-full mx-auto px-4" role="tabpanel" :id="`${activeTab}-panel`"
            :aria-labelledby="`${activeTab}-tab`">
            <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <CourseCard v-for="course in filteredCourses" :key="course.id" :course="course" />
            </div>
        </div>
    </section>
</template>