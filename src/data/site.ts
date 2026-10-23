// Zentrale Firmendaten. Unbekannte Werte bleiben als [PLATZHALTER] sichtbar (siehe TODO.md).

export const site = {
  name: 'DAYFA Transporter',
  // TODO: echte Domain eintragen (auch in astro.config.mjs und public/robots.txt)
  url: 'https://www.dayfa-transporter.de',
  owner: '[PLATZHALTER: VOLLSTÄNDIGER NAME]',
  vatNote: '[PLATZHALTER: USt-IdNr. – oder Hinweis auf Kleinunternehmerregelung nach § 19 UStG]',
  openingHours: '[PLATZHALTER: Mo–Sa, Uhrzeiten]',
  phoneDisplay: '0176 83433389',
  phoneHref: 'tel:+4917683433389',
  phoneIntl: '+49 176 83433389',
  whatsapp: 'https://wa.me/4917683433389',
  email: 'Dayfa.reinigung@gmail.com',
  street: 'Elisabeth-Selbert-Allee 35',
  zip: '53175',
  city: 'Bonn',
  routeUrl:
    'https://www.google.com/maps/dir/?api=1&destination=' +
    encodeURIComponent('Elisabeth-Selbert-Allee 35, 53175 Bonn'),
  // TODO: Link zum Google-Unternehmensprofil (Bewertungen). Solange null, wird ein Platzhalter angezeigt.
  googleReviewsUrl: null as string | null,
};
