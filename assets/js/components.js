class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <a class="skip-link" href="#main-content">Skip to content</a>
        <header class="site-header">
            <div class="header-inner">
                <a class="site-brand" href="index.html">Millane Law<span>John Millane · Attorney at Law</span></a>
                <nav aria-label="Main navigation">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </nav>
                <a href="tel:7166894449" class="header-call" aria-label="Call Millane Law at 716-689-4449">716-689-4449</a>
            </div>
        </header>
        `;
        const page = window.location.pathname.split('/').pop() || 'index.html';
        this.querySelectorAll('nav a').forEach(link => {
            if (link.getAttribute('href') === page) link.setAttribute('aria-current', 'page');
        });
    }
}

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="site-footer">
          <div class="footer-inner">
            <div class="footer-top">
              <p class="footer-brand">Millane Law<span>Buffalo &amp; surrounding communities</span></p>
              <ul class="footer-links">
                <li><a href="privacy.html">Privacy Policy</a></li>
                <li><a href="disclaimer.html">Disclaimer</a></li>
                <li><a href="sitemap.html">Sitemap</a></li>
              </ul>
            </div>
            <p class="advertising">Attorney Advertising. Prior results do not guarantee a similar outcome.</p>
            <div class="footer-bottom">
                <span>&copy; 2026 Millane Law. All rights reserved.</span>
                <a href="https://www.linkedin.com/in/smillane/" target="_blank" rel="noopener noreferrer">Site by Sean Millane</a>
                <a href="tel:7166894449">716-689-4449</a>
            </div>
          </div>
        </footer>
        `;
    }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
