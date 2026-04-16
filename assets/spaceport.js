const STATION_MANIFEST_URL = "./stations/station-manifest.json";
const FRONTSTAGE_MANIFEST_URL = "./stations/frontstage-manifest.json";
const VISUAL_RUNTIME_URL = "./assets/spaceport-frontstage.json";

const TRACKER_LABELS = {
  archive: "Archive",
  web: "Public Access",
  system: "Operations",
  three_d: "Spatial Readiness"
};

const STATION_STATUS_LABELS = {
  筹备中: "Preparing",
  生长中: "In Development",
  运行中: "Open",
  维护中: "Maintained",
  归档保留: "Archive"
};

const TRACKER_STATUS_LABELS = {
  已建立: "Established",
  已开始: "Building",
  已保留: "Retained",
  "md-only": "Documented",
  运行中: "Live",
  生长中: "In Development",
  准备中: "In Preparation",
  待准备: "Planned",
  归档保留: "Archive"
};

const DEFAULT_REPO_BLOB_BASE = "https://github.com/ewanqian/VIRTURA-SpacePort/blob/main/";

const app = document.querySelector("#app");

const state = {
  frontstage: null,
  visual: null,
  stations: [],
  stationMap: new Map(),
  activeFilter: "all"
};

boot().catch((error) => {
  renderError(error);
});

async function boot() {
  const [manifest, frontstage, visual] = await Promise.all([
    fetchJson(STATION_MANIFEST_URL),
    fetchJson(FRONTSTAGE_MANIFEST_URL),
    fetchJson(VISUAL_RUNTIME_URL)
  ]);

  state.frontstage = frontstage;
  state.visual = visual;
  state.stations = manifest.stations
    .map((station) => {
      const pageConfig = getFrontstagePage(station.slug);
      const theme = visual.stationThemes?.[station.slug] || {};
      return mergeStation(station, pageConfig, theme);
    })
    .sort((a, b) => a.order - b.order);
  state.stationMap = new Map(state.stations.map((station) => [station.slug, station]));

  window.addEventListener("hashchange", renderRoute);
  document.addEventListener("click", handleDocumentClick);

  renderRoute();
}

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to load ${url}`);
  }
  return response.json();
}

function getFrontstagePage(slug) {
  return safeList(state.frontstage?.station_pages).find((page) => page.slug === slug) || null;
}

function getDockGroup(groupSlug) {
  return safeList(state.frontstage?.site?.dock_groups).find((group) => group.slug === groupSlug) || null;
}

function mergeStation(station, pageConfig, theme) {
  const repoBlobBase = state.visual?.repoBlobBase || DEFAULT_REPO_BLOB_BASE;
  const card = pageConfig?.card || {};
  const page = pageConfig?.page || {};
  const routes = pageConfig?.routes || {};
  const media = pageConfig?.media || {};
  const dockGroup = getDockGroup(pageConfig?.dock_group);
  const primaryRoutes = resolveRouteList(routes.primary, repoBlobBase);
  const secondaryRoutes = resolveRouteList(routes.secondary, repoBlobBase);
  const currentFeature = resolveCurrentFeature(page.current_feature, repoBlobBase);

  return {
    ...station,
    stationUrl: `#/stations/${station.slug}`,
    groupSlug: pageConfig?.dock_group || null,
    groupLabel: card.eyebrow || dockGroup?.label || theme.zone || "Station",
    zone: theme.zone || card.eyebrow || dockGroup?.label || "Station",
    accent: theme.accent || "#f0f0f0",
    dockCode: pageConfig?.dock_code || `DOCK-${String(station.order).padStart(2, "0")}`,
    archiveFileCount: pageConfig?.archive_file_count || 0,
    homeTitle: card.title || station.display_name,
    heroTitle: page.hero_title || card.title || station.display_name,
    cardTags: safeList(card.tags),
    indexSummary: card.summary || station.one_line_role,
    pageSummary: page.hero_summary || station.one_line_role,
    primaryActionLabel: page.primary_action_label || "Visit",
    publicRole: page.public_role || "",
    audience: safeList(page.audience),
    currentFeature,
    primaryRoutes,
    secondaryRoutes,
    publicLinks: dedupeLinks([...primaryRoutes, ...secondaryRoutes]),
    entryPreview: buildEntryPreview(currentFeature, primaryRoutes),
    posterUrl: resolveAssetPath(media.poster_src),
    posterAlt: media.poster_alt || card.title || station.display_name,
    bestEntryUrl: resolveRepoLink(station.best_entry, repoBlobBase),
    sourceLinks: safeList(station.source_of_truth).map((path) => ({
      path,
      url: resolveRepoLink(path, repoBlobBase)
    })),
    relatedStationObjects: []
  };
}

