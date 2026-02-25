**1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**    

**Ans:**  getElementById and getElementsByClassName only search for elements using specific IDs or Classes. In contrast, querySelector and querySelectorAll allow for much more flexibility by using any CSS selector to find elements.


**2. How do you create and insert a new element into the DOM?**   

**Ans:**  create an element using document.createElement() and then insert it into the page using appendChild(). It's a two-step process: first  build it in memory, then attach it to the DOM.

**3. What is Event Bubbling? And how does it work?**                  

**Ans:**  Event bubbling is when a click on a child element "bubbles up" and triggers the same event on all its parent elements. It starts at the specific item you clicked and moves upward through the DOM tree until it reaches the top.

**4. What is Event Delegation in JavaScript? Why is it useful?**              

**Ans:**  Instead of setting a click event on all the smaller child elements (like 100 list items) in advance, just set a single event on their larger parent element.
Why is this necessary?
Saves memory: If you have 100 buttons, you only need to use them once if you don't use them 100 times.
Any new button links will work automatically, you don't have to write them down.

**5. What is the difference between preventDefault() and stopPropagation() methods?**                  
**Ans:** The main difference is what they actually stop: one stops an action, and the other stops the movement
