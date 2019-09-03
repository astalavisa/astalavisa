import Layout from './layout.html.jsx';
import Header from './components/header.html.jsx';
import Category from './components/category.html.jsx';
import Countries from './components/countries.html.jsx';
import Employees from './components/employees.html.jsx';
import Plans from './components/plans.html.jsx';
import Footer from './components/footer.html.jsx';

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
