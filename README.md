# Senior Front-End Engineer Technical Test - Telmetrix
#### Jason Nolasco <jason@telmetrix.co>

One of the core Telmetrix products currently is a React Native Expo app that guides users through a series of home exercises. We emphasize practical ability, therefore for this technical test, you’ll be recreating two simple screens to demonstrate basic understanding of React Native controls. This task is expected to take about two hours. If you’re unable to complete any part of this test or need clarification, e-mail me at jason@telmetrix.co. 

If you are unable to complete either of these screens, let us know in your response. It’s not an instant fail, but more credit will be given to completed tasks.

-- Jason

### Screen 1: Exercise Explainer

The first screen is a quick layout test, to demonstrate your ability to communicate simple instructions to an end user. 

Find any infographic you link under the google link “how to do a squat” and implement it as a simple 3-4 screen explainer. 

https://www.google.com/search?q=how+to+do+a+squat+infographic&tbm=isch

You’re free to implement this with whatever UI libraries you need. We’ve included Native Base which we use in production.

https://nativebase.io/


### Screen 2: Interactive Angle Detection

The second screen is a recreation of a section of our movement detection routine. The user leans their phone on a desk with the front camera facing the user so that we can analyze their movements. 

Implement a screen that checks to see if the phone is set up at a usable angle.

- Copy our design for an angle detection meter. It should be a vertical bar that has a live indicator showing the current angle of the phone
- Indicate that we want a phone angle between 70-85 degrees of tilt.
- Detect if the phone is both a) stable and b) angled correctly at the same time for a period of 3 seconds. Showing a countdown animation is optional, but show some kind of feedback to indicate the user is doing the right thing.
- On success, hide the angle detector and pop up another View indicating a simple placeholder success.

How to implement Accelerometer:
https://docs.expo.dev/versions/latest/sdk/accelerometer/

A video sample of how the widget should work is located in the /assets/ directory.

In the sample video, there’s a camera preview in the background. You can ignore that for this test. We only want a simple angle detector.

How we’ll evaluate:

- We’ll do a cursory review of your code. Be prepared to step us through the choices you made in a live interview.
- We clone from your github link and run “expo install” and then “expo start”.
- You may use any public packages to complete the work. If you use any private code to complete this, understand that we cannot sign any NDAs around this.
- Ask any questions you have about this test to jason@telmetrix.co 


