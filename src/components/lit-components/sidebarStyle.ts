import { css } from "lit";

export const myComponentStyles =
  css`
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

.sidebarr{
  justify-content: space-between;
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
