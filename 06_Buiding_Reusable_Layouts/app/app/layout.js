export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{background:"black", color:"white"}}>Header</header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
