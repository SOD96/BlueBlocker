function modifyTweet(tweet) {
    chrome.storage.sync.get(['toggleConsoleLogs', 'toggleShowTweets'], (options) => {
    // Check if tweet is from a verified account
    var verifiedIcon = tweet.querySelector('[data-testid="icon-verified"]');
    var isVerified = verifiedIcon !== null;
  
    // Remove tweet if from a verified account
    if (isVerified) {
      // Change background color of tweet to red
      tweet.style.backgroundColor = 'red';
      var actualTweet = tweet.querySelector('[data-testid="tweet"]');
      actualTweet.style.display = 'none';
    }

        if (options.toggleConsoleLogs) {
          console.log(tweet, verifiedIcon);
        }
        
        if (options.toggleShowTweets) {
            // Add message to tweet
            var message = document.createElement('div');
            message.style.color = 'white';
            message.style.padding = '10px';
            message.style.borderRadius = '5px';
            message.innerText = 'This tweet has been removed by the Twitter Blue Blocker.';
            // Create link element to expand tweet
            var link = document.createElement('a');
            link.style.color = 'white';
            link.style.textDecoration = 'underline';
            link.style.cursor = 'pointer';
            link.innerText = 'Click to view tweet';
            link.addEventListener('click', function() {
                actualTweet.style.display = 'block';
                tweet.style.backgroundColor = 'transparent';
                message.style.display = 'none';
            });

            // Add link element to message element
            message.appendChild(link);
            tweet.appendChild(message);
        }
      });
  }

  


// Define function to handle mutations
function handleMutations(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.addedNodes) {
        mutation.addedNodes.forEach(function(node) {
          if (node.nodeType === Node.ELEMENT_NODE && node.getAttribute("data-testid") === "cellInnerDiv") {
            modifyTweet(node);
          }
        });
      }
    });
  }
  
  // Set up mutation observer
  var observer = new MutationObserver(handleMutations);
  observer.observe(document, { childList: true, subtree: true });

