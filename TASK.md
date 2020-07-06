# TSH recruitment task

Hi there, stranger! I'm glad you can help us with our messy code.


## Step 1: Code Review

Create empty repository and make Pull Request with the whole codebase you've got from us. Then make a code review 
for it. Don't hesitate to point out each concern - we want to make the code eventually perfect! 
We'll be grateful for all your thoughts on it.  


## Step 2: Bug hunt

1. For some reason the app doesn't fully load data. This happens on all major browsers: Chrome, Firefox, IE11.  
When you resolve the issue, make sure it works on all mentioned browsers

2. The user image in the history block is not aligned properly. Can you do something about it? 


## Step 3: New features

As you could probably see, the project lacks some more or less important features. Can you help us making it done?
 

1. The username field is missing validation. Prepare a simple validation for the input field:
    * not-empty
    * allow only characters: `a-z`, `0-9`, `-`, `_`
    
    When the value is not valid, display a red border around the field.

2. The History block is just a mockup. Make it dynamic. After user data has been loaded, use the below URL:
    `https://api.github.com/users/{username}/events/public` 
    to load user's latest events. Populate the history list with events gotten from the above step. 
    
    For now we want only 2 event types to be included:

    * `PullRequestEvent` - both "opened" and "closed" Pull Requests
    * `PullRequestReviewCommentEvent` 
    
    please take into account that other events will be implemented later.
    
    Github documentation may become handy: https://developer.github.com/v3/

    
    ```
    **Warning:** be aware that Github uses request limiting. When it occurs, try to mitigate it. Or just make 
    your code perfect at first time :)
    ```

3. Hide fake Profile and History fields until the data is being loaded.   
We've prepare a spinner element (in HTML) to indicate loading data, but forgot to use it, Can you make it visible 
when there are pending requests?

4. Currently the Profile column has width of 1/3 screen. Let's change it's size:
    * below 768px: make it 100% (as it is now)
    * 768-1280px: make it 50%
    * 1280px and above: make it 30%

5. The production build is quite big: **556kB**. Can you optimize it to fit in less than 350kB? The less 
the better.


# Rules

**Each Step should be in separate commit.**   
That way you will first create a PR and then have at least 8 more commits:
* 1 containing whole code for Pull request
* 2 for bug fixes
* 5 for new features 

