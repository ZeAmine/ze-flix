import classnames from "classnames/bind";
import Footer from "../Footer";
import Header from "../Header";

import css from "./style.module.scss";
const cx = classnames.bind(css);

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
