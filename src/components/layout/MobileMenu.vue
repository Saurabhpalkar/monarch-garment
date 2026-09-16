<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { X, Phone, MessageCircle, Instagram, MapPin } from 'lucide-vue-next';
import { brand } from '../../config/brand';
import { useWhatsApp } from '../../composables/useWhatsApp';

interface Props {
  isOpen: boolean;
}

defineProps<Props>();
const emit = defineEmits<{
  (e: 'close'): void;
}>();

const { sendDirectEnquiry } = useWhatsApp();

const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'COLLECTION', path: '/collection' },
  { name: 'NEW ARRIVALS', path: '/collection?filter=new' },
  { name: 'ABOUT MONARCH', path: '/about' },
  { name: 'BOUTIQUE STORE', path: '/store' },
  { name: 'CONTACT & CONCIERGE', path: '/contact' },
  { name: 'BAG / ENQUIRY', path: '/cart' },
  { name: 'SAVED LOOKS', path: '/wishlist' }
];

const handleClose = () => {
  emit('close');
};
</script>

<template>
  <Transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 bg-[#0B0B0B]/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
    >
      <!-- Top Header -->
      <div class="flex items-center justify-between border-b border-[#222] pb-6">
        <RouterLink to="/" @click="handleClose" class="flex items-center gap-3">
          <!-- Monarch Royal Crest SVG -->
          <svg class="w-8 h-8 text-[#D4AF6A]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 12L63 38L88 28L78 68H22L12 28L37 38L50 12Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round" fill="none" />
            <circle cx="50" cy="12" r="3.5" fill="currentColor" />
            <circle cx="88" cy="28" r="3.5" fill="currentColor" />
            <circle cx="12" cy="28" r="3.5" fill="currentColor" />
            <path d="M30 76H70M36 84H64" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
            <text x="50" y="56" text-anchor="middle" font-family="'Playfair Display', serif" font-size="22" font-weight="700" fill="currentColor">M</text>
          </svg>
          <div class="text-left">
            <span class="font-serif text-lg tracking-[0.25em] font-bold text-white block">MONARCH</span>
            <span class="text-[9px] tracking-[0.35em] text-[#D4AF6A] uppercase font-sans">MENS WEAR • CHIPLUN</span>
          </div>
        </RouterLink>

        <button
          @click="handleClose"
          class="p-2.5 text-[#AAA] hover:text-white border border-[#333] hover:border-[#D4AF6A] transition-colors"
          aria-label="Close menu"
        >
          <X class="w-6 h-6" />
        </button>
      </div>

      <!-- Navigation Links -->
      <div class="py-8 my-auto space-y-4">
        <div
          v-for="(link, idx) in navLinks"
          :key="link.path"
          class="border-b border-[#181818] pb-3"
        >
          <RouterLink
            :to="link.path"
            @click="handleClose"
            class="group flex items-center justify-between text-xl sm:text-2xl font-serif tracking-widest text-[#DDD] hover:text-[#D4AF6A] transition-colors"
          >
            <span class="group-hover:translate-x-2 transition-transform duration-300">
              {{ link.name }}
            </span>
            <span class="text-xs text-[#555] font-sans group-hover:text-[#D4AF6A]">
              0{{ idx + 1 }}
            </span>
          </RouterLink>
        </div>
      </div>

      <!-- Bottom Boutique Info & Actions -->
      <div class="border-t border-[#222] pt-6 space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#888]">
          <div class="flex items-center gap-2">
            <MapPin class="w-4 h-4 text-[#D4AF6A] shrink-0" />
            <span>Shop No. 72, Parkar Complex, Chiplun</span>
          </div>
          <span class="text-[11px] text-[#D4AF6A]">Open 7 Days • 10 AM – 10 PM</span>
        </div>

        <div class="grid grid-cols-2 gap-3 pt-2">
          <button
            @click="sendDirectEnquiry(); handleClose()"
            class="py-3 px-4 bg-[#25D366]/20 border border-[#25D366]/50 text-emerald-400 text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2"
          >
            <MessageCircle class="w-4 h-4" />
            <span>WhatsApp</span>
          </button>

          <a
            :href="`tel:${brand.phone}`"
            class="py-3 px-4 bg-[#181818] border border-[#333] hover:border-[#D4AF6A] text-white text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2"
          >
            <Phone class="w-4 h-4 text-[#D4AF6A]" />
            <span>Call Boutique</span>
          </a>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.98);
}
</style>
