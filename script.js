document.addEventListener("DOMContentLoaded", () => {
    // Reveal Elements on Scroll
    const reveals = document.querySelectorAll(".reveal, .reveal-item");

    const revealOnScroll = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    // Do not unobserve if we want them to re-animate, but typical portfolio just activates once
                    observer.unobserve(entry.target); 
                }
            });
        }, 
        {
            root: null,
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        }
    );

    reveals.forEach(element => revealOnScroll.observe(element));

    // Dynamic Header Background
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.background = "rgba(10, 11, 16, 0.95)";
            header.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.5)";
        } else {
            header.style.background = "rgba(10, 11, 16, 0.8)";
            header.style.boxShadow = "none";
        }
    });

    // Parallax effect for blobs based on mouse movement
    const blobs = document.querySelectorAll(".blob");
    document.addEventListener("mousemove", (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 30; // Different speed for each blob
            const offsetX = (x - 0.5) * speed;
            const offsetY = (y - 0.5) * speed;
            // The float animation handle basic movement, we append standard transform here
            blob.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });
    });

    // Code Typing Effect for Header (Extra flair)
    const codeBlock = document.querySelector('.code-window pre code');
    if(codeBlock) {
        // Just keeping it static for now as it looks clean, but could be extended here
        // Element is already loaded with HTML structure
    }
});
