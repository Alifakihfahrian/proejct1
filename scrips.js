// Add interactive effects when page loads
document.addEventListener('DOMContentLoaded', function() {
    const profileContainer = document.querySelector('.profile-container');
    const hobbyItems = document.querySelectorAll('.hobby-list li');
    
    // Add entrance animation to main container
    profileContainer.style.opacity = '0';
    profileContainer.style.transform = 'translateY(50px)';
    
    // Animate main container entrance
    setTimeout(() => {
        profileContainer.style.transition = 'all 0.8s ease';
        profileContainer.style.opacity = '1';
        profileContainer.style.transform = 'translateY(0)';
    }, 100);
    
    // Animate hobby items with staggered effect
    hobbyItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 500 + (index * 100));
    });
    
    // Add click effect for hobby items
    hobbyItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add pulse effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // Add smooth scrolling effect for profile image
    const profileImage = document.querySelector('.profile-image img');
    profileImage.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.3s ease';
    });
    
    // Add particle effect on music link hover
    const musicLink = document.querySelector('.music-link');
    musicLink.addEventListener('mouseenter', function() {
        createParticles(this);
    });
});

// Function to create particle effect
function createParticles(element) {
    const rect = element.getBoundingClientRect();
    const particles = [];
    
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = (rect.left + Math.random() * rect.width) + 'px';
        particle.style.top = (rect.top + Math.random() * rect.height) + 'px';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = '#ff6b6b';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.transition = 'all 1s ease-out';
        
        document.body.appendChild(particle);
        
        // Animate particle
        setTimeout(() => {
            particle.style.transform = `translate(${(Math.random() - 0.5) * 100}px, ${-50 - Math.random() * 50}px)`;
            particle.style.opacity = '0';
        }, 10);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 1000);
    }
}

// Add typing effect to name (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}