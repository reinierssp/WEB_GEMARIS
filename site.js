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
  renderUpdates();
})();
