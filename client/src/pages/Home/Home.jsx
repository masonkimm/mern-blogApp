import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import SideBar from '../../components/SideBar/SideBar';
import './Home.css';

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <div className="Home__body">
        <Posts />
        <SideBar />
      </div>
    </div>
  );
}
