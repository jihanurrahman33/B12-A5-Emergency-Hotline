
1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:
-getElementById Selects a single element with a specific id it also returns ans single element no null if nothing found by the id.
-getElementsByClassName Selects all elements with a given CSS class it returns a live htmlCollection that updates automatically if DOM changes to access the reutrn data we have to loop over it.
-querySelector Selects the first element that matches a CSS selector it returns a single element or null if nothing is found. it supports any valid css selector like #id,.class,div>p,etc.
-querySelectorAll Selects all elements matching a CSS selector it returns a static nodelist by the way it does not update if the dom changes.to access nodelist need to loop over it.
this is the difference beetween all of this.

2.How do you create and insert a new element into the DOM?
to create a element in dom we have to access the dom to create element then we have to select the parent element where we append the child that we have created.by the way we have to create inner content also after we create the element.after getting the parent element we have to append it.

3.What is Event Bubbling and how does it work?
event bubbling is a system that control how the events travel through the document when something happens like.a click.when an event occurs on an element the event doesnt just stay on that element instead it bubbles up through its ancestors in the dom tree,from the innermost element up to the root of the dom.

4.What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a design pattern in JavaScript where you attach an event listener to a parent element instead of adding separate listeners to each child element. Because of event bubbling, the event triggered on a child element bubbles up to the parent, which can then detect and handle it.

5.What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() prevents the browser default action associated with an event from ahppening.
stopPropagation() prevents the event from bubbling up the dom tree.