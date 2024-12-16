import { icons, type NavigationItem } from '@/utils/constant'
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'


@customElement('selia-sidebar')
export class MySidebar extends LitElement {
  static styles = css`
  :host {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease;
  width: 250px;
  position: absolute;
}

.sidebar-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding-top: 10px;
}

:host([closed]) .logo {
  justify-content: center;
}

:host([closed]) {
  width: 80px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 16px 24px;
  border-bottom: 1px solid #DDE1E9;
}

.logo img {
  width: 32px;
  height: 32px;
}

.logo span {
  font-size: 20px;
  font-weight: 500;
  color: #333;
  transition: opacity 0.3s ease;
}

:host([closed]) .logo span {
  display: none;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 12px 0;
  gap: 12px;
  color: #666;
  text-decoration: none;
  transition: background 0.2s;
  cursor: pointer;
  width: 90%;
  margin: 0 auto;
}

:host([closed]) .nav-item {
  justify-content: center;
}

.nav-item:hover {
  background: #f5f5f5;
  border-radius: 8px;
  color: #800080;
}

.nav-item span {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  transition: opacity 0.3s ease, color 0.3s ease;
}

.nav-item:hover span {
  color: #800080;
}

:host([closed]) .nav-item span {
  display: none;
}

:host([closed]) .nav-item div {
  display: none;
}

.submenu {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

.submenu.active {
  max-height: 300px;
}

.toggle-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 16px;
}

.toggle-button p {
  color: #DDE1E9;
}

.toggle-button button {
  width: 90%;
  height: 40px;
  border-radius: 10px;
  background: #f5f5f5;
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: #666;
  cursor: pointer;
}

.nav-item-title-group {
  border-top: 1px solid #DDE1E9;
}

.nav-item-title-group:last-child {
  border-bottom: 1px solid #DDE1E9;
}

.nav-item img {
  width: 24px;
  height: 24px;
}

.nav-item:hover img {
  filter: brightness(0) saturate(100%) invert(26%) sepia(88%) saturate(6415%) hue-rotate(274deg) brightness(86%) contrast(106%);
}

@media (max-width: 700px) {
  :host {
    width: 80px;
  }

  .logo span {
    display: none;
  }

  .nav-item span {
    display: none;
  }

  .nav-item {
    justify-content: center;
  }

  .logo {
    justify-content: center;
  }

  .sidebar-container div {
    display: none;
  }

  .nav-item-children {
    border-top: 1px solid #DDE1E9;
  }

  .toggle-button {
    display: none;
  }
}

  `



  public title: string
  public navigationItems: Array<NavigationItem>
  public activeSubmenu: string
  public openSidebar: boolean
  public itemSelected: string
  public projectInfo: string

  constructor() {
    super()
    this.title = 'Selia'
    this.navigationItems = []
    this.activeSubmenu = ''
    this.openSidebar = true
    this.itemSelected = ''
    this.projectInfo = ''

    const params = new URLSearchParams(window.location.search)
    const drawerState = params.get('drawer')
    this.openSidebar = drawerState !== 'closed'

    if (!drawerState) {
      this.openSidebar = true
      params.set('drawer', 'open')
      history.replaceState(null, '', '?' + params.toString())
    }
  }

  connectedCallback() {
    super.connectedCallback()
    document.addEventListener('click', this.handleOutsideClick.bind(this))
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    document.removeEventListener('click', this.handleOutsideClick.bind(this))
  }

  handleOutsideClick(event: MouseEvent) {
    const eventTarget = event.target as HTMLElement;
    const sidebar = this.shadowRoot?.querySelector('.sidebar-container') as HTMLElement;

    // Verifica si el clic es fuera del sidebar
    if (sidebar && !sidebar.contains(eventTarget)) {
      event.stopPropagation()
      this.openSidebar = false
      this.updateQueryParams()
      this.requestUpdate() // Actualiza el DOM
    }
  }



  updateQueryParams() {
    const params = new URLSearchParams(window.location.search)
    if (this.openSidebar) {
      params.set('drawer', 'open')
      console.log(22);

    } else {
      console.log(44);
      params.set('drawer', 'closed')
    }
    history.replaceState(null, '', '?' + params.toString())
  }

  toggleSubmenu(name: string) {
    this.activeSubmenu = this.activeSubmenu === name ? '' : name
    this.requestUpdate()
  }

  toggleSidebar(event: MouseEvent) {
    event.stopPropagation()
    this.openSidebar = !this.openSidebar
    this.updateQueryParams()
    this.requestUpdate()
  }

  toggleItemSelection(key: number, itemName: string) {
    const selectedItem = this.navigationItems.find(
      (item) =>
        item.name === itemName ||
        (item.children && item.children.some((child: NavigationItem) => child.name === itemName)),
    )

    const selectedChild =
      selectedItem?.children?.find((child: NavigationItem) => child.name === itemName) || null
    const path = selectedChild?.path || selectedItem?.path

    if (path) {
      window.location.href = path
    }

    this.itemSelected = this.itemSelected === itemName ? '' : itemName
    this.emitEvent(key, itemName)
    this.requestUpdate() // Solicitamos la actualización
  }

  emitEvent(key: number, message: string) {
    const event = new CustomEvent('my-custom-event', {
      detail: { key, message },
      bubbles: true,
      composed: true,
    })
    this.dispatchEvent(event)
    alert(JSON.stringify({ key: event.detail.key, name: event.detail.message }))
  }

  render() {
    console.log(1, this.projectInfo);

    const { LOGO_SELIA, ICON_UP, ICON_DOWN } = icons()

    if (!this.openSidebar) {
      this.setAttribute('closed', '')
    } else {
      this.removeAttribute('closed')
    }

    return html`
      <div class="sidebar-container">
        <div>
          <div class="logo">
            <img src="${LOGO_SELIA}" alt="Selia" />
            <span>${this.title}</span>
          </div>

          ${this.navigationItems.map(
      (item: NavigationItem, index: number) => html`
              ${item.children
          ? html`
                    <div class="nav-item-title-group">
                      <div
                        class="nav-item sidebarr ${this.itemSelected === item.name ? 'active' : ''}"
                        @click=${() => this.toggleSubmenu(item.name)}
                      >
                        <div>
                          ${item.icon ? html`<img src="${item.icon}" alt="${item.name}" />` : ''}
                          <span>${item.name}</span>
                        </div>
                        <img
                          class="arrow-icon"
                          src="${this.activeSubmenu === item.name ? ICON_UP : ICON_DOWN}"
                        />
                      </div>
                      <div
                        class=${classMap({
            submenu: true,
            active: this.activeSubmenu === item.name,
          })}
                      >
                        ${item.children.map(
            (child: NavigationItem, index: number) => html`
                            <div class="nav-item-children">
                              <div
                                class="nav-item"
                                @click=${() => this.toggleItemSelection(index, child.name)}
                              >
                                <img src="${child.icon}" />
                                <span>${child.name}</span>
                              </div>
                            </div>
                          `,
          )}
                      </div>
                    </div>
                  `
          : html`
                    <div
                      class="nav-item ${this.itemSelected === item.name ? 'active' : ''}"
                      @click=${() => this.toggleItemSelection(index, item.name)}
                    >
                      <img src="${item.icon}" />
                      <span>${item.name}</span>
                    </div>
                  `}
            `,
    )}
        </div>
        <div class="toggle-button">
        <p>${this.projectInfo}</p>
          <button @click=${this.toggleSidebar}>></button>
        </div>
      </div>
    `
  }
}
