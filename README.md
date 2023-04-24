# Twitter Blue Blocker

Twitter Blue Blocker is a Chromium extension that blocks tweets from Twitter Blue accounts. It works by detecting if a tweet is from a verified Twitter account (indicated by a blue checkmark icon) and hiding the tweet if it is.

## Installation

To install Twitter Blue Blocker, follow these steps:

1. Download the source code from the GitHub repository.
2. Open Google Chrome or another Chromium-based browser.
3. Click on the three vertical dots in the top right corner of the browser.
4. Select "More tools" from the dropdown menu.
5. Select "Extensions" from the submenu.
6. Turn on "Developer mode" in the top right corner of the page.
7. Click on the "Load unpacked" button.
8. Select the directory where you downloaded the source code.

The extension should now be installed and ready to use.

## Usage

Once Twitter Blue Blocker is installed, it will automatically block tweets from Twitter Blue accounts. If you want to adjust the extension's settings, you can click on the extension icon in the toolbar and select "Options" from the dropdown menu.

In the options page, you can choose whether to show a message when a tweet is blocked or hide the tweet completely. You can also choose whether to collapse the blocked tweet or show a link to expand it.

## Development

To develop Twitter Blue Blocker further, you can modify the source code in the `twitter-blue-blocker.js` file. The file contains a function called `modifyTweet` that is called whenever a tweet is loaded on the Twitter website.

If you want to modify the extension's behavior or add new features, you can modify the `modifyTweet` function to suit your needs. You can also create an options page for the extension by creating an HTML file called `options.html` and adding a reference to it in the `manifest.json` file.

## Contributions

Feel free to submit any PRs if you wish to add more to this. It's a very simple extension, does the job well as far as my testing goes. I use it personally so any bugs or things I want to add will be done over time.


## License

Twitter Blue Blocker is released under the [MIT License](https://opensource.org/licenses/MIT).
