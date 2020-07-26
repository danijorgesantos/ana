# Ana

This Angular Application was made using BEM methodology, Facade Pattern and NgRx, and dumb and smart components.

## BEM methodology

- BEM (Block, Element, Modifier) is a component-based approach to web development. The idea behind it is to divide the user interface into independent blocks. This makes interface development easy and fast even with a complex UI, and it allows reuse of existing code without copying and pasting.


## Facade Pattern and NgRx


![alt text](https://github.com/danijorgesantos/ana/blob/master/reduxFlow.png?raw=true)

Why NgRx if Angular already has a Dependency Injection system?

"You’ll know when you need Redux. If you aren’t sure if you need it, you don’t need it."

- they solve the problem of component interaction via the Observable pattern

- they provide a client-side cache if needed, to avoid doing repeated Ajax requests

- They provide a place to put temporary UI state, as we fill in a large form or want to store search criteria in a search form when navigating between router views

- and they solve the problem of allowing modification of client side transient data by multiple actors

- One of the main benefits often presented to introduce a store is that it will improve the testability of the application.

- The tooling ecosystem it provides

In the middle of all of this, why use the Facade Pattern?

- The facade allows the components to became isolated and only presentational components that simply render data from the Facade observables.


## Dumb and Smart Components

- Smart components keep track of state and interact with the Facade.

- dumb components simply render the information that is given by the Smart component, they don´t know the state of the application or interact with the facade.