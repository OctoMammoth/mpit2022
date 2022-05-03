import { ReactNativeFile } from "apollo-upload-client";
import * as mime from 'react-native-mime-types';

export function generateRNFile(uri, name) {
    return uri ? new ReactNativeFile({
      uri,
      type: mime.lookup(uri) || 'image',
      name,
    }) : null;
}