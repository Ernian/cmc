import { useEffect } from 'react'
import useAppContext from '../../hooks/useAppContext'
import ArticlePage from '../../articlePage/ArticlePage'
import { productionPageData } from '../../data'

const CompressorPage = () => {
    const setMenuColors = useAppContext()
    useEffect(() => {
        setMenuColors({
            logoMenuClose: '#FFF',
            logoMenuOpen: '#FFF',
            menuColor: '#FFF',
        })
    }, [])

    const { productionPageBottomImg, articleList } = productionPageData

    return (
        <ArticlePage
            productionPageBottomImg={productionPageBottomImg}
            article={articleList[0]}
        />
    )
}

export default CompressorPage