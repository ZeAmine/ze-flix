import { AppWrapper } from '../src/context/state';
import '../src/styles/index.scss';

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />;
    </AppWrapper>
  );
}

export default MyApp;
