const content_data = {
  theme: {
    backgroundColor: "#121214",
    gridColor: "rgba(255,255,255,0.15)",
    gridSize: "40px"
  },

  profile: {
    name: "JOGA SIMPLES",
    avatarText: "JOGA",
    avatarImage: "avatar2.png",
    avatarLink: "https://www.instagram.com/jogasimplespt",
    disclaimer:
      "Treinador de futebol Nível II (UEFA B) com 10 anos de treino e 20 anos como jogador de futebol. Atualmente parceiro da Twitch como criador de conteúdos relacionados com futebol. Entender o processo e as dinâmicas que as equipas apresentam na nossa Liga Portugal e no seu percurso europeu. Analisa as equipas, opina sobre o momento e tudo aquilo que está por dentro das quatro linhas."
  },

  socials: [
    {
      name: "YouTube",
      icon: "youtube",
      url: "https://www.youtube.com/jogasimples",
      color: "#FF0000"
    },
    {
      name: "Twitch",
      icon: "twitch",
      url: "https://www.twitch.tv/jogasimples",
      color: "#9146FF"
    },
    {
      name: "Instagram",
      icon: "instagram",
      url: "https://www.instagram.com/jogasimplespt",
      color: "#E1306C"
    },
    {
      name: "TikTok",
      icon: "tiktok",
      url: "https://www.tiktok.com/@jogasimples",
      color: "#00F2EA"
    }
  ],

  partners: [
    {
      name: "GGDROP",
      color: "#0CC9FA",
      image: "https://ggdrop.com/static/media/logo.31d34b378a0facf2b368.svg",
      url: "https://ggdrop.com/",
      bullets: [
        "Código JOGA dá 7% extra ao depositar.",
        "Giveaways Exclusivos"
      ],
      rating: "18+"
    },
    {
      name: "Solverde",
      color: "#00E589",
      image: "https://www.solverde.pt/library/new_layout_assets/Logo.svg?v=1",
      url: "https://sol-ver.de/3BUXGSJ",
      bullets: [
        "Regista-te com o código JSIMPLES",
        "30€ em free bets na tua 1.ª aposta de 10€."
      ],
      rating: "18+"
    },
    {
      name: "Prozis",
      color: "#E30613",
      image: "https://static.sscontent.com/dist/prz/1787058219/web/_imgs/logo/264.svg",
      url: "https://prozis.com/12xJF",
      bullets: [
        "Usa o código JOGA para 10% desconto e ofertas no checkout."
      ],
      rating: null
    },
    {
      name: "Academia Apostas",
      color: "#5C5C5C",
      image: "https://753383666.r.cdnsun.net/system/cms/themes/academia/img/layout/global/logov2.png?v=1650560302",
      url: "https://www.academiadasapostas.com/",
      bullets: [
        "Escola para Apostadores",
        "Acompanhamento em Direto"
      ],
      rating: null
    },
    {
      name: "Primeiro Toque",
      color: "#C9AF70",
      url: "https://primeirotoque.pt/",
      bullets: [
        "Podcast Futebol",
        "Casual para o adepto. Sério para o profissional."
      ],
      rating: null
    },
    {
      name: "Capilart",
      color: "#003A37",
      image: "https://capilart.pt/wp-content/uploads/2023/02/logo-1.svg",
      url: "https://capilart.pt/",
      bullets: [
        "Soluções Capilares Avançadas",
        "Clínica Médica"
      ],
      rating: null
    }
  ],

  footer: {
    badge: "Jogo Responsável",
    text:
      "O jogo deve ser encarado como uma atividade de lazer. Se sentir necessidade de apoio, por favor utilize os recursos oficiais de ajuda listados abaixo.",
    updatedDate: "19/08/2026",
    helpLinks: []
  }
};

