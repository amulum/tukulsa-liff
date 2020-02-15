const liff = window.liff;
let isInit = false;
let profile = {};
let liffInfo = {};

class liffHelp {
  init() {
    return (
      liff
      .init({
        liffId: "1653826903-Adz5znvw" // use own liffId
      })
      .then(() => {
        // Start to use liff's api
      })
      .catch((err: LiffError) => {
        // Error happens during initialization
        console.log(err.code, err.message);
      })
    )
  }
}