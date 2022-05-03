import React from 'react'
import {useMutation} from '@apollo/client'
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'
import Layout from '../../components/Layout'
import { SINGLE_UPLOAD } from '../../graphql/Upload/mutation'
import { generateRNFile } from '../../utils/generateRNFile'


const { height, width } = Dimensions.get('screen')

const UploadImage = () => {
   const [image, setImage] = React.useState(null)
   const [uploadImage] = useMutation(SINGLE_UPLOAD)

   const onComplete = async () => {
      if (image) {
         let file = await generateRNFile(
            image.assets[0].uri,
            image.assets[0].fileName,
         )
         await uploadImage({
            variables: {
               upload: file,
            },
            onCompleted: ({singleUpload: data}) => {
               console.log(data)
            },
         })
      }
   }

   return (
      <Layout>
         <TouchableOpacity
            style={{
               borderRadius: 16,
               width: width - 32,
               justifyContent: 'center',
               flexDirection: 'row',
               height: width - 32,
               alignItems: 'center',
               justifyContent: 'center',
               borderWidth: 1,
               borderColor: "white",
            }}
            onPress={async () => {
               const result = await launchImageLibrary({
                  mediaType: 'photo',
                  selectionLimit: 1,
                  maxHeight: 1024,
                  maxWidth: 1024,
                  quality: 0.5,
               })
               if (!result.didCancel) setImage(result)
            }}>
            {image ? (
               <Image
                  source={{uri: image.assets[0].uri}}
                  style={{
                     borderWidth: 1,
                     borderColor: "white",
                     width: width - 32,
                     height: width - 32,
                     borderRadius: 16,
                  }}
               />
            ) : (
               <Text style={{color: 'white'}}>Выберете фотографию</Text>
            )}
         </TouchableOpacity>
         <TouchableOpacity
            onPress={onComplete}
            style={{
               borderRadius: 8,
               width: width - 32,
               height: 48,
               alignSelf: 'center',
               position: 'absolute',
               bottom: 64,
               alignItems: 'center',
               justifyContent: 'center',
               backgroundColor: '#32D74B',
            }}>
            <Text
               style={{
                  color: 'white',
                  fontWeight: '500',
                  fontSize: 16,
               }}>
               Загрузить фотографию
            </Text>
         </TouchableOpacity>
      </Layout>
   )
}

export default UploadImage
