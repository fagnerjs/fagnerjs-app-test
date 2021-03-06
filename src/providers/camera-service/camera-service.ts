import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Crop } from '@ionic-native/crop';
import { Camera } from '@ionic-native/camera';

@Injectable()
export class CameraService {

  public options: any = {}

  constructor(public platform: Platform, private camera: Camera, private crop: Crop) {
  }

  // Return a promise to catch errors while loading image
  takePhoto(): Promise<any> {
    const options = {
      quality: 100,
      // destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      targetWidth: 300,
      targetHeight: 300
    }
    // Get Image from ionic-native's built in camera plugin
    return this.camera.getPicture(options)
      .then((fileUri) => {
        // let base64Image = 'data:image/jpeg;base64,' + imageData;
        // Crop Image, on android this returns something like, '/storage/emulated/0/Android/...'
        // Only giving an android example as ionic-native camera has built in cropping ability
        if (this.platform.is('ios')) {
          return fileUri
        } else if (this.platform.is('android')) {
          // Modify fileUri format, may not always be necessary
          fileUri = 'file://' + fileUri;

          /* Using cordova-plugin-crop starts here */
          return this.crop.crop(fileUri, { quality: 100, targetWidth: -1, targetHeight: -1 });
        }
      })
      .then((path) => {
        // path looks like 'file:///storage/emulated/0/Android/data/com.foo.bar/cache/1477008080626-cropped.jpg?1477008106566'
        console.log('Cropped Image Path!: ' + path);
        return path;
      });
  }

  // Return a promise to catch errors while loading image
  getImage(): Promise<any> {
    const options = {
      quality: 100,
      // destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false,
      allowEdit: true,
      targetWidth: 300,
      targetHeight: 300
    }
    // Get Image from ionic-native's built in camera plugin
    return this.camera.getPicture(options)
      .then((fileUri) => {
        // let base64Image = 'data:image/jpeg;base64,' + imageData;
        // Crop Image, on android this returns something like, '/storage/emulated/0/Android/...'
        // Only giving an android example as ionic-native camera has built in cropping ability
        if (this.platform.is('ios')) {
          return fileUri
        } else if (this.platform.is('android')) {
          // Modify fileUri format, may not always be necessary
          fileUri = 'file://' + fileUri;

          /* Using cordova-plugin-crop starts here */
          return this.crop.crop(fileUri, { quality: 100, targetWidth: -1, targetHeight: -1 });
        }
      })
      .then((path) => {
        // path looks like 'file:///storage/emulated/0/Android/data/com.foo.bar/cache/1477008080626-cropped.jpg?1477008106566'
        console.log('Cropped Image Path!: ' + path);
        return path;
      })
  }

}
