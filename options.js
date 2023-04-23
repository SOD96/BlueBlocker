document.addEventListener('DOMContentLoaded', () => {
    loadOptions();
  
    document.getElementById('toggleConsoleLogs').addEventListener('change', saveOptions);
    document.getElementById('toggleShowTweets').addEventListener('change', saveOptions);
  });
  
  function loadOptions() {
    chrome.storage.sync.get(['toggleConsoleLogs', 'toggleShowTweets'], (options) => {
      document.getElementById('toggleConsoleLogs').checked = options.toggleConsoleLogs || false;
      document.getElementById('toggleShowTweets').checked = options.toggleShowTweets || false;
    });
  }
  
  function saveOptions() {
    const toggleConsoleLogs = document.getElementById('toggleConsoleLogs').checked;
    const toggleShowTweets = document.getElementById('toggleShowTweets').checked;
  
    chrome.storage.sync.set({ toggleConsoleLogs, toggleShowTweets }, () => {
      console.log('Options saved');
    });
  }
  