#!/usr/bin/env node

// Exploring some class and prototype stuff.
//
// In particular, I've run into a problem because the class instance is escaped and we lose the 'this' context: https://github.com/electron/forge/blame/main/packages/api/core/src/util/plugin-interface.ts#L154
// This problem is also well described here: https://stackoverflow.com/q/56503531

class Foo {
    constructor(id) {
        this.id = id;
    }

    toString() {
        return `Foo(${this.id})`;
    }
}


// Let's call foo's toString() function using the method-style invocation. By method-style, I mean that we're calling
// the function on the object itself, so the `this` context is preserved.
{
    let foo = new Foo(1);
    console.log(foo.toString());
}

// Now, let's call foo's toString() function by getting a reference to it and then calling it. This will yield an error
// because the `this` context is lost. The reference is only to the prototype function, not the instance function.
{
    let foo = new Foo(1);
    let toString = foo.toString;

    try {
        console.log(toString());
    } catch (e) {
        console.log(e);
    }
}

// How can we work around this? We can use the `bind` function to bind the `this` context.
{
    let foo = new Foo(1);
    let toString = foo.toString.bind(foo);
    console.log(toString());
}

// Let's try to bake this behavior straight into the class.
{
    class Bar {
        constructor(id) {
            this.id = id;
            this.toString = this.toString.bind(this); // This is the trick.
        }

        toString() {
            return `Foo(${this.id})`;
        }
    }

    let foo = new Bar(1);
    let toString = foo.toString;
    console.log(toString());
}
