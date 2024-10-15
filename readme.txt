This is the document which describes some important features on my website.

1. Overall text and images.
Almost all text and images (including background images) is not fixed.
The size of most of elements is changable according to the size of web page.
Besides, min-width and min-height is set with some elements if necessary.

2. The Navigation Bar
There are four clickable items in nav bar, which can link to the corresponding part of website.
The nav bar has two different styles, which can be switched by scroll down or scroll up.
When at the top of the website, the nav bar is transparent to show the background.
After scrolling down for a fixed distance, the nav bar will become solid and the height will change with animation.
Text "My website" will change to "Back to top".
These state will back to previous style if scrolls up.

3. Top Card
There is a card which contains some personal information at center of the background image.
The card is with radius border and consists of two sub-cards.
The left card contains the image, identity, date of birth and nickname of myself.
The right card contains my skills of languages and programming languages.
When mouse is hovering on a specific language, the text will change to cyan and a description window will be displayed.
For example, when hovering text "Chinese (Mandarin)", it becomes cyan and an extra message "I am a native speaker of Chinese." can be seen.
Hovering on stars is also a way to display the description window, but there is no change in color of stars.

4. Audio Player
There are two buttons and a volume controller at the bottom right of the website. These elements are fixed.
The first button will be changed between "Start" and "Pause", which can continue to play the music or pause it.
The second button will replay the music, no matter the music is paused or not previously, the music will be played at the beginning.
The volume of music can be altered used the volume controller, the default volume is 50.
This music is related to project which is described at Experiences section.
P.S. I previously decide to begin to play the music automatically after the user entering the website, or start to play after the user has actions (like moving the mouse or scroll up or down).
However, some engines do not allow the auto play of music. Only after the user has interacted with some elements, the sound will be allowed.
For example, Google Chrome, the policy can be found at: https://developer.chrome.com/blog/autoplay.
Therefore, the music only will be played after the user interacts with the start or replay button.
The quoted lines in script.js from line 42 to 50 is used for some web engines will allow auto play of sounds.

5. Links in Experiences and Hobby Sections
Mainly, all links in the text content will change color when hovering into them.
The link of MidiUtilHelper to GitHub is special because a "visited" color is set.
In CSS file, I define :visited before :hover, so that the link can still change color even after it is visited.

6. Embedded Window of Youtube
In Experiences section, an application case of my project is displayed right-hand-side, while the description is in the left-hand-side.
A min-height is used for this iframe content, otherwise it will match to the height of description text which might be too short.

7. Abbr in Hobby
When hovering to "TCG" at second paragraph in Hobby section, a full name of TCG will be explained.
This is different to the display of description window in top card.

8. Automatically changed images
At the last of Hobby section, two images are displayed respectively.
These two images will switch between each other after every 3 seconds.
One of them is displayed, and the other one is not visible.
The text above them will be changed as well as the images.