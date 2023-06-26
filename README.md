.header {
  background: linear-gradient(45deg, darkblue, darkred);
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0px;
  padding: 0px;
  height: 126px;
}

button {
  width: 200px;
}
.logo {
  font-size: 40px;
}
.logo_search {
  font-size: 20px;
}

.button-48 {
  appearance: none;
  background-color: #ffffff00;
  border-width: 0;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: Clarkson, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 1em;
  margin: 0;
  opacity: 1;
  outline: 0;
  padding: 1.5em 2.2em;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-rendering: geometricprecision;
  text-transform: uppercase;
  transition: opacity 300ms cubic-bezier(0.694, 0, 0.335, 1),
    background-color 100ms cubic-bezier(0.694, 0, 0.335, 1),
    color 100ms cubic-bezier(0.694, 0, 0.335, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
}

.button-48:before {
  animation: opacityFallbackOut 0.5s step-end forwards;
  backface-visibility: hidden;
  background-color: #000000;
  clip-path: polygon(-1% 0, 0 0, -25% 100%, -1% 100%);
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transform: translateZ(0);
  transition: clip-path 0.5s cubic-bezier(0.165, 0.84, 0.44, 1),
    -webkit-clip-path 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  width: 100%;
}

.button-48:hover:before {
  animation: opacityFallbackIn 0s step-start forwards;
  clip-path: polygon(0 0, 101% 0, 101% 101%, 0 101%);
}

.button-48:after {
  background-color: #ffffff;
}

.button-48 span {
  z-index: 1;
  position: relative;
}
.searchBoxContainer {
  position: absolute;
  left: 12%;
}
.searchBox {
  transform: translate(-50%, 50%);
  background: #2f3640;
  height: 40px;
  border-radius: 26px;
  padding: 5px;
  position: absolute;
}

.searchBox:hover > .searchInput {
  width: 150px;
  padding: 0 6px;
}

.searchBox:hover > .searchButton {
  background: white;
  color: #2f3640;
}
.search_logo {
  font-size: 22px;
}
.searchButton {
  color: white;
  float: left;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #2f3640;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
}

.searchInput {
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  color: white;
  font-size: 16px;
  transition: 0.4s;
  line-height: 40px;
  width: 0px;
}

@media screen and (max-width: 1024px) {
  .header {
    justify-content: right;
  }
}

@media screen and (max-width: 620px) {
  .searchBox:hover > .searchInput {
    width: 120px;
    padding: 0 6px;
  }
  .searchBoxContainer {
    left: 22%;
    width: 200px;
  }
}

.cards_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
}

.card {
  text-align: center;
  margin-bottom: 15px;
  margin-top: 15px;
  width: 50%;
  width: 50%;
}

.card {
  align-self: center;
  background-color: #ffffff91;
  background-image: none;
  background-position: 0 90%;
  background-repeat: repeat no-repeat;
  background-size: 4px 3px;
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  border-style: solid;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, 0.2) 15px 28px 25px -18px;
  box-sizing: border-box;
  color: #41403e;
  cursor: pointer;
  display: inline-block;
  font-family: Neucha, sans-serif;
  font-size: 1rem;
  line-height: 23px;
  outline: none;
  padding: 0.75rem;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.card:hover {
  box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
  transform: translate3d(0, 2px, 0);
}

.card:focus {
  box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;
}

.menu {
  display: flex;
  align-items: center;
  position: relative;
}

.menu-toggle {
    display: none;
  font-size: 25px;
  font-weight: bold;
}

.menu-items {
  display: flex;
  flex-direction: row;
}

@media screen and (max-width: 768px) {
  .menu-toggle {
    right: 10%;
  background-color: #ffffff00;
  border: #082246;
  border-radius: 15px;
  box-shadow: rgb(0, 0, 0) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 28px;
  font-weight: 900;
  justify-content: center;
  line-height: 1.25;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
}

.menu-toggle:hover {
  transform: translateY(-1px);
}

.menu-toggle:active {
  background-color: #F0F0F1;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  color: rgba(0, 0, 0, 0.65);
  transform: translateY(0);
}

  .menu-items {
    display: none;
    justify-self: left;
    position: absolute;
    top: 100%;
    right: 1%;
    width: 100%;
    background-color: #082246;
  }

  .menu-items button {
    width: 100%;
  }
}


