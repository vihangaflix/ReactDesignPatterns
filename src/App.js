import { ProductInfo } from "./ProductInfo";
import ResourceLoader from "./ResourceLoader";
import UserInfo from "./UserInfo";

function App() {
	return (
    <>
	  <ResourceLoader resourceUrl="/users/234" resourceName="user">
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceUrl="/products/1234" resourceName="product">
        <ProductInfo />
      </ResourceLoader>
    </>
    );
}

export default App;