import createStore from 'unistore';

const liff = window.liff

const initialState = {
  test: '',
  language: '',
  OS: '',
  version: '',
  isInClient: '',
  profile: [],
  isLoggedIn: false
};
export const store = createStore(initialState);

// LIFF FUNCTION 
const getLiffData = () => {
  store.setState({
    language: liff.getLanguage(),
    OS: liff.getOS(),
    version: liff.getVersion(),
    isInClient: liff.isInClient(),
    isLoggedIn: liff.isLoggedIn(),
    profile: liff.getProfile()
  })
  console.log('masuk get liffdata', liff.getLanguage())
  console.log('masuk get liffdata', liff.getOS())
  console.log('masuk get liffdata', liff.getVersion())
  console.log('masuk get liffdata', liff.isInClient())
  console.log('masuk get liffdata', liff.isLoggedIn())
}

const initializeApp = () => {
  console.log('masuk initializeApp')
  getLiffData();
  if (liff.isLoggedIn()) {
    store.setState({
      isLoggedIn: true
    });
  }
}



export const actions = store => ({
  // BASIC FUNCTION
  setInput: (store, event) => {
    console.log(event.target.name, event.target.value)
    store.setState({
      [event.target.name]: event.target.value
    })
  },
  setChange: (store, key, value) => {
    store.setState({
      [key]: value
    });
  },
  setManyChanges: (store, dict) => {
    store.setState(dict)
  },
  // FUNCTIONS
  initializeLiff: (store) => {
    // const myLiffId = process.env.MY_LIFF_ID;
    console.log('masuk initializeLiff')
    liff
      .init({
        liffId: "1653826903-Adz5znvw" // use own liffId
      })
      .then(() => {
        // Start to use liff's api
        initializeApp()
      })
      .catch((err) => {
        // Error happens during initialization
        console.log(err.code, err.message);
      });
  }
})