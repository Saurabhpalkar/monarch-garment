<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { MapPin, Phone, Instagram, Clock, ArrowUpRight, MessageCircle } from 'lucide-vue-next';
import { brand, founders } from '../../config/brand';
import { categories } from '../../data/categories';
import { useWhatsApp } from '../../composables/useWhatsApp';

const { sendDirectEnquiry } = useWhatsApp();
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-[#080808] border-t border-[#1C1C1C] text-[#A0A0A0] pt-16 pb-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#1A1A1A]">
        <!-- Brand & Heritage Column -->
        <div class="lg:col-span-4 space-y-6">
          <RouterLink to="/" class="flex items-center gap-3">
            <svg class="w-9 h-9 text-[#D4AF6A]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 12L63 38L88 28L78 68H22L12 28L37 38L50 12Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round" fill="none" />
              <circle cx="50" cy="12" r="3.5" fill="currentColor" />
              <circle cx="88" cy="28" r="3.5" fill="currentColor" />
              <circle cx="12" cy="28" r="3.5" fill="currentColor" />
              <path d="M28 76H72M34 84H66" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
              <text x="50" y="56" text-anchor="middle" font-family="'Playfair Display', Georgia, serif" font-size="22" font-weight="700" fill="currentColor">M</text>
            </svg>
            <div>
              <span class="font-serif text-xl font-bold tracking-[0.25em] text-white block">MONARCH</span>
              <span class="text-[9px] tracking-[0.35em] text-[#D4AF6A] uppercase font-sans">MENS WEAR • CHIPLUN</span>
            </div>
          </RouterLink>

          <p class="text-xs text-[#888] leading-relaxed font-light">
            Chiplun's quintessential destination for modern menswear. Merging contemporary silhouettes with timeless elegance, handpicked fabrics, and bespoke in-store hospitality.
          </p>

          <!-- Instagram & WhatsApp Connect -->
          <div class="flex items-center gap-4 pt-2">
            <a
              :href="brand.instagram"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 text-xs text-[#DDD] hover:text-[#D4AF6A] transition-colors border border-[#2B2B2B] px-3.5 py-2 hover:border-[#D4AF6A]"
            >
              <Instagram class="w-3.5 h-3.5 text-[#D4AF6A]" />
              <span>@monarch.chiplun</span>
              <ArrowUpRight class="w-3 h-3 text-[#777]" />
            </a>

            <button
              @click="sendDirectEnquiry()"
              class="flex items-center gap-2 text-xs text-emerald-400 hover:text-emerald-300 transition-colors border border-emerald-900/60 bg-emerald-950/20 px-3.5 py-2 cursor-pointer"
            >
              <MessageCircle class="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="lg:col-span-2 space-y-4">
          <h4 class="text-[11px] font-sans uppercase tracking-[0.25em] text-[#D4AF6A] font-semibold">
            NAVIGATION
          </h4>
          <ul class="space-y-2.5 text-xs text-[#8E8E8E]">
            <li>
              <RouterLink to="/" class="hover:text-[#D4AF6A] transition-colors">Home Experience</RouterLink>
            </li>
            <li>
              <RouterLink to="/collection" class="hover:text-[#D4AF6A] transition-colors">The Collection</RouterLink>
            </li>
            <li>
              <RouterLink to="/collection?filter=new" class="hover:text-[#D4AF6A] transition-colors">New Arrivals</RouterLink>
            </li>
            <li>
              <RouterLink to="/about" class="hover:text-[#D4AF6A] transition-colors">The Monarch Story</RouterLink>
            </li>
            <li>
              <RouterLink to="/store" class="hover:text-[#D4AF6A] transition-colors">Store & Timings</RouterLink>
            </li>
            <li>
              <RouterLink to="/contact" class="hover:text-[#D4AF6A] transition-colors">Concierge & Fitting</RouterLink>
            </li>
          </ul>
        </div>

        <!-- Categories -->
        <div class="lg:col-span-3 space-y-4">
          <h4 class="text-[11px] font-sans uppercase tracking-[0.25em] text-[#D4AF6A] font-semibold">
            COLLECTIONS
          </h4>
          <ul class="space-y-2.5 text-xs text-[#8E8E8E]">
            <li v-for="cat in categories" :key="cat.id">
              <RouterLink
                :to="`/collection/${cat.slug}`"
                class="hover:text-[#D4AF6A] transition-colors"
              >
                {{ cat.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Boutique Information & Hours -->
        <div class="lg:col-span-3 space-y-4">
          <h4 class="text-[11px] font-sans uppercase tracking-[0.25em] text-[#D4AF6A] font-semibold">
            CHIPLUN BOUTIQUE
          </h4>

          <div class="text-xs text-[#999] space-y-3">
            <div class="flex items-start gap-2.5">
              <MapPin class="w-4 h-4 text-[#D4AF6A] shrink-0 mt-0.5" />
              <p>
                {{ brand.address.line2 }}, {{ brand.address.line1 }}<br />
                {{ brand.address.city }}, {{ brand.address.district }}<br />
                {{ brand.address.state }}, India
              </p>
            </div>

            <div class="flex items-start gap-2.5">
              <Clock class="w-4 h-4 text-[#D4AF6A] shrink-0 mt-0.5" />
              <div>
                <p class="text-white font-medium">10:00 AM – 10:00 PM</p>
                <p class="text-[11px] text-[#D4AF6A]">Open All 7 Days (Including Mondays)</p>
              </div>
            </div>

            <div class="pt-2 border-t border-[#1C1C1C] space-y-1 text-[11px]">
              <div v-for="f in founders" :key="f.name" class="flex items-center justify-between">
                <span class="text-[#AAA]">{{ f.name }}</span>
                <a :href="`tel:${f.phone}`" class="text-[#D4AF6A] hover:underline font-mono">
                  {{ f.phone }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Copyright & Legal -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#666]">
        <p>© {{ currentYear }} {{ brand.name }}. All rights reserved.</p>
        <p class="text-[#888]">
          Curated with precision in Chiplun, Maharashtra.
        </p>
      </div>
    </div>
  </footer>
</template>
