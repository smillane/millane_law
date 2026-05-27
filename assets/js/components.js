class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <div class="header-inner">
                <h1><a href="index.html">Millane Law</a></h1>
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="tel:7166894449" class="button">Call: 716-689-4449</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        `;
    }
}

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <ul class="copyright">
                <li><a href="privacy.html">Privacy Policy</a></li>
                <li><a href="disclaimer.html">Disclaimer</a></li>
                <li><a href="sitemap.html">Sitemap</a></li>
            </ul>
            <ul class="copyright">
                <li>&copy; 2026 Copyright Millane Law - All Rights Reserved - Attorney Advertising. Prior results do not guarantee a similar outcome.</li>
                <li><a href="https://www.linkedin.com/in/smillane/" target="_blank" rel="noopener noreferrer">Site by Sean Millane</a></li>
                <li><a href="tel:7166894449">716-689-4449</a></li>
            </ul>
        </footer>
        `;
    }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
