import React from 'react';
import PropTypes from 'prop-types';
import { Editor as Tinymce } from '@tinymce/tinymce-react';
import styled from 'styled-components';
import { auth } from 'strapi-helper-plugin';

const Wrapper = styled.div`
  .ck-editor__main {
    min-height: 200px;
    > div {
      min-height: 200px;
    }
  }
`;

const Editor = ({ onChange, name, value }) => {
  const jwtToken = auth.getToken();
  return (
    <>
      <Wrapper>
        <Tinymce
          initialValue=""
          tinymceScriptSrc={strapi.backendURL + '/tinymce/js/tinymce/tinymce.min.js'}
          value={value}
          init={{
            height: 500,
            menubar: false,
            convert_urls: false,
            relative_urls : true,
            remove_script_host : true,
            toolbar_mode: 'wrap',
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount',
              'media codesample fullscreen',
              'hr visualchars imagetools emoticons'
            ],
            toolbar:
              'undo redo | formatselect forecolor backcolor | \
              bold italic underline strikethrough removeformat | \
              alignleft aligncenter alignright alignjustify | \
              outdent indent | numlist bullist | \
              table link anchor | image media codesample charmap emoticons | \
              fullscreen code'
          }}
          onEditorChange={(content, editor) => {
            onChange({ target: { name, value: content } });
          }}
        />

      </Wrapper>
    </>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Editor;
