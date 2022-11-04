import { productionPageData } from '../../data'
import ArticlePage from '../../articlePage/ArticlePage'

const RecoveryPage = () => {
    const { productionPageBottomImg, articleList } = productionPageData

    return (
        <ArticlePage
            productionPageBottomImg={productionPageBottomImg}
            article={articleList[3]}
        />
    )
}

export default RecoveryPage