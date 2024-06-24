export function appearingBlock() {
    const containers = document.querySelectorAll('.container')
    setTimeout(() => {
        containers.forEach((container => {
            container.style.visibility = 'visible';
            container.style.opacity = '1';

        })


        )
    }, 3000);

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const link = card.querySelector('.link');
        const description = card.querySelector('.description');

        link.addEventListener('mouseover', function () {
            description.style.visibility = 'visible';
            description.style.maxHeight = '300px'; // Adjust based on your needs
            description.style.opacity = '1';
        });

        link.addEventListener('mouseout', function () {
            description.style.visibility = 'hidden';
            description.style.maxHeight = '0';
            description.style.opacity = '0';
        });
    });

} 