import React from "react"
import { useHistory } from "react-router-dom"
import MenuItem from "../menu-item/MenuItem"

import "./directoryStyles.scss"

const MainImage = () => {
    const homePageDisplayData = {
        id: 1,
        title: "Shopify",
        subTitle: "Frontend Developer Intern Challenge",
        imageUrl:
            "https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",

        imageAlt: "blackBackground"
    }

    const history = useHistory()
    const handleClick = () => {
        history.push("/search")
    }

    return (
        <div className="directory-comp" onClick={handleClick}>
            <MenuItem
                key={homePageDisplayData.id}
                title={homePageDisplayData.title}
                subTitle={homePageDisplayData.subTitle}
                imageUrl={homePageDisplayData.imageUrl}
                imageAlt={homePageDisplayData.imageAlt}
            />
        </div>
    )
}

export default MainImage
