document.addEventListener("DOMContentLoaded", () => {
    // Dynamic: Add animation to blog articles
    const articles = document.querySelectorAll('.blog-posts article');
    articles.forEach((article, index) => {
        article.style.opacity = 0;
        article.style.transform = 'translateY(20px)';
        setTimeout(() => {
            article.style.transition = 'all 0.6s ease-out';
            article.style.opacity = 1;
            article.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Add interactivity to "Read More" links
    const readMoreLinks = document.querySelectorAll('.blog-posts article a');
    readMoreLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert("This feature is coming soon. Stay tuned!");
        });
    });

    // Form validation if any form exists
    const forms = document.querySelectorAll("form");
    forms.forEach(form => {
        form.addEventListener("submit", (e) => {
            let valid = true;
            const inputs = form.querySelectorAll("input[required], textarea[required]");
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    valid = false;
                    input.style.borderColor = "red";
                } else {
                    input.style.borderColor = "";
                }
            });

            if (!valid) {
                e.preventDefault();
                alert("Please fill in all required fields.");
            }
        });
    });
});
