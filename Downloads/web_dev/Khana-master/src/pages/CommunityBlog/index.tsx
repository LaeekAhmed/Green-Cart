import { useDispatch, useSelector } from "react-redux";
import { PAGE } from "../../redux/AppFlow/types";
import { getAppFlow } from "../../redux/AppFlow/selectors";
import { Check2All, House, HouseExclamation } from "react-bootstrap-icons";
import { APP_FLOW_ACTIONS } from "../../redux/AppFlow";
import { getCart } from "../../redux/Cart/selectors";
import { CART_ACTIONS } from "../../redux/Cart";
import { get } from "lodash";
import "./_CommunityBlog.scss" 
import { fixControlledValue } from "antd/es/input/Input";
const CommunityBlog = () => {
  const { page } = useSelector(getAppFlow);
  const { cart } = useSelector(getCart);
  const dispatch = useDispatch();

  return (
    <div className={page === PAGE.COMMUNITYBLOG ? "community-blog" : "community-blog hidden-screen"}>
        <h1 className="heading">
        Community Blog - A message for the people!
        </h1>
        <img src="https://farms.extension.wisc.edu/files/2020/10/shutterstock_508785310-2.jpg" className="image-scale-half"  />
        <p className="relative-position">
        In today's fast-paced world, convenience is key. However, as we all strive for a more sustainable future, it's important to consider the environmental impact of our daily choices. This is where our unique application comes in- connecting local farmers to consumers in a way that not only supports the local community, but also has a significantly lesser carbon footprint compared to traditional grocery stores.
        </p>
        <img src="https://cdn.hswstatic.com/gif/carbon-footprints.jpg" className="image-scale-half" />
        <p className="relative-position">
        One of the main ways in which our business reduces its carbon footprint is through its efficient use of transportation. By consolidating orders from multiple consumers and delivering them in a single vehicle, we are able to significantly reduce the number of vehicles on the road, compared to if each consumer were to individually purchase their groceries from a traditional store. This not only reduces emissions from transportation but also the traffic on the road.
        </p>
        <img src="https://media.greenmatters.com/brand-img/ItPnJ/0x0/what-is-composting-1539283210573-1539283216657.jpg" className="image-scale-half" id="crops"/>
        <p className="relative-position">
        Our business also promotes sustainable farming practices, as we work directly with local farmers who often use techniques such as crop rotation and composting to improve soil health and reduce the need for synthetic fertilizers and pesticides. These sustainable practices not only benefit the environment, but also result in fresher and healthier produce for our customers.    
        </p>
        <img src="https://smallbiztrends.com/ezoimgfmt/media.smallbiztrends.com/2017/08/farmers-market-850x476.jpg?ezimgfmt=ng%3Awebp%2Fngcb12%2Frs%3Adevice%2Frscb12-1" className="image-scale-half"/>
        <p className="relative-position">
        By purchasing directly from local farmers, our customers are also supporting their local community and preserving farmland. This helps to reduce urban sprawl and associated emissions.
        </p>
        <img src="https://www.ecofarmingdaily.com/wp-content/uploads/shutterstock_231739837.jpg" className="image-scale-half" id="crops"/>
        <p className="relative-position">
        In summary, our business model not only offers fresh, locally-sourced produce, but also greatly reduces the environmental impact of the food system through efficient transportation, sustainable farming practices and supporting local communities. By choosing our service, customers can enjoy the convenience of grocery delivery while also making a conscious effort to reduce their own carbon footprint!
        </p>
        </div>
    
    );
};

export default CommunityBlog;
