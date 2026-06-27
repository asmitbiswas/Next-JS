
export default function RootLayout({ children }) {
  return (
      <>
       <header style={{background:"maroon", color:"White"}}>Header(Marketing2)</header>
        {children}
        <footer style={{background:"Grey", color:"White"}}>Footer(Marketing2)</footer>
        </>
  );
}
