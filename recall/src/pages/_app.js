import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { TemaProvider } from './../docs/context/TemaContext';
import { AuthProvider } from './../docs/context/AuthContext';
import { CategoriaProvider } from './../docs/context/CategoriaContext';
import { PacoteProvider } from './../docs/context/PacoteContext';

function MyApp({ Component, pageProps }) {
  return (
    <PacoteProvider>
      <CategoriaProvider>
        <AuthProvider>
          <TemaProvider>
            <Component {...pageProps} />
          </TemaProvider>
        </AuthProvider>
      </CategoriaProvider>
    </PacoteProvider>
  )
}

export default MyApp
