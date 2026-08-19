var content_data = {
  "theme": {
    "backgroundColor": "#121214",
    "gridColor": "rgba(255,255,255,0.15)",
    "gridSize": "40px"
  },
  "profile": {
    "name": "JOGA SIMPLES",
    "avatarText": "JOGA",
    "avatarImage": "avatar2.png",
    "avatarLink": "https://www.instagram.com/jogasimplespt",
    "disclaimer": "Treinador de futebol Nível II (UEFA B) com 10 anos de treino e durante 20 anos como jogador de futebol. Atualmente parceiro da Twitch como criador de conteúdos relacionados com fu[...]"
  },
  "socials": [
    { "name": "YouTube",   "icon": "youtube",   "url": "https://www.youtube.com/jogasimples", "color": "#FF0000" },
    { "name": "Twitch",    "icon": "twitch",    "url": "https://www.twitch.tv/jogasimples",                    "color": "#9146FF" },
    { "name": "Instagram", "icon": "instagram", "url": "https://www.instagram.com/jogasimplespt",                  "color": "#E1306C" },
    { "name": "TikTok",    "icon": "tiktok",    "url": "https://www.tiktok.com/@jogasimples",                  "color": "#00F2EA" }
  ],
  "partners": [
    {
      "name": "GGDROP",
      "color": "#0CC9FA",
      "url": "https://ggdrop.com/",
      "bullets": [
        "Código JOGA dá 7% extra ao depositar.",
        "Giveaways Exclusivos"
      ],
      "rating": "18+"
    },
    {
      "name": "Solverde",
      "color": "#00E589",
      "url": "https://sol-ver.de/3BUXGSJ",
      "bullets": [
        "Regista-te com o código JSIMPLES",
        "30€ em free bets na tua 1.ª aposta de 10€."
      ],
      "rating": "18+"
    },
    {
      "name": "Prozis",
      "color": "#E30613",
      "url": "http://prozis.com/12xJF",
      "bullets": [
        "Usa o código JOGA para 10% desconto e ofertas no check out."
      ],
      "rating": null
    },
    {
      "name": "Academia Apostas",
      "color": "#5C5C5C",
      "url": "https://www.academiadasapostas.com/",
      "bullets": [
        "Escola para Apostadores",
        "Acompanhamento em Direto"
      ],
      "rating": null
    },
    {
      "name": "Primeiro Toque",
      "color": "#C9AF70",
      "url": "https://primeirotoque.pt/",
      "bullets": [
        "Podcast Futebol",
        "Casual para o adepto. Sério para o profissional."
      ],
      "rating": null
    },
    {
      "name": "Capilart",
      "color": "#003A37",
      "url": "https://capilart.pt/",
      "bullets": [
        "Soluções Capilares Avançadas",
        "Clínica Médica"
      ],
      "rating": null
    }
  ],
  "footer": {
    "badge": "Jogo Responsável",
    "text": "O jogo deve ser encarado como uma atividade de lazer. Se sentir necessidade de apoio, por favor utilize os recursos oficiais de ajuda listados abaixo.",
    "disclaimer": "O site não se responsabiliza por informações incorretas sobre bônus, ofertas ou promoções apresentadas no site. Recomenda-se verificar todos os termos e condições nas p[...]",
    "siteName": "jogasimples.pt",
    "version": "1.0",
    "updatedDate": "2026-08-19",
    "helpLinks": []
  }
}

const ICONS = {
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 15l5-3-5-3v6z"/></svg>',
  twitch: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4 2v14l4-2h3l3 2h3V6H4z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"/><path d="M17 7h.01"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v10a4 4 0 1 0 4  -4V6"/></svg>'
};

function el(tag, attrs = {}, html) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v));
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function renderTheme(theme) {
  if (!theme) return;
  document.body.style.backgroundColor = theme.backgroundColor;
  const grid = document.querySelector('.bg-grid');
  if (!grid) return;
  grid.style.backgroundImage = `linear-gradient(${theme.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${theme.gridColor} 1px, transparent 1px)`;
  grid.style.backgroundSize = `${theme.gridSize} ${theme.gridSize}`;
}

