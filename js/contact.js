document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form form');
    const nameInput = form.querySelector('input[type="text"]');
    const emailInput = form.querySelector('input[type="email"]');
    const messageInput = form.querySelector('textarea');
    const sendBtn = form.querySelector('.send-btn');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Clear existing error styles
      [nameInput, emailInput, messageInput].forEach(input => {
        input.style.borderColor = '#ccc';
      });
  
      let isValid = true;
  
      // Validate name
      if (nameInput.value.trim() === '') {
        nameInput.style.borderColor = 'red';
        isValid = false;
      }
  
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        emailInput.style.borderColor = 'red';
        isValid = false;
      }
  
      // Validate message
      if (messageInput.value.trim() === '') {
        messageInput.style.borderColor = 'red';
        isValid = false;
      }
  
      if (!isValid) {
        alert('Please fill out all fields correctly.');
        return;
      }
  
      // Show success message (simulate sending)
      sendBtn.disabled = true;
      sendBtn.innerText = 'Sending...';
  
      setTimeout(() => {
        alert('Message sent successfully!');
        form.reset();
        sendBtn.innerText = 'Send Message';
        sendBtn.disabled = false;
      }, 1000);
    });
  
    // Dynamic placeholder color on focus
    [nameInput, emailInput, messageInput].forEach(input => {
      input.addEventListener('focus', () => input.style.borderColor = 'var(--color-emerald)');
      input.addEventListener('blur', () => input.style.borderColor = '#ccc');
    });
  });
  