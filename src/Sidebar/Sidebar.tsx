import "./Sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import { GrCart } from "react-icons/gr";

function Sidebar() {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>
            <GrCart />
          </h1>
        </div>
        <Category />
        <Price />
        <Colors />
      </section>
    </>
  );
}

export default Sidebar;
