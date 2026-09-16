<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ArrowUpRight } from 'lucide-vue-next';
import SectionHeading from '../common/SectionHeading.vue';
</script>

<template>
  <section id="brand-intro" class="py-20 sm:py-28 bg-[#0B0B0B] border-b border-[#1A1A1A]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Left Editorial Image Collage -->
        <div class="lg:col-span-5 relative">
          <div class="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden bg-[#161616] border border-[#262626]">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop"
              alt="Monarch Mens Wear Craftsmanship"
              class="w-full h-full object-cover object-center filter grayscale contrast-[1.08] hover:grayscale-0 transition-all duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent" />
          </div>

          <!-- Floating Accent Card -->
          <div class="absolute -bottom-6 -right-2 sm:right-6 bg-[#141414] border border-[#2B2B2B] p-5 shadow-2xl max-w-[240px]">
            <span class="text-[9px] tracking-[0.25em] text-[#D4AF6A] uppercase font-bold block mb-1">
              ESTABLISHED IN CHIPLUN
            </span>
            <p class="font-serif text-sm text-white font-medium">
              Where high-end fabric sourcing meets everyday sartorial precision.
            </p>
          </div>
        </div>

        <!-- Right Content -->
        <div class="lg:col-span-7 space-y-6 text-left">
          <div class="inline-block">
            <span class="text-[10px] tracking-[0.35em] uppercase text-[#D4AF6A] font-semibold block mb-2">
              HERITAGE & PHILOSOPHY
            </span>
            <h2 class="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-[1.05]">
              THE<br />
              MONARCH<br />
              STANDARD
            </h2>
            <div class="w-16 h-0.5 bg-[#D4AF6A] my-5" />
          </div>

          <p class="text-sm sm:text-base text-[#BBB] font-light leading-relaxed max-w-2xl">
            At Monarch Mens Wear, style is never accidental. Rooted in Chiplun at Parkar Complex, our boutique curates garments that honor the balance between relaxed comfort and commanding presence.
          </p>

          <p class="text-xs sm:text-sm text-[#888] font-light leading-relaxed max-w-2xl">
            From hand-selected Japanese floral printed shirts and crisp French flax linen to Italian double-pleated trousers and raw selvedge denim, each piece in our boutique undergoes rigorous curation for fabric weight, weave durability, and contemporary fit.
          </p>

          <!-- 3 Pillars Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#1C1C1C]">
            <div>
              <span class="font-serif text-xl font-bold text-[#D4AF6A] block mb-1">01</span>
              <h4 class="text-xs uppercase tracking-wider font-semibold text-white mb-1">Curated Fabrics</h4>
              <p class="text-[11px] text-[#777] leading-relaxed">
                Breathable Egyptian cottons, French flax linen, and high-twist wool blends.
              </p>
            </div>

            <div>
              <span class="font-serif text-xl font-bold text-[#D4AF6A] block mb-1">02</span>
              <h4 class="text-xs uppercase tracking-wider font-semibold text-white mb-1">Precision Fit</h4>
              <p class="text-[11px] text-[#777] leading-relaxed">
                Contemporary cuts engineered for masculine silhouettes and all-day ease.
              </p>
            </div>

            <div>
              <span class="font-serif text-xl font-bold text-[#D4AF6A] block mb-1">03</span>
              <h4 class="text-xs uppercase tracking-wider font-semibold text-white mb-1">Personal Service</h4>
              <p class="text-[11px] text-[#777] leading-relaxed">
                One-on-one wardrobe consultation with boutique directors in Chiplun.
              </p>
            </div>
          </div>

          <div class="pt-4">
            <RouterLink
              to="/about"
              class="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF6A] hover:text-white font-semibold transition-colors group"
            >
              <span>Learn About Our Story</span>
              <ArrowUpRight class="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
