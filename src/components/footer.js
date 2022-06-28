/** @jsx jsx */
import { jsx } from "theme-ui"
/**import { Link } from "gatsby"*/
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
        Copyright Sabbatical Wines, 2022 | Made with{" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        by <a href="https://www.adambozman.com/">Adam Bozman</a>
      </p>
    </div>
  </footer>
)

export default Footer
