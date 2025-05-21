// Enable flip on click for value items
document.querySelectorAll('.value-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('flipped');
    });
});

// Expand/collapse functionality for "Our Story" and "Mission & Vision"
const expandableSections = [
    { id: 'history', label: 'Our Story' },
    { id: 'mission', label: 'Mission & Vision' }
];

expandableSections.forEach(({ id, label }) => {
    const section = document.getElementById(id);
    if (section) {
        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = 'Read More';
        toggleBtn.style.marginTop = '1rem';
        toggleBtn.style.background = '#2ecc71';
        toggleBtn.style.color = '#fff';
        toggleBtn.style.border = 'none';
        toggleBtn.style.padding = '0.5rem 1rem';
        toggleBtn.style.borderRadius = '8px';
        toggleBtn.style.cursor = 'pointer';

        let expanded = false;
        const fullHeight = section.scrollHeight;

        toggleBtn.addEventListener('click', () => {
            expanded = !expanded;
            section.style.maxHeight = expanded ? fullHeight + 'px' : '150px';
            toggleBtn.textContent = expanded ? 'Show Less' : 'Read More';
        });

        section.style.overflow = 'hidden';
        section.style.transition = 'max-height 0.5s ease';
        section.style.maxHeight = '150px';

        section.appendChild(toggleBtn);
    }
});
