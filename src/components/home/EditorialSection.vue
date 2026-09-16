<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Sparkles, CheckCircle2 } from 'lucide-vue-next';
import PremiumButton from '../common/PremiumButton.vue';
</script>

<template>
  <section class="py-24 sm:py-32 bg-[#080808] border-b border-[#1A1A1A] relative overflow-hidden">
    <!-- Subtle luxury background glow -->
    <div class="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#D4AF6A]/5 blur-3xl pointer-events-none" />
    <div class="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#D4AF6A]/5 blur-3xl pointer-events-none" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <!-- Editorial Text on Left -->
        <div class="lg:col-span-6 space-y-6 text-left">
          <div class="flex items-center gap-2 text-[#D4AF6A]">
            <Sparkles class="w-4 h-4" />
            <span class="text-[10px] tracking-[0.35em] uppercase font-semibold">
              EDITORIAL PERSPECTIVE
            </span>
          </div>

          <h2 class="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[1.05]">
            QUIET<br />
            CONFIDENCE,<br />
            POETIC DRAPE.
          </h2>

          <div class="w-16 h-0.5 bg-[#D4AF6A] my-4" />

          <blockquote class="font-serif italic text-lg sm:text-xl text-[#DDD] border-l-2 border-[#D4AF6A] pl-5 my-6 leading-relaxed">
            "True luxury never screams for attention. It reveals itself in the hand-feel of long-staple cotton, the roll of a tailored collar, and the natural poise of a gentleman."
          </blockquote>

          <p class="text-xs sm:text-sm text-[#888] font-light leading-relaxed">
            In our Chiplun boutique, we hand-select pieces that bridge the gap between relaxed coastal ease and formal elegance. Whether preparing for a destination wedding, an executive meeting, or an evening gathering, our silhouettes are curated to endure beyond fleeting trends.
          </p>

          <!-- Highlights Checklist -->
          <div class="space-y-3 pt-4 border-t border-[#1C1C1C]">
            <div class="flex items-center gap-3 text-xs text-[#CCC]">
              <CheckCircle2 class="w-4 h-4 text-[#D4AF6A] shrink-0" />
              <span>Mercerized yarns offering subtle luster without synthetic shine</span>
            </div>
            <div class="flex items-center gap-3 text-xs text-[#CCC]">
              <CheckCircle2 class="w-4 h-4 text-[#D4AF6A] shrink-0" />
              <span>Breathable textiles chosen specifically for tropical Konkan climates</span>
            </div>
            <div class="flex items-center gap-3 text-xs text-[#CCC]">
              <CheckCircle2 class="w-4 h-4 text-[#D4AF6A] shrink-0" />
              <span>Complimentary in-store fitting consultation in Chiplun</span>
            </div>
          </div>

          <div class="pt-4">
            <PremiumButton
              to="/collection"
              variant="gold"
              size="md"
            >
              DISCOVER SIGNATURE STYLES
            </PremiumButton>
          </div>
        </div>

        <!-- Right Side Dual Imagery -->
        <div class="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
          <div class="space-y-4 sm:space-y-6">
            <div class="aspect-[3/4] overflow-hidden bg-[#141414] border border-[#222]">
              <img
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1000&auto=format&fit=crop"
                alt="Printed Floral Shirt Detail"
                class="w-full h-full object-cover filter brightness-[0.9] hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div class="p-4 bg-[#111] border border-[#222] text-left">
              <span class="text-[9px] uppercase tracking-[0.25em] text-[#D4AF6A] font-semibold block mb-1">
                TEXTILE FOCUS
              </span>
              <p class="font-serif text-sm text-white font-medium">Botanical Screen Prints</p>
              <p class="text-[11px] text-[#777] mt-1">Lightweight rayon-cotton weave</p>
            </div>
          </div>

          <div class="space-y-4 sm:space-y-6 pt-8 sm:pt-12">
            <div class="p-4 bg-[#111] border border-[#222] text-left">
              <span class="text-[9px] uppercase tracking-[0.25em] text-[#D4AF6A] font-semibold block mb-1">
                SARTORIAL CUT
              </span>
              <p class="font-serif text-sm text-white font-medium">Italian Pleated Drape</p>
              <p class="text-[11px] text-[#777] mt-1">Double forward pleat waist</p>
            </div>
            <div class="aspect-[3/4] overflow-hidden bg-[#141414] border border-[#222]">
              <img
                src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1000&auto=format&fit=crop"
                alt="Tailored Trouser Drape"
                class="w-full h-full object-cover filter brightness-[0.9] hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
