import Layout from './layout.html.jsx';
import Header from './components/header.jsx';
import Category from './components/category.jsx';
import Countries from '../components/countries.jsx';
import Employees from '../components/employees.jsx';
import Plans from '../components/plans.jsx';
// import ContactMap
import Footer from '../components/footer.jsx';

export default () => {
  return (
    <Layout>
      <Header/>
      <Category/>
      <Countries/>
      <Employees/>
      <Plans/>
      <Footer/>
    </Layout>
  );
};
