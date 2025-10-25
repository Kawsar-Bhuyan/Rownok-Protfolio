    // Floating image rotation on scroll
    window.addEventListener("scroll", () => {
      const img = document.querySelector(".hero img");
      img.style.transform = `rotate(${window.scrollY / 20}deg)`;
    });