---
layout: post
author: Will
include_scripts: [

  "https://esm.sh/@svgdotjs/svg.js",
  "/assets/js/animate_factors.js"
]
---

## A Prime Interview Question

***

*If you want to skip to the interactive bit click <a href="#animation_canvas">here!</a>*

<br>
<br>

Recently I came across this slight variation on what I assume is a fairly common interview question. 


>"Given a number N, which of the below algorithms most efficiently checks if N is a prime number."

To avoid completely giving away all the secrets, I only want to discuss the first solution that was provided:

<br>
<br>

```python
For i from 2 to sqrt(N) inclusive:
	if n % i == 0:
		return False
return True
``` 


<br>
<br>

Even as someone who has not worked on any programming interview questions recently, I would say most of this solution pretty quickly made sense to me. In fact, it's really not that far from the brute force solution most programmers probably think of right away. But why are we stopping at the square root of N? For me, that wasn't clear at all.

It only took a small amount of googling to confirm. Pretty quickly it became clear that this is an accepted way to solve this problem. Easy enough, case closed. This solution was more efficient than the other two proposed solutions because it was the only proposed solution that didn't consider all of the values for `i` between 2 and N. End of blog post ... right? Well if you'll humor me I think this is actually a pretty interesting question thats worth diving into for two reasons. 

1. Despite the fact that it might seem like another "brain teaser" style interview question. This question does not actually require you to memorize the "one simple trick". It really only requires knowledge the definitions of primes and square roots.
2. I think if you take the time to fully understand how programming questions like this one tick, you're much more likely to remember the answer if it comes up in an interview down the line. 

Now an astute reader may notice I'm putting a lot of weight on "interview questions". And that's a fair point. I don't think this exact problem would ever come up when you're writing code day to day. But I have two responses to this very standard line of "when will I use this in the real world teacher?!?" 

First, interviews are very real! As anyone looking for a job now or recently can assure you, these questions do come up and regardless of how you feel about them you should be prepared. And I think knowing how to work through these toy problems instead of just memorizing answers puts you in a much better position to answer them with confidence in future interviews. Writing this blog post has certainly made me feel much better about my knowledge! 

Second, and perhaps more importantly, I think this is neat! I'm hoping to provide you with the same lightbulb moment I had while looking into this solution. Let see if I can manage it! 

### Define the Problem

First, let's get some terminology straight. What is a prime number? Taking straight from the wikipedia article:

>"A prime number (or a **prime**) is a natural number greater than 1 that is not a product of two smaller natural numbers." [^1]

In programmer terms a "natural number" is a positive integer (int). So the numbers [0,1,2,3] and so on. Add to that the information that one is not a prime number (see footnote) and we now are one step closer to our solution already. We care about the set of whole numbers (non-decimal) that are positive and greater than 1. So [2,3,4 ...] 

Now onto the second part! 

>"..... that is not a product of two smaller natural numbers"

When we say "the product of" in math, we just mean the result of multiplication. So as a simple example: `3*4=12` we could say that twelve is a *product of* 3 and 4. 

The way I was always told to think about primes I think is a bit more intuitive: 

>"A natural number that is only evenly divisible by 1 and itself" [^2]

When we say "evenly divisible" we mean that the division will result in a whole number, no fractions or decimal points left over. So going back to our example we can verify that 12 is not a prime by either statement. 

1. 12 is a product of two smaller natural numbers 3 and 4. So it cannot be a prime.
2. 12 is evenly divisible by a number other than 1 or itself : 3 -> 12/3 = 4. So it cannot be a prime.

### Translate to Code

First, let's just try to translate exactly the second statement into code : "A natural number that is only evenly divisible by 1 and itself". Let's check all those numbers. 

<br>
<br>

```python
for i in range(2, N):
	N % i
```
<br>
<br>

First, remember that the `range()` function in python is **inclusive** on the starting side (in this case 2) and **exclusive** on the ending side (in this case N). Meaning this for loop is the same as writing this is any of the more C flavored languages:

<br>
<br>

```java
for (int i; i++, i < N) {
	N % i;
}
```

<br>
<br>

Second, a refresher on the `%` or modulo operator. The `%` operator returns the **remainder** of the division of two numbers. For example if you open up a [python REPL](https://realpython.com/python-repl/) you get the following: 

<br>
<br>


```python
>>> 15 % 3
0
>>> 11 % 2
1
>>> 2 % 0
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ZeroDivisionError: integer division or modulo by zero
```

<br>
<br>

We care about numbers that are **evenly divisible**. Or put more technically, have **no remainder**. So we can update our code to say:

<br>
<br>

```python
for i in range(2, N):
	N % i == 0
```

<br>
<br>

And based on the input we don't just want to spit out the result for every number in the list, we want to ensure that this holds true for every number that we checked along the way. And remember that if this statement is `True` for even a single value we know that `N` is not prime. This type of logic is sometimes called "short circuiting", because we don't have to finish the rest of loop. We know based on what we have seen what the result we be, **regardless of the rest of the numbers in the range**. So we basically get to take a shortcut and save some work (foreshadowing). Neat!  That would look like this:


<br>
<br>

```python
def check_if_N_is_prime(N):
	# iterate through all the numbers between 2 and N - 1
	# Checking if N can be evenly divided by that number.
	# If it can, N is not prime. If we reach N - 1 without exiting
	# the loop, N is prime.
	
	for i in range(2, N):
		if N % i == 0:
			return False
	
	return True
	
```

<br>
<br>

To get our short circuiting logic working correctly, we needed to add all of our logic into a function, but other than that nothing else has changed. And there you have it! this is a function that will check if a given number `N` is prime.

![Example Image](/assets/images/square_root_pics/Pasted image 20250108165626.png)

And now, finally, we can talk about that square root. 

### Optimization

First, let's look at what exactly this code is doing. 

![Example Image](/assets/images/square_root_pics/Pasted image 20250108181002.png)


Here we can see the logical flow of the code and it properly short circuiting. Next let's take a look at how it looks when N is prime.

![Example Image](/assets/images/square_root_pics/Pasted image 20250108181244.png)

Seems like a lot of work just to find a prime, can we do better? Look at how much worse it is as the values of the prime get higher!

![Example Image](/assets/images/square_root_pics/Pasted image 20250108181646.png)

I actually had to zoom my browser window out a bit in google collab to fit all the output! But what we want to know is, is there a point in the loop where we can stop checking because we know that we've tried all possibilities? Can we do better than N - 1? Can we take advantage of that short circuiting logic for primes just like we did for non-primes? Let's take a look at that first definition of prime again:

>"A prime number (or a **prime**) is a natural number greater than 1 that is not a product of two smaller natural numbers."

If we once again think of those factors as `a` and `b` we can see that if we hold `N` constant (it's the input of the problem) when we increase `a`, `b` **must** decrease.  Writing down the factors for yourself, or plotting them on a number line and pairing them off can help clear this up. 

<br>
<br>

*** 

N = 36\
a x b = N

a = 2 ->
2 x 18 = 36

a = 3 ->
3 x 12 = 36

a = 4 ->
4 x 9 = 36

a = 5 ->
5 x 7.2 = 36

a = 6 -> 
6 x 6 = 36

a = 7 -> 
7 x ~5.153 = 36

a = 8 -> 
8 x 4.5 = 36

a = 9 -> 
9 x 4 = 36

*** 

<br>
<br>

Writing the factors out demonstrates the logic quite nicely. At the beginning, `a < b` with the value of `b` gradually decreasing until we reach a point where `a = b` and then after that we see that we continue to increase `a` and now `a > b`. But we've already tried all the whole number factors less than six! From this we know that when  `a = b` , `a` is the maximum value that we have to check. After this peak value of `b`, we're just going to be rechecking smaller values that we've already seen. This is driven home by the fact that when we get to `a = 9` we're just repeating the work we did at `a = 4`. With this in mind we can find the maximum value of `a` that we care about in terms of `N`. 

<br>
<br>

***

a * b = N

when a = b

a * a = N

a^2 = N

a = sqrt(N)

***

<br>
<br>

Another helpful visualization is to pair off the factors for a given value of `N` on a number line. Starting with low values of `a` the corresponding value for `b` will be very far away on the number line, but as you increase that value more and more the values get closer and closer together until finally you reach the square root. After the square root you will find that you're always pairing factors with numbers that are on the left, or smaller side of the square root. In this way the square root creates a dividing line between the smaller factors and the larger factors. All of the factors on the left side of the line must have a partner on the right side of the line and in turn all of the factors on the right side of the line have a partner on the left. 

The interactive animation below demonstrates this. Enter any number between 6 and 100 and click the buttons to see the number line, factors, and lime green line for the square root of N. Notice how the paths between factors always cross over the green line drawn by the square root of N. (Numbers with few factors are pretty boring, but numbers with lots of factors like 24, 36, etc are the most interesting!)

<br>


*Note: This should work fine on mobile, but is a bit easier to see on a larger screen*

<br>
<br>
<div id="animation_canvas" class="box">

  <button id="button">Animate</button>
  <button id="path_button">DrawPath</button>
  <input type="text" id="ticks" name="ticks" required minlength="1" maxlength="3" size="10">

</div>

<br>
<br>


Or look at it like a proof challenge you might have been given in highschool. To prove that at least one of either `a` or `b` must be less than `sqrt(N)` is to imagine a situation where they are not:

<br>
<br>

***

a x b = N  (from statement of the problem)

a > sqrt(N) (for the sake of argument)

b > sqrt(N) (we are in magic dream land)

therefore ... 

a x b > sqrt(N) * sqrt(N) (multiplication)

a x b > N  (Cannot be the case! We said in line 1 that they are equal!)

***

<br>
<br>

So finally we can implement the correct solution. 

![Example Image](/assets/images/square_root_pics/Pasted image 20250108220111.png)

That sure was a lot of work just for `O(sqrt(n))`. But I hope you enjoyed that explanation as much as I did writing it! And I trust you'd be ready to knock that interview question out of the park next time it comes up. 


<br>
<br>

***

<br>
<br>

<br>
<br>

### Additional Reading and Links

[Khan Academy Trial Division](https://www.khanacademy.org/computing/computer-science/cryptography/comp-number-theory/a/trial-division)

[Wikipedia Article on Trial Division Method](https://en.wikipedia.org/wiki/Trial_division)

[Wikipedia Article on Primes](https://en.wikipedia.org/wiki/Prime_number)

[Wikipedia Article on Modulo division](https://en.wikipedia.org/wiki/Modulo)

[Wikipedia Article on Short circuit Evaluatiton](https://en.wikipedia.org/wiki/Short-circuit_evaluation)

Footnotes: 

[^1]: The discussion on why 1 is not a prime number often sparks a weird combination of confusion and outrage. I am interested in neither and this article is plenty long as is. There are many better resources that might help to explain it online. In short, sometimes we define things because that makes them useful! (Maybe "imaginary numbers" will be a story for another time)
[^2]: For bonus points prove to yourself why these two definitions are in fact equivalent, even though it might not seem so at first.