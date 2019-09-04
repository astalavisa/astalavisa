import Layout from './layout.html.jsx';
import Header from './components/header.html.jsx';
import Banner from './components/banner.html.jsx';
import Category from './components/category.html.jsx';
import Countries from './components/countries.html.jsx';
import Employees from './components/employees.html.jsx';
import Plans from './components/plans.html.jsx';
import Footer from './components/footer.html.jsx';
import Videos from './components/videos.html.jsx';
import Contacts from './components/contacts.html.jsx';


export default (props) => {
  return (
    <Layout>
      <Header topnav={props.data.ru_topnav}/>
      <Banner banner={props.data.ru_banner}/>
      <Category visatype={props.data.ru_visatype}/>
      <Countries countries={props.data.ru_countries}/>
      <Videos/>
      <Employees employees={props.data.ru_employees}/>
      <Plans plans={props.data.ru_plans} />
      <Contacts contacts={props.data.ru_contacts}/>
      <Footer bottomnav={props.data.ru_bottomnav} newsletter={props.data.ru_newsletter}/>
    </Layout>
  );
};
