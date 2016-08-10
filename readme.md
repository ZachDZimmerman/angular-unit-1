## Angular Curriculum

# Unit 1
### Intro

Why learn Angular JS over other frameworks like Ember, Backbone, Knockout, etc?
1. Easy to learn and implement
2. Stable API
3. Backed by Google
4. Nice articles and forums available for learning purpose
5. Companies are moving all their applications on AngularJS (more jobs)
6. Best MVW framework available on JS till date
7. Nice integration with CSS frameworks (Bootstrap & Foundation)
8. Two way data binding
9. Dependency Injection (Separation of layers)
10. Templates (For View)
11. Directives
12. Services (predefined services makes our work easy : $http, $routeProvider etc)

People have some very strong opinions about Angular. What are 3 common complaints people have about Angular?
1. Angular 2 is out now - big problem with 1 and 2 not being similar enough.
2. Client-side Rendering - Search engines have a tough time indexing content display
3. $cope issues - too much data could make the app super slow

Is Angular an MVC framework?
- Sort of, View is the HTML (front end) and the User input flows from the view to the control. The Controller is the JS, constructed in a controller function. Data from the program goes from controller to the view.

Turn to the Angular docs. Find ng-app. What is it and what does it do? What does ng stand for?
- np-app - Tells AngularJS to be active in this portion of the page. Makes Angular active! ng stands for Angular


## Data Binding

What does ng-model do?
* Binds the view into the model using Scope from the Controller

What is "dirty checking"?
* The process of checking every watch to detect the changes

Find a way to set the initial value of "name" as "BoJack" (without writing a controller).
* ng-init = "BoJack"

What are those {{ }} expressions? Are they Handlebars?
* It's mark up. When the compiler compiles the code it will insert the value inside of the {{}}.

Explain what two-way data binding is.
* The automatic synchronization of data between the model and the view components.

BONUS: Research the $digest loop
* In the $digest phase the scope examines all of the $watch expressions and compares them with the previous value. This dirty checking is done asynchronously. The $watch notification is delayed until the $digest phase.  If a $watch changes the value of the model, it will force additional $digest cycle.

## Angular MVC
√

## Expressions and Built-In Filters
What are Angular expressions? How do they compare to tags from templating engines you've used before?
* JavaScript like code snippets that are in immediate bindings but can also be used directly in directive attributes with and executable math like equations. Filters can be used with Angular expressions, very handy. The templating in Angular is executable to do something in the Expressions. Where as Handlebars passes the function through and is not mutable on the HTML (Client-side).

What happens when you write invalid code in an expression? What type of error do you get?
* You either get undefined or null and is more forgiving than JS. Doesn't give you the exact error.

What are Angular filters? Describe what a filter does and then name four built-in filters, including one that we haven't used yet.
* Lowercase, uppercase, Number, OrderBy. Filters in angular will filter the expressions to do JavaScript like code in the Client-side.

What's the syntax for filters?
* {{ expression | filter }}

Can you use more than one filter?
* Yes, just | (pipe) more in!

We'll soon see how to create custom filters.
What is a use case for a custom filter?
* To do multiple filters at once. To keep a well written view!


## Built-In Directives

What is the purpose of ng-init?
Why use ng-src and ng-href?
What are directives?
Does ng-class require an object to be passed in?
What order does an ng-repeat display items in?
How does ng-repeat handle duplicate data?

Bonus

What's happening in each of these examples? What's the purpose of the directive?

ng-cloak
ng-include
ng-pluralize


## Intro to Controllers

What is $scope?
What are Angular modules? What's the syntax for defining a module?
Why do we pass in $scope as an argument to controller functions?
In Express, what are Angular controllers most analogous to?

## Intro to Scopes

What is $rootScope?
Explain how $scope is passed from a parent to child controller
List five built in directives that create their own scope
"Scope becomes tricky when you try to 2 way data bind to a primitive defined on the parent scope from inside the child scope" - what does this mean?
