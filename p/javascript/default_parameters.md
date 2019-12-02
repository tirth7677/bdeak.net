---
layout: post
title: JavaScript default parameters
---

Passing default parameters to JavaScript function is as easy as declaring them in function 'head' (I really can't think of a better name for _that_).

```js
const sayHi = (user = 'default user') => {
  return `Hey, ${user}!`
}
```

Now, if we don't pass `user` parameter or it's undefined, it will use default value.

<!-- resources:
  - name: Default parameters MDN
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters -->