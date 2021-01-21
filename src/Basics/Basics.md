# Basics 📦

In this section we will cover the overlapping basics between these hooks, they have a huge overlap in API, and how they work.

## Side-effects 🤢

First of all to understand useEffect/useLayoutEffect we need to cover some basic knowledge about then. First of all we are going to look at why were these hooks created and explore it's API, from the naming of these hooks you can see that they have in common the effect part and that's exactly what these hooks where made for perform side-effects in functional components.

But, what are side-effects? According to the React docs some examples of side-effects are:

> Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.

So basically anything that reaches to the "outside" world, that also includes logging stuff. But to be more precise in the functional programming paradigm side-effects are anything that has any observable effects outside the function being called.

## Effect Hooks API 🎛

So now that we understand a little bit what side-effects are we can take a look at the API for these hooks.

The API is pretty simple, it accepts as the first argument a function often called a `effect callback` thats where your side-effects will happen, also inside this callback you can return a function to be called on component unmount or on re-render before the new effect is called, that function is called a `cleanup function` and as the second argument you have your `dependency array`.

```jsx
useEffect(() => {
  /**
   ** Perform your side-effects here.
   **/
}, []);
```

## Dependency Array 🙇🏻‍♂️

The dependency array as a second parameter is optional. And by default with no dependency array your effect will run every time your component re-renders.

```jsx
useEffect(() => {
  /**
   ** Perform your side-effects here.
   ** That will run on every render
   **/
});
```

You can have a empty array as your dependency array, that means that that effect will only run on the first render(on component mount).

```jsx
useEffect(() => {
  /**
   ** Perform your side-effects here.
   ** That will run only on the first render
   **/
}, []);
```

If you have variables that you reference from your functional component render AND that _can_ change during render, inside you `effect callback` those should be added to your dependency array, thats a convention from React to avoid bugs due to stale closures.

```jsx
const [count, setCount] = React.useState(0);

useEffect(() => {
  /**
   ** Perform your side-effects here, like logging count.
   ** That will run only when count changes.
   **/
  console.log(count);
}, [count]);
```

## Explore the examples below:
