---
title: 'The Law of Demeter'
date: '2022-05-01'
tag: 'TIL'
---

It is often tempting and convenient when writing object oriented programs to reach through internal objects and call their methods. For example, if I had a `Car` object that I wanted to steer, I could do `car.wheel().steer_left()`. After all, the `Wheel` object has all of the steering methods defined so this seems like the obvious way to proceed.

However, a program with many calls like this can quickly become difficult to maintain as objects are required to know about the internal structure of other objects that may be deeply nested within them. When a method is changed it could require many changes all over the codebase in a large program. (I have been very guilty of this myself in the [past](https://github.com/tgrbrooks/XSecPlotter/blob/master/Types/SystCalculator.h#L90).)

The Law of Demeter was proposed in 1987 to try to encourage the writing of software that is more maintainable and adaptable. It states:

* Each unit should have only limited knowledge about other units: only units "closely" related to the current unit.
* Each unit should only talk to its friends; don't talk to strangers.
* Only talk to your immediate friends.

So the correct form for the `Car` object should be `car.steer_left()`. The obvious drawback of this is that it results in many wrapper methods being written, although when applied correctly it should result in tighter interfaces as objects will only be given access to the methods they need to do their job.
