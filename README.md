# `Object.fromEntries()` polyfill

Provides polyfill for `Object.fromEntries()`.

## Usage

Importing the module will automatically monkey-patch the Object class, adding the static method only if needed. If the functionality is already present, nothing is done.

```ts
require('polyfill-object.fromentries');
```
or
```ts
import 'polyfill-object.fromentries';
```
```ts
Object.fromEntries(...);
```