import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/globals.css';

export const metadata = {
  title: 'Promptopia',
  description: 'Discover & share AI prompts',
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>
          <Provider>
            <div className='main'>
              <div className='gradient' />
            </div>
            <div className='app pt-3 pb-6'>
              <Nav />
              {children}
            </div>
          </Provider>
      </body>
    </html>
  )
}
export default Layout;