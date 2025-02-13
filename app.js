
tailwind.config = {
theme: {
extend: {
colors: {
primary: '#6366f1',
secondary: '#f43f5e'
},
borderRadius: {
'none': '0px',
'sm': '4px',
DEFAULT: '8px',
'md': '12px',
'lg': '16px',
'xl': '20px',
'2xl': '24px',
'3xl': '32px',
'full': '9999px',
'button': '8px'
}
}
}
}

document.addEventListener('DOMContentLoaded', function() {
    // Add animation classes to elements when they come into view
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add('animate-fadeInUp');
    }
    });
    }, { threshold: 0.1 });
    // Observe all section headings and product cards
    document.querySelectorAll('section h2, .product-card').forEach(el => observer.observe(el));
    });
    let cartItems = 0;
    function addToCart(productName, price) {
    cartItems++;
    const countElement = document.getElementById('cartCount');
    countElement.textContent = cartItems;
    countElement.style.animation = 'none';
    countElement.offsetHeight; // Trigger reflow
    countElement.style.animation = 'pulse 2s infinite';
    showToast(`Added ${productName} to cart - $${price}`);
    }
    function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.textContent = message;
    toast.style.display = 'block';
    toast.style.animation = 'slideIn 0.3s ease-out';
    setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease-out';
    setTimeout(() => {
    toast.style.display = 'none';
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(0)';
    }, 300);
    }, 3000);
    }
    function toggleCart() {
    showToast('Cart feature coming soon!');
    }
