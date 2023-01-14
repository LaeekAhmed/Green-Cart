import { useDispatch, useSelector } from "react-redux";
import { PAGE } from "../../redux/AppFlow/types";
import { getAppFlow } from "../../redux/AppFlow/selectors";
import { Check2All, House, HouseExclamation } from "react-bootstrap-icons";
import { APP_FLOW_ACTIONS } from "../../redux/AppFlow";
import { getCart } from "../../redux/Cart/selectors";
import { CART_ACTIONS } from "../../redux/Cart";
import { get } from "lodash";
import "./_CommunityBlog.scss" 
const CommunityBlog = () => {
  const { page } = useSelector(getAppFlow);
  const { cart } = useSelector(getCart);
  const dispatch = useDispatch();

  return (
    <div className={page === PAGE.COMMUNITYBLOG ? "community-blog" : "community-blog hidden-screen"}>
        <h1>
            Community Blog
        </h1>
        <p>
            This is where we will have a community blog for people to post their recipes and share them with others.
        </p>
        </div>
    );
};

export default CommunityBlog;