const ICONS = {
  youtube:
    '<svg viewBox="0 0 24 24" fill="#FFF"><path d="M23.5 6.2s-.2-1.6-.9-2.4c-.9-1-1.9-1-2.4-1C16.9 2.5 12 2.5 12 2.5h0s-4.9 0-8.2.3c-.5.1-1.5.1-2.4 1-.7.8-.9 2.4-.9 2.4S.2 8.1.2 10v1.8c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.4c.9 1 2.1.9 2.6 1 1.9.2 8.1.3 8.1.3s4.9 0 8.2-.3c.5-.1 1.5-.1 2.4-1 .7-.8.9-2.4.9-2.4s.2-1.9.2-3.8V10c0-1.9-.2-3.8-.2-3.8zM9.7 14.6V7.4l6.4 3.6-6.4 3.6z"/></svg>',
  twitch:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 2 2 6.5v13h4.5V22l3-2.5H13L20 14V2H4zm14 11-3 3h-3.5L9 18.5V16H5.5V4H18v9zM14.5 6.5h-2v5h2v-5zm-5 0h-2v5h2v-5z"/></svg>',
  instagram:
    '<svg viewBox="0 0 24 24" fill="#FFF"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .2 2.4.4.6.3 1.1.6 1.6 1.1.5.5.8 1 1.1 1.6.2.4.3 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 2-.4 2.4-.3.6-.6 1.1-1.1 1.6-.5.5-1 .8-1.6 1.1-.4.2-1.2.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.2-2.4-.4-.6-.3-1.1-.6-1.6-1.1-.5-.5-.8-1-1.1-1.6-.2-.4-.3-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-2 .4-2.4.3-.6.6-1.1 1.1-1.6.5-.5 1-.8 1.6-1.1.4-.2 1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1 .1-1.6.2-1.9.4-.5.2-.8.4-1.2.8-.4.4-.6.7-.8 1.2-.1.3-.3.9-.4 1.9-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1 .2 1.6.4 1.9.2.5.4.8.8 1.2.4.4.7.6 1.2.8.3.1.9.3 1.9.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.6-.2 1.9-.4.5-.2.8-.4 1.2-.8.4-.4.6-.7.8-1.2.1-.3.3-.9.4-1.9.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.2-1.6-.4-1.9-.2-.5-.4-.8-.8-1.2-.4-.4-.7-.6-1.2-.8-.3-.1-.9-.3-1.9-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 1.8a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4zm5.7-2.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z"/></svg>',
  tiktok:
    '<svg viewBox="0 0 24 24"><path d="M16.6 5.8a4.3 4.3 0 0 1-2.6-3.4h-3v13.3a2.6 2.6 0 1 1-1.8-2.5V9.9a5.9 5.9 0 1 0 4.8 5.8V9.3a7.3 7.3 0 0 0 4.3 1.4V7.5a4.3 4.3 0 0 1-1.7-1.7z"/></svg>'
};

function el(tag, attrs = {}, html) {
  const node = document.createElement(tag);

  Object.entries(attrs).forEach(([key, value]) => {
    node.setAttribute(key, value);
  });

  if (html !== undefined) {
    node.innerHTML = html;
  }

  return node;
}

function renderTheme(theme) {
  if (!theme) return;

  document.body.style.backgroundColor = theme.backgroundColor;

  const grid = document.querySelector(".bg-grid");

  if (!grid) return;

  grid.style.backgroundImage = `
    linear-gradient(${theme.gridColor} 1px, transparent 1px),
    linear-gradient(90deg, ${theme.gridColor} 1px, transparent 1px)
  `;

  grid.style.backgroundSize = `${theme.gridSize} ${theme.gridSize}`;
}

function renderProfile(profile) {
  const profileName = document.getElementById("profile-name");
  const profileDisclaimer = document.getElementById("profile-disclaimer");
  const avatarLink = document.getElementById("avatar-link");
  const avatar = document.getElementById("avatar");

  if (profileName) {
    profileName.textContent = profile.name;
  }

  if (profileDisclaimer) {
    profileDisclaimer.textContent = profile.disclaimer;
  }

  if (avatarLink) {
    avatarLink.href = profile.avatarLink;
  }

  if (!avatar) return;

  if (profile.avatarImage) {
    avatar.textContent = "";

    const img = el("img", {
      src: profile.avatarImage,
      alt: profile.name,
      class: "avatar-img"
    });

    img.addEventListener("error", () => {
      img.remove();
      avatar.textContent = profile.avatarText;
    });

    avatar.appendChild(img);
  } else {
    avatar.textContent = profile.avatarText;
  }
}

