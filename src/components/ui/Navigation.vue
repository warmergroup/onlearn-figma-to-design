<template>
    <header class="w-full container mx-auto overflow-hidden absolute top-0 left-0 right-0 z-50">
        <nav class="px-[119px] py-4 relative z-10" role="navigation" aria-label="Main navigation">
            <div class="flex items-center justify-between">
                <!-- Logo -->
                <a href="#home" class="logo flex items-center space-x-3 select-none cursor-pointer"
                    aria-label="OnLearn - Go to homepage">
                    <img src="@/assets/svg/logo-full.svg" alt="OnLearn - Online Education Platform Logo" width="120"
                        height="40" loading="eager" />
                </a>

                <!-- Navigation -->
                <ul class="hidden md:flex items-center space-x-8" role="menubar">
                    <li role="none">
                        <a href="#home" @click="setActive('home')" :class="[
                            'nav-link transition-colors cursor-pointer',
                            activeSection === 'home' ? 'nav-link-active' : 'nav-link-normal'
                        ]" role="menuitem" :aria-current="activeSection === 'home' ? 'page' : undefined"
                            aria-label="Navigate to Home section">
                            Home
                        </a>
                    </li>
                    <li role="none">
                        <a href="#careers" @click="setActive('careers')" :class="[
                            'nav-link transition-colors cursor-pointer',
                            activeSection === 'careers' ? 'nav-link-active' : 'nav-link-normal'
                        ]" role="menuitem" :aria-current="activeSection === 'careers' ? 'page' : undefined"
                            aria-label="Navigate to Careers section">
                            Careers
                        </a>
                    </li>
                    <li role="none">
                        <a href="#blog" @click="setActive('blog')" :class="[
                            'nav-link transition-colors cursor-pointer',
                            activeSection === 'blog' ? 'nav-link-active' : 'nav-link-normal'
                        ]" role="menuitem" :aria-current="activeSection === 'blog' ? 'page' : undefined"
                            aria-label="Navigate to Blog section">
                            Blog
                        </a>
                    </li>
                    <li role="none">
                        <a href="#about-us" @click="setActive('about-us')" :class="[
                            'nav-link transition-colors cursor-pointer',
                            activeSection === 'about-us' ? 'nav-link-active' : 'nav-link-normal'
                        ]" role="menuitem" :aria-current="activeSection === 'about-us' ? 'page' : undefined"
                            aria-label="Navigate to About Us section">
                            About Us
                        </a>
                    </li>
                </ul>

                <!-- Action Buttons -->
                <div class="flex items-center space-x-4">
                    <button
                        class="btn-primary text-[var(--primary-teal)] bg-white hover:bg-[var(--primary-teal)] hover:text-white transition-colors hidden sm:block"
                        aria-label="Log in to your account">
                        LOG IN
                    </button>
                    <button class="btn-primary bg-[var(--primary-teal)] hover:bg-[var(--dark-teal)] text-white"
                        aria-label="Sign up for a new account">
                        SIGN UP
                    </button>

                    <!-- Mobile menu button -->
                    <button class="md:hidden p-2 text-gray-600 hover:text-[var(--primary-teal)]"
                        aria-label="Open mobile menu" aria-expanded="false" aria-controls="mobile-menu">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref('home')
const sections = ['home', 'careers', 'blog', 'about-us']

const setActive = (section: string) => {
    activeSection.value = section
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
}

const handleScroll = () => {
    const scrollY = window.scrollY + 200

    for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollY >= element.offsetTop && scrollY < element.offsetTop + element.offsetHeight) {
            if (activeSection.value !== section) {
                activeSection.value = section
            }
            break
        }
    }
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.logo h1 {
    font-family: 'PicoBlackAl', 'Inter', system-ui, sans-serif;
}

.nav-link {
    font-family: 'Raleway', system-ui, sans-serif;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0.02em;
    transition: color 0.2s ease, font-weight 0.2s ease;
}

.nav-link-active {
    color: var(--primary-orange);
    font-weight: 700;
}

.nav-link-normal {
    color: var(--nav-text);
    font-weight: 500;
}

.nav-link-normal:hover {
    color: var(--nav-text-hover);
}
</style>