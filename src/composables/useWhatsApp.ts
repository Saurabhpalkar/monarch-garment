import { ref, computed } from 'vue';
import { brand } from '../config/brand';
import { Product, CartItem } from '../types';

export function useWhatsApp() {
  const configNotice = ref<string | null>(null);

  const isConfigured = computed(() => {
    return Boolean(brand.whatsapp && brand.whatsapp.trim().length > 0);
  });

  const getCleanNumber = () => {
    return (brand.whatsapp || '').replace(/[^0-9]/g, '');
  };

  const openWhatsAppUrl = (text: string) => {
    const cleanNumber = getCleanNumber();
    if (!cleanNumber) {
      configNotice.value =
        'WhatsApp concierge number is not configured in brand settings. Please contact Monarch Mens Wear directly in Chiplun or update src/config/brand.ts.';
      if (typeof window !== 'undefined') {
        alert(configNotice.value);
      }
      return false;
    }

    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${cleanNumber}?text=${encoded}`;
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
    return true;
  };

  const sendProductEnquiry = (product: Product, selectedSize?: string, selectedColor?: string) => {
    const sizeText = selectedSize || (product.sizes && product.sizes.length > 0 ? product.sizes[0] : 'Standard');
    const colorLine = selectedColor ? `\nColor: ${selectedColor}` : '';

    const text = `Hello Monarch Mens Wear,

I am interested in:

Product: ${product.name}
Price: ₹${product.price.toLocaleString('en-IN')}
Size: ${sizeText}${colorLine}

Please let me know about availability.`;

    return openWhatsAppUrl(text);
  };

  const sendCartEnquiry = (items: CartItem[], total: number) => {
    const itemLines = items
      .map(
        (item, idx) =>
          `${idx + 1}. ${item.product.name} [Size: ${item.size}${item.color ? `, ${item.color}` : ''}] × ${item.quantity} = ₹${(item.product.price * item.quantity).toLocaleString('en-IN')}`
      )
      .join('\n');

    const text = `Hello Monarch Mens Wear,

I would like to enquire about reserving / ordering the following items from the Chiplun boutique:

${itemLines}

Total Estimated: ₹${total.toLocaleString('en-IN')}

Please let me know if these pieces are available for trial or dispatch.`;

    return openWhatsAppUrl(text);
  };

  const sendDirectEnquiry = (customMsg?: string) => {
    const text =
      customMsg ||
      `Hello Monarch Mens Wear Chiplun, I would like to enquire about your latest menswear collection and store visits.`;
    return openWhatsAppUrl(text);
  };

  return {
    isConfigured,
    configNotice,
    sendProductEnquiry,
    sendCartEnquiry,
    sendDirectEnquiry
  };
}
