// Zentrale Firmendaten. Unbekannte Werte bleiben als [PLATZHALTER] sichtbar (siehe TODO.md).

export const site = {
  name: 'DAYFA Transporter',
  // Domain (auch in astro.config.mjs ändern)
  url: 'https://dayfatransporter.de',
  // Für das Impressum – müssen vor Livegang ausgefüllt werden
  owner: 'Khaled Hamrouni',
  vatNote: '[PLATZHALTER: USt-IdNr. – oder Hinweis auf Kleinunternehmerregelung nach § 19 UStG]',
  // Telefon: Anzeige-Format, Link-Format (tel:) und internationales Format für Google
  phoneDisplay: '0176 83433389',
  phoneHref: 'tel:+4917683433389',
  phoneIntl: '+49 176 83433389',
  whatsapp: 'https://wa.me/4917683433389',
  email: 'Dayfa.reinigung@gmail.com',
  // Adresse (wird in Kontakt, Footer, Impressum und JSON-LD verwendet)
  street: 'Elisabeth-Selbert-Allee 35',
  zip: '53175',
  city: 'Bonn',
  // TODO: Link zum Google-Unternehmensprofil (Bewertungen). Solange null, wird ein Platzhalter angezeigt.
  googleReviewsUrl: null as string | null,
};