function renderSocials(socials) {
  const list = document.getElementById("socials");

  if (!list) return;

  list.innerHTML = "";

  socials.forEach((social) => {
    const li = el("li");

    const a = el("a", {
      href: social.url,
      target: "_blank",
      rel: "noopener noreferrer",
      title: social.name,
      "aria-label": social.name
    });

    a.style.backgroundColor = social.color;
    a.innerHTML = ICONS[social.icon] || "";

    li.appendChild(a);
    list.appendChild(li);
  });
}

function renderPartners(partners) {
  const grid = document.getElementById("partners-grid");

  if (!grid) return;

  grid.innerHTML = "";

  partners.forEach((partner) => {
    const card = el("div", {
      class: "partner-card"
    });

    card.style.setProperty("--accent", partner.color);

    const topbar = el("div", {
      class: "partner-topbar"
    });

    topbar.style.backgroundColor = partner.color;
    card.appendChild(topbar);

    const nameLink = el("a", {
      class: "partner-name-link",
      href: partner.url,
      target: "_blank",
      rel: "noopener noreferrer"
    });

    if (partner.image) {
      const img = el("img", {
        src: partner.image,
        alt: partner.name,
        class: "partner-logo-img"
      });

      img.addEventListener("error", () => {
        img.remove();
        nameLink.textContent = partner.name;
      });

      nameLink.appendChild(img);
    } else {
      nameLink.textContent = partner.name;
    }

    card.appendChild(nameLink);

    const actions = el("div", {
      class: "partner-actions"
    });

    const visitBtn = el(
      "a",
      {
        class: "partner-visit-btn",
        href: partner.url,
        target: "_blank",
        rel: "noopener noreferrer"
      },
      "Visitar"
    );

    visitBtn.style.backgroundColor = partner.color;
    visitBtn.style.boxShadow = `0 4px 20px -4px ${partner.color}66`;

    actions.appendChild(visitBtn);
    card.appendChild(actions);

    const details = el("div", {
      class: "partner-details"
    });

    if (Array.isArray(partner.bullets) && partner.bullets.length > 0) {
      const ul = el("ul", {
        class: "partner-bullets"
      });

      partner.bullets.forEach((bullet) => {
        const li = el("li");
        li.textContent = bullet;
        ul.appendChild(li);
      });

      details.appendChild(ul);
    }

    card.appendChild(details);

    if (partner.rating) {
      const rating = el(
        "div",
        {
          class: "partner-rating"
        },
        `<span>${partner.rating}</span>`
      );

      card.appendChild(rating);
    }

    grid.appendChild(card);
  });
}

function renderFooter(footer) {
  const footerBadge = document.getElementById("footer-badge");
  const footerText = document.getElementById("footer-text");
  const footerSiteName = document.getElementById("footer-sitename");
  const footerVersion = document.getElementById("footer-version");
  const helpLinks = document.getElementById("help-links");
  const disclaimer = document.getElementById("footer-disclaimer");

  if (footerBadge) {
    footerBadge.textContent = footer.badge || "";
  }

  if (footerText) {
    footerText.textContent = footer.text || "";
  }

  if (footerSiteName) {
    footerSiteName.textContent = footer.siteName || "";
  }

  if (footerVersion) {
    footerVersion.textContent = footer.updatedDate || "";
  }

  if (helpLinks) {
    helpLinks.innerHTML = "";

    (footer.helpLinks || []).forEach((link) => {
      const a = el("a", {
        class: "help-link",
        href: link.url,
        target: "_blank",
        rel: "noopener noreferrer"
      });

      a.innerHTML = `
        <div class="help-link-inner">
          <div class="help-icon">
            ${ICONS[link.icon] || ""}
          </div>
          <div>
            <span class="help-title">${link.title}</span>
            <span class="help-subtitle">${link.subtitle}</span>
          </div>
        </div>
      `;

      helpLinks.appendChild(a);
    });
  }

  if (disclaimer) {
    disclaimer.innerHTML = `
      <b>JOGASIMPLES.PT</b>.
    `;
  }
}

function init() {
  const data = content_data;

  renderTheme(data.theme);
  renderProfile(data.profile);
  renderSocials(data.socials);
  renderPartners(data.partners);
  renderFooter(data.footer);
}

document.addEventListener("DOMContentLoaded", init);
