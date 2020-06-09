# TinyMCE 5 Example Plugin
Developed by Darshit Vora
## How to use
Open **index.html** in a web browser and you're good to go. 

You will get an API Key warning given you'll be running it from Tiny's cloud code - just close that warning for now. If 
you are going to get serious with development, either register with Tiny for continued cloud use, or include TinyMCE in 
your project.

Alternatively, you can build your own TinyMCE 5 build from the [TinyMCE 5.x branch](https://github.com/tinymce/tinymce/tree/5.x),
and host the files locally yourself.

A package.json file is included for you to quickly get TinyMCE running locally - use your favourite package manager (such as NPM, Yarn, etc)
to get the build files, and update the JS file in the index.html file and you'll be good to go.
## Demo
1. `git clone`
2. Open `index.html` in browser
## Usage
1. Copy plugins folder in your pproject
2. To change label make change in `plugins/matheditor/plugin.js`
3. To change css styles check stylesheet files in `plugins/matheditor/html/plugin.html`
4. Integrate in matheeditor tinymce plugin as external plugin while you initialize tinymce. Check example in index.html

## Reference
https://www.martyfriedel.com/blog/tinymce-5-creating-a-plugin-with-a-dialog-and-custom-icons
https://www.tiny.cloud

## License

tinymce5-math-chemistry-symbol-plugin is copyright (c) 2020-present Darshit Vora and
the [contributors to Node-Minio](https://github.com/darshitvvora/tinymce5-math-chemistry-symbol-plugin/graphs/contributors).

tinymce5-math-chemistry-symbol-plugin is free software, licensed under the MIT License. See the
`LICENSE` file for more details.
