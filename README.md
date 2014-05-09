# Differences between the Closure type system and TypeScript

## Differences that are resolved automatically

### Closure has unions, TypeScript has overloads

Closure has unions such as:

```javascript
/** @typedef {number|string} */
MyType;
```

and:

```javascript
/** @param {number|string} x */
myFunction = function(x) { };
```

Closure unions are converted using the following rules:

#### Expand unions into overloads

```javascript
/** @param {number|string} x */
myFunction = function(x) { };
```

becomes:

```typescript
declare function myFunction(x: number);
declare function myFunction(x: string);
```

This works for nested union types as well:

```javascript
/** @param {Iterable<number|string>} x */
myFunction = function(x) { };
```

becomes:

```typescript
declare function myFunction(x: number);
declare function myFunction(x: string);
```

#### Inline typedef unions where possible

```javascript
/** @typedef {number|string} */
MyTypeDef;

/** @param {MyTypeDef} x */
myFunction = function(x) { };
```

becomes:

```typescript
declare function myFunction(x: number);
declare function myFunction(x: string);
```

#### Create empty interfaces when all else fails

```javascript
/** @typedef {Array<T>|string} */
AnnoyingType;
/** @param {AnnoyingType<number>} x */
myFunction = function(x) { };
```

becomes:

```typescript
interface AnnoyingType { /* Array<T>|string */ }
declare function myFunction(x: AnnoyingType);
```

### Static inheritance

In typescript, static properties of classes are inherited:

```typescript
declare class SuperClass { }
declare module SuperClass {
    var myStaticProperty: number;
}

declare class SubClass extends SuperClass { }

SubClass.myStaticProperty; // : number
```

In Closure they are not:
```javascript
/** @constructor */
SuperClass = function() { };
/** @type {string} */
SuperClass.myStaticProperty;

/** @extends {SuperClass} */
SubClass = function() { };
goog.inherits(SubClass, SuperClass);

SubClass.myStaticProperty; // undefined
```

The fix create a common superclass without the static properties:

```typescript
declare class _SuperClass { } // fake common superclass without myStaticProperty
declare class SuperClass extends _SuperClass { }
declare module SuperClass { myStaticProperty: string; }

declare class SubClass extends _SuperClass { }
declare module SubClass { myStaticProperty: number }
```

### Private types

In Closure, the `@private` annotation is not enforced, and private type definitions, interfaces, classes and enums are
often used in public function declarations. Therefore, these private types are included in the TypeScript definition.

## Differences that must be fixed manually

### Shadowing

In typescript, the current module shadows the global namespace:

```typescript
declare class MyClass;
declare module myModule {
    class MyClass;
    var myValue : MyClass; // Refers to myModule.MyClass, not global MyClass
```

This can create problems when referring to global variables that are shadowed by locals:

```javascript
goog.Error = function() { }

/**
 * @param {Error} e
 */
goog.f = function(e) { };
```

becomes:

```typescript
declare module goog {
    class Error { }

    function f(e: Error) { }
}
```
