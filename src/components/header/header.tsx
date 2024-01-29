import './header.css'   
import Navbar from './nav-bar';
import Layout from './layout';

export default function Header(){
    return (
      <header className="header">
       
          <Navbar />
        <Layout />
      </header>
    );
}
