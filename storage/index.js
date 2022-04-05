const STORAGE_USER_KEY = 'STORAGE_USER_KEY'

export default {
   getStorage() {
       JSON.parse(window.sessionStorage.getItem(STORAGE_USER_KEY))
   }
}