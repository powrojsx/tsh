# TSH recruitment task

Hi there, stranger! I'm glad you can help us with our messy code.

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

5. The production build is quite big: **556kB**. Can you optimize it to fit in less than 350kB? The less 
the better.


# Rules

**Each Step should be in separate commit.**   
That way you will first create a PR and then have at least 8 more commits:
* 1 containing whole code for Pull request
* 2 for bug fixesq
* 5 for new features 

