import { useEffect } from 'react'
import SectionMenuPage from '../sectionMenuPage/SectionMenuPage'
import imgBottom from '../../../assets/img/productionPage/section-page-bg-img-bottom.png'
import compressorImg from '../../../assets/img/productionPage/compressor-agr.png'
import compressorImg2 from '../../../assets/img/productionPage/Agregat_.0004.png'
import compressorImg3 from '../../../assets/img/productionPage/Agregat_.0007.png'
import compressorImg4 from '../../../assets/img/productionPage/Agregat_.0010.png'

const data = {
    sectionTitle: 'ПРОИЗВОДСТВО ОБОРУДОВАНИЯ',
    imgBottom,
    articleList: [
        {
            title: 'Компрессорные агрегаты',
            text: 'Компрессорные (или компрессорно-конденсаторные) холодильные агрегаты устроены по-разному, но обычно они состоят из компрессора (модуля, сжимающего хладагент), автоматики, обеспечивающей управление и защиту, конденсатора для превращения паров хладагента в жидкость.',
            img: compressorImg,
        },
        {
            title: 'Ресиверные станции',
            text: 'Ресиверные станции Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, molestias, assumenda eligendi quidem libero totam, hic excepturi officiis recusandae quae obcaecati nemo magnam qui maiores ipsam. Aut excepturi illum non!',
            img: compressorImg2,
        },
        {
            title: 'Насосные станции',
            text: 'Насосные станции Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos animi qui a sint velit ut magni quod culpa eum amet ratione tenetur sequi modi, consequatur doloremque? Dolorem nesciunt, a, ad blanditiis numquam nihil eos debitis pariatur nemo rem dignissimos distinctio fugiat itaque veniam dolor minima laudantium cum consequuntur. Expedita, consequuntur.',
            img: compressorImg3,
        },
        {
            title: 'Станция рекупирации тепла',
            text: 'Станция рекупирации тепла Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem magnam perferendis explicabo! Et esse nesciunt quo delectus soluta modi laborum, impedit officiis placeat totam praesentium repellat quod dicta? Sapiente, magnam? Ratione, exercitationem eum voluptatem obcaecati eius necessitatibus eaque ipsa suscipit veritatis ullam beatae blanditiis recusandae atque possimus cumque! Optio, iusto. Ex, voluptatibus cum. A non cum quo itaque. Magni mollitia explicabo temporibus? Culpa optio impedit nihil et accusantium ratione! Ea expedita vero architecto ex maiores dolorum dolore harum atque, aut omnis quisquam tenetur eligendi ut quam ipsam? Quis ipsum quaerat incidunt officiis, nihil veniam vel itaque est. Voluptatibus, cum saepe.',
            img: compressorImg4,
        },
    ]
}

const ProductionPage = ({ setMenuColors }) => {
    useEffect(() => {
        setMenuColors({
            logoMenuClose: '#FFF',
            logoMenuOpen: '#FFF',
            menuColor: '#FFF',
        })
    }, [])

    return <SectionMenuPage
        {...data}
    />
}

export default ProductionPage