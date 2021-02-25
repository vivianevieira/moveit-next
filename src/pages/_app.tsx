import '../styles/global.css';

import { ChallangesProvider } from '../contexts/ChallengeContext';


function MyApp({ Component, pageProps }) {


  return (
    <ChallangesProvider>
      <Component {...pageProps} />
    </ChallangesProvider>
  )
}

export default MyApp
