(function () {
  'use strict';

  const content = window.GEMARIS_PUBLIC_CONTENT;
  if (!content) {
    document.querySelectorAll('[data-public-content-error]').forEach((element) => {
      element.hidden = false;
    });
    return;
  }

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function appendTextList(parent, items, className) {
    if (!items || items.length === 0) return;
    const list = element('ul', className);
    items.forEach((item) => list.append(element('li', '', item)));
    parent.append(list);
  }

  function renderState(item) {
    return element(
      'span',
      `organization-state organization-state--${item.status}`,
      item.stateLabel
    );
  }

  function renderBoard(item) {
    const board = element('li', 'organization-board-item');
    const heading = element('div', 'organization-board-heading');
    heading.append(
      element('strong', 'organization-board-name', item.name),
      renderState(item)
    );
    board.append(heading);
    if (item.summary) board.append(element('p', '', item.summary));
    appendTextList(board, item.details, 'organization-detail-list');
    return board;
  }

  function renderOrganizationNode(item, className) {
    const card = element('article', className || 'organization-node-card');
    if (item.status) card.dataset.state = item.status;

    const heading = element('div', 'organization-node-heading');
    const title = element('div', 'organization-node-title');
    title.append(
      element('strong', 'organization-node-name', item.name),
      element('span', 'organization-node-kind', item.kind)
    );
    heading.append(title);
    if (item.status) heading.append(renderState(item));
    card.append(heading);
    if (item.summary) card.append(element('p', 'organization-node-summary', item.summary));
    if (item.description) card.append(element('p', 'organization-node-description', item.description));

    if (item.boards && item.boards.length) {
      const boards = element('ul', 'organization-board-list');
      item.boards.forEach((board) => boards.append(renderBoard(board)));
      card.append(boards);
    }
    appendTextList(card, item.details, 'organization-detail-list');
    return card;
  }

  function renderTransversalFunction(item) {
    const card = element('article', 'transversal-card');
    card.dataset.state = item.status;
    const heading = element('div', 'transversal-card-heading');
    heading.append(
      element('div', 'transversal-card-title', item.name),
      renderState(item)
    );
    card.append(heading, element('span', 'transversal-card-kind', item.kind));
    card.append(element('p', '', item.description));
    return card;
  }

  function renderOrganizationGroup(group, items) {
    const section = element('section', 'organization-group');
    const heading = element('div', 'organization-group-heading');
    heading.append(
      element('h3', '', group.title),
      element('p', '', group.description)
    );
    const grid = element('div', 'organization-area-grid');
    items.forEach((item) => grid.append(renderOrganizationNode(item)));
    section.append(heading, grid);
    return section;
  }

  function renderOrganization() {
    const notice = document.querySelector('[data-public-structure-notice]');
    const tree = document.querySelector('[data-public-organization]');
    const transversal = document.querySelector('[data-public-transversal]');
    const direction = document.querySelector('[data-public-direction]');
    if (!notice || !tree || !transversal || !direction || !content.organization) return;

    notice.textContent = content.structureNotice;
    direction.append(renderOrganizationNode(content.direction, 'direction-root-card'));
    if (content.direction.note) {
      direction.append(element('p', 'direction-root-note', content.direction.note));
    }
    (content.transversalFunctions || []).forEach((item) => {
      transversal.append(renderTransversalFunction(item));
    });
    tree.append(element('h3', 'organization-title', content.organization.name));
    tree.append(element('p', 'organization-overview', content.organization.description));
    const groups = element('div', 'organization-groups');
    content.organization.groups.forEach((group) => {
      const items = content.organization.children.filter((item) => item.group === group.id);
      groups.append(renderOrganizationGroup(group, items));
    });
    tree.append(groups);
  }

  function renderProjectInfo() {
    const version = document.querySelector('[data-public-version]');
    if (version) version.textContent = content.version || 'En desarrollo';

    const updated = document.querySelector('[data-public-updated]');
    if (updated) updated.textContent = content.lastUpdated || '';

    const disclaimer = document.querySelector('[data-public-structure-disclaimer]');
    if (disclaimer) disclaimer.textContent = content.moduleDisclaimer || '';
  }

  function renderNameMeaning() {
    const breakdown = document.querySelector('[data-public-name-breakdown]');
    const description = document.querySelector('[data-public-name-description]');
    const assembly = document.querySelector('[data-name-assembly]');
    const wordTrack = document.querySelector('[data-name-word]');
    const stage = document.querySelector('[data-name-animation]');
    const toggle = document.querySelector('[data-name-animation-toggle]');
    const announcement = document.querySelector('[data-name-announcement]');
    if (!content.nameMeaning || !breakdown || !description || !assembly || !wordTrack || !stage || !toggle) return;

    function createPieceImage(item, className) {
      const image = element('img', className);
      image.src = item.image;
      image.alt = '';
      image.setAttribute('aria-hidden', 'true');
      return image;
    }

    content.nameMeaning.words.forEach((item) => {
      const letter = element('span', 'animation-letter', item.letter);
      letter.dataset.letter = item.letter;
      wordTrack.append(letter);

      const card = element('li', `exploded-piece exploded-piece--${item.letter.toLowerCase()}`);
      card.setAttribute('aria-label', `${item.letter}: ${item.word}. ${item.description}`);
      card.setAttribute('aria-hidden', 'true');

      const preview = element('span', 'piece-preview');
      preview.append(createPieceImage(item, 'piece-preview-art'));
      preview.append(element('span', 'piece-mark', item.letter));

      const copy = element('span', 'piece-copy');
      copy.append(
        element('strong', '', `${item.letter} · ${item.word}`),
        element('span', '', item.description)
      );
      card.append(preview, copy);
      breakdown.append(card);

      const fragment = createPieceImage(
        item,
        `assembly-fragment assembly-fragment--${item.letter.toLowerCase()}`
      );
      const fragmentIndex = assembly.children.length;
      const [x, y, width, height] = item.position;
      fragment.style.left = `${x / 3}%`;
      fragment.style.top = `${y / 3}%`;
      fragment.style.width = `${width / 3}%`;
      fragment.style.height = `${height / 3}%`;
      fragment.style.setProperty('--spread-x', `${item.spread[0]}px`);
      fragment.style.setProperty('--spread-y', `${item.spread[1]}px`);
      fragment.style.setProperty('--spread-rotation', `${(fragmentIndex % 2 ? 1 : -1) * (8 + fragmentIndex * 2)}deg`);
      fragment.style.setProperty('--break-delay', `${fragmentIndex * 60}ms`);
      fragment.style.setProperty('--assembly-delay', `${(content.nameMeaning.words.length - fragmentIndex - 1) * 60}ms`);
      assembly.append(fragment);
    });

    description.textContent = content.nameMeaning.description;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      stage.classList.add('is-static');
      stage.classList.remove('is-logo');
      for (const card of breakdown.children) card.removeAttribute('aria-hidden');
      toggle.hidden = true;
      return;
    }

    let timer = null;
    let timerStarted = 0;
    let remaining = 0;
    let resolveDelay = null;
    let paused = false;

    function startDelay() {
      timerStarted = performance.now();
      timer = window.setTimeout(() => {
        timer = null;
        remaining = 0;
        const resolve = resolveDelay;
        resolveDelay = null;
        if (resolve) resolve();
      }, remaining);
    }

    function wait(milliseconds) {
      remaining = milliseconds;
      return new Promise((resolve) => {
        resolveDelay = resolve;
        if (!paused) startDelay();
      });
    }

    async function playCycle() {
      const cards = [...breakdown.children];
      const letters = [...wordTrack.children];
      while (true) {
        stage.className = 'name-animation is-logo';
        for (const card of cards) {
          card.classList.remove('is-active');
          card.classList.remove('is-settling');
          card.setAttribute('aria-hidden', 'true');
        }
        for (const letter of letters) letter.classList.remove('is-visible');
        if (announcement) announcement.textContent = 'El isotipo de GEMARIS.';
        await wait(1700);

        if (announcement) announcement.textContent = 'El isotipo se separa en sus siete piezas.';
        stage.className = 'name-animation is-breaking';
        await wait(1450);

        stage.className = 'name-animation is-revealing';
        for (const card of cards) {
          card.setAttribute('aria-hidden', 'false');
          card.classList.add('is-active');
          if (announcement) announcement.textContent = card.getAttribute('aria-label');
          await wait(1450);
          card.classList.add('is-settling');
          await wait(520);
          card.classList.remove('is-active');
          card.classList.remove('is-settling');
          card.setAttribute('aria-hidden', 'true');
          letters[cards.indexOf(card)].classList.add('is-visible');
          stage.classList.add('is-forming-word');
        }

        await wait(1100);
        if (announcement) announcement.textContent = 'Las piezas se unen para reconstruir el isotipo, mientras GEMARIS permanece visible.';
        stage.className = 'name-animation is-assembling';
        await wait(1450);
        stage.classList.add('is-assembled', 'is-flashing');
        await wait(550);
        stage.classList.remove('is-flashing');
        await wait(500);
        stage.classList.add('is-word-fading');
        await wait(550);

        stage.className = 'name-animation is-logo is-word-fading';
        for (const card of cards) {
          card.classList.remove('is-active', 'is-settling');
          card.setAttribute('aria-hidden', 'true');
        }
        for (const letter of letters) letter.classList.remove('is-visible');
        await wait(350);
        stage.classList.remove('is-word-fading');
        if (announcement) announcement.textContent = 'El isotipo de GEMARIS.';
      }
    }

    toggle.addEventListener('click', () => {
      paused = !paused;
      stage.classList.toggle('is-paused', paused);
      toggle.setAttribute('aria-pressed', String(paused));
      toggle.textContent = paused ? 'Reanudar animación' : 'Pausar animación';
      if (paused && timer !== null) {
        window.clearTimeout(timer);
        remaining = Math.max(0, remaining - (performance.now() - timerStarted));
        timer = null;
      } else if (!paused && resolveDelay && timer === null) {
        startDelay();
      }
    });

    playCycle();
  }

  function renderUpdate(item) {
    const article = element('article', 'update-entry');
    const dateGroup = element('div', 'update-date');
    const time = element('time', '', item.dateLabel || item.date);
    if (item.date) time.dateTime = item.date;
    dateGroup.append(element('span', '', 'NOTA PÚBLICA'), time);

    const body = element('div', 'update-content');
    const titleRow = element('div', 'update-title-row');
    titleRow.append(
      element('h3', '', item.title),
      element('span', 'update-badge', item.status || 'Información')
    );
    body.append(titleRow);
    (item.paragraphs || []).forEach((paragraph) => {
      body.append(element('p', '', paragraph));
    });
    if (item.note) body.append(element('p', 'update-note', item.note));
    article.append(dateGroup, body);
    return article;
  }

  function renderUpdates() {
    const container = document.querySelector('[data-public-updates]');
    if (!container) return;
    (content.updates || []).forEach((item) => container.append(renderUpdate(item)));

    const guidance = document.querySelector('[data-public-update-guidance]');
    if (guidance) guidance.textContent = content.updateGuidance || '';
  }

  document.querySelectorAll('.mobile-navigation-panel a').forEach((link) => {
    link.addEventListener('click', () => {
      const menu = link.closest('.mobile-navigation');
      if (menu) menu.open = false;
    });
  });

  renderOrganization();
  renderProjectInfo();
  renderNameMeaning();
  renderUpdates();
})();
