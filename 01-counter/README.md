# React Counter

A configurable, accessible counter component built in React as a machine coding practice exercise. Supports bounded limits, custom step size, and safe handling of invalid input.

## Demo

```
[ - ]      3      [ + ]      [ Reset ]
        [ Step size: 1 ]
```

## Features

- **Increment / Decrement / Reset** — basic counter operations
- **Bounded limits** — configurable `min` and `max`, with buttons that disable at the limit instead of failing silently
- **Custom step size** — increment/decrement by any user-defined step via an input field
- **Input safety** — invalid, empty, or negative step values fall back to a safe default (`1`) instead of corrupting state
- **Accessible** — `aria-live` region announces count changes to screen readers; buttons and input have descriptive `aria-label`s
- **Reusable** — all bounds and the initial value are props, not hardcoded, so the component can be dropped in anywhere

## Props

| Prop           | Type   | Default | Description                          |
|----------------|--------|---------|---------------------------------------|
| `min`          | number | `0`     | Minimum allowed count                |
| `max`          | number | `10`    | Maximum allowed count                |
| `initialState` | number | `0`     | Starting value, also used by Reset   |

## Usage

```jsx
import Counter from "./Counter";

function App() {
  return <Counter min={0} max={50} initialState={10} />;
}
```

## Edge cases handled

- **Overshoot prevention** — increment/decrement clamp against `min`/`max` inside the state setter itself, not just via a pre-click check, so a large step can never push the count past its bounds.
- **NaN-proofing** — the step input can be emptied or filled with non-numeric text without breaking the counter; invalid values fall back to `1` via `Number(rawValue) || 1`.
- **Negative step** — a negative step value is clamped to a minimum of `1`, so it can never silently reverse increment/decrement behavior.
- **Derived disabled state** — whether a button is disabled is computed fresh on every render from `count`, `step`, `min`, and `max` (not tracked as separate state), so it can never go stale or get stuck.

## Possible extensions

This component is part of a larger set of counter variations used for interview practice. Not yet implemented here:

- Controlled/uncontrolled mode (`value` + `onChange` from parent)
- Multiple independent counter instances in a list
- Async increment/decrement (simulated API call + loading state + race condition handling)
- Debounced/throttled clicks
- Long-press to auto-increment
- Persisted state via `localStorage`
- Full keyboard support (arrow keys to inc/dec)

## Tech

- React (function component, hooks: `useState`)
- No external dependencies