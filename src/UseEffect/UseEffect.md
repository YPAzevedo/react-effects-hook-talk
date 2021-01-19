# useEffect

As we saw in the Basics section, useEffect is used to perform side-effects on your functional components. Here in this section we will dig a little deeper and look at some examples of how and when to use this hook effectively and when _not_ to use it.

## useEffect timing ⏱

But before the examples let’s understand _when_ the effect callback passed into this hook is called. Effects in useEffect will always be called **after** component render AND the browser finishes painting all the changes to the DOM and this is an important distinction to make, it is _asynchronous_ with DOM mutations.

So a good mental model to have is that everything on your functional component runs, then you return your JSX and then useEffects effect callbacks happen.

## Main use cases ✅

Now let's cover the main use cases for useEffect and the ones that you will use 99% of the time is for data fetching and subscriptions.

I will provide some examples below this page of these two main cases.

## What are not good use cases ⛔️

Some not so good(Not saying never, but almost never) use cases for this hook are using it as and observable for internal state, meaning using it to derive state, synchronize state, reset internal state.

I will provide some examples below this page of some of those.

## Explore the examples below:
