import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { Button } from '@buffetjs/core';
import { Label, InputDescription, InputErrors } from 'strapi-helper-plugin';
import Editor from './Tinymce';
import MediaLib from './MediaLib';

const WysiwygWithErrors = ({
  inputDescription,
  errors,
  label,
  name,
  noErrorsDescription,
  onChange,
  value,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  let spacer = !isEmpty(inputDescription) ? (
    <div style={{ height: '.4rem' }} />
  ) : (
    <div />
  );

  if (!noErrorsDescription && !isEmpty(errors)) {
    spacer = <div />;
  }
  const handleToggle = () => setIsOpen(prev => !prev);
  const handleChange = data => {
    if (data.mime.includes('image') && typeof window !== 'undefined') {
      /**
       * @tutorial Check the data object from media library, to insert the options you need to the image.
       * @example console.log(data);
       * @type {string}
       */
      const imgTag = `<p><img src="${data.url}" alt="${data.alternativeText}"/></p>`;
      window.tinymce.activeEditor.insertContent(imgTag);
      const newValue = window.tinymce.activeEditor.getContent();

      onChange({ target: { name, value: newValue } });
    }
    // Handle videos and other type of files by adding some code

  };

  return (
    <div
      className="col-12"
      style={{
        marginBottom: '1.6rem',
        fontSize: '1.3rem',
        fontFamily: 'Lato',
      }}
    >
      <Label htmlFor={name} message={label} style={{ marginBottom: 10 }} />
      <div>
        <Button style={{lineHeight: '1', marginBottom: '16px'}} color="primary" onClick={handleToggle}>
          Media Library
        </Button>
      </div>
      <Editor name={name} onChange={onChange} value={value || ""} />
      <InputDescription
        message={inputDescription}
        style={!isEmpty(inputDescription) ? { marginTop: '1.4rem' } : {}}
      />
      <InputErrors
        errors={(!noErrorsDescription && errors) || []}
        name={name}
      />
      {spacer}
      <MediaLib onToggle={handleToggle} isOpen={isOpen} onChange={handleChange} />
    </div>
  );
};

WysiwygWithErrors.defaultProps = {
  errors: [],
  inputDescription: null,
  label: '',
  noErrorsDescription: false,
  value: '',
};

WysiwygWithErrors.propTypes = {
  errors: PropTypes.array,
  inputDescription: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.shape({
      id: PropTypes.string,
      params: PropTypes.object,
    }),
  ]),
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.shape({
      id: PropTypes.string,
      params: PropTypes.object,
    }),
  ]),
  name: PropTypes.string.isRequired,
  noErrorsDescription: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default WysiwygWithErrors;
