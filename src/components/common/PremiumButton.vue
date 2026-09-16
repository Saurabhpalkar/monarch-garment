<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'gold' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  disabled?: boolean;
  block?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'gold',
  size: 'md',
  disabled: false,
  block: false,
  type: 'button'
});

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-4 py-2.5 text-[10px] tracking-[0.2em]';
    case 'lg':
      return 'px-8 py-4 text-xs tracking-[0.25em]';
    default:
      return 'px-6 py-3.5 text-[11px] tracking-[0.22em]';
  }
});

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-white text-[#0B0B0B] hover:bg-[#F5F1E8] border border-white';
    case 'secondary':
      return 'bg-[#181818] text-white hover:bg-[#222222] border border-[#333333]';
    case 'outline':
      return 'bg-transparent text-white border border-[#444444] hover:border-[#D4AF6A] hover:text-[#D4AF6A]';
    case 'ghost':
      return 'bg-transparent text-[#AAA] hover:text-white';
    case 'gold':
    default:
      return 'bg-[#D4AF6A] text-[#0B0B0B] font-semibold hover:bg-[#E8D5A8] border border-[#D4AF6A]';
  }
});
</script>

<template>
  <RouterLink
    v-if="to"
    :to="to"
    :class="[
      'inline-flex items-center justify-center font-sans uppercase transition-all duration-300 select-none cursor-pointer',
      sizeClasses,
      variantClasses,
      block ? 'w-full' : '',
      disabled ? 'opacity-50 pointer-events-none' : ''
    ]"
  >
    <slot />
  </RouterLink>

  <a
    v-else-if="href"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :class="[
      'inline-flex items-center justify-center font-sans uppercase transition-all duration-300 select-none cursor-pointer',
      sizeClasses,
      variantClasses,
      block ? 'w-full' : '',
      disabled ? 'opacity-50 pointer-events-none' : ''
    ]"
  >
    <slot />
  </a>

  <button
    v-else
    :type="type"
    :disabled="disabled"
    :class="[
      'inline-flex items-center justify-center font-sans uppercase transition-all duration-300 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
      sizeClasses,
      variantClasses,
      block ? 'w-full' : ''
    ]"
  >
    <slot />
  </button>
</template>
