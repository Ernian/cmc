import { productionPageData } from '../../data'
import ArticlePage from '../../articlePage/ArticlePage'

const CompressorPage = () => {
    const { productionPageBottomImg, articleList } = productionPageData

    return (
        <ArticlePage
            productionPageBottomImg={productionPageBottomImg}
            article={articleList[0]}
        />
    )
}

export default CompressorPage