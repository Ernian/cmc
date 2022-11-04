import { productionPageData } from '../../data'
import ArticlePage from '../../articlePage/ArticlePage'

const ReceiverPage = () => {
    const { productionPageBottomImg, articleList } = productionPageData

    return (
        <ArticlePage
            productionPageBottomImg={productionPageBottomImg}
            article={articleList[1]}
        />
    )
}

export default ReceiverPage