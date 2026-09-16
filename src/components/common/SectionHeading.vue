<script setup lang="ts">
interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

withDefaults(defineProps<Props>(), {
  centered: true,
  light: false
});
</script>

<template>
  <div :class="['mb-12 sm:mb-16', centered ? 'text-center' : 'text-left']">
    <span
      v-if="eyebrow"
      class="text-[10px] tracking-[0.35em] uppercase font-semibold text-[#D4AF6A] block mb-3"
    >
      {{ eyebrow }}
    </span>
    
    <h2
      :class="[
        'font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-wider uppercase leading-tight',
        light ? 'text-white' : 'text-[#F5F1E8]'
      ]"
    >
      {{ title }}
    </h2>
    
    <div
      :class="[
        'w-12 h-0.5 bg-[#D4AF6A] my-4',
        centered ? 'mx-auto' : ''
      ]"
    />
    
    <p
      v-if="subtitle"
      class="text-xs sm:text-sm text-[#8E8E8E] max-w-2xl font-light leading-relaxed mx-auto"
      :class="{ 'mx-0': !centered }"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
