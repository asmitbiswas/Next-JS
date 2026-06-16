// Ts example
// import type { Metadata } from 'next'
 
// export const metadata: Metadata = {
//   title: 'My Blog',
//   description: '...',
// }
 
// export default function Layout() {}

export const metadata = {
  title:{
    template:"%s | Technical Agency",
    default:"Technical Agency"
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <header style={{color:"blue"}}>Header</header>
        {children}
        <footer style={{color:"blue"}}>Footer</footer>
        </body>
    </html>
  );
}