function renderProfile(profile) {
  if (!profile) return;
  const nameEl = document.getElementById('profile-name');
  const discEl = document.getElementById('profile-disclaimer');
  const avatarLink = document.getElementById('avatar-link');
  if (nameEl) nameEl.textContent = profile.name || '';
  if (discEl) discEl.textContent = profile.disclaimer || '';
  if (avatarLink) avatarLink.href = profile.avatarLink || '#';

  const avatar = document.getElementById('avatar');
  if (!avatar) return;
  if (profile.avatarImage) {
    avatar.textContent = '';
    const img = el('img', { src: profile.avatarImage, alt: profile.name, class: 'avatar-img' });
    img.addEventListener('error', () => {
      img.remove();
      avatar.textContent = profile.avatarText || '';
    });
    avatar.appendChild(img);
  } else {
    avatar.textContent = profile.avatarText || '';
  }
}

function renderSocials(socials) {
  const list = document.getElementById('socials');
  if (!list) return;
  list.innerHTML = '';
  (socials || []).forEach(s => {
    const li = el('li');
    const a = el('a', { href: s.url || '#', target: '_blank', rel: 'noopener noreferrer', title: s.name });
    a.style.backgroundColor = s.color || 'transparent';
    a.innerHTML = ICONS[s.icon] || '';
    li.appendChild(a);
    list.appendChild(li);
  });
}

function renderPartners(partners) {
  const grid = document.getElementById('partners-grid');
  if (!grid) return;
  grid.innerHTML = '';
  (partners || []).forEach((p, i) => {
    const card = el('div', { class: 'partner-card' });
    card.style.setProperty('--accent', p.color || '#777');

    const topbar = el('div', { class: 'partner-topbar' });
    topbar.style.backgroundColor = p.color || 'transparent';
    card.appendChild(topbar);

    const nameLink = el('a', { class: 'partner-name-link', href: p.url || '#', target: '_blank', rel: 'noopener noreferrer' });
    if (p.image) {
      const img = el('img', { src: p.image, alt: p.name, class: 'partner-logo-img' });
      img.addEventListener('error', () => { img.remove(); nameLink.textContent = p.name; });
      nameLink.appendChild(img);
    } else {
      nameLink.textContent = p.name || '';
    }
    card.appendChild(nameLink);

    const actions = el('div', { class: 'partner-actions' });
    const visitBtn = el('a', { class: 'partner-visit-btn', href: p.url || '#', target: '_blank', rel: 'noopener noreferrer' }, 'Visitar');
    visitBtn.style.backgroundColor = p.color || 'transparent';
    visitBtn.style.boxShadow = `0 4px 20px -4px ${p.color || '#000'}66`;
    actions.appendChild(visitBtn);
    card.appendChild(actions);

    if (p.rating) {
      const rating = el('div', { class: 'partner-rating' }, `<span>${p.rating}</span>`);
      card.appendChild(rating);
    }

    grid.appendChild(card);
  });
}

function renderFooter(footer = {}) {
  const badge = document.getElementById('footer-badge');
  const text = document.getElementById('footer-text');
  const sitename = document.getElementById('footer-sitename');
  const version = document.getElementById('footer-version');
  if (badge) badge.textContent = footer.badge || '';
  if (text) text.textContent = footer.text || '';
  if (sitename) sitename.textContent = footer.siteName || '';
  if (version) version.textContent = footer.version || '';

  const helpLinks = document.getElementById('help-links');
  if (helpLinks) {
    helpLinks.innerHTML = '';
    (footer.helpLinks || []).forEach(link => {
      const a = el('a', { class: 'help-link', href: link.url || '#', target: '_blank', rel: 'noopener noreferrer' });
      a.innerHTML = `
        <div class="help-link-inner">
          <div class="help-icon">${ICONS[link.icon] || ''}</div>
          <div>
            <span class="help-title">${link.title || ''}</span>
            <span class="help-subtitle">${link.subtitle || ''}</span>
          </div>
        </div>
      `;
      helpLinks.appendChild(a);
    });
  }

  const disclaimer = document.getElementById('footer-disclaimer');
  const site = (footer.siteName || '').toUpperCase();
  if (disclaimer) {
    const updated = footer.updatedDate ? ` <b>${site}</b> ${footer.updatedDate}.` : '';
    disclaimer.innerHTML = `<b>${site}</b> ${footer.disclaimer || ''}${updated}`;
  }
}

async function init() {
  const data = content_data || {};
  try {
    renderTheme(data.theme);
    renderProfile(data.profile);
    renderSocials(data.socials);
    renderPartners(data.partners);
    renderFooter(data.footer);
  } catch (err) {
    // Fail gracefully in the browser console
    console.error('Error initializing page:', err);
  }
}

init();
