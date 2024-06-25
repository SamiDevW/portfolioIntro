
import { appearingBlock } from "./appearingBlock.js";
import { typingText } from "./typingText.js";
document.addEventListener("DOMContentLoaded", function () {
    const isLargeScreen = window.matchMedia("(min-width: 768px)").matches;

    typingText();
    if (!isLargeScreen) {
        return; // Exit the function if the screen size is smaller than 768px
    }
    appearingBlock();
});