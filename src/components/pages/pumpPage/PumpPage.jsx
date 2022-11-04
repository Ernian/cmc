import { productionPageData } from '../../data'
import ArticlePage from '../../articlePage/ArticlePage'

const PumpPage = () => {
    const { productionPageBottomImg, articleList } = productionPageData

    return (
        <ArticlePage
            productionPageBottomImg={productionPageBottomImg}
            article={articleList[2]}
        />
    )
}

export default PumpPage