
export default function RootLayout({ children }) {
  return (
      <>
       <header style={{background:"Green", color:"White"}}>Header(Marketing2)</header>
        {children}
        <footer style={{background:"Yellow", color:"White"}}>Footer(Marketing2)</footer>
        </>
  );
}
