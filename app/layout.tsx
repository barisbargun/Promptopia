import Nav from '@components/Nav';
import Provider from '@components/Provider';
import QueryProvider from '@providers/QueryProvider';
import '@styles/globals.css';

export const metadata = {
  title: 'Promptopia',
  description: 'Discover & share AI prompts',
}

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        <QueryProvider>
          <Provider>
            <div className='main'>
              <div className='gradient' />
            </div>
            <div className='app pt-3 pb-6'>
              <Nav />
              {children}
            </div>
          </Provider>
        </QueryProvider>
      </body>
    </html>
  )
}
export default layout;