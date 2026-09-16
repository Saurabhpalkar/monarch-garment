<script setup lang="ts">
import { ref } from 'vue';
import { MessageCircle, X } from 'lucide-vue-next';
import { useWhatsApp } from '../../composables/useWhatsApp';

const { sendDirectEnquiry, isConfigured } = useWhatsApp();
const showTooltip = ref(true);

const handleOpen = () => {
  sendDirectEnquiry('Hello Monarch Mens Wear Chiplun, I would like to enquire about your menswear collection & store visit.');
};
</script>

<template>
  <div class="fixed bottom-6 right-6 z-40 flex flex-col items-end">
    <!-- Popover Notification -->
    <div
      v-if="showTooltip"
      class="mb-3 p-3 bg-[#161616] border border-[#2B2B2B] shadow-2xl max-w-xs text-left text-xs text-[#E8D5A8] rounded-sm relative animate-fade-in"
    >
      <button
        @click="showTooltip = false"
        class="absolute top-1.5 right-1.5 text-[#777] hover:text-white"
        aria-label="Close message"
      >
        <X class="w-3.5 h-3.5" />
      </button>
      <div class="flex items-center gap-2 mb-1">
        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span class="font-serif font-bold text-white text-[11px] tracking-wider uppercase">Monarch Concierge</span>
      </div>
      <p class="text-[11px] text-[#AAA] leading-relaxed">
        Need size advice or checking in-store stock at Parkar Complex? Message us on WhatsApp.
      </p>
    </div>

    <!-- Floating Action Button -->
    <button
      @click="handleOpen"
      class="group relative flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl shadow-black/70 transition-all duration-300 hover:scale-105 select-none cursor-pointer"
      aria-label="Chat on WhatsApp with Monarch Mens Wear"
    >
      <MessageCircle class="w-5 h-5 fill-current" />
      <span class="text-xs font-semibold tracking-wider uppercase font-sans hidden sm:inline-block">
        WhatsApp Concierge
      </span>
      <span class="relative flex h-2.5 w-2.5">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
        <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-100" />
      </span>
    </button>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}
</style>
