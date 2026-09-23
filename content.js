const MARKETPLACE_PATH = "/marketplace";

function checkPage() {
    const path = window.location.pathname;

    if (!path.startsWith(MARKETPLACE_PATH)) {
        window.location.replace(
            "https://www.facebook.com/marketplace"
        );
    }
}

checkPage();

setInterval(checkPage, 500);