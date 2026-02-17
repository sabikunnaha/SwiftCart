1. What is the difference between null and undefined?
 Ans:- Undefined: যখন একটি ভেরিয়েবল declare করা হয় কিন্তু কোনো value assign করা হয় না তখন JavaScript স্বয়ংক্রিয়ভাবে undefined assign করে।
       Null:  এটি একটি intentional empty value.এটি  প্রোগ্রামার নিজে থেকে বোঝাতে ব্যবহার করে যে এখানে কোনো value নেই।

 2.What is the use of the map() function in JavaScript? How is it different from forEach()?
 Ans:- map(): map() হলো একটি array মেথড , map() একটি array এর প্রতিটি element নিয়ে কাজ করে and নতুন একটি array return করে |
  forEach():  forEach() array loop করে and কিছু return করে না (undefined return করে) , শুধু iterate করতে চাইলে → forEach()  usable.

3. What is the difference between == and ===?
 Ans:- " == " :  Value compare করে and Type convert করে.
         "===":  Value + Type দুইটাই compare করে and Type convert করে না|

4. What is the significance of async/await in fetching API data?
 Ans:- async/await: asynchronous code কে synchronous এর মতো readable করে and Promise handle সহজ করে , await মানে এই কাজ শেষ না হওয়া পর্যন্ত অপেক্ষা করো|

 5.Explain the concept of Scope in JavaScript (Global, Function, Block).
 Ans:- Scope মানে — কোন জায়গা থেকে কোন variable access করা যাবে।
       i.Global scope: যেকোনো জায়গা থেকে access করা যায়,
       ii. Function: function এর ভিতরে declare করলে শুধু ওই function এর ভিতরেই ব্যবহার করা যাবে,
      iii. Block: {} এর ভিতরে declare করলে শুধু ওই block এর ভিতরে থাকবে| 