function resolveRouteList(routes, repoBlobBase) {
  return safeList(routes).map((route) => ({
    label: route.label,
    note: route.note || "",
    href: route.href,
    resolvedUrl: resolveRepoLink(route.href, repoBlobBase)
  }));
}

function resolveCurrentFeature(feature, repoBlobBase) {
  if (!feature || !feature.href) {
    return null;
  }

  return {
    eyebrow: feature.eyebrow || "Current",
    title: feature.title || "Current",
    summary: feature.summary || "",
    href: feature.href,
    resolvedUrl: resolveRepoLink(feature.href, repoBlobBase)
  };
}

function buildEntryPreview(currentFeature, primaryRoutes) {
  const preview = [];
  if (currentFeature) {
    preview.push({
      label: currentFeature.title,
      note: currentFeature.summary,
      resolvedUrl: currentFeature.resolvedUrl
    });
  }

  primaryRoutes.forEach((route) => {
    preview.push(route);
  });

  return dedupeLinks(preview).slice(0, 2);
}

function dedupeLinks(links) {
  const seen = new Set();
  return safeList(links).filter((link) => {
    const key = `${link.label || ""}::${link.resolvedUrl || link.url || ""}`;
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

function resolveRepoLink(path, repoBlobBase) {
  if (!path) {
    return "#/";
  }

  if (/^https?:\/\//.test(path) || path.startsWith("#")) {
    return path;
  }

  let normalized = path.trim();
  if (normalized.startsWith("./")) {
    normalized = `stations/${normalized.slice(2)}`;
  } else if (normalized.startsWith("/")) {
    normalized = normalized.slice(1);
  }

  return `${repoBlobBase}${normalized}`;
}

function resolveAssetPath(path) {
  if (!path) {
    return null;
  }

  if (/^https?:\/\//.test(path)) {
    return path;
  }

  let normalized = path.trim();
  if (normalized.startsWith("./")) {
    normalized = normalized.slice(2);
  } else if (normalized.startsWith("/")) {
    normalized = normalized.slice(1);
  }

  return `./${normalized}`;
}

function renderRoute() {
  state.stations.forEach((station) => {
    station.relatedStationObjects = safeList(station.related_stations)
      .map((slug) => state.stationMap.get(slug))
      .filter(Boolean);
  });

  const route = parseHash(window.location.hash);
  if (route.type === "station") {
    const station = state.stationMap.get(route.slug);
    if (station) {
      renderStationView(station);
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
  }

  renderHomeView();
}

function parseHash(hash) {
  if (!hash || hash === "#" || hash === "#/") {
    return { type: "home", anchor: null };
  }

  const cleaned = hash.replace(/^#/, "");
  const stationMatch = cleaned.match(/^\/stations\/([^/]+)$/);
  if (stationMatch) {
    return { type: "station", slug: decodeURIComponent(stationMatch[1]) };
  }

  if (/^[a-z0-9-]+$/i.test(cleaned)) {
    return { type: "home", anchor: cleaned };
  }

  return { type: "home", anchor: null };
}

function renderHomeView() {
  document.title = state.frontstage?.site?.site_name || "VIRTURA SpacePort";

  const site = state.frontstage?.site || {};
  const featuredStations = getFeaturedStations();
  const heroStation = getHeroStation(site, featuredStations);
  const signalCards = getSignalCards();
  const networkGroups = getNetworkGroups(site);

  app.innerHTML = `
    <div class="home-view">
      <section class="hero hero--home section section--first">
        <div class="hero-shell">
          <div class="hero-copy">
            <div class="hero-kicker">${escapeHtml(site.hero?.eyebrow || "VIRTURA")}</div>
            <h1 class="hero-title">${escapeHtml(site.public_title || "SpacePort")}</h1>
            <p class="hero-subtitle">${escapeHtml(site.public_subtitle || firstLine(site.hero?.summary) || "VIRTURA 的公众入口。")}</p>
            <div class="hero-meta">
              ${renderHeroMetrics(site, featuredStations)}
            </div>
            <div class="hero-cta">
              ${renderHeroActions(site)}
            </div>
          </div>

          ${renderHeroSpotlight(heroStation)}
        </div>
      </section>

      <section class="section" id="core">
        <div class="section-head">
          <div class="eyebrow">${escapeHtml(site.core_section?.eyebrow || "Core Infrastructure")}</div>
          <h2 class="section-title">${escapeHtml(site.core_section?.title || "Core Stations")}</h2>
          <p class="section-intro">${escapeHtml(site.core_section?.description || "")}</p>
        </div>
        <div class="featured-grid">
          ${renderFeaturedStations(featuredStations)}
        </div>
      </section>

      ${renderSignalSection(site, signalCards)}

      <section class="section" id="network">
        <div class="section-head">
          <div class="eyebrow">${escapeHtml(site.network_section?.eyebrow || "Operational Network")}</div>
          <h2 class="section-title">${escapeHtml(site.network_section?.title || "Operational Layers")}</h2>
          <p class="section-intro">${escapeHtml(site.network_section?.description || "")}</p>
        </div>
        <div class="route-list">
          ${renderNetworkRows(networkGroups)}
        </div>
      </section>

      <section class="section" id="dock">
        <div class="section-head">
          <div class="eyebrow">Stations</div>
          <h2 class="section-title">Station Index</h2>
          <p class="section-intro">全部公开 station、支持层与保留节点都在这里。</p>
        </div>
        <div class="filter-row" data-filter-row>
          ${renderFilterChip("all", "All")}
          ${renderFilterChip("运行中", "Open")}
          ${renderFilterChip("生长中", "In Development")}
          ${renderFilterChip("归档保留", "Archive")}
        </div>
        <div class="registry-list" data-dock-grid>
          ${renderDockCards()}
        </div>
      </section>

      <section class="section section--tail" id="infrastructure">
        <div class="section-head">
          <div class="eyebrow">Framework</div>
          <h2 class="section-title">Operating Model</h2>
          <p class="section-intro">Library、Stage 与 Production 继续作为这套设施背后的工作模型。</p>
        </div>
        <div class="grid-3 grid-3--tight">
          ${safeList(state.visual?.layers).map((layer) => `
            <article class="small-card small-card--quiet">
              <div class="micro-label">${escapeHtml(layer.eyebrow)}</div>
              <h3>${escapeHtml(layer.title)}</h3>
              <p>${escapeHtml(layer.description)}</p>
            </article>
          `).join("")}
        </div>
      </section>
    </div>
  `;

  updateFilterUI();
  scrollHomeAnchorIntoView();
}

function renderHeroSpotlight(heroStation) {
  if (!heroStation) {
    return "";
  }

  const primaryEntry = getPrimaryEntry(heroStation);

  return `
    <figure class="hero-accent">
      <a class="hero-accent__image" href="${escapeHtml(heroStation.stationUrl)}">
        ${heroStation.posterUrl
          ? `<img src="${escapeHtml(heroStation.posterUrl)}" alt="${escapeHtml(heroStation.posterAlt)}" loading="eager" />`
          : `<div class="hero-accent__ambient" style="--featured-accent:${escapeHtml(heroStation.accent)};"></div>`}
      </a>
      <figcaption class="hero-note">
        <span class="micro-label">Featured Station</span>
        <strong>${escapeHtml(heroStation.homeTitle)}</strong>
        <p class="hero-note__summary">${escapeHtml(heroStation.pageSummary)}</p>
        <div class="hero-note__actions">
          <a class="button" href="${escapeHtml(heroStation.stationUrl)}">Open Station</a>
          <a class="inline-link" href="${escapeHtml(primaryEntry.resolvedUrl)}" target="_blank" rel="noreferrer">${escapeHtml(heroStation.primaryActionLabel)}</a>
        </div>
      </figcaption>
    </figure>
  `;
}

function getFeaturedStations() {
  const featuredSlugs = safeList(state.frontstage?.site?.core_section?.featured_station_slugs);
  return featuredSlugs
    .map((slug) => state.stationMap.get(slug))
    .filter(Boolean);
}

function getHeroStation(site, featuredStations) {
  if (site?.hero_station_slug) {
    return state.stationMap.get(site.hero_station_slug) || featuredStations[0] || null;
  }

  return featuredStations[0] || null;
}

function getNetworkGroups(site) {
  const coreGroupSlug = site?.core_section?.group_slug;
  return safeList(site?.dock_groups).filter((group) => group.slug !== coreGroupSlug);
}

function renderHeroMetrics(site, featuredStations) {
  const fallbackMetrics = [
    { label: "Core Stations", value: String(featuredStations.length) },
    { label: "Network Nodes", value: String(state.stations.length) }
  ];
  const metrics = safeList(site?.port_metrics).length ? site.port_metrics : fallbackMetrics;
  return metrics.map((item) => `
    <span>${/^\d+$/.test(String(item.value))
      ? `${escapeHtml(item.value)} ${escapeHtml(item.label).toLowerCase()}`
      : `${escapeHtml(item.label)}: ${escapeHtml(item.value)}`}</span>
  `).join("");
}

function renderHeroActions(site) {
  const actions = safeList(site?.hero?.primary_actions);
  if (actions.length === 0) {
    return `
      <a class="button primary" href="#core">Core Stations</a>
      <a class="button" href="#dock">Station Index</a>
    `;
  }

  return actions.map((action, index) => `
    <a class="button ${index === 0 ? "primary" : ""}" href="${escapeHtml(resolveFrontstageAction(action.href))}">${escapeHtml(action.label)}</a>
  `).join("");
}

function renderFeaturedStations(featuredStations) {
  return featuredStations.map((station, index) => `
    <article class="featured-card ${index < 2 ? "featured-card--wide" : "featured-card--compact"} ${station.posterUrl ? "featured-card--image" : "featured-card--type"}" style="--featured-accent:${escapeHtml(station.accent)};">
      ${station.posterUrl
        ? `<div class="featured-card__visual"><img src="${escapeHtml(station.posterUrl)}" alt="${escapeHtml(station.posterAlt)}" loading="lazy" /></div>`
        : renderTypeVisual(station)}
      <div class="featured-card__copy">
        <div class="featured-card__meta">
          <span>${escapeHtml(station.groupLabel)}</span>
          <span>${escapeHtml(station.dockCode)}</span>
        </div>
        <h3>${escapeHtml(station.homeTitle)}</h3>
        <p>${escapeHtml(station.indexSummary)}</p>
        ${renderFeaturedEntry(station)}
        <div class="featured-card__actions">
          <a class="button ${index === 0 ? "primary" : ""}" href="${escapeHtml(station.stationUrl)}">Open Station</a>
        </div>
      </div>
    </article>
  `).join("");
}

function renderTypeVisual(station) {
  const signalLabel = station.currentFeature?.eyebrow || station.groupLabel;
  const signalTitle = station.currentFeature?.title || station.homeTitle;

  return `
    <div class="featured-card__visual featured-card__visual--type" data-code="${escapeHtml(station.dockCode)}">
      <div class="featured-card__signal">
        <span class="micro-label">${escapeHtml(signalLabel)}</span>
        <strong>${escapeHtml(signalTitle)}</strong>
        <span class="featured-card__signal-meta">${escapeHtml(station.groupLabel)}</span>
      </div>
    </div>
  `;
}

function renderFeaturedEntry(station) {
  const entry = station.currentFeature || station.primaryRoutes[0] || null;
  if (!entry) {
    return "";
  }

  return `
    <div class="featured-card__entry">
      <span class="micro-label">${escapeHtml(station.currentFeature ? station.currentFeature.eyebrow : "Entry")}</span>
      <strong>${escapeHtml(entry.title || entry.label)}</strong>
    </div>
  `;
}

function renderNetworkRows(groups) {
  return safeList(groups).map((group, index) => `
    <article class="route-row">
      <div class="route-row__label">Layer ${String(index + 1).padStart(2, "0")}</div>
      <div class="route-row__body">
        <h3>${escapeHtml(group.label)}</h3>
        <p>${escapeHtml(group.description)}</p>
      </div>
      <div class="route-links">
        ${safeList(group.station_slugs).map((slug) => {
          const station = state.stationMap.get(slug);
          return station ? `<a class="inline-link" href="#/stations/${station.slug}">${escapeHtml(station.homeTitle)}</a>` : "";
        }).join("")}
      </div>
    </article>
  `).join("");
}

function renderSignalSection(site, signalCards) {
  if (signalCards.length === 0) {
    return "";
  }

  return `
    <section class="section" id="signals">
      <div class="section-head">
        <div class="eyebrow">${escapeHtml(site.signal_section?.eyebrow || "Port Signals")}</div>
        <h2 class="section-title">${escapeHtml(site.signal_section?.title || "Current Signals")}</h2>
        <p class="section-intro">${escapeHtml(site.signal_section?.description || "")}</p>
      </div>
      <div class="signal-grid">
        ${signalCards.map(renderSignalCard).join("")}
      </div>
    </section>
  `;
}

function renderSignalCard(signal) {
  return `
    <article class="signal-card">
      <a class="signal-card__image" href="${escapeHtml(signal.stationUrl)}">
        <img src="${escapeHtml(signal.image)}" alt="${escapeHtml(signal.alt || signal.title)}" loading="lazy" />
      </a>
      <div class="signal-card__body">
        <div class="micro-label">${escapeHtml(signal.eyebrow || "Signal")}</div>
        <h3>${escapeHtml(signal.title || signal.station?.homeTitle || "Signal")}</h3>
        <p>${escapeHtml(signal.caption || "")}</p>
        <div class="signal-card__actions">
          <a class="button" href="${escapeHtml(signal.stationUrl)}">Open Station</a>
          <a class="inline-link" href="${escapeHtml(signal.entryUrl)}" target="_blank" rel="noreferrer">${escapeHtml(signal.entryLabel)}</a>
        </div>
      </div>
    </article>
  `;
}

function renderStationView(station) {
  document.title = `${station.homeTitle} / VIRTURA SpacePort`;
  const primaryEntry = getPrimaryEntry(station);

  app.innerHTML = `
    <div class="station-view" style="--station-accent:${station.accent};">
      <section class="section section--first">
        <div class="station-shell">
          <div class="station-copy">
            <div class="hero-kicker">${escapeHtml(station.zone)}</div>
            <h1 class="station-title">${escapeHtml(station.heroTitle)}</h1>
            <p class="station-summary">${escapeHtml(station.pageSummary)}</p>
            ${renderCurrentFeature(station.currentFeature)}
            <div class="hero-meta">
              <span>${formatStationStatus(station.current_status)}</span>
              <span>${station.publicLinks.length} public links</span>
              <span>${station.sourceLinks.length} source pages</span>
            </div>
            <div class="hero-cta">
              <a class="button primary" href="${escapeHtml(primaryEntry.resolvedUrl)}" target="_blank" rel="noreferrer">${escapeHtml(station.primaryActionLabel)}</a>
              <a class="button" href="${escapeHtml(station.bestEntryUrl)}" target="_blank" rel="noreferrer">Overview</a>
              <a class="button" href="#/">All Stations</a>
            </div>
          </div>

          <aside class="station-rail">
            <div class="rail-block">
              <div class="micro-label">Status</div>
              ${renderStatusRows(station)}
            </div>
            <div class="rail-block">
              <div class="micro-label">Entry</div>
              <div class="link-list">
                ${renderLinkRows(station.entryPreview, "Open")}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section class="section">
        <div class="list-grid">
          <article class="list-card">
            <div class="micro-label">Current</div>
            <h3>Current Focus</h3>
            <ul>
              ${safeList(station.current_focus).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
          </article>

          <article class="list-card">
            <div class="micro-label">Links</div>
            <h3>Entry Routes</h3>
            <div class="link-list">
              ${renderLinkRows(station.publicLinks, "Open")}
            </div>
          </article>
        </div>
      </section>

      <section class="section">
        <div class="list-grid">
          <article class="list-card">
            <div class="micro-label">Related</div>
            <h3>Related Stations</h3>
            <div class="link-list">
              ${renderRelatedRows(station.relatedStationObjects)}
            </div>
          </article>

          <article class="list-card">
            <div class="micro-label">Source Layer</div>
            <h3>Source Pages</h3>
            <div class="link-list">
              ${renderSourceRows(station.sourceLinks, station)}
            </div>
          </article>
        </div>
      </section>
    </div>
  `;
}

function renderCurrentFeature(currentFeature) {
  if (!currentFeature) {
    return "";
  }

  return `
    <div class="station-current">
      <div class="micro-label">${escapeHtml(currentFeature.eyebrow || "Current")}</div>
      <strong>${escapeHtml(currentFeature.title)}</strong>
      <p>${escapeHtml(currentFeature.summary || "")}</p>
    </div>
  `;
}

function renderDockCards() {
  return getSortedStations(getFilteredStations())
    .map((station, index) => `
      <article class="registry-row">
        <div class="registry-index">${String(index + 1).padStart(2, "0")}</div>
        <div class="registry-main">
          <div class="registry-meta-line">
            <span class="registry-zone">${escapeHtml(station.groupLabel)}</span>
            <span class="registry-sep" aria-hidden="true"></span>
            <span class="registry-status">${formatStationStatus(station.current_status)}</span>
          </div>
          <h3>${escapeHtml(station.homeTitle)}</h3>
          <p>${escapeHtml(station.indexSummary)}</p>
        </div>
        <div class="registry-actions">
          <a class="button" href="#/stations/${station.slug}">View</a>
        </div>
      </article>
    `)
    .join("");
}

function getSortedStations(stations) {
  const groupRankMap = new Map(
    safeList(state.frontstage?.site?.dock_groups).map((group, index) => [group.slug, index])
  );

  return [...safeList(stations)].sort((a, b) => {
    const groupDelta = (groupRankMap.get(a.groupSlug) ?? 999) - (groupRankMap.get(b.groupSlug) ?? 999);
    if (groupDelta !== 0) {
      return groupDelta;
    }
    return a.order - b.order;
  });
}

function renderStatusRows(station) {
  return Object.entries(station.trackers || {})
    .map(([key, tracker]) => `
      <div class="status-row">
        <span class="status-row__label">${escapeHtml(TRACKER_LABELS[key] || key)}</span>
        <span class="status-row__value">${escapeHtml(formatTrackerStatus(tracker.status))}</span>
      </div>
    `)
    .join("");
}

function renderLinkRows(links, buttonLabel) {
  if (!links || links.length === 0) {
    return `<div class="empty-state">No public link yet.</div>`;
  }

  return links.map((link) => `
    <div class="link-row">
      <div class="link-copy">
        <strong>${escapeHtml(link.label)}</strong>
        <span>${escapeHtml(link.note || "")}</span>
      </div>
      <a class="button" href="${escapeHtml(link.resolvedUrl)}" target="_blank" rel="noreferrer">${escapeHtml(buttonLabel)}</a>
    </div>
  `).join("");
}

function renderRelatedRows(relatedStations) {
  if (!relatedStations || relatedStations.length === 0) {
    return `<div class="empty-state">No related station.</div>`;
  }

  return relatedStations.map((station) => `
    <div class="link-row">
      <div class="link-copy">
        <strong>${escapeHtml(station.homeTitle)}</strong>
        <span>${escapeHtml(station.indexSummary)}</span>
      </div>
      <a class="button" href="#/stations/${station.slug}">View</a>
    </div>
  `).join("");
}

function renderSourceRows(sourceLinks, station) {
  if (!sourceLinks || sourceLinks.length === 0) {
    return `<div class="empty-state">No public reference yet.</div>`;
  }

  return sourceLinks.map((source) => `
    <div class="link-row">
      <div class="link-copy">
        <strong>${escapeHtml(getReferenceTitle(source.path, station))}</strong>
        <span>${escapeHtml(getReferenceNote(source.path, station))}</span>
      </div>
      <a class="button" href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">Read</a>
    </div>
  `).join("");
}

function renderFilterChip(value, label) {
  const activeClass = state.activeFilter === value ? "is-active" : "";
  return `<button type="button" class="filter-chip ${activeClass}" data-filter="${value}">${escapeHtml(label)}</button>`;
}

function getPrimaryEntry(station) {
  return station.currentFeature || station.primaryRoutes[0] || {
    resolvedUrl: station.bestEntryUrl
  };
}

function getFilteredStations() {
  if (state.activeFilter === "all") {
    return state.stations;
  }

  return state.stations.filter((station) => station.current_status === state.activeFilter);
}

function summarizeStatuses() {
  return {
    activeCount: state.stations.filter((station) => ["运行中", "生长中"].includes(station.current_status)).length
  };
}

function updateFilterUI() {
  const filterRow = document.querySelector("[data-filter-row]");
  const dockGrid = document.querySelector("[data-dock-grid]");
  if (!filterRow || !dockGrid) {
    return;
  }

  filterRow.querySelectorAll("[data-filter]").forEach((button) => {
    button.classList.toggle("is-active", button.getAttribute("data-filter") === state.activeFilter);
  });
  dockGrid.innerHTML = renderDockCards();
}

function handleDocumentClick(event) {
  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) {
    state.activeFilter = filterButton.getAttribute("data-filter");
    updateFilterUI();
  }
}

function scrollHomeAnchorIntoView() {
  const route = parseHash(window.location.hash);
  if (route.type !== "home" || !route.anchor) {
    return;
  }

  requestAnimationFrame(() => {
    const target = document.getElementById(route.anchor);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

function formatStationStatus(status) {
  return STATION_STATUS_LABELS[status] || status;
}

function formatTrackerStatus(status) {
  return TRACKER_STATUS_LABELS[status] || status;
}

function getSignalCards() {
  return safeList(state.visual?.signals)
    .map((signal) => {
      const station = state.stationMap.get(signal.station_slug);
      if (!station) {
        return null;
      }

      const entry = getPrimaryEntry(station);
      return {
        ...signal,
        station,
        stationUrl: station.stationUrl,
        entryUrl: entry.resolvedUrl,
        entryLabel: station.primaryActionLabel
      };
    })
    .filter(Boolean);
}

function getReferenceTitle(path, station) {
  const normalized = normalizeRepoPath(path);
  const labelMap = new Map();

  if (station?.currentFeature?.href) {
    labelMap.set(normalizeRepoPath(station.currentFeature.href), station.currentFeature.title);
  }

  [...safeList(station?.primaryRoutes), ...safeList(station?.secondaryRoutes)].forEach((route) => {
    labelMap.set(normalizeRepoPath(route.href), formatReferenceRouteLabel(route.label, station));
  });

  return labelMap.get(normalized) || humanizeReferencePath(normalized, station);
}

function getReferenceNote(path, station) {
  const normalized = normalizeRepoPath(path);
  const compact = stripStationsPrefix(normalized);
  const parts = compact.split("/").filter(Boolean);

  if (parts.length === 0) {
    return "Public source page";
  }

  if (parts.at(-1) === "README.md") {
    if (parts.length === 2 && parts[0] === station?.slug) {
      return "Primary station overview";
    }
    return `${humanizeSegment(parts.at(-2) || "source")} overview`;
  }

  return parts
    .slice(0, -1)
    .map(humanizeSegment)
    .filter(Boolean)
    .join(" / ") || "Public source page";
}

function formatReferenceRouteLabel(label, station) {
  if (label === "Station Home") {
    return `${station.homeTitle} Overview`;
  }
  return label;
}

function humanizeReferencePath(path, station) {
  const parts = path.split("/").filter(Boolean);
  const base = parts.at(-1) || path;
  if (base === "README.md") {
    const parent = parts.at(-2);
    if (!parent || parent === station?.slug) {
      return `${station?.homeTitle || "Station"} Overview`;
    }
    return `${humanizeSegment(parent)} Overview`;
  }
  return humanizeSegment(base.replace(/\.md$/i, ""));
}

function humanizeSegment(value) {
  return value
    .split(/[-_]/)
    .filter(Boolean)
    .map((token) => {
      if (/^\d+$/.test(token)) {
        return token;
      }
      if (/^[a-z]{1,3}$/i.test(token)) {
        return token.toUpperCase();
      }
      return token.charAt(0).toUpperCase() + token.slice(1);
    })
    .join(" ");
}

function normalizeRepoPath(path) {
  if (!path) {
    return "";
  }

  if (/^https?:\/\//.test(path) || path.startsWith("#")) {
    return path;
  }

  let normalized = path.trim();
  if (normalized.startsWith("./")) {
    normalized = `stations/${normalized.slice(2)}`;
  } else if (normalized.startsWith("/")) {
    normalized = normalized.slice(1);
  }
  return normalized;
}

function resolveFrontstageAction(href) {
  if (!href) {
    return "#/";
  }

  if (/^https?:\/\//.test(href) || href.startsWith("#")) {
    return href;
  }

  return href;
}

function stripStationsPrefix(path) {
  return path.replace(/^stations\//, "");
}

function firstLine(lines) {
  return safeList(lines)[0] || "";
}

function safeList(list) {
  return Array.isArray(list) ? list : [];
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

function renderError(error) {
  console.error(error);
  app.innerHTML = `
    <section class="error-state">
      <div class="error-state__panel">
        <span class="eyebrow">Loading</span>
        <h1>SpacePort could not be loaded.</h1>
        <p>${escapeHtml(error.message || "Unknown error")}</p>
      </div>
    </section>
  `;
}
