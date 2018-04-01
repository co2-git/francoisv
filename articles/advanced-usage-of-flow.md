Advanced usage of flow
===

[Flow](https://flow.org) is a javascript add-on to add strong type. It is very similar to [TypeScript](http://www.typescriptlang.org/). For this article, I assume you have a basic knowledge of Flow.

# Tip

You can use the [flow console](https://flow.org/try) to try all the examples shown below.

# Maybe types

A maybe type means a variable could be either of a certain type or null, or undefined.

https://gist.github.com/co2-git/09e770da044223d5cb34ea1a76ac5607.js

Note that a maybe type is just a shortcut for `let foo: string |  null | undefined`.

# Tuple types

A tuple is an array with a defined order of types. Say you have an array that must be composed of a string, then a number and then a boolean. Note that it must match the length as well.

https://gist.github.com/co2-git/6bb0cea7452b782e8a891c120365b5f7.js

## Advanced tuples

https://gist.github.com/co2-git/9ee7f921aa082de3038a7c11868e63df.js

# Union types

Union types allow you to create mixed (or *enum*) types.

https://gist.github.com/co2-git/614d3ef971ba9250d5f6e63f8cd4608b.js

Note that if you use union types, Flow expects you to use conditions before working with the typed variables.

https://gist.github.com/co2-git/5d52dd68c0194b9844a0183f19d669d6.js

# Intersection types

Intersection types allow merging different types together.

https://gist.github.com/co2-git/62a7ba9b0375340dfa34190ed97211b9.js

# Exact types

Exact types enforce exactitude of keys of an object.

https://gist.github.com/co2-git/f166981182085dddbe00d301472fe389.js

# Read only types

You can enforce a `read-only` constraint to your variables using the `+` sign.

https://gist.github.com/co2-git/f95cdacf0b1b61e08d9e36fcd59b6555.js

# Access to a type property

The `$PropertyType<>` utility type allows you to reference a property inside a type.

https://gist.github.com/co2-git/4a5355e0e563f041df36a3f7e35cd81d.js

# Keys

More advanced referencing can be done by using keys of an object as types.

https://gist.github.com/co2-git/27ac0f0e0e8ec4156dcc55559f8fca38.js

===

That's it! There are more you can do with Flow so check out [the official documentation](https://flow.org/en/docs/types/). Cheers!
