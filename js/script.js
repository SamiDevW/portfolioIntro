
import { appearingBlock } from "./appearingBlock.js";
import { typingText } from "./typingText.js";
document.addEventListener("DOMContentLoaded", function () {
    typingText();
    appearingBlock();
    window.addEventListener('resize', () => {
        appearingBlock();
    });
});