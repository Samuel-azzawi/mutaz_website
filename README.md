.menu-container {
  display: flex;
  justify-content: flex-end; /* Aligns the menu to the right edge */
  position: absolute;
  top: 98px;
  right: 0;
  z-index: 9999;
}

.hamburger-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.hamburger-icon {
  display: inline-block;
  cursor: pointer;
}

.line {
  display: block;
  width: 35px;
  height: 4px;
  background-color: white;
  margin-bottom: 5px;
  transition: transform 0.5s ease-in-out;
}

.line.line1 {
  transform: rotate(0);
}

.line.line2 {
  opacity: 1;
}

.line.line3 {
  transform: rotate(0);
}

.hamburger-menu.open .line.line1 {
  transform: rotate(45deg) translate(4px, 4px);
}

.hamburger-menu.open .line.line2 {
  opacity: 0;
}

.hamburger-menu.open .line.line3 {
  transform: rotate(-45deg) translate(4px, -4px);
}
.container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: hidden;
}
.menu-items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #004d80b2, #001f3f);
  margin: 0;
  padding: 0;
  z-index: 3;
  transition: transform 0.7s ease;
}
.menu-items.close {
  transform: translateX(100%);
}
.menu-items.open {
  transform: translateX(0);
}

.big-screen-items {
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 0;
  gap: 4rem;
}
