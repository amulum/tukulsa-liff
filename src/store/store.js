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

// testing = 'https://tukulsa-new-test.herokuapp.com'
// prod = 'https://tukulsa-prod.herokuapp.com'
const apiPath = 'https://tukulsa.site'
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
  handleLoginLine: async () => {
    const liff = await window.liff
    if (!initialState.isLoggedIn) {
      // set `redirectUri` to redirect the user to a URL other than the front page of your LIFF app.
      await liff.login();
    }
  },
  handleLogoutLine: async () => {
    const liff = await window.liff
    if (initialState.isLoggedIn) {
      await liff.logout();
      window.location.reload();
    }
  },
  // FUNCTIONS
  getUserTransactions: async (state, line_id) => {
    console.log('masuk get user transac')
    const dataProfile = {
      line_id
    }
    console.log(dataProfile)
    const req = await {
      method: 'post',
      url: `${apiPath}/users/transactions/filterby`,
      data: dataProfile
    };
    console.log('cek req usertransactions', req);
    const self = store;
    await axios(req)
      .then(response => {
        self.setState({
          listTransactions: response.data,
          isLoading: false
        });
        console.log('masuk then', response.data);
      })
      .catch(error => {
        self.setState({
          isLoading: false
        });
        console.log('masuk error', error);
      });
  },
  // LIFF FUNCTIONS
  closeWindow: (store) => {
    liff.closeWindow()
  },
  getUserInfo: (store) => {
    // const myLiffId = process.env.MY_LIFF_ID;
    console.log('2')
    console.log('masuk initializeLiff')
    return new Promise((resolve, reject) => {
      liff.init({
          liffId: "1653837101-NwEQEqV9" // use own liffId
        })
        .then(() => {
          // get general info
          store.setState({
            language: liff.getLanguage(),
            OS: liff.getOS(),
            version: liff.getVersion(),
            isInClient: liff.isInClient(),
            isLoggedIn: liff.isLoggedIn(),
          })
          // get profile
          liff.getProfile().then(profile => {
              store.setState({
                userId: profile.userId,
                displayName: profile.displayName,
                pictureUrl: profile.pictureUrl,
                statusMessage: profile.statusMessage
              })
            })
            .catch((err) => {
              console.log('error', err);
            });
        })
        .catch((err) => {
          // Error happens during initialization
          console.log('4')
          console.log(err.code, err.message);
        });
    });
  },
  sendMessageLiff: (store, messages) => {
    console.log('masuk send message')
    const messagesToSend = Array.isArray(messages) ? messages : [messages];
    return new Promise((resolve, reject) => {
      liff.init({
          liffId: "1653837101-NwEQEqV9" // use own liffId
        })
        .then(() => {
          liff.sendMessages(messagesToSend)
            .then(() => {
              resolve();
            })
            .catch((err) => {
              reject(err);
            });
        })
        .catch((err) => {
          console.log('masuk error send message', err)
          reject(err);
        });
    });
  }
})