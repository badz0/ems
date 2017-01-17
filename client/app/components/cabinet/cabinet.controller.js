import countries from './cabinet.countries.json';
import * as firebase from 'firebase';

class CabinetController {
  constructor($firebaseObject,Firedbservice, $mdColorPalette, FiredbAutorisation, Сonstants) {'ngInject';
    const ref = firebase.database().ref().child('user/9');
    let res = $firebaseObject(ref);
    this.FiredbAutorisation = FiredbAutorisation;
    this.colors = Object.keys($mdColorPalette);
    this.avatar=Сonstants.constant1;

    this.FiredbAutorisation.responseData().then(res => {
      this.usersData = res.userData;
      console.log(this.usersData)
      this.color = res.color;
    });
  }

  $onInit () {
    this.countries=countries;
    this.user={};
  }

  submitForm() {
    this.user.country=this.user.country.country||'';
    firebase.database().ref().child('user/9').update(this.user);
    this.user={};
  }
  getFileName(){
    let url=this.users.avatar;
    url = url.split(/[%2F\?]/)[3];
    return url;
  }
  deleteAvatar(){
    firebase.storage().ref().child(`user9/${this.getFileName()}`).delete();
    this.user.avatar=this.avatar;
    firebase.database().ref().child('user/9').update(this.user);
  }
  clearCity(){
    this.user.city = null;
  }
  selectTheme(color){
    this.usersData.themeColor = color;
    firebase.database().ref().child('user/9').update(this.usersData);
    firebase.database().ref().child('user/0').update(this.usersData);
    firebase.database().ref().child(`user/${this.usersData.index}`).update(this.usersData)
  }
}

export default CabinetController;


 //   console.log(res);
    // })
    //     res.$loaded().then(res => {
    //     ref.on('value', snap => {

    //       for (let keys in snap.val()) {
    //       this.result = snap.val()[keys].userId;

    //       if( this.result === res[0].id) {
    //         alert("PIZDETS");
    //         this.usersData = res[0];
    //       }
    //     }
    //     })

    // })
    // })

    //this.methodPizdets()
