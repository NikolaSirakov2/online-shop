import HomeSlider from "@/components/HomeSlider";
import CategorySlider from "@/components/CategorySlider";
import ProductSlider from "@/components/PopularProducts"; 

export default function Home() {
  return (
    <div>
      <HomeSlider />
      <CategorySlider />
      <ProductSlider />
    </div>
  );
}
