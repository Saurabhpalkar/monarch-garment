<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Crown, Sparkles, Scissors, MapPin, Phone, Instagram, ArrowUpRight } from 'lucide-vue-next';
import { brand, founders } from '../config/brand';
import SectionHeading from '../components/common/SectionHeading.vue';
import PremiumButton from '../components/common/PremiumButton.vue';
</script>

<template>
  <div class="bg-[#0B0B0B] text-[#F5F1E8] min-h-screen pt-28 pb-24">
    <!-- Header Section -->
    <div class="border-b border-[#1E1E1E] bg-[#0E0E0E] py-16 px-4 sm:px-6 lg:px-8 text-center mb-16">
      <div class="max-w-4xl mx-auto">
        <span class="text-[10px] tracking-[0.35em] uppercase text-[#D4AF6A] font-semibold block mb-2">
          THE MONARCH ODYSSEY
        </span>
        <h1 class="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wider text-white">
          THE MONARCH STORY
        </h1>
        <div class="w-16 h-0.5 bg-[#D4AF6A] mx-auto my-4" />
        <p class="text-xs sm:text-sm text-[#888] max-w-xl mx-auto font-light leading-relaxed">
          How a passion for tailored textiles and modern masculine silhouettes created Chiplun's premier menswear destination.
        </p>
      </div>
    </div>

    <!-- Main Editorial Narrative -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      <!-- Section 1: Vision & Purpose -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-6 relative">
          <div class="aspect-[4/5] overflow-hidden bg-[#161616] border border-[#242424]">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop"
              alt="Monarch Tailoring Heritage"
              class="w-full h-full object-cover filter brightness-[0.8] contrast-[1.05]"
            />
          </div>
          <div class="absolute -bottom-6 -right-4 bg-[#141414] border border-[#333] p-5 max-w-xs shadow-2xl hidden sm:block">
            <p class="font-serif text-xs text-[#D4AF6A] font-bold uppercase tracking-wider mb-1">
              PHILOSOPHY OF RESTRAINT
            </p>
            <p class="text-[11px] text-[#888] leading-relaxed">
              "We believe true sartorial refinement requires removing excess rather than adding noise."
            </p>
          </div>
        </div>

        <div class="lg:col-span-6 space-y-6 text-left">
          <span class="text-[10px] tracking-[0.3em] uppercase text-[#D4AF6A] font-semibold block">
            GENESIS IN CHIPLUN
          </span>

          <h2 class="font-serif text-3xl sm:text-4xl font-bold uppercase text-white leading-tight">
            Elevating Menswear in Konkan
          </h2>

          <div class="w-12 h-0.5 bg-[#D4AF6A]" />

          <p class="text-xs sm:text-sm text-[#BBB] leading-relaxed font-light">
            Founded with an uncompromising devotion to fabric quality and fit, Monarch Mens Wear was conceived to give Chiplun and the wider Ratnagiri district access to the same calibre of menswear usually reserved for metropolitan fashion capitals.
          </p>

          <p class="text-xs sm:text-sm text-[#888] leading-relaxed font-light">
            Located on the ground floor of Parkar Complex, our boutique is deliberately curated. We do not mass-order commercial inventories; each roll of cotton, each camp-collar shirt, and each pleated trouser is evaluated for drape, breathability, and timeless longevity.
          </p>

          <div class="pt-4 grid grid-cols-2 gap-4 border-t border-[#1C1C1C]">
            <div>
              <span class="font-serif text-2xl font-bold text-white block">100%</span>
              <span class="text-[10px] uppercase tracking-wider text-[#D4AF6A]">Curated Inventory</span>
            </div>
            <div>
              <span class="font-serif text-2xl font-bold text-white block">7 Days</span>
              <span class="text-[10px] uppercase tracking-wider text-[#D4AF6A]">Weekly Boutique Hours</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 2: Fabric Standards -->
      <div class="bg-[#0E0E0E] border border-[#1E1E1E] p-8 sm:p-14">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <span class="text-[10px] tracking-[0.3em] uppercase text-[#D4AF6A] font-semibold block mb-2">
            MATERIAL EXCELLENCE
          </span>
          <h2 class="font-serif text-2xl sm:text-4xl font-bold uppercase text-white">
            THE TEXTILES WE CHOOSE
          </h2>
          <div class="w-12 h-0.5 bg-[#D4AF6A] mx-auto my-4" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div class="p-6 bg-[#121212] border border-[#222]">
            <span class="text-[#D4AF6A] font-serif text-xl font-bold block mb-2">01. Giza Cotton</span>
            <h3 class="text-xs uppercase font-bold text-white tracking-wider mb-2">Long-Staple Luster</h3>
            <p class="text-xs text-[#888] leading-relaxed">
              Fine two-ply cotton yarns offering unmatched smoothness against the skin with natural sheen and durability that endures repeated laundering.
            </p>
          </div>

          <div class="p-6 bg-[#121212] border border-[#222]">
            <span class="text-[#D4AF6A] font-serif text-xl font-bold block mb-2">02. French Flax Linen</span>
            <h3 class="text-xs uppercase font-bold text-white tracking-wider mb-2">Organic Breathability</h3>
            <p class="text-xs text-[#888] leading-relaxed">
              Pre-washed European flax woven for peak moisture-wicking comfort during tropical coastal afternoons and celebratory outdoor soirées.
            </p>
          </div>

          <div class="p-6 bg-[#121212] border border-[#222]">
            <span class="text-[#D4AF6A] font-serif text-xl font-bold block mb-2">03. High-Twist Suiting</span>
            <h3 class="text-xs uppercase font-bold text-white tracking-wider mb-2">Wrinkle Resistance</h3>
            <p class="text-xs text-[#888] leading-relaxed">
              Engineered poly-viscose and tropical wool blends with natural mechanical stretch that drape cleanly from waist to shoe break.
            </p>
          </div>
        </div>
      </div>

      <!-- Section 3: Boutique Founders -->
      <div>
        <div class="text-center mb-12">
          <span class="text-[10px] tracking-[0.3em] uppercase text-[#D4AF6A] font-semibold block mb-2">
            LEADERSHIP & CURATION
          </span>
          <h2 class="font-serif text-2xl sm:text-4xl font-bold uppercase text-white">
            THE STORE DIRECTORS
          </h2>
          <div class="w-12 h-0.5 bg-[#D4AF6A] mx-auto my-4" />
          <p class="text-xs text-[#888] max-w-md mx-auto">
            Available daily in our Chiplun boutique to provide personal sizing, fitting assistance, and style consultations.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div
            v-for="f in founders"
            :key="f.name"
            class="p-8 bg-[#121212] border border-[#222] text-left space-y-4"
          >
            <div class="flex items-center justify-between">
              <span class="text-[10px] tracking-[0.25em] uppercase text-[#D4AF6A] font-bold">
                DIRECTOR & STYLIST
              </span>
              <Crown class="w-4 h-4 text-[#D4AF6A]" />
            </div>

            <h3 class="font-serif text-2xl font-bold text-white">
              {{ f.name }}
            </h3>

            <p class="text-xs text-[#888] leading-relaxed font-light">
              {{ f.role }} at Monarch Mens Wear. Dedicated to personal customer consultations, custom festive orders, and fabric curation in Chiplun.
            </p>

            <div class="pt-4 border-t border-[#1C1C1C] flex items-center justify-between text-xs">
              <a :href="`tel:${f.phone}`" class="text-[#D4AF6A] hover:underline flex items-center gap-1.5 font-mono">
                <Phone class="w-3.5 h-3.5" /> {{ f.phone }}
              </a>
              <span class="text-[11px] text-[#666]">Parkar Complex</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action Banner -->
      <div class="p-10 sm:p-14 bg-[#111111] border border-[#262626] text-center space-y-6">
        <h3 class="font-serif text-2xl sm:text-3xl font-bold uppercase text-white">
          Experience the Standard in Person
        </h3>
        <p class="text-xs text-[#888] max-w-lg mx-auto">
          Visit our boutique at Shop No. 72, Parkar Complex, Chiplun. Open every day including Mondays from 10:00 AM to 10:00 PM.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <PremiumButton to="/collection" variant="gold" size="md">
            Explore Collection
          </PremiumButton>
          <PremiumButton to="/store" variant="outline" size="md">
            Find Store Location
          </PremiumButton>
        </div>
      </div>
    </div>
  </div>
</template>
