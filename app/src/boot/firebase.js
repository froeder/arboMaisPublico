import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import fireConfig from '../../firebase.conf'

export default async ({ Vue }) => {
  Firebase.initializeApp(fireConfig)

  Vue.prototype.$firebase = Firebase
}
