# Product List with Cart

A vanilla JS machine coding exercise: fetches products from a public API, renders them as cards, and lets the user add items to a cart.

## Features

- **Fetches products** from [dummyjson.com](https://dummyjson.com/products) on load
- **Loading / error / empty states** — shows a loading message while fetching, an error message if the request fails, and a "No products found" message if the API returns an empty list
- **Product cards** — title, description, stock, rating, and thumbnail image rendered per product
- **Add to cart** — clicking "Add to cart" on a card adds that product to an in-memory `cart` array and persists it to `localStorage`
- **Cart summary** — a separate cart button logs the number of items and full cart contents to the console

## DOM structure expected (HTML)

```html
<div id="loading-error"></div>
<button id="cart-button">Cart</button>
<div id="list"></div>
```

## How it works

1. `loadProducts()` runs on page load, shows a loading message, fetches from the API, then renders cards or an error.
2. Each card is built with `createProductCard(...)` and appended to `#list`.
3. Clicking a card's "Add to cart" button pushes `{ id, title }` into the `cart` array and writes it to `localStorage`.
4. Clicking `#cart-button` logs the cart count and contents to the console.

## Known issues / open items

This version has been through a few review rounds. Outstanding items not yet fixed:

- **`error.messsage` typo** — should be `error.message`; currently error messages always render as `"undefined"`
- **Two sources of truth for cart** — the cart button reads from `localStorage` instead of the in-memory `cart` array, so they can drift apart (e.g. if `localStorage` is blocked or throws)
- **Duplicate adds** — adding the same product twice creates two separate cart entries instead of incrementing a quantity
- **Image fallback** — missing thumbnail falls back to the literal string `"no image"` as `src`, which renders a broken image icon instead of a placeholder
- **No `alt` text** on product images
- **No visual feedback** on add-to-cart (console-only, nothing shown in the UI)

## Possible extensions

- Quantity-aware cart (`{ id, title, quantity }`) instead of duplicate entries
- Restore cart from `localStorage` on page load, not just persist to it
- Visual cart badge/toast on add
- Search or category filtering
- Remove-from-cart / clear-cart actions

## Tech

- Vanilla JavaScript (no framework)
- `fetch` + `async/await`
- `localStorage` for cart persistence