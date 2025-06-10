document.addEventListener('DOMContentLoaded', () => {
    // Array of card data: image path, front label, and back message
    const cardsData = [
        {
            imageSrc: 'images/pic1.jpg', // Make sure to create an 'images' folder and add your photos!
            label: 'Chapter 1: Childhood Fun',
            message: 'Happy Birthday, [Name]! Remembering all the silly games and endless laughter we shared during our childhood. May your special day be filled with as much joy and fun as those days!'
        },
        {
            imageSrc: 'images/pic2.jpg',
            label: 'Chapter 2: Teen Adventures',
            message: 'To my amazing friend, on your birthday! From navigating school dramas to epic road trips and late-night talks, every moment with you has been an adventure. Here’s to many more unforgettable experiences!'
        },
        {
            imageSrc: 'images/pic3.jpg',
            label: 'Chapter 3: College Days',
            message: 'Cheers to another year! Recalling those intense late-night study sessions that always turned into early morning philosophical discussions. You made college truly unforgettable. Wishing you the happiest birthday!'
        },
        {
            imageSrc: 'images/pic4.jpg',
            label: 'Chapter 4: New Beginnings',
            message: 'Happy Birthday! So incredibly proud of all you’ve accomplished and the wonderful, inspiring person you’ve become. Here’s to new horizons, exciting journeys, and achieving all your dreams!'
        },
        {
            imageSrc: 'images/pic5.jpg',
            label: 'Chapter 5: Unforgettable Moments',
            message: 'Dearest [Name], happy birthday! Every single memory with you is a treasure I hold dear. Thank you for being such a bright, constant light in my life. Wishing you all the happiness and love in the world!'
        },
        {
            imageSrc: 'images/pic6.jpg',
            label: 'Chapter 6: Today and Always',
            message: 'Happy Birthday! This day is all about celebrating you, your spirit, and everything that makes you unique. May your year be filled with immense love, endless laughter, great success, and everything wonderful you deserve!'
        },
        {
            imageSrc: 'images/pic7.jpg',
            label: 'Chapter 7: Bright Future',
            message: 'Wishing you a birthday as bright and beautiful as your future promises to be! Keep shining, keep growing, and keep making the world a better place. Happy Birthday!'
        }
        // Add more card objects here following the same structure:
        // {
        //     imageSrc: 'images/your_pic.jpg',
        //     label: 'Your Custom Title',
        //     message: 'Your special birthday message here.'
        // },
    ];

    const timelineContainer = document.querySelector('.timeline-container');

    // Function to create a single card HTML element
    const createCard = (data) => {
        const cardWrapper = document.createElement('div');
        cardWrapper.classList.add('card-wrapper');

        const card = document.createElement('div');
        card.classList.add('card');

        const cardFront = document.createElement('div');
        cardFront.classList.add('card-face', 'card-front');
        cardFront.style.backgroundImage = `url(${data.imageSrc})`;
        cardFront.setAttribute('data-label', data.label); // For the title on the front

        const cardBack = document.createElement('div');
        cardBack.classList.add('card-face', 'card-back');
        const messageParagraph = document.createElement('p');
        messageParagraph.textContent = data.message;
        cardBack.appendChild(messageParagraph);

        card.appendChild(cardFront);
        card.appendChild(cardBack);
        cardWrapper.appendChild(card);

        // Add flip functionality on click
        card.addEventListener('click', () => {
            card.classList.toggle('is-flipped');
        });

        return cardWrapper;
    };

    // Dynamically add all cards to the timeline
    cardsData.forEach(data => {
        timelineContainer.appendChild(createCard(data));
    });

    // Intersection Observer for "fly-in" animation
    const observerOptions = {
        root: null, // observe against the viewport
        rootMargin: '0px',
        threshold: 0.3 // Trigger when 30% of the card is visible
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If the card is in view, add the 'animated' class
                entry.target.classList.add('animated');
                // Optional: Uncomment the next line if you want the animation to happen only once
                // observer.unobserve(entry.target);
            } else {
                // If the card goes out of view, remove 'animated' class to allow re-animation on scroll back
                entry.target.classList.remove('animated');
            }
        });
    }, observerOptions);

    // Observe each card wrapper for intersection
    document.querySelectorAll('.card-wrapper').forEach(card => {
        cardObserver.observe(card);
    });
});