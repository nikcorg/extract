# extract

A [RequireJS](http://requirejs.org)/AMD loader plugin for extracting a single (or more) properties from an included module.

## Usage

Extract a single property or function from an included module

```javascript
require(["extract!foo?some/module"],
    function(foo) {
        foo("bar");
    }
);
```

The extraction path can include dots for extracting a sub-property.

```javascript
require(["extract!foo.bar?some/module"],
    function(bar) {
        bar("baz");
    }
);
```

When extracting several properties, the result is always a flat object where the name of the extracted property is the leaf of the path.

```javascript
require(["extract!foo.bar,baz.quux?some/module"],
    function(mod) {
        mod.bar();
        mod.quux();
    }
);
```

## LICENSE

`extract` is open source distributed under the MIT License. See `LICENSE`.
