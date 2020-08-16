# A Strapi Tinymce extension

This extension completely replaces Strapi's Wysiwyg editor by Tinymce.

![Preview Tinymce](https://image.prntscr.com/image/IisLzweeReenNXlonpIxNg.png "Preview Tinymce")


This extension has been created based on the same tutorial that is in the documentation for adding CKEditor https://strapi.io/documentation/v3.x/guides/registering-a-field-in-admin.html

CKEditor in the latest versions has removed the options to add **HTML code**, and that's why among other things I preferred to use Tinymce.

This extension also includes the button to add images from the Media Library

# Setup

`npm install --save @tinymce/tinymce-react`

Add the `content-manager` directory to your `extensions` directory

In addition, it downloads the Tinymce **prod** files from https://www.tiny.cloud/get-tiny/self-hosted/ and adds them to the `public` folder.
This is because if you don't get a message inside the editor that you need a cloud api key, and we want to use it for **self-hosted**.

This configuration along with all the options can be seen here https://github.com/chiqui3d/strapi-tinymce/blob/master/content-manager/admin/src/components/WysiwygWithErrors/Tinymce.js#L25
