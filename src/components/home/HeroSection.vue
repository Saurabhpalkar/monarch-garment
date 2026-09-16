<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ArrowDown, Sparkles } from 'lucide-vue-next';
import PremiumButton from '../common/PremiumButton.vue';

const scrollToContent = () => {
  const intro = document.getElementById('brand-intro');
  if (intro) {
    intro.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <section class="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#070707] select-none">
    <!-- Cinematic Fashion Background with Luxury Vignette -->
    <div class="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=2000&auto=format&fit=crop"
        alt="Monarch Mens Wear Editorial"
        class="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.12] scale-105 animate-subtle-zoom"
      />
      <!-- Luxury radial and linear gradient overlays -->
      <div class="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-[#0B0B0B]/70" />
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,11,11,0.85)_100%)]" />
    </div>

    <!-- Hero Content Container -->
    <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 flex flex-col items-center">
      <!-- Royal Crown Insignia Header -->
      <div class="inline-flex flex-col items-center mb-6 animate-fade-in">
        <svg class="w-12 h-12 sm:w-14 sm:h-14 text-[#D4AF6A] mb-3" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 12L63 38L88 28L78 68H22L12 28L37 38L50 12Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round" fill="none" />
          <circle cx="50" cy="12" r="3.5" fill="currentColor" />
          <circle cx="88" cy="28" r="3.5" fill="currentColor" />
          <circle cx="12" cy="28" r="3.5" fill="currentColor" />
          <path d="M28 76H72M34 84H66" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
          <text x="50" y="56" text-anchor="middle" font-family="'Playfair Display', Georgia, serif" font-size="22" font-weight="700" fill="currentColor">M</text>
        </svg>

        <span class="text-[10px] sm:text-[11px] tracking-[0.45em] text-[#D4AF6A] uppercase font-sans font-semibold">
          MONARCH MENS WEAR
        </span>
      </div>

      <!-- Main Editorial Headline -->
      <h1 class="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white uppercase leading-[0.95] mb-6 drop-shadow-2xl">
        STYLE THAT<br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F1E8] via-[#D4AF6A] to-[#E8D5A8]">
          DEFINES YOU.
        </span>
      </h1>

      <div class="w-20 h-0.5 bg-[#D4AF6A] my-4" />

      <!-- Subtitle -->
      <p class="font-serif italic text-lg sm:text-2xl text-[#E0DACB] max-w-xl font-light tracking-wide mb-10 leading-relaxed">
        Premium Menswear. Timeless Style.
      </p>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
        <PremiumButton
          to="/collection"
          variant="gold"
          size="lg"
          class="w-full sm:w-auto min-w-[220px]"
        >
          EXPLORE COLLECTION
        </PremiumButton>

        <PremiumButton
          to="/store"
          variant="outline"
          size="lg"
          class="w-full sm:w-auto min-w-[220px]"
        >
          VISIT OUR STORE
        </PremiumButton>
      </div>

      <!-- Location Badge Chiplun -->
      <div class="mt-12 inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#121212]/80 backdrop-blur-sm border border-white/10 text-[10px] tracking-[0.25em] text-[#AAA] uppercase">
        <span class="w-1.5 h-1.5 rounded-full bg-[#D4AF6A]" />
        <span>Parkar Complex • Shop No. 72 • Chiplun</span>
      </div>
    </div>

    <!-- Scroll Down Prompt Indicator -->
    <button
      @click="scrollToContent"
      class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#888] hover:text-[#D4AF6A] transition-colors cursor-pointer group"
      aria-label="Scroll to introduction"
    >
      <span class="text-[9px] tracking-[0.3em] uppercase font-sans font-medium">DISCOVER</span>
      <ArrowDown class="w-4 h-4 animate-bounce text-[#D4AF6A]" />
    </button>
  </section>
</template>

<style scoped>
@keyframes subtleZoom {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.08);
  }
}
.animate-subtle-zoom {
  animation: subtleZoom 20s infinite alternate ease-in-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}
</style>
