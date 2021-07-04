import Header from './components/Header';
import Section from './components/Section';
import DetailsCard from './components/DetailsCard';
import CustomerRemarks from './components/CustomerRemarks'
import sections from './data/sections'
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header></Header>
      <main>
        {sections.map((sec, index) => {
          return (
            <Section key={index} title={sec.title} color={sec.color} gridCols={sec.gridCols}>
              {
                sec.children.map((child, index) => {
                  return (
                    <DetailsCard key={index} icon={child.icon} title={child.title} color={child.color} body={child.body}></DetailsCard>
                  )
                }) 
              }
            </Section>
          )
        })}

        <CustomerRemarks></CustomerRemarks>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
