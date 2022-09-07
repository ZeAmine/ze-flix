import Footer from "../Footer";
import Header from "../Header";
import css from "./style.module.scss";
import cx from "classnames/bind";

const Layout = ({ children }) => {
  return (
    <div className={cx(css.Layout, css.main)}>
      <Header />
      <main className={css.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
