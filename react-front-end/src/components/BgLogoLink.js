import React from "react";
import BgLogoSVG from "../svgs/BgLogoSVG";

const BgLogoLink = () => {
    return (
        <a
            id="logo-link"
            href="http://www.brodiegriggs.co.uk"
            target="_blank"
            rel="noreferrer"
        >
            <BgLogoSVG />
        </a>
    )
}

export default BgLogoLink;