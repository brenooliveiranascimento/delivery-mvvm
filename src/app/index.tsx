import { useHomeModel } from "../ViewModels/Home/home.model";
import HomeVIew from "../ViewModels/Home/home.view";

export default function Home() {
  const props = useHomeModel();

  return <HomeVIew {...props} />;
}
