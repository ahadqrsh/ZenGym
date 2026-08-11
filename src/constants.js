// Single source of truth for the gym's WhatsApp number.
// Change this one value to update every WhatsApp CTA on the site.
export const WHATSAPP_NUMBER = '91XXXXXXXXXX';

export const getWhatsAppLink = (message = "Hi, I want to join your gym") => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const GYM_NAME = 'ZEN';
export const GYM_TAGLINE = 'FITNESS CLUB';
