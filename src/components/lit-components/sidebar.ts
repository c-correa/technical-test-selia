import { icons } from '@/utils/constant'
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { myComponentStyles } from './sidebarStyle'

@customElement('selia-sidebar')
export class MyElement extends LitElement {
  static styles = myComponentStyles
  static properties = {
    title: { type: String },
    navigationItems: { type: Array },
    activeSubmenu: { type: String },
    openSidebar: { type: Boolean, reflect: true },
    itemSelected: { type: String },
  }

  constructor() {
    super()
    this.title = 'Selia'
    this.navigationItems = []
    this.activeSubmenu = ''
    this.openSidebar = true
    this.itemSelected = '' // Esta propiedad almacenará el ítem seleccionado
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
    const eventTarget = event?.target?.classList?.contains('content-variant') as HTMLElement

    if (eventTarget) {
      this.openSidebar = false
      this.updateQueryParams()
    }
  }

  updateQueryParams() {
    const params = new URLSearchParams(window.location.search)
    if (this.openSidebar) {
      params.set('drawer', 'open')
    } else {
      params.set('drawer', 'closed')
    }
    history.replaceState(null, '', '?' + params.toString())
  }

  toggleSubmenu(name: string) {
    this.activeSubmenu = this.activeSubmenu === name ? '' : name
  }

  toggleSidebar(event: MouseEvent) {
    event.stopPropagation() // Detiene que el clic se propague al documento
    this.openSidebar = !this.openSidebar
    this.updateQueryParams()
  }

  toggleItemSelection(key: number, itemName: string) {
    const selectedItem = this.navigationItems.find(
      (item) =>
        item.name === itemName ||
        (item.children && item.children.some((child) => child.name === itemName)),
    )

    const selectedChild = selectedItem?.children?.find((child) => child.name === itemName) || null

    const path = selectedChild?.path || selectedItem?.path

    if (path) {
      window.location.href = path
    }

    this.itemSelected = this.itemSelected === itemName ? '' : itemName
    this.emitEvent(key, itemName)
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
    const { LOGO_SELIA, ICON_UP, ICON_DOWN } = icons();

    if (!this.openSidebar) {
      this.setAttribute('closed', '');
    } else {
      this.removeAttribute('closed');
    }

    return html`
      <link rel="stylesheet" href="./sidebar.css" />
      <div class="sidebar-container">
        <div>
          <div class="logo">
            <img src="${LOGO_SELIA}" alt="Selia" />
            <span>${this.title}</span>
          </div>

          ${this.navigationItems.map(
      (item, index) => html`
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
            (child, index) => html`
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
          <button @click=${this.toggleSidebar}>></button>
        </div>
      </div>
    `;
  }
}

