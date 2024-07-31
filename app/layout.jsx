import '@styles/global.css';
import Nav from '@components/Nav'
import Provider from '@components/Provider'
import { Children } from 'react';

export const Metadata = {
    title: 'PromptGalaxy',
    description: 'Create and Share AI prompts with others'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>

            <main className='app'>
                <Nav/>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout