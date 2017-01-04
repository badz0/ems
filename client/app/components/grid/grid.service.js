import * as firebase from 'firebase';

export class EmailDetailService {
    constructor($firebaseArray, $log) {
        'ngInject';
        const ref = firebase.database().ref().child('email');
        var list = $firebaseArray(ref);
        return list.$loaded(
            function(list) {
                return list;
            },
            function(error) {
                $log.error('Error:', error);
            });
    }
}
