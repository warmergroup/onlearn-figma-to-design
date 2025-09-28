<script setup lang="ts">
import { ref } from 'vue';
import { contactInfo, footerLinks } from '@/data/footer';

const email = ref('');

const handleSubscribe = () => {
    if (email.value) {
        console.log('Subscribed:', email.value);
        email.value = '';
    }
};
</script>

<template>
    <footer class="bg-[#D2E6E4] py-16 relative overflow-hidden" role="contentinfo">
        <div class="max-w-7xl mx-auto relative z-10 px-20">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                <!-- 1. Brand va Contact Info -->
                <div class="space-y-6">
                    <!-- Logo -->
                    <div class="flex items-center space-x-3">
                        <img src="/src/assets/svg/logo-full.svg" alt="OnLearn - Online Education Platform Logo"
                            width="120" height="40" loading="lazy">
                    </div>

                    <!-- Contact Information -->
                    <address class="space-y-4 not-italic">
                        <div v-for="contact in contactInfo" :key="contact.label" class="flex items-start space-x-3">
                            <div class="flex-shrink-0 w-5 h-5 flex items-center justify-center mt-1">
                                <img :src="contact.icon" :alt="`${contact.label} icon`" class="w-4 h-4" loading="lazy"
                                    width="16" height="16">
                            </div>
                            <div>
                                <span class="text-sm font-medium text-[var(--primary-teal)]">{{ contact.label }}</span>
                                <p class="text-sm text-[var(--primary-teal)] mt-1">{{ contact.value }}</p>
                            </div>
                        </div>
                    </address>
                </div>

                <!-- 2. Categories -->
                <div v-for="linkGroup in footerLinks" :key="linkGroup.title" class="space-y-4">
                    <h3 class="text-lg font-bold text-black">{{ linkGroup.title }}</h3>
                    <nav :aria-label="`${linkGroup.title} links`">
                        <ul class="space-y-2">
                            <li v-for="link in linkGroup.links" :key="link">
                                <a href="#"
                                    class="text-sm text-[var(--primary-teal)] hover:text-[var(--primary-orange)] transition-colors duration-200"
                                    :aria-label="`Go to ${link} page`">
                                    {{ link }}
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <!-- 3. Newsletter Subscription -->
                <div class="space-y-4">
                    <h3 class="text-lg font-bold text-black">Stay up to date with the latest courses</h3>

                    <form @submit.prevent="handleSubscribe" class="space-y-3" aria-label="Newsletter subscription">
                        <div class="relative">
                            <label for="newsletter-email" class="sr-only">Email address for newsletter</label>
                            <input v-model="email" type="email" id="newsletter-email" placeholder="Email" required
                                class="w-full px-4 py-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-teal)] focus:border-transparent"
                                aria-describedby="newsletter-description">
                        </div>

                        <button type="submit"
                            class="w-full bg-[var(--primary-teal)] text-white py-3 px-4 rounded-lg font-medium hover:bg-[var(--dark-teal)] transition-colors duration-200"
                            aria-label="Subscribe to newsletter">
                            Send
                        </button>
                        <p id="newsletter-description" class="sr-only">Subscribe to receive updates about new courses
                            and educational content</p>
                    </form>
                </div>

            </div>
        </div>
    </footer>
</template>