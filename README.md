# set-deep
A utility for setting deeply nested values of object

## Overview

```
import set from 'set-deep';
var a = {
    b: {
        c: {
            d: [
                {},
                {}
            ]
        }
    }
}
set(a, 'b.c', ['d', [1, 'e.f']])('yolo');

// The result is
// {
//     b: {
//         c: {
//             d: [
//                 {},
//                 {
//                     e: {
//                         f: 'yolo'
//                     }
//                 }
//             ]
//         }
//     }
// }

```

## API

### set(obj, ...paths)

The parameters are quite similar to [get-deep](https://github.com/Qrysto/get-deep), but it returns a function that accepts one `value` parameter that is the value you want to set for that path of `obj`. So the full syntax will be:

```
set(obj, ...paths)(value)
```

