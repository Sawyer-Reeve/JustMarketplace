# JustMarketplace

JustMarketplace is a minimal Chrome extension that restricts Facebook
navigation to Facebook Marketplace.

The goal is simple: allow Marketplace to remain useful without providing
easy access to the rest of Facebook.

## What it allows

JustMarketplace allows pages under:

`https://www.facebook.com/marketplace/`

This includes Marketplace listings, searches, seller profiles, and other
Marketplace pages.

## What it blocks

Navigating to other Facebook pages, such as the Feed, Reels, Groups, or
profiles outside Marketplace, redirects the browser back to Marketplace.

Messenger is not modified or monitored by this extension.

## How it works

JustMarketplace uses two small mechanisms:

- Chrome declarative network rules catch normal navigation to non-Marketplace
  Facebook pages.
- A small content script watches for Facebook's client-side navigation and
  redirects back to Marketplace when necessary.

## Permissions

The extension requests access only to:

`https://www.facebook.com/*`

It does not request access to browsing history, cookies, passwords,
bookmarks, downloads, Messenger, or other websites.

## Installation

JustMarketplace is currently intended to be loaded as an unpacked Chrome
extension.

1. Download or clone this repository.
2. Open `chrome://extensions` in Chrome.
3. Enable **Developer mode**.
4. Select **Load unpacked**.
5. Choose the JustMarketplace repository folder.

## Project Structure

```text
JustMarketplace/
├── manifest.json
├── content.js
├── rules.json
└── README.md