[![Build Status](https://travis-ci.org/Enrise/BemClassNames.svg?branch=master)](https://travis-ci.org/Enrise/BemClassNames)

# BemClassNames

An utility function for writing simple prefixed classnames.

It is just a wrapper around [classnames](https://www.npmjs.com/package/classnames) so you can use every feature from that library.

## How to use

The following component:

```tsx
import React from "react";
import bemClassNames from "bem-class-names";

const cn = bemClassNames("Main");

const Main = () => (
  <div classnames={cn()}>
    <h1 classNames={cn("title")}>The title</h1>
    <div classNames={cn("content")}>The content</div>
  </div>
);

export default Main;
```

Will result in:

```html
<div class="Main">
    <h1 class="Main-title">The title</h1>
    <div class="Main-content">The content</div>
</div>
```
