const services = [
  {
    title: 'Market intelligence',
    description: 'Data-driven research and valuations that uncover meaningful investment advantages.',
    icon: '📊'
  },
  {
    title: 'Portfolio strategy',
    description: 'Customized acquisition and disposition plans tailored to your capital, timeline, and objectives.',
    icon: '🧭'
  },
  {
    title: 'Transaction execution',
    description: 'End-to-end deal management with precise negotiations, due diligence, and handoff support.',
    icon: '🤝'
  }
];

const portfolio = [
  {
    title: 'Premium residential tower',
    subtitle: 'Downtown Miami · 124 units · 9.6% cap rate',
    description: 'High-demand urban residence with modern amenities, smart leasing, and strong projected cash flow.',
    image: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1200&q=80',
    tags: ['Residential', 'Value-add', 'Miami']
  },
  {
    title: 'Prime land parcel',
    subtitle: 'Nashville · 400 acres · High visibility',
    description: 'Strategically positioned land parcel ideal for hospitality or mixed-use development near major transit corridors.',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    tags: ['Land', 'Development', 'Nashville']
  },
  {
    title: 'Growth',
    subtitle: 'Logistics hub · 220,000 sq ft',
    description: 'Modern logistics and distribution campus with strong long-term lease covenants.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Industrial', 'Logistics', 'Core']
  },
  {
    title: 'Boutique retail strip',
    subtitle: 'High-street · Prime footfall',
    description: 'Curated retail collection positioned in a vibrant urban neighborhood with excellent visibility.',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    tags: ['Retail', 'Street-front', 'Urban']
  }
];

const approach = [
  {
    step: '01',
    title: 'Assess',
    description: 'We review your objectives, capital profile, and market exposures to build a sharp investment framework.'
  },
  {
    step: '02',
    title: 'Analyze',
    description: 'Deep market intelligence and financial modeling uncover the highest-conviction opportunities.'
  },
  {
    step: '03',
    title: 'Activate',
    description: 'We execute transactions, manage risk, and support the asset lifecycle through every phase.'
  }
];

const properties = [
  {
    title: 'Prime development lot',
    subtitle: 'Urban edge · 8 acres',
    description: 'A large contiguous parcel ideal for mixed-use development in a high-growth market.',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Strategic commercial parcel',
    subtitle: 'Business district · 5 acres',
    description: 'Well-positioned commercial land with easy access to transportation and amenities.',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80'
  }
];

const servicesList = document.getElementById('services-list');
const portfolioList = document.getElementById('portfolio-list');
const approachList = document.getElementById('approach-list');
const propertiesList = document.getElementById('properties-list');
const contactForm = document.getElementById('contact-form');
const contactFeedback = document.getElementById('contact-feedback');

function createServiceCard(service) {
  const card = document.createElement('article');
  card.className = 'feature-card card';
  card.innerHTML = `
    <div class="service-icon">${service.icon}</div>
    <h3>${service.title}</h3>
    <p>${service.description}</p>
  `;
  return card;
}

function createPortfolioCard(item) {
  const card = document.createElement('article');
  card.className = 'property-card card';
  const tagsHtml = item.tags && item.tags.length
    ? `<div class="tag-list">${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>`
    : '';

  card.innerHTML = `
    <figure>
      <img src="${item.image}" alt="${item.title}" />
    </figure>
    <div>
      <h3>${item.title}</h3>
      <p class="property-meta">${item.subtitle}</p>
      <p>${item.description}</p>
      ${tagsHtml}
    </div>
  `;
  return card;
}

function createApproachCard(step) {
  const card = document.createElement('article');
  card.className = 'process-card card';
  card.innerHTML = `
    <span class="step-number">${step.step}</span>
    <h3>${step.title}</h3>
    <p>${step.description}</p>
  `;
  return card;
}

function createPropertyCard(item) {
  const card = document.createElement('article');
  card.className = 'property-card card';
  card.innerHTML = `
    <figure>
      <img src="${item.image}" alt="${item.title}" />
      <div class="figure-overlay">
        <button class="view-property-btn" type="button" data-title="${item.title}">View details</button>
      </div>
    </figure>
    <div>
      <h3>${item.title}</h3>
      <p class="property-meta">${item.subtitle}</p>
      <p>${item.description}</p>
    </div>
  `;
  return card;
}

function renderSections() {
  services.forEach((service) => servicesList.appendChild(createServiceCard(service)));
  portfolio.forEach((item) => portfolioList.appendChild(createPortfolioCard(item)));
  approach.forEach((step) => approachList.appendChild(createApproachCard(step)));
  properties.forEach((item) => propertiesList.appendChild(createPropertyCard(item)));
}

function handlePropertyButtons(event) {
  const button = event.target.closest('.view-property-btn');
  if (!button) return;
  const title = button.dataset.title;
  const messageField = document.getElementById('message');
  document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth', block: 'center' });
  messageField.value = `I am interested in the property: ${title}. Please send more details.`;
  document.getElementById('name').focus();
}

function handleContactSubmit(event) {
  event.preventDefault();
  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();
  if (!name || !email || !message) {
    contactFeedback.textContent = 'Please fill in all fields before sending your message.';
    contactFeedback.style.color = '#ff9393';
    return;
  }

  const subject = encodeURIComponent(`Contact from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:hello@wealthassociates.com?subject=${subject}&body=${body}`;
  contactFeedback.textContent = 'Opening your email client. If it does not open, please send us an email manually.';
  contactFeedback.style.color = '#b5f5a0';
}

document.addEventListener('DOMContentLoaded', () => {
  renderSections();
  propertiesList.addEventListener('click', handlePropertyButtons);
  contactForm.addEventListener('submit', handleContactSubmit);
});
