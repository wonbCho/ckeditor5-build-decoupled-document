/* eslint-disable */

import _ from 'lodash';

import { Plugin } from 'ckeditor5/src/core';
import { FileDialogButtonView } from 'ckeditor5/src/upload';

const createImageTypeRegExp = types => {
  // Sanitize the MIME type name which may include: "+", "-" or ".".
  const regExpSafeNames = types.map(type => type.replace('+', '\\+'));

  return new RegExp(`^image\\/(${regExpSafeNames.join('|')})$`);
};

class Uploader extends Plugin {
  init() {
    const editor = this.editor;
    editor.ui.componentFactory.add('insertFileAndImage', locale => {
      const view = new FileDialogButtonView(locale);
      const imageTypes = editor.config.get('image.type');
      const imageTypesRegExp = createImageTypeRegExp(imageTypes);

      // 사용자가 upload할 file/image를 선택 시 done event가 발생함.
      view.on('done', (evt, files) => {
        const [imagesToUpload] = _.partition(files, file =>
          imageTypesRegExp.test(file.type)
        );

        if (imagesToUpload.length) {
          editor.execute('imageUpload', { file: imagesToUpload });
        }
      });

      return view;
    });
  }
}

export default Uploader;
