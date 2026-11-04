import ContactCTA from "./ContactCTA";
import HomeView from "./HomeView";
import ProductView from "./ProductView";
import Services from "./Services";

export default function Home() {
  return (
    <div>
      <HomeView />
      <ProductView />
      <ContactCTA/>
      <Services/>
    </div>
  )
}
