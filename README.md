# Final Project Template

Our final project is deployed via netlify at https://objective-ritchie-3059f2.netlify.app/

"The following is additional documentation we are adding (per guidance from Professor Block) to provide detail for how and why we chose to build our database and what we learned about the tradeoffs:
We built a data base with two collections, one to collect user names and emails (“users”) and another that contains a string for the name of a class and an array to capture which classes, users have taken (“userclasses”). Previously, we attempted a different database construction with additional collections, but were encountering a problem with recording which classes a user had taken in a manner that was retrievable. We sought guidance for this issue and were pointed toward our current construction. After further discussion with the Professor, we recognized that adding usernames to an Array can lead to several less than optimal outcomes. First, it can make it more difficult to write code that allows a user to remove a class they have taken, because removing from an array can be more challenging. Additionally, it adds complexity if a user decides to change their username, as these changes would need to be made across the class arrays. Finally, as we add users, the arrays will grow horizontally which can lead to slow down. It is better for databases to grow vertically with addition documents vs horizontally with more data added to a single field." 



KIEI-451 Winter 2021

We have selected Project # 19 for the approved project list.

Team members: Danny Samin, Nehali Patel, Jason Williams

Description: When choosing classes at Kellogg or any other school it would be useful to know who has taken a class you are considering before. We have tools like slack that make it easy to reach out, but nothing that points to the "who", when you are considering a course but would like an opinion. This could be taken a step further to include the ability to find Kellogg Alumni with backgrounds in certain industries. It's easy to connect, but not to know who to connect with. An application that allows you to search for alumni by classes or other descriptors would help students find the right person to connect with.

Professor's feedback: Great idea! I can envision a future version with the alumni search features, but let's stick to the classes data for the MVP - collection of classes, user functionality to identify which classes they've "taken", display of users who took a specific class. That's more than enough!
