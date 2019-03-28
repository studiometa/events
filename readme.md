# Events
 
 Three small functions to ease events binding in Javascript.

## Installation

Install the package with your favorite package manager:

```bash
yarn add @studiometa/events
# or 
npm install @studiometa/events
```

## Usage

Import the package in your project and use the `on`, `once` and `off` functions to bind/unbind your events.

```js
import { on, off } from '@studiometa/events';

const links = document.querySelector('a');
const preventDefault = (e) => e.preventDefault();

events.on(links, 'click', preventDefault);
events.off(links, 'click', preventDefault);
```

## Documentation

### `events.on(target, type, handler, options)`

Bind the given `handler` to the `type` event on the `target`.

|  Argument |                 Type                |                                                                      Description                                                                       |
|-----------|-------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| `target`  | `HTMLElement`, `NodeList`, `String` | The target of the event, can be a selector, an element or a list of elements                                                                           |
| `type`    | `String`                            | The type of event                                                                                                                                      |
| `handler` | `Function`                          | The handler function                                                                                                                                   |
| `options` | `Object`                            | Options for the `addEventListener` (see [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters)) |

- `target`
  + Type(s): 
  + Description: 
- `type` (String)
  + Type: `String`
  + Description: The type of event
- `handler` (Function)
  + Type: `Function`
  + Description
- `options` (Object)

### `events.once(target, type, handler, options)`

- `target` (HTMLElement|NodeList|String)
- `type` (String)
- `handler` (Function)
- `options` (Object)

### `events.off(target, type, handler)`

- `target` (HTMLElement|NodeList|String)
- `type` (String)
- `handler` (Function)
