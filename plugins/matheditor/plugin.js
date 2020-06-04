/**
 * Very simple example Plugin utilising URL Dialog
 *
 * @author Marty Friedel
 */
(function () {
    var iframe = (function () {
        'use strict';

        tinymce.PluginManager.add("matheditor", function (editor, url) {

            /*
            Add a custom icon to TinyMCE
             */
            editor.ui.registry.addIcon('frame', '<svg width="24" height="24"><use xlink:href="custom-icons.svg#file-text"></use></svg>');

            /*
            Used to store a reference to the dialog when we have opened it
             */
            var _api = false;

            /*
            Define configuration for the iframe
             */
            var _urlDialogConfig = {
                title: 'Math & Chemistry Editor',
                url: './plugins/matheditor/html/plugin.html',
              
                onAction: function (instance, trigger) {
                    // do something
                    editor.windowManager.alert('onAction is running.<br><br>You can code your own onAction handler within the plugin.');

                    // close the dialog
                    instance.close();
                },
                width: 600,
                height: 450
            };

            // Define the Toolbar button
            editor.ui.registry.addButton('matheditor', {
                text: "Math & Chemistry Editor",
                icon: 'frame',
                onAction: () => {
                    _api = editor.windowManager.openUrl(_urlDialogConfig)
                }
            });

            editor.ui.registry.addMenuItem('matheditor', {
                text: "Math & Chemistry Editor",
                icon: 'frame',
                onAction: () => {
                    _api = editor.windowManager.openUrl(_urlDialogConfig)
                }
            });

        });
    }());
})();