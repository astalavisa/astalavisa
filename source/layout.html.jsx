import './css/style.css';
import './css/colors/blue.css';

export default function Layout({ children }) {
  return (
    <div id="wrapper">
      { children }
    </div>
  );
}
