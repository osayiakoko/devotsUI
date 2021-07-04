import Section from "../components/Section";
import DetailsCard from "../components/DetailsCard";
import CustomerRemarks from "../components/CustomerRemarks";
import sections from "../data/sections";

const Home = () => {
  return (
    <>
      {sections.map((sec, index) => {
        return (
          <Section
            key={index}
            title={sec.title}
            color={sec.color}
            gridCols={sec.gridCols}
          >
            {sec.children.map((child, index) => {
              return (
                <DetailsCard
                  key={index}
                  icon={child.icon}
                  title={child.title}
                  color={child.color}
                  body={child.body}
                ></DetailsCard>
              );
            })}
          </Section>
        );
      })}
      <CustomerRemarks></CustomerRemarks>
    </>
  );
};

export default Home;
