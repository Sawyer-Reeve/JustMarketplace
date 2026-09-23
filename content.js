const MARKETPLACE_PATH = "/marketplace";
const MARKETPLACE_URL = "https://www.facebook.com/marketplace/";

function isMarketplacePage() {
    const path = window.location.pathname;

    return (
        path === MARKETPLACE_PATH ||
        path.startsWith(MARKETPLACE_PATH + "/")
    );
}

function checkPage() {
    if (!isMarketplacePage()) {
        window.location.replace(MARKETPLACE_URL);
    }
}

checkPage();

setInterval(checkPage, 500);