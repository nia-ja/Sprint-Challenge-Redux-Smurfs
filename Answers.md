1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map, .filter, .concat
While extending the properties of another object, we're using Object.assign() method. Or we can have the same result using spread operator.


2. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

action - a regular JavaScript object that usually has two properties, type and payload (only type is required)
reducer - the only place where we can change the state, it receives an action, creates a new state tree and passes that to the store.
store - is our Application level state. Thee store is known as a single source of truth, because the state of the app is stored in a single state object


3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global, and your component state is local. Flux or a flux-like library like Redux, use what they call "stores" to hold application state. That means any component, anywhere in the app can access it (kind of like a database) so long as they hook into it. Component state however, lives within that specific component. As such, it can only be updated within that component and passed down to its children via props.

If we need some data in different components of our application and to access data from other component state requires to go some levels up or many levels down, it's a good reason to use Application state. When we're using data just for this one component, or passing them one level down to the child, we should be fine just with Component state.


4. What is middleware?

Middleware provides a way to interact with actions that have been dispatched to the store before they reach the store's reducer. Examples of different uses for middleware include logging actions, making asynchronous requests, and dispatching new actions.


5. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.


6. Which `react-redux` method links up our `components` with our `redux store`?

connect