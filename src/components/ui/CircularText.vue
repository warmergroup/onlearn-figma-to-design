<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue';

interface CircularTextProps {
    text: string;
    spinDuration?: number;
    onHover?: 'slowDown' | 'speedUp' | 'pause' | 'goBonkers';
    className?: string;
    radius?: number;
    fontSize?: number;
}

const props = withDefaults(defineProps<CircularTextProps>(), {
    text: '',
    spinDuration: 50,
    onHover: 'pause',
    className: '',
    radius: 90,
    fontSize: 16
});

const letters = computed(() => Array.from(props.text));
const isHovered = ref(false);
const currentRotation = ref(0);
const animationId = ref<number | null>(null);

const getCurrentSpeed = () => {
    if (isHovered.value && props.onHover === 'pause') return 0;

    const baseSpeed = 360 / props.spinDuration;

    if (!isHovered.value) return baseSpeed;

    switch (props.onHover) {
        case 'slowDown':
            return baseSpeed / 2;
        case 'speedUp':
            return baseSpeed * 4;
        case 'goBonkers':
            return baseSpeed * 20;
        default:
            return baseSpeed;
    }
};

const getCurrentScale = () => {
    return isHovered.value && props.onHover === 'goBonkers' ? 0.8 : 1;
};

const animate = () => {
    const speed = getCurrentSpeed();
    currentRotation.value = (currentRotation.value + speed * 0.016) % 360; // 60 FPS

    animationId.value = requestAnimationFrame(animate);
};

const startAnimation = () => {
    if (animationId.value) {
        cancelAnimationFrame(animationId.value);
    }
    animate();
};

const stopAnimation = () => {
    if (animationId.value) {
        cancelAnimationFrame(animationId.value);
        animationId.value = null;
    }
};

const handleHoverStart = () => {
    isHovered.value = true;
};

const handleHoverEnd = () => {
    isHovered.value = false;
};

const getLetterStyle = (index: number) => {
    const angle = (360 / letters.value.length) * index;
    const x = Math.cos((angle * Math.PI) / 180) * props.radius;
    const y = Math.sin((angle * Math.PI) / 180) * props.radius;

    return {
        position: 'absolute' as const,
        left: '50%',
        top: '50%',
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${angle + 90}deg)`,
        transformOrigin: 'center',
        fontSize: `${props.fontSize}px`,
        fontFamily: 'Clash Display, Inter, system-ui, sans-serif',
        fontWeight: '600' as const,
        color: 'white',
        whiteSpace: 'nowrap' as const
    };
};

onMounted(() => {
    startAnimation();
});

onUnmounted(() => {
    stopAnimation();
});
</script>

<template>
    <div class="circular-text-container" :class="props.className" :style="{
        width: `${props.radius * 2}px`,
        height: `${props.radius * 2}px`,
        transform: `scale(${getCurrentScale()})`,
        transition: 'transform 0.3s ease'
    }" @mouseenter="handleHoverStart" @mouseleave="handleHoverEnd">
        <div class="circular-text" :style="{
            transform: `rotate(${currentRotation}deg)`,
            width: `${props.radius * 2}px`,
            height: `${props.radius * 2}px`
        }">
            <span v-for="(letter, index) in letters" :key="index" :style="getLetterStyle(index)">
                {{ letter }}
            </span>
        </div>
    </div>
</template>

<style scoped>
.circular-text-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.circular-text {
    position: relative;
    transition: transform 0.1s linear;
}

/* Hover effects */
.circular-text-container:hover {
    filter: brightness(1.1);
}
</style>