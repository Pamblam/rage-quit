![Rage Quit Reddit](https://i.imgur.com/lATuUiw.jpg)

# Rage Quit for Reddit

A tool written in Node to rage quit Reddit.

 1) Install [Node](https://nodejs.org/en/download/) if you don't have it.
 2) Install [Node Package Manager](https://www.npmjs.com/get-npm) if you don't have it.
 3) Download the app from [NPM](https://www.npmjs.com/package/rage-quit) or [GitHub](https://github.com/Pamblam/rage-quit).
 4) In the command line, navigate to the directory where you installed the software and run `npm install`.
 5) In Reddit, visit your Preferences page > Click on the Apps tab.
 6) Click the button to create a new App. Give it any name and description. You can use either the GitHub or NPM URL for both URLs. **Choose the *script* application type**. Submit the form.
 7) The small bold text under "personal use script" is the Client ID. Take note of the text after "Secret" as well.
 8) In the downloaded software, open the file called `.env`. Provide the Client ID, Client Secret, Reddit Username and Password. If you want to edit all your posts or comments with a custom message instead of deleting them, you may edit the `QUIT_MSG`. If you want to delete comments instead of editing them, set `DELETE_COMMENTS` to the value of `1`, else set it to `0`.  If you want to delete posts (submissions) instead of editing them, set `DELETE_POSTS` to the value of `1`, else set it to `0`.  Save the file.
 9) In the command prompt, navigate to the directory where you downloaded the software and run the command: `node run`.
 10) It will print out the URL of each comment or post that was edited or deleted. When it's done you can deactivate your Reddit account.

## License

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED

**[DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE](http://www.wtfpl.net)**
<sup>Version 2, December 2004 - www.wtfpl.net</sup>

 *Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>*

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

**DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE**
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT THE FUCK YOU WANT TO.

