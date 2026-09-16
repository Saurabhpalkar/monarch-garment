<script setup lang="ts">
import { ref } from 'vue';
import { MapPin, Clock, Phone, Navigation, MessageCircle, CheckCircle2, ShieldAlert } from 'lucide-vue-next';
import { brand, founders } from '../config/brand';
import { useWhatsApp } from '../composables/useWhatsApp';
import SectionHeading from '../components/common/SectionHeading.vue';
import PremiumButton from '../components/common/PremiumButton.vue';

const { sendDirectEnquiry } = useWhatsApp();

const appointmentName = ref('');
const appointmentDate = ref('');
const appointmentOccasion = ref('Casual / Weekend Styling');
const isBooked = ref(false);

const handleBookAppointment = () => {
  if (!appointmentName.value) return;
  const msg = `Hello Monarch Mens Wear,
I would like to reserve a personal fitting consultation:
Name: ${appointmentName.value}
Preferred Date/Time: ${appointmentDate.value || 'Today/Tomorrow'}
Occasion: ${appointmentOccasion.value}

Please confirm timing at your Parkar Complex Chiplun store.`;
  sendDirectEnquiry(msg);
  isBooked.value = true;
};
</script>

<template>
  <div class="bg-[#0B0B0B] text-[#F5F1E8] min-h-screen pt-28 pb-24">
    <!-- Header Section -->
    <div class="border-b border-[#1E1E1E] bg-[#0E0E0E] py-16 px-4 sm:px-6 lg:px-8 text-center mb-16">
      <div class="max-w-4xl mx-auto">
        <span class="text-[10px] tracking-[0.35em] uppercase text-[#D4AF6A] font-semibold block mb-2">
          CHIPLUN BOUTIQUE DESTINATION
        </span>
        <h1 class="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wider text-white">
          VISIT THE STORE
        </h1>
        <div class="w-16 h-0.5 bg-[#D4AF6A] mx-auto my-4" />
        <p class="text-xs sm:text-sm text-[#888] max-w-xl mx-auto font-light leading-relaxed">
          Step into our sanctuary of curated menswear at Parkar Complex. Experience fabrics first-hand with personalized stylist guidance.
        </p>
      </div>
    </div>

    <!-- Main Content Container -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <!-- Store Highlights Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- Store Information Card (5 cols) -->
        <div class="lg:col-span-5 bg-[#111111] border border-[#242424] p-8 sm:p-10 space-y-8 text-left">
          <div class="border-b border-[#222] pb-6">
            <span class="text-[9px] tracking-[0.3em] uppercase text-[#D4AF6A] font-bold block mb-1">
              STORE SANCTUARY
            </span>
            <h2 class="font-serif text-2xl font-bold text-white uppercase">
              Monarch Mens Wear
            </h2>
            <p class="text-xs text-[#888] mt-1">
              Chiplun's quintessential premier menswear store.
            </p>
          </div>

          <!-- Address -->
          <div class="flex items-start gap-4">
            <div class="p-2.5 bg-[#181818] border border-[#2B2B2B] text-[#D4AF6A]">
              <MapPin class="w-5 h-5" />
            </div>
            <div>
              <h4 class="text-xs font-bold tracking-wider uppercase text-white">
                Boutique Address
              </h4>
              <p class="text-xs text-[#AAA] mt-1 leading-relaxed">
                <strong>{{ brand.address.line2 }}, {{ brand.address.line1 }}</strong><br />
                {{ brand.address.city }}, {{ brand.address.district }}<br />
                {{ brand.address.state }}, India
              </p>
            </div>
          </div>

          <!-- Hours -->
          <div class="flex items-start gap-4 pt-4 border-t border-[#1C1C1C]">
            <div class="p-2.5 bg-[#181818] border border-[#2B2B2B] text-[#D4AF6A]">
              <Clock class="w-5 h-5" />
            </div>
            <div>
              <h4 class="text-xs font-bold tracking-wider uppercase text-white">
                Store Hours
              </h4>
              <p class="text-xs text-[#AAA] mt-1">
                10:00 AM – 10:00 PM (Every Day)
              </p>
              <div class="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-950/40 border border-emerald-800 text-emerald-300 text-[10px] font-semibold">
                <CheckCircle2 class="w-3 h-3" />
                <span>Open on Mondays as well!</span>
              </div>
            </div>
          </div>

          <!-- Direct Phone Contacts -->
          <div class="flex items-start gap-4 pt-4 border-t border-[#1C1C1C]">
            <div class="p-2.5 bg-[#181818] border border-[#2B2B2B] text-[#D4AF6A]">
              <Phone class="w-5 h-5" />
            </div>
            <div class="w-full">
              <h4 class="text-xs font-bold tracking-wider uppercase text-white mb-2">
                Stylist Direct Lines
              </h4>
              <div class="space-y-2">
                <div v-for="f in founders" :key="f.name" class="flex items-center justify-between text-xs bg-[#181818] p-2.5 border border-[#2A2A2A]">
                  <div>
                    <span class="text-white block font-medium">{{ f.name }}</span>
                    <span class="text-[10px] text-[#777]">{{ f.role }}</span>
                  </div>
                  <a :href="`tel:${f.phone}`" class="text-[#D4AF6A] hover:underline font-mono text-xs">
                    {{ f.phone }}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="pt-4 border-t border-[#1C1C1C] flex flex-col sm:flex-row gap-3">
            <a
              :href="brand.googleMapsUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex-1 py-3 px-4 bg-[#1C1C1C] hover:bg-[#252525] border border-[#333] hover:border-[#D4AF6A] text-white text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2"
            >
              <Navigation class="w-4 h-4 text-[#D4AF6A]" />
              <span>Google Maps</span>
            </a>

            <button
              @click="sendDirectEnquiry()"
              class="flex-1 py-3 px-4 bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 text-emerald-300 text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2"
            >
              <MessageCircle class="w-4 h-4" />
              <span>WhatsApp Store</span>
            </button>
          </div>
        </div>

        <!-- Interactive Map & Appointment Booking on Right (7 cols) -->
        <div class="lg:col-span-7 space-y-8">
          <!-- Google Maps Embed Frame -->
          <div class="bg-[#121212] border border-[#242424] p-2 overflow-hidden aspect-[16/9] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15277.625414169543!2d73.51347076478953!3d17.53424160395726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9857d4224796d%3A0xe9684948f654b9d!2sParkar%20Complex%2C%20Chiplun%2C%20Maharashtra%20415605!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              class="w-full h-full border-0 filter grayscale contrast-[1.1] opacity-90 hover:grayscale-0 transition-all duration-500"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Monarch Mens Wear Location Map"
            />
          </div>

          <!-- Fitting Appointment Booking Form -->
          <div class="bg-[#111111] border border-[#242424] p-8 text-left space-y-6">
            <div>
              <span class="text-[9px] tracking-[0.3em] uppercase text-[#D4AF6A] font-bold block mb-1">
                COMPLIMENTARY CONCIERGE
              </span>
              <h3 class="font-serif text-xl sm:text-2xl font-bold uppercase text-white">
                Reserve a Fitting Session
              </h3>
              <p class="text-xs text-[#888] mt-1">
                Let our boutique team prepare custom sizes and garment racks in advance of your arrival.
              </p>
            </div>

            <div v-if="isBooked" class="p-4 bg-emerald-950/40 border border-emerald-800 text-emerald-300 text-xs">
              Thank you! Your fitting inquiry has been dispatched to our WhatsApp concierge. We look forward to welcoming you at Parkar Complex.
            </div>

            <form v-else @submit.prevent="handleBookAppointment" class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-[10px] uppercase tracking-wider text-[#AAA] mb-1.5 font-medium">
                    Your Name *
                  </label>
                  <input
                    v-model="appointmentName"
                    type="text"
                    required
                    placeholder="e.g. Sameer Deshmukh"
                    class="w-full bg-[#181818] border border-[#333] px-3.5 py-2.5 text-xs text-white placeholder-[#666] focus:outline-none focus:border-[#D4AF6A]"
                  />
                </div>

                <div>
                  <label class="block text-[10px] uppercase tracking-wider text-[#AAA] mb-1.5 font-medium">
                    Preferred Date / Time
                  </label>
                  <input
                    v-model="appointmentDate"
                    type="text"
                    placeholder="e.g. This Saturday at 5 PM"
                    class="w-full bg-[#181818] border border-[#333] px-3.5 py-2.5 text-xs text-white placeholder-[#666] focus:outline-none focus:border-[#D4AF6A]"
                  />
                </div>
              </div>

              <div>
                <label class="block text-[10px] uppercase tracking-wider text-[#AAA] mb-1.5 font-medium">
                  Occasion / Garment Interest
                </label>
                <select
                  v-model="appointmentOccasion"
                  class="w-full bg-[#181818] border border-[#333] px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF6A] cursor-pointer"
                >
                  <option value="Wedding / Festive Ensemble">Wedding / Festive Ensemble</option>
                  <option value="Executive Formal Wardrobe">Executive Formal Wardrobe</option>
                  <option value="Casual & Resort Printed Shirts">Casual & Resort Printed Shirts</option>
                  <option value="Trouser & Chino Precision Fitting">Trouser & Chino Precision Fitting</option>
                  <option value="General Wardrobe Consultation">General Wardrobe Consultation</option>
                </select>
              </div>

              <button
                type="submit"
                class="w-full py-3.5 bg-[#D4AF6A] hover:bg-[#E8D5A8] text-[#0B0B0B] text-xs font-bold uppercase tracking-[0.2em] transition-colors cursor-pointer"
              >
                Send Fitting Request on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
