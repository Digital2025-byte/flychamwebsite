import Cover from '@/components/Media-center/Cover'
import React from 'react'
import coverImg from "../../assets/images/Media-center/cover.png"
import lastNewImg from "../../assets/images/Media-center/lastNewImg.png"
import LatestNews from '@/components/Media-center/LatestNews'

const MediaCenter = () => {
    return (
        <div><Cover coverImg={coverImg} />
            <LatestNews lastNews={{
                date: "24 JUL 2025",
                category: "Network",
                title: "Company Announces Major Expansion Plans",
                description:
                    "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. . ",
                image: lastNewImg,
                link: "/news/major-expansion",
            }} />
        </div>
    )
}

export default MediaCenter