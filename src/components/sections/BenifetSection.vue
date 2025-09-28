<script setup lang="ts">
import SectionTitle from '../../components/ui/SectionTitle.vue';
import BenefitCard from '../../components/ui/BenefitCard.vue';
import { benefits } from '../../data/benefits';

</script>

<template>
    <section id="benefits" class="p-20">
        <div class="max-w-7xl mx-auto px-4">
            <!-- Section Title -->
            <div class="text-center mb-16">
                <SectionTitle title="Benefits & Features" textColor="text-[var(--primary-teal)]"
                    underlineColor="var(--primary-orange)" />
            </div>

            <!-- Benefits List -->
            <div class="space-y-8">
                <BenefitCard v-for="benefit in benefits" :key="benefit.id" :benefit="benefit" />
            </div>
        </div>


    </section>
</template>