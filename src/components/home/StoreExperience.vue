<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { MapPin, Clock, Phone, MessageCircle, Navigation, ArrowUpRight } from 'lucide-vue-next';
import { brand, founders } from '../../config/brand';
import { useWhatsApp } from '../../composables/useWhatsApp';
import SectionHeading from '../common/SectionHeading.vue';
import PremiumButton from '../common/PremiumButton.vue';

const { sendDirectEnquiry } = useWhatsApp();
</script>

<template>
  <section class="py-20 sm:py-28 bg-[#0E0E0E] relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="IN-STORE SANCTUARY"
        title="THE CHIPLUN BOUTIQUE"
        subtitle="Step inside our Parkar Complex boutique for private fitting sessions, tactile fabric inspections, and relaxed styling consultations."
      />

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <!-- Store Information Card -->
        <div class="lg:col-span-6 bg-[#121212] border border-[#242424] p-8 sm:p-10 flex flex-col justify-between text-left">
          <div class="space-y-6">
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] border border-[#D4AF6A]/30">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span class="text-[10px] uppercase tracking-[0.25em] text-[#D4AF6A] font-semibold">
                WELCOME WALK-INS DAILY
              </span>
            </div>

            <h3 class="font-serif text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide">
              Parkar Complex • Shop No. 72
            </h3>

            <p class="text-xs sm:text-sm text-[#AAA] font-light leading-relaxed">
              Located conveniently in the heart of Chiplun. Whether you seek a custom celebratory ensemble or are elevating your weekly wardrobe, our store specialists ensure an unhurried, comfortable fitting experience.
            </p>

            <div class="space-y-4 pt-4 border-t border-[#1F1F1F]">
              <!-- Hours -->
              <div class="flex items-start gap-3">
                <Clock class="w-5 h-5 text-[#D4AF6A] shrink-0 mt-0.5" />
                <div>
                  <h4 class="text-xs uppercase font-bold tracking-wider text-white">Opening Hours</h4>
                  <p class="text-xs text-[#CCC] mt-0.5">10:00 AM – 10:00 PM (Monday through Sunday)</p>
                  <span class="inline-block text-[10px] text-[#D4AF6A] font-medium mt-1">
                    Open on Mondays as well!
                  </span>
                </div>
              </div>

              <!-- Address -->
              <div class="flex items-start gap-3">
                <MapPin class="w-5 h-5 text-[#D4AF6A] shrink-0 mt-0.5" />
                <div>
                  <h4 class="text-xs uppercase font-bold tracking-wider text-white">Store Address</h4>
                  <p class="text-xs text-[#CCC] mt-0.5">
                    {{ brand.address.line2 }}, {{ brand.address.line1 }}<br />
                    {{ brand.address.city }}, {{ brand.address.district }}<br />
                    {{ brand.address.state }}, India
                  </p>
                </div>
              </div>

              <!-- Founders & Contact -->
              <div class="flex items-start gap-3">
                <Phone class="w-5 h-5 text-[#D4AF6A] shrink-0 mt-0.5" />
                <div>
                  <h4 class="text-xs uppercase font-bold tracking-wider text-white">Boutique Directors</h4>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                    <div v-for="f in founders" :key="f.name" class="text-xs text-[#999]">
                      <span class="text-white block font-medium">{{ f.name }}</span>
                      <a :href="`tel:${f.phone}`" class="text-[#D4AF6A] hover:underline font-mono text-[11px]">
                        {{ f.phone }}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Buttons -->
          <div class="flex flex-col sm:flex-row gap-3 pt-8 mt-6 border-t border-[#1F1F1F]">
            <a
              :href="brand.googleMapsUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex-1 py-3.5 px-4 bg-[#1C1C1C] hover:bg-[#252525] border border-[#333] hover:border-[#D4AF6A] text-white text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Navigation class="w-4 h-4 text-[#D4AF6A]" />
              <span>Get Directions</span>
              <ArrowUpRight class="w-3.5 h-3.5 text-[#777]" />
            </a>

            <button
              @click="sendDirectEnquiry('Hello Monarch, I would like to book a personal fitting session at your Parkar Complex store.')"
              class="flex-1 py-3.5 px-4 bg-[#D4AF6A] hover:bg-[#E8D5A8] text-[#0B0B0B] text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <MessageCircle class="w-4 h-4" />
              <span>Book Fitting Session</span>
            </button>
          </div>
        </div>

        <!-- Interactive Visual / Map Presentation on Right -->
        <div class="lg:col-span-6 flex flex-col">
          <div class="relative flex-grow min-h-[360px] bg-[#161616] border border-[#242424] overflow-hidden group">
            <!-- Boutique Ambience Image / Map Preview -->
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop"
              alt="Monarch Boutique Interior Vibe"
              class="w-full h-full object-cover filter brightness-[0.7] contrast-[1.08] group-hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/30 to-transparent" />

            <!-- Inset Badge -->
            <div class="absolute bottom-6 left-6 right-6 p-5 bg-[#0B0B0B]/90 backdrop-blur-md border border-[#333] text-left">
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-[9px] tracking-[0.25em] text-[#D4AF6A] uppercase font-bold block">
                    BOUTIQUE EXPERIENCE
                  </span>
                  <h4 class="font-serif text-lg font-bold text-white mt-0.5">
                    Personalized Fitting & Hem Adjustments
                  </h4>
                  <p class="text-[11px] text-[#999] mt-1">
                    Try any silhouette with precise in-store sleeve & trouser length guidance.
                  </p>
                </div>
                <RouterLink
                  to="/store"
                  class="shrink-0 p-3 bg-[#1C1C1C] hover:bg-[#2A2A2A] border border-[#333] text-[#D4AF6A] transition-colors ml-4"
                >
                  <ArrowUpRight class="w-5 h-5" />
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
