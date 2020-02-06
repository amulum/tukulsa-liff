import createStore from 'unistore';
import axios from 'axios'

const liff = window.liff

const initialState = {
  test: '',
  language: '',
  OS: '',
  version: '',
  isInClient: '',
  isLoggedIn: false,
  // profile
  userId: '',
  displayName: '',
  pictureUrl: '',
  statusMessage: '',
  listTransactions: []
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
  })

  // get profile
  liff.getProfile().then(profile => {
    const { userId, displayName, pictureUrl, statusMessage} = profile
    store.setState({userId, displayName, pictureUrl, statusMessage})
    console.log('getprofile', userId)
    console.log('getprofile', displayName)
    console.log('getprofile', pictureUrl)
    console.log('getprofile', statusMessage)
  })
  .catch((err) => {
    console.log('error', err);
  });
}

const apiPath = 'tukulsa-new-test.herokuapp.com'

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
  handleLoginLine : async ()  => {
    const liff = await window.liff
    if (!initialState.isLoggedIn) {
      // set `redirectUri` to redirect the user to a URL other than the front page of your LIFF app.
      await liff.login();
    }
  },
  handleLogoutLine : async ()  => {
    const liff = await window.liff
    if (initialState.isLoggedIn) {
      await liff.logout();
      window.location.reload();
    }
  },
  // FUNCTIONS
  getUserTransactions: async (state, line_id) => {
    const req = {
      method: 'post',
      url: `${apiPath}/users/transactions/filterby`,
      line_id: 'Uc38d44c9d7f172a98011fca096171acd'
    };
    console.warn('cek req usertransactions', req);
    const self = store;
    await axios(req)
      .then(response => {
        self.setState({
          listTransactions: response.data,
          isLoading: false
        });
        console.log('get user transactions success', response.data);
      })
      .catch(error => {
        self.setState({
          isLoading: false
        });
        console.log(error);
      });
  },
  initializeLiff: (store) => {
    // const myLiffId = process.env.MY_LIFF_ID;
    console.log('masuk initializeLiff')
    liff
      .init({
        liffId: "1653826903-Adz5znvw" // use own liffId
      })
      .then(() => {
        // Start to use liff's api
        console.log('masuk initializeApp')
        getLiffData();
        if (liff.isLoggedIn()) {
          store.setState({
            isLoggedIn: true
          });
        }
      })
      .catch((err) => {
        // Error happens during initialization
        console.log(err.code, err.message);
      });
  }
})