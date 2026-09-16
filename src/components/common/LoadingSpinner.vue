<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'lg';
}

withDefaults(defineProps<Props>(), {
  size: 'md'
});
</script>

<template>
  <div class="flex items-center justify-center p-8">
    <div
      :class="[
        'border-2 border-[#222] border-t-[#D4AF6A] rounded-full animate-spin',
        size === 'sm' ? 'w-5 h-5' : size === 'lg' ? 'w-12 h-12' : 'w-8 h-8'
      ]"
    />
  </div>
</template>
