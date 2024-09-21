import { defineCustomElement } from "vue";
import "./style.css";
import App from "./App.vue";
const VueAppElement = defineCustomElement(App, {
  styles: [
    `
        a {
            font-weight: 500;
            color: #646cff;
            text-decoration: inherit;
        }
        a:hover {
            color: #535bf2;
        }

        h1 {
            font-size: 3.2em;
            line-height: 1.1;
        }

        button {
            border-radius: 8px;
            border: 1px solid transparent;
            padding: 0.6em 1.2em;
            font-size: 1em;
            font-weight: 500;
            font-family: inherit;
            background-color: #1a1a1a;
            cursor: pointer;
            transition: border-color 0.25s;
        }
        button:hover {
            border-color: #646cff;
        }
        button:focus,
        button:focus-visible {
            outline: 4px auto -webkit-focus-ring-color;
        }

        .card {
            padding: 2em;
        }

        .logo {
            height: 6em;
            padding: 1.5em;
            will-change: filter;
            transition: filter 300ms;
        }
        .logo:hover {
            filter: drop-shadow(0 0 2em #646cffaa);
        }
        .logo.vue:hover {
            filter: drop-shadow(0 0 2em #42b883aa);
        }

        .read-the-docs {
          color: #888;
        }

        @media (prefers-color-scheme: light) {
            a:hover {
                color: #747bff;
            }
            button {
                background-color: #f9f9f9;
            }
        }
    `,
  ],
});
customElements.define("vue-app-element", VueAppElement);
