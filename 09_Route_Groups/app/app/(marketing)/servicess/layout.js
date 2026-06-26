
export default function RootLayout({ children }) {
  return (
      <>
       <header style={{background:"Black", color:"White"}}>Header(Marketing1)</header>
        {children}
        <footer style={{background:"Black", color:"White"}}>Footer(Marketing1)</footer>
        </>
  );
}