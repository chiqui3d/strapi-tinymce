# A Strapi Tinymce extension

This extension completely replaces Strapi's Wysiwyg editor by Tinymce.

![Preview Tinymce](https://image.prntscr.com/image/IisLzweeReenNXlonpIxNg.png "Preview Tinymce")


This extension has been created based on the same CKEditor tutorial. You can find this information here https://strapi.io/documentation/v3.x/guides/registering-a-field-in-admin.html

CKEditor in the latest versions has removed the options to add **HTML code**, and that's why among other things I preferred to use Tinymce.

This extension also includes the button to add images from the Media Library and also in the cursor position

# Setup

`npm install --save @tinymce/tinymce-react`

Copy the `content-manager` directory to your `extensions` directory

In addition, download the Tinymce **prod** files from https://www.tiny.cloud/get-tiny/self-hosted/ and add them to the `public` folder.
We need to download it because if you don't you will receive an error in the editor that you need a cloud api key, and we want to use it for **self-hosted**.

This configuration along with all the options can be seen here https://github.com/chiqui3d/strapi-tinymce/blob/master/content-manager/admin/src/components/WysiwygWithErrors/Tinymce.js#L25
