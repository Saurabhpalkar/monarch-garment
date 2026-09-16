<script setup lang="ts">
import { Crown, Scissors, ShieldCheck, Sparkles, Clock, Compass } from 'lucide-vue-next';
import SectionHeading from '../common/SectionHeading.vue';

const features = [
  {
    icon: Crown,
    title: 'CURATED DISTINCTION',
    description: 'Every garment on our boutique racks is selected individually. We do not stock mass-market runoffs; we curate limited, distinctive editions.'
  },
  {
    icon: Scissors,
    title: 'CONTEMPORARY CUTS',
    description: 'Engineered for modern posture and athletic ease. Our cuts provide clean shoulders, balanced chest taper, and effortless trouser cuffs.'
  },
  {
    icon: ShieldCheck,
    title: 'FABRIC LONGEVITY',
    description: 'From double-mercerized Pima cottons to pure French flax linen and Japanese selvedge denim, our textiles age with natural grace.'
  },
  {
    icon: Sparkles,
    title: 'PERSONAL STYLING',
    description: 'Store founders Ahmed Khatib and Gufran Khan provide direct one-on-one wardrobe styling assistance for weddings, festivals, and daily elegance.'
  },
  {
    icon: Clock,
    title: 'OPEN 7 DAYS A WEEK',
    description: 'Open Monday through Sunday from 10:00 AM to 10:00 PM without midday closures, ensuring seamless shopping at your convenience.'
  },
  {
    icon: Compass,
    title: 'CENTRAL CHIPLUN HUB',
    description: 'Conveniently situated at Parkar Complex, Shop No. 72, with accessible parking and immediate boutique fitting rooms.'
  }
];
</script>

<template>
  <section class="py-20 sm:py-28 bg-[#0B0B0B] border-b border-[#1A1A1A]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="THE MONARCH DISTINCTION"
        title="WHY CHOOSE MONARCH"
        subtitle="We founded Monarch to provide Chiplun with a world-class menswear destination where textile integrity meets modern aesthetics."
      />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div
          v-for="(item, idx) in features"
          :key="idx"
          class="p-8 bg-[#101010] border border-[#1E1E1E] hover:border-[#333] transition-all duration-300 relative group text-left"
        >
          <!-- Subtle corner accent -->
          <div class="w-8 h-8 rounded-full bg-[#181818] border border-[#2B2B2B] flex items-center justify-center text-[#D4AF6A] group-hover:border-[#D4AF6A] transition-colors mb-5">
            <component :is="item.icon" class="w-4 h-4" />
          </div>

          <h3 class="font-serif text-base sm:text-lg font-bold tracking-wider uppercase text-white mb-2">
            {{ item.title }}
          </h3>

          <p class="text-xs text-[#888] font-light leading-relaxed">
            {{ item.description }}
          </p>

          <!-- Subtle bottom gold indicator -->
          <div class="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D4AF6A] group-hover:w-full transition-all duration-500 ease-out" />
        </div>
      </div>
    </div>
  </section>
</template>
