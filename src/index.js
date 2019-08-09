import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";
import "./index.css";

new Keyboard({
  theme: "hg-theme-default numeric-theme",
  layout: {
    default: ["1 2 3 {bksp}", "[4 5 6 7 8 9] {enter}"]
  },
  display: {
    "{enter}": "↵",
    "{bksp}": "⌫"
  }
});
