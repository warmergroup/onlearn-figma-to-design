<script setup lang="ts">
import { giftCard } from '@/data/giftCards';
</script>

<template>
    <section id="gift-cards" class="px-20">
        <!-- promotion banner -->
        <div class="max-w-7xl relative w-full h-[540px] flex mx-auto px-4 pt-10">
            <div class="self-end bg-[#DF1C25] p-15 rounded-2xl h-[80%] w-full">
                <div class="grid grid-cols-2 overflow-hidden">
                    <div class="flex flex-col gap-4 items-start overflow-hidden">
                        <h3 class="text-5xl font-bold text-white leading-15">
                            {{ giftCard.title }}
                        </h3>
                        <p v-for="feature in giftCard.features" :key="feature"
                            class="text-white flex gap-2 items-center">
                            <img src="@/assets/svg/white-star.svg" alt="gift card icon" class="w-6 h-6" />
                            {{ feature }}
                        </p>
                        <button
                            class="bg-white rounded-lg px-4 py-2 transition-all duration-300 hover:bg-[var(--primary-teal)] hover:text-white">
                            {{ giftCard.buttonText }}
                        </button>
                    </div>
                    <div class="absolute bottom-0 right-0  w-1/2 h-full flex flex-col gap-4">
                        <img src="/gift-card-woman.png" alt="promotion banner" class="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
