import Navber from "./Navber";

function Layout({ children }) {
  
  return (
    <>
      <Navber />
      {children}
    </>
  );
}

export default Layout;
