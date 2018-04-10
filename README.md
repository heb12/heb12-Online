# Heb12 Online App
The online version of the Heb12 Web App Windows version.

![screenshot from 2018-04-05 15-05-02](https://user-images.githubusercontent.com/16640496/38394328-e20f67f6-38e2-11e8-96bc-16c37116956e.png)

This application currently uses [this API](http://labs.bible.org/api_web_service), and an offline KJV version. It might support more in the future.

If you would like to try out a prerelease version for Linux (without automatic updates) you can get it [here](https://drive.google.com/drive/folders/1bSoHc1mAjkGA6cyjO7YDcD8BtOdTxnuh?usp=sharing).

## Installation
To install the program for editing, run these commands:
<pre>
$ git clone https://github.com/masterofthetiger/heb12
$ cd heb12
~/heb12 $ yarn install && yarn start
</pre>

Packages for easy installation will be available upon the release of the first version.

## Contributing
Feel free to make changes to the design, scripts, and even the fundamental code to the program, as it is still in heavy development, and submit a pull request. However, please make sure the following work before submitting your request.
- The API request
- The rendering of the scripture
- The selecting of verses
- Offline use of major features (and at least the KJV translation), i.e, don't make your features depend on external requests unless it is necessary

If any of those do not work, then it will not be accepted without changes.

Please refer (and contribute) to the [wiki](https://github.com/MasterOfTheTiger/heb12/wiki) for helpful instruction for installing, packaging, and more.

## License
Copyright 2018 Theodore Jameson.
This software is released under the GPL license version 2.0 or later. See the [LICENSE](https://github.com/MasterOfTheTiger/heb12/blob/master/LICENSE) file for more information.

## Credits
- @MasterOfTheTiger is the author of the program
- @danday74 for [Chapter and Verse](https://github.com/danday74/chapter-and-verse), a very useful tool for this program
- Chapter and Verse for the bible.json file
