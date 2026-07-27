(() => {
    const header = document.querySelector(".site-header");
    const nav = document.querySelector(".site-nav");
    const toggle = document.querySelector(".nav-toggle");
    const yearEl = document.getElementById("year");
    const revealEls = document.querySelectorAll("[data-reveal]");
    const typedEl = document.querySelector(".typed-text");
    const cursorEl = document.querySelector(".typed-cursor");
    const mainEl = document.getElementById("main-content");
    const footerEl = document.querySelector(".site-footer");

    if (yearEl) {
        yearEl.textContent = String(new Date().getFullYear());
    }

    const prefersReduced =
        window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const runTypingEffect = () => {
        if (!typedEl) return;

        let phrases = [];
        try {
            phrases = JSON.parse(typedEl.getAttribute("data-type-phrases") || "[]");
        } catch {
            phrases = [];
        }

        if (!phrases.length) {
            const fallback = typedEl.getAttribute("data-type");
            if (fallback) phrases = [fallback];
        }

        if (!phrases.length) return;

        if (prefersReduced) {
            typedEl.textContent = phrases[0];
            if (cursorEl) cursorEl.classList.add("is-done");
            return;
        }

        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const typeDelay = 42;
        const deleteDelay = 28;
        const holdDelay = 1600;
        const nextPhraseDelay = 320;
        const startDelay = 350;

        const tick = () => {
            const current = phrases[phraseIndex];

            if (!isDeleting) {
                charIndex += 1;
                typedEl.textContent = current.slice(0, charIndex);

                if (charIndex === current.length) {
                    isDeleting = true;
                    window.setTimeout(tick, holdDelay);
                    return;
                }

                window.setTimeout(tick, typeDelay);
                return;
            }

            charIndex -= 1;
            typedEl.textContent = current.slice(0, Math.max(charIndex, 0));

            if (charIndex <= 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                window.setTimeout(tick, nextPhraseDelay);
                return;
            }

            window.setTimeout(tick, deleteDelay);
        };

        window.setTimeout(tick, startDelay);
    };

    runTypingEffect();

    const onScroll = () => {
        if (!header) return;
        header.classList.toggle("is-scrolled", window.scrollY > 12);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (toggle && nav) {
        const navLinks = Array.from(nav.querySelectorAll("a"));
        let lastFocused = null;

        const setInertBackground = (open) => {
            [mainEl, footerEl].forEach((el) => {
                if (!el) return;
                if (open) el.setAttribute("inert", "");
                else el.removeAttribute("inert");
            });
        };

        const setOpen = (open) => {
            toggle.setAttribute("aria-expanded", String(open));
            toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
            nav.classList.toggle("is-open", open);
            document.body.classList.toggle("nav-open", open);
            setInertBackground(open);

            if (open) {
                lastFocused = document.activeElement;
                const firstLink = navLinks[0];
                if (firstLink) firstLink.focus();
            } else if (lastFocused && typeof lastFocused.focus === "function") {
                lastFocused.focus();
                lastFocused = null;
            }
        };

        toggle.addEventListener("click", () => {
            const open = toggle.getAttribute("aria-expanded") !== "true";
            setOpen(open);
        });

        navLinks.forEach((link) => {
            link.addEventListener("click", () => setOpen(false));
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
                setOpen(false);
                toggle.focus();
                return;
            }

            if (event.key !== "Tab" || toggle.getAttribute("aria-expanded") !== "true") {
                return;
            }

            const focusable = [toggle, ...navLinks];
            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        });

        window.addEventListener(
            "resize",
            () => {
                if (window.matchMedia("(min-width: 721px)").matches) {
                    setOpen(false);
                }
            },
            { passive: true }
        );
    }

    if (prefersReduced || !("IntersectionObserver" in window)) {
        revealEls.forEach((el) => el.classList.add("is-visible"));
    } else {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                });
            },
            {
                rootMargin: "0px 0px -8% 0px",
                threshold: 0.12,
            }
        );

        revealEls.forEach((el) => observer.observe(el));
    }

    const focusHashTarget = () => {
        const id = window.location.hash.slice(1);
        if (!id) return;
        const target = document.getElementById(id);
        if (target && typeof target.focus === "function") {
            target.focus({ preventScroll: true });
        }
    };

    window.addEventListener("hashchange", focusHashTarget);
    focusHashTarget();
})();
