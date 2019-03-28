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
const preventDefault = e => e.preventDefault();

on(links, 'click', preventDefault);
off(links, 'click', preventDefault);
```

## Documentation

### `on(target, type, handler, options)`

Bind the given `handler` to the `type` event on the `target`.

|  Argument |                 Type                |                                                                      Description                                                                       |
|-----------|-------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| `target`  | `HTMLElement`, `NodeList`, `String` | The target of the event, can be a selector, an element or a list of elements                                                                           |
| `type`    | `String`                            | The type of event                                                                                                                                      |
| `handler` | `Function`                          | The handler function                                                                                                                                   |
| `options` | `Object`                            | Options for the `addEventListener` ([documentation](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters)) |


### `once(target, type, handler, options)`

Bind the given `handler` to one and only one `type` event on the `target`.

|  Argument |                 Type                |                                                                      Description                                                                       |
|-----------|-------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| `target`  | `HTMLElement`, `NodeList`, `String` | The target of the event, can be a selector, an element or a list of elements                                                                           |
| `type`    | `String`                            | The type of event                                                                                                                                      |
| `handler` | `Function`                          | The handler function                                                                                                                                   |
| `options` | `Object`                            | Options for the `addEventListener` ([documentation](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters)) |

### `off(target, type, handler)`

Unbind the given `handler` for the `type` event on the given `target`.

|  Argument |                 Type                |                                                                      Description                                                                       |
|-----------|-------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| `target`  | `HTMLElement`, `NodeList`, `String` | The target of the event, can be a selector, an element or a list of elements                                                                           |
| `type`    | `String`                            | The type of event                                                                                                                                      |
| `handler` | `Function`                          | The handler function                                                                                                                                   |
