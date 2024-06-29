export function typingText() {

    const textElement = document.getElementById('typing-text');
    const text = 'Welcome to My PORTFOLIO';
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100);
        } else {
            textElement.style.borderRight = 'none';
            setTimeout(() => {
                textElement.style.borderRight = 'none';
            }, 4000);

        }
    }

    type();
}