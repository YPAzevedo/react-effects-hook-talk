# useLayoutEffect 🖼

Int the majority of cases, useEffect is the effect hook of choice. If you need something to happen before the changes to the DOM are painted to the screen or you need something to always run before all other useEffects, then this is the hook you want. Some examples would be measuring the position of a DOM element on the screen to position another one,

## useLayoutEffect timing ⏱

Let’s understand _*when*_ the effect callback passed into this hook is called. Effects in useLayoutEffect will always be called **after** component render AND it is _synchronous_ with DOM mutations, the effect will run in synchronously meaning the effects will have to finish running for the browser to be able to paint. Since _most_ side-effects don't _need_ to be synchronous useEffect is the way to go most time.

So to update our mental model component starts rendering return JSX, React starts to update the DOM at the same time useLayoutEffects run, browser finishes painting to the scree, then useEffects run.

## Use cases

The main use case for this hook it o measure the DOM before it paint and make updates to it, so that the use won’t see a flicker on the screen for the components being positioned.

## Explore the examples below:
