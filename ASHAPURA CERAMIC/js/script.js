/* ==========================================
   ASHAPURA CERAMIC CONFIGURATION
   Replace these values with your real details.
   ========================================== */
const CONFIG = {
  businessName: "Ashapura Ceramic",
  phone: "9462683290",
  phones: ["9462683290", "7231969246", "9503414751"],
  whatsapp: "919462683290",
  address: "Water Works Ke Samne, Arathwara, Rajasthan, India",
  email: "",
  googleMaps: "https://maps.app.goo.gl/DQ9W17fzkjzkuWwp6",
  instagram: "https://www.instagram.com/ashapuraceramic3?stkn=ZG1sbm14bm4ydGhk"
};

const imageRoot = "images/";
// Curated Unsplash architecture photographs. Replace these URLs or keep the local SVG fallbacks.
const IMAGE_URLS = {
  "hero/hero-showroom.svg": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=86",
  "about/interior.svg": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
  "gallery/tile-detail.svg": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85",
  "gallery/bathroom.svg": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
  "gallery/flooring.svg": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  "gallery/kitchen.svg": "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
  "gallery/showroom-detail.svg": "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
  "products/floor-tiles.svg": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1100&q=85",
  "products/wall-tiles.svg": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1100&q=85",
  "products/bathroom-tiles.svg": "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1100&q=85",
  "products/kitchen-tiles.svg": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1100&q=85",
  "products/outdoor-tiles.svg": "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1100&q=85",
  "products/marble-look.svg": "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1100&q=85",
  "products/wood-look.svg": "https://images.unsplash.com/photo-1615529162924-f8605388461d?auto=format&fit=crop&w=1100&q=85",
  "products/large-format.svg": "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1100&q=85"
};

function remoteImage(key) {
  return IMAGE_URLS[key] || `${imageRoot}${key}`;
}

function wireImageFallbacks(scope = document) {
  scope.querySelectorAll("img[data-image-key], img[data-remote-key]").forEach((image) => {
    const key = image.dataset.imageKey || image.dataset.remoteKey;
    const fallback = image.dataset.fallback || `${imageRoot}${key}`;
    image.dataset.fallback = fallback;
    image.addEventListener("error", () => { image.src = fallback; image.removeAttribute("data-image-key"); }, { once: true });
    image.src = remoteImage(key);
  });
}

function applyHeroImage() {
  const hero = document.querySelector("[data-hero-image]");
  if (!hero) return;
  const key = hero.dataset.heroImage;
  hero.querySelector(".hero-art")?.style.setProperty("background-image", `url("${remoteImage(key)}")`);
}

const categories = [
  { number: "01", name: "Floor Tiles", shortName: "Floor", description: "Durable foundations with refined character.", image: "products/floor-tiles.svg" },
  { number: "02", name: "Wall Tiles", shortName: "Wall", description: "A considered backdrop for every room.", image: "products/wall-tiles.svg" },
  { number: "03", name: "Bathroom", shortName: "Bathroom", description: "Calm, tactile finishes for daily rituals.", image: "products/bathroom-tiles.svg" },
  { number: "04", name: "Kitchen", shortName: "Kitchen", description: "Practical surfaces with visual warmth.", image: "products/kitchen-tiles.svg" },
  { number: "05", name: "Outdoor", shortName: "Outdoor", description: "Confident surfaces made for open air.", image: "products/outdoor-tiles.svg" },
  { number: "06", name: "Marble Look", shortName: "Marble", description: "The quiet drama of natural stone.", image: "products/marble-look.svg" },
  { number: "07", name: "Wood Look", shortName: "Wood", description: "The warmth of timber, made enduring.", image: "products/wood-look.svg" },
  { number: "08", name: "Large Format", shortName: "Large Format", description: "A seamless language for modern spaces.", image: "products/large-format.svg" }
];

const products = [
  { name: "Cava Sand", category: "floor", categoryLabel: "Floor tiles", size: "600 x 1200 mm", finish: "Matt", image: "products/floor-tiles.svg", description: "A warm, mineral surface with a quiet grain and the versatility to ground living spaces." },
  { name: "Luna White", category: "wall", categoryLabel: "Wall tiles", size: "300 x 600 mm", finish: "Gloss", image: "products/wall-tiles.svg", description: "A luminous wall finish that brings softness and clarity to kitchens, baths and beyond." },
  { name: "Travertine Veil", category: "bathroom", categoryLabel: "Bathroom tiles", size: "600 x 600 mm", finish: "Satin", image: "products/bathroom-tiles.svg", description: "A tactile, restorative surface for bathrooms designed as a daily retreat." },
  { name: "Aurelia Stone", category: "kitchen", categoryLabel: "Kitchen tiles", size: "600 x 1200 mm", finish: "Matt", image: "products/kitchen-tiles.svg", description: "A softly structured stone look with an understated architectural rhythm." },
  { name: "Terra Form", category: "outdoor", categoryLabel: "Outdoor tiles", size: "600 x 600 mm", finish: "Structured", image: "products/outdoor-tiles.svg", description: "Confident texture and tonal depth for terraces, balconies and open-air rooms." },
  { name: "Calacatta Edit", category: "floor", categoryLabel: "Floor tiles", size: "800 x 1600 mm", finish: "Polished", image: "products/marble-look.svg", description: "A confident marble expression that gives large rooms a composed, gallery-like presence." },
  { name: "Oakline", category: "floor", categoryLabel: "Floor tiles", size: "200 x 1200 mm", finish: "Matt", image: "products/wood-look.svg", description: "The visual warmth of timber with the dependable ease of ceramic." },
  { name: "Monument", category: "outdoor", categoryLabel: "Outdoor tiles", size: "1200 x 1200 mm", finish: "Grip", image: "products/large-format.svg", description: "An expansive format for bold transitions between architecture and landscape." }
];

const isConfigured = /^\d{8,15}$/.test(CONFIG.whatsapp);
const openWhatsApp = (message) => {
  if (!isConfigured) return "#contact";
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
};
const generalMessage = `Hello ${CONFIG.businessName}, I would like to know more about your tiles and ceramic surfaces.`;

function renderCategories() {
  const grid = document.querySelector("#category-grid");
  if (!grid) return;
  grid.innerHTML = categories.map((item) => `<article class="collection-card reveal"><a href="#products" data-category-link="${item.shortName.toLowerCase()}"><img src="${remoteImage(item.image)}" data-remote-key="${item.image}" data-fallback="${imageRoot}${item.image}" alt="${item.name}" loading="lazy"><div class="collection-shade"></div><div class="collection-info"><span>${item.number}</span><h3>${item.name}</h3><p>${item.description}</p><strong>Explore <i class="fa-solid fa-arrow-right"></i></strong></div></a></article>`).join("");
  wireImageFallbacks(grid);
}

function renderProducts(filter = "all") {
  const grid = document.querySelector("#product-grid");
  if (!grid) return;
  const visible = filter === "all" ? products : products.filter((product) => product.category === filter);
  grid.classList.add("is-refreshing");
  window.setTimeout(() => { grid.innerHTML = visible.map((product, index) => productCard(product, index)).join(""); wireImageFallbacks(grid); grid.classList.remove("is-refreshing"); }, 120);
}

function productCard(product, index) {
  return `<article class="product-card reveal" style="--delay:${index * 45}ms"><button class="product-open" type="button" data-product="${product.name}"><span class="product-image"><img src="${remoteImage(product.image)}" data-remote-key="${product.image}" data-fallback="${imageRoot}${product.image}" alt="${product.name} ${product.categoryLabel}" loading="lazy"><span class="product-tag">${product.categoryLabel}</span><span class="quick-view">Quick view <i class="fa-solid fa-arrow-up-right-from-square"></i></span></span><span class="product-info"><span class="product-name">${product.name}</span><span class="product-meta"><span>Size<strong>${product.size}</strong></span><span>Finish<strong>${product.finish}</strong></span></span><span class="product-enquire">Enquire <i class="fa-solid fa-arrow-right"></i></span></span></button></article>`;
}

function applyConfiguration() {
  const displayName = CONFIG.businessName.replace(/\s+Ceramic$/i, "");
  document.querySelectorAll("[data-business-name]").forEach((element) => element.textContent = displayName);
  document.querySelectorAll("[data-phone]").forEach((element) => element.textContent = CONFIG.phone);
  document.querySelectorAll("[data-phone-link]").forEach((element) => { const number = element.dataset.phoneLink || CONFIG.phone; element.href = `tel:${number.replace(/\D/g, "")}`; });
  document.querySelectorAll("[data-address]").forEach((element) => element.textContent = CONFIG.address);
  document.querySelectorAll("[data-email]").forEach((element) => element.textContent = CONFIG.email);
  document.querySelectorAll("[data-email-link]").forEach((element) => element.href = `mailto:${CONFIG.email}`);
  document.querySelectorAll("[data-maps-link]").forEach((element) => element.href = CONFIG.googleMaps === "YOUR_GOOGLE_MAPS_URL" ? "#contact" : CONFIG.googleMaps);
  document.querySelectorAll("[data-instagram-link]").forEach((element) => element.href = CONFIG.instagram === "YOUR_INSTAGRAM_URL" ? "#contact" : CONFIG.instagram);
  document.querySelectorAll("[data-whatsapp-link]").forEach((element) => { element.href = openWhatsApp(generalMessage); if (isConfigured) { element.target = "_blank"; element.rel = "noopener"; } });
  const productSelect = document.querySelector("select[name=product]");
  if (productSelect) productSelect.insertAdjacentHTML("beforeend", categories.map((item) => `<option value="${item.name}">${item.name}</option>`).join(""));
  wireImageFallbacks();
  applyHeroImage();
  document.title = `${CONFIG.businessName} | Premium Tiles & Ceramic Showroom`;
}

function setupNavigation() {
  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav-menu");
  const closeMenu = () => { menu?.classList.remove("open"); document.body.classList.remove("menu-open"); menuButton?.setAttribute("aria-expanded", "false"); if (menuButton) menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>'; };
  menuButton?.addEventListener("click", () => { const open = menu.classList.toggle("open"); document.body.classList.toggle("menu-open", open); menuButton.setAttribute("aria-expanded", String(open)); menuButton.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>'; });
  menu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  window.addEventListener("scroll", () => header?.classList.toggle("is-scrolled", window.scrollY > 40), { passive: true });
}

function setupFilters() {
  document.querySelectorAll(".filter-button").forEach((button) => button.addEventListener("click", () => { document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("active")); button.classList.add("active"); renderProducts(button.dataset.filter); }));
  document.addEventListener("click", (event) => { const link = event.target.closest("[data-category-link]"); if (!link) return; event.preventDefault(); const match = document.querySelector(`[data-filter="${link.dataset.categoryLink}"]`); if (match) match.click(); document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" }); });
}

function setupProductModal() {
  const modal = document.querySelector("#product-modal");
  const close = () => { modal.hidden = true; document.body.classList.remove("modal-open"); };
  document.addEventListener("click", (event) => { const trigger = event.target.closest("[data-product]"); if (!trigger) return; const product = products.find((item) => item.name === trigger.dataset.product); if (!product) return; const modalImage = document.querySelector("#modal-image"); modalImage.src = remoteImage(product.image); modalImage.onerror = () => { modalImage.src = `${imageRoot}${product.image}`; }; modalImage.alt = `${product.name} product image`; document.querySelector("#modal-category").textContent = product.categoryLabel; document.querySelector("#modal-title").textContent = product.name; document.querySelector("#modal-description").textContent = product.description; document.querySelector("#modal-size").textContent = product.size; document.querySelector("#modal-finish").textContent = product.finish; const whatsapp = document.querySelector("#modal-whatsapp"); whatsapp.href = openWhatsApp(`Hello ${CONFIG.businessName}, I am interested in ${product.name}.\nPlease share product details and availability.`); if (isConfigured) { whatsapp.target = "_blank"; whatsapp.rel = "noopener"; } modal.hidden = false; document.body.classList.add("modal-open"); document.querySelector(".modal-close")?.focus(); });
  modal?.querySelectorAll("[data-close-modal]").forEach((element) => element.addEventListener("click", close));
  return close;
}

function setupLightbox() {
  const lightbox = document.querySelector("#lightbox");
  const close = () => { lightbox.hidden = true; document.body.classList.remove("lightbox-open"); };
  document.querySelectorAll("[data-lightbox]").forEach((figure) => figure.addEventListener("click", () => { const image = figure.querySelector("img"); document.querySelector("#lightbox-image").src = image.src; document.querySelector("#lightbox-image").alt = image.alt; document.querySelector("#lightbox-caption").textContent = figure.querySelector("figcaption")?.textContent.replace("View image", "").trim() || "Ashapura Ceramic collection"; lightbox.hidden = false; document.body.classList.add("lightbox-open"); document.querySelector(".lightbox-close")?.focus(); }));
  lightbox?.querySelector("[data-close-lightbox]")?.addEventListener("click", close);
  lightbox?.addEventListener("click", (event) => { if (event.target === lightbox) close(); });
  return close;
}

function setupMaterialExperience() {
  const materialImage = document.querySelector("#material-image img");
  document.querySelectorAll(".material-word").forEach((word) => word.addEventListener("mouseenter", () => { document.querySelectorAll(".material-word").forEach((item) => item.classList.remove("active")); word.classList.add("active"); const key = word.dataset.image.replace(/^images\//, ""); materialImage.src = remoteImage(key); materialImage.onerror = () => { materialImage.src = `${imageRoot}${key}`; }; }));
}

function setupForm() {
  const form = document.querySelector("#enquiry-form");
  const feedback = document.querySelector(".form-feedback");
  form?.addEventListener("submit", (event) => { event.preventDefault(); const data = new FormData(form); const name = String(data.get("name")).trim(); const phone = String(data.get("phone")).trim(); if (!name || !phone) { feedback.textContent = "Please add your name and phone number."; feedback.className = "form-feedback error"; return; } const message = `Hello ${CONFIG.businessName}, I am ${name}.\nPhone: ${phone}\nProduct: ${data.get("product")}\nMessage: ${data.get("message") || "I would like to know more."}`; feedback.textContent = isConfigured ? "Opening WhatsApp..." : "Add your WhatsApp number in js/script.js to send this enquiry."; feedback.className = `form-feedback ${isConfigured ? "success" : "error"}`; if (isConfigured) window.open(openWhatsApp(message), "_blank", "noopener"); });
}

function setupReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { elements.forEach((element) => element.classList.add("is-visible")); return; }
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: .12 });
  elements.forEach((element) => observer.observe(element));
}

function setupKeyboard() {
  const closeModal = setupProductModal();
  const closeLightbox = setupLightbox();
  document.addEventListener("keydown", (event) => { if (event.key !== "Escape") return; closeModal(); closeLightbox(); });
}

renderCategories();
renderProducts();
applyConfiguration();
setupNavigation();
setupFilters();
setupMaterialExperience();
setupForm();
setupReveal();
setupKeyboard();
