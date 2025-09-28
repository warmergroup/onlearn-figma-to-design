<script setup lang="ts">
import HeroSection from './components/sections/HeroSection.vue'
import Navigation from './components/ui/Navigation.vue'
import CourseSection from './components/sections/CourseSection.vue'
import CategoriesSection from './components/sections/CategoriesSection.vue'
import BenifetSection from './components/sections/BenifetSection.vue'
import GiftCardsSection from './components/sections/GiftCardsSection.vue'
import ExclusiveBundlesSection from './components/sections/ExclusiveBundlesSection.vue'
import FooterSection from './components/sections/FooterSection.vue'

</script>

<template>
  <div id="app" class="min-h-screen container mx-auto">
    <Navigation />
    <HeroSection />
    <CourseSection />
    <CategoriesSection />
    <BenifetSection />
    <GiftCardsSection />
    <ExclusiveBundlesSection />
    <FooterSection />
  </div>
</template>

<style scoped></style>
