<script setup lang="ts">
import { ref } from 'vue';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, Instagram, ArrowUpRight } from 'lucide-vue-next';
import { brand, founders } from '../config/brand';
import { useWhatsApp } from '../composables/useWhatsApp';
import SectionHeading from '../components/common/SectionHeading.vue';

const { sendDirectEnquiry } = useWhatsApp();

const formName = ref('');
const formPhone = ref('');
const formSubject = ref('Product Sizing / Availability');
const formMessage = ref('');
const isSent = ref(false);

const handleFormSubmit = () => {
  const fullMsg = `*Client Inquiry from Monarch Website*
*Name:* ${formName.value}
*Contact:* ${formPhone.value}
*Subject:* ${formSubject.value}
*Message:* ${formMessage.value}`;

  sendDirectEnquiry(fullMsg);
  isSent.value = true;
};
</script>

<template>
  <div class="bg-[#0B0B0B] text-[#F5F1E8] min-h-screen pt-28 pb-24">
    <!-- Header Section -->
    <div class="border-b border-[#1E1E1E] bg-[#0E0E0E] py-16 px-4 sm:px-6 lg:px-8 text-center mb-16">
      <div class="max-w-4xl mx-auto">
        <span class="text-[10px] tracking-[0.35em] uppercase text-[#D4AF6A] font-semibold block mb-2">
          BESPOKE ASSISTANCE
        </span>
        <h1 class="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wider text-white">
          CONCIERGE & CONTACT
        </h1>
        <div class="w-16 h-0.5 bg-[#D4AF6A] mx-auto my-4" />
        <p class="text-xs sm:text-sm text-[#888] max-w-xl mx-auto font-light leading-relaxed">
          Connect directly with store directors Ahmed Khatib and Gufran Khan for bespoke sizing, inventory checks, or fitting queries.
        </p>
      </div>
    </div>

    <!-- Main Grid -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <!-- Contact Information (5 cols) -->
        <div class="lg:col-span-5 space-y-8 text-left">
          <div>
            <h3 class="font-serif text-2xl font-bold uppercase text-white mb-2">
              Direct Communication
            </h3>
            <p class="text-xs text-[#888] leading-relaxed">
              We respond promptly across WhatsApp, phone calls, and in-person store visits at Parkar Complex.
            </p>
          </div>

          <!-- Direct Phone Cards -->
          <div class="space-y-3">
            <div
              v-for="f in founders"
              :key="f.name"
              class="p-5 bg-[#121212] border border-[#222] flex items-center justify-between"
            >
              <div>
                <span class="text-[9px] uppercase tracking-widest text-[#D4AF6A] font-semibold block">
                  {{ f.role }}
                </span>
                <h4 class="font-serif text-lg font-bold text-white">{{ f.name }}</h4>
              </div>
              <div class="flex items-center gap-2">
                <a
                  :href="`tel:${f.phone}`"
                  class="p-2.5 bg-[#181818] border border-[#333] hover:border-[#D4AF6A] text-[#D4AF6A] transition-colors"
                  title="Call Directly"
                >
                  <Phone class="w-4 h-4" />
                </a>
                <button
                  @click="sendDirectEnquiry(`Hello ${f.name}, I'm reaching out via Monarch website.`)"
                  class="p-2.5 bg-[#25D366]/20 border border-[#25D366]/40 text-emerald-300 hover:bg-[#25D366]/30 transition-colors"
                  title="WhatsApp"
                >
                  <MessageCircle class="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <!-- Store Location & Hours Summary -->
          <div class="p-6 bg-[#121212] border border-[#222] space-y-4 text-xs text-[#AAA]">
            <div class="flex items-start gap-3">
              <MapPin class="w-4 h-4 text-[#D4AF6A] shrink-0 mt-0.5" />
              <p>
                {{ brand.address.line2 }}, {{ brand.address.line1 }}<br />
                {{ brand.address.city }}, {{ brand.address.district }}, {{ brand.address.state }}
              </p>
            </div>

            <div class="flex items-start gap-3">
              <Clock class="w-4 h-4 text-[#D4AF6A] shrink-0 mt-0.5" />
              <p>
                10:00 AM – 10:00 PM <span class="text-[#D4AF6A] font-medium">(Open all 7 days)</span>
              </p>
            </div>

            <div class="flex items-start gap-3">
              <Instagram class="w-4 h-4 text-[#D4AF6A] shrink-0 mt-0.5" />
              <a
                :href="brand.instagram"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-white flex items-center gap-1 text-[#D4AF6A]"
              >
                <span>Follow @monarch.chiplun on Instagram</span>
                <ArrowUpRight class="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form (7 cols) -->
        <div class="lg:col-span-7 bg-[#111111] border border-[#242424] p-8 sm:p-12 text-left">
          <span class="text-[9px] tracking-[0.3em] uppercase text-[#D4AF6A] font-bold block mb-1">
            DIRECT DISPATCH
          </span>
          <h2 class="font-serif text-2xl sm:text-3xl font-bold uppercase text-white mb-2">
            Send an Inquiry
          </h2>
          <p class="text-xs text-[#888] mb-8">
            Your message will open directly in WhatsApp connected with our boutique concierge.
          </p>

          <div v-if="isSent" class="p-5 bg-emerald-950/40 border border-emerald-800 text-emerald-300 text-xs mb-6">
            Inquiry generated! Redirecting to WhatsApp concierge. Feel free to send another message if required.
          </div>

          <form @submit.prevent="handleFormSubmit" class="space-y-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-[10px] uppercase tracking-wider text-[#AAA] mb-2 font-medium">
                  Full Name *
                </label>
                <input
                  v-model="formName"
                  type="text"
                  required
                  placeholder="e.g. Rahul Patil"
                  class="w-full bg-[#161616] border border-[#2E2E2E] px-4 py-3 text-xs text-white placeholder-[#555] focus:outline-none focus:border-[#D4AF6A]"
                />
              </div>

              <div>
                <label class="block text-[10px] uppercase tracking-wider text-[#AAA] mb-2 font-medium">
                  Phone / WhatsApp *
                </label>
                <input
                  v-model="formPhone"
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  class="w-full bg-[#161616] border border-[#2E2E2E] px-4 py-3 text-xs text-white placeholder-[#555] focus:outline-none focus:border-[#D4AF6A]"
                />
              </div>
            </div>

            <div>
              <label class="block text-[10px] uppercase tracking-wider text-[#AAA] mb-2 font-medium">
                Inquiry Topic
              </label>
              <select
                v-model="formSubject"
                class="w-full bg-[#161616] border border-[#2E2E2E] px-4 py-3 text-xs text-white focus:outline-none focus:border-[#D4AF6A] cursor-pointer"
              >
                <option value="Product Sizing / Availability">Product Sizing / Availability</option>
                <option value="Custom Festive / Wedding Order">Custom Festive / Wedding Order</option>
                <option value="Private In-Store Appointment">Private In-Store Appointment</option>
                <option value="Store Location & Parking">Store Location & Parking</option>
                <option value="Other Sartorial Inquiry">Other Sartorial Inquiry</option>
              </select>
            </div>

            <div>
              <label class="block text-[10px] uppercase tracking-wider text-[#AAA] mb-2 font-medium">
                Your Message *
              </label>
              <textarea
                v-model="formMessage"
                rows="4"
                required
                placeholder="Kindly let us know your size, style preference, or date of store visit..."
                class="w-full bg-[#161616] border border-[#2E2E2E] px-4 py-3 text-xs text-white placeholder-[#555] focus:outline-none focus:border-[#D4AF6A] resize-none"
              />
            </div>

            <button
              type="submit"
              class="w-full py-4 bg-[#D4AF6A] hover:bg-[#E8D5A8] text-[#0B0B0B] text-xs font-bold uppercase tracking-[0.25em] flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Send class="w-4 h-4" />
              <span>Transmit via WhatsApp</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
