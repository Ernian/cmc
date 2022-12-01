import heat from '../assets/svg/heat.svg'
import water from '../assets/svg/water.svg'
import wind from '../assets/svg/wind.svg'
import cold from '../assets/svg/cold.svg'

import heatBg from '../assets/svg/heat-bg.svg'
import waterBg from '../assets/svg/water-bg.svg'
import windBg from '../assets/svg/wind-bg.svg'
import coldBg from '../assets/svg/cold-bg.svg'

import productionPageBottomImg from '../assets/img/productionPage/section-page-bg-img-bottom.png'
import compressorImg from '../assets/img/productionPage/compressor-agr.png'
import compressorImg2 from '../assets/img/productionPage/Agregat_.0004.png'
import compressorImg3 from '../assets/img/productionPage/Agregat_.0007.png'
import compressorImg4 from '../assets/img/productionPage/Agregat_.0010.png'

export const elementsProps = [
    {
        svg: heat,
        type: 'heat',
        leftSide: true,
        title: 'ТЕПЛО',
        color: '#EE423E',
        position: {
            start: {
                x: -800,
                y: -450,
            },
            end: {
                x: -201,
                y: -201,
            }
        },
    },
    {
        svg: water,
        type: 'water',
        leftSide: false,
        title: 'ВОДА',
        color: '#20469A',
        position: {
            start: {
                x: 800,
                y: -450,
            },
            end: {
                x: 5,
                y: -201,
            }
        },
    },
    {
        svg: wind,
        type: 'wind',
        leftSide: true,
        title: 'ВОЗДУХ',
        color: '#FBA91B',
        position: {
            start: {
                x: -800,
                y: 450,
            },
            end: {
                x: -201,
                y: 5,
            }
        },

    },
    {
        svg: cold,
        type: 'cold',
        leftSide: false,
        title: 'ХОЛОД',
        color: '#00B1B0',
        position: {
            start: {
                x: 800,
                y: 450,
            },
            end: {
                x: 5,
                y: 5,
            }
        },
    },
]

export const productionPageData = {
    sectionTitle: 'ПРОИЗВОДСТВО ОБОРУДОВАНИЯ',
    pageBottomImg: productionPageBottomImg,
    articleList: [
        {
            title: 'Компрессорные агрегаты',
            text: 'Компрессорные (или компрессорно-конденсаторные) холодильные агрегаты устроены по-разному, но обычно они состоят из компрессора (модуля, сжимающего хладагент), автоматики, обеспечивающей управление и защиту, конденсатора для превращения паров хладагента в жидкость.',
            img: compressorImg,
            url: '/production/1',
        },
        {
            title: 'Ресиверные станции',
            text: 'Ресиверные станции Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, molestias, assumenda eligendi quidem libero totam, hic excepturi officiis recusandae quae obcaecati nemo magnam qui maiores ipsam. Aut excepturi illum non!',
            img: compressorImg2,
            url: '/production/2',
        },
        {
            title: 'Насосные станции',
            text: 'Насосные станции Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos animi qui a sint velit ut magni quod culpa eum amet ratione tenetur sequi modi, consequatur doloremque? Dolorem nesciunt, a, ad blanditiis numquam nihil eos debitis pariatur nemo rem dignissimos distinctio fugiat itaque veniam dolor minima laudantium cum consequuntur. Expedita, consequuntur.',
            img: compressorImg3,
            url: '/production/3',
        },
        {
            title: 'Станция рекупирации тепла',
            text: 'Станция рекупирации тепла Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem magnam perferendis explicabo! Et esse nesciunt quo delectus soluta modi laborum, impedit officiis placeat totam praesentium repellat quod dicta? Sapiente, magnam? Ratione, exercitationem eum voluptatem obcaecati eius necessitatibus eaque ipsa suscipit veritatis ullam beatae blanditiis recusandae atque possimus cumque! Optio, iusto. Ex, voluptatibus cum. A non cum quo itaque. Magni mollitia explicabo temporibus? Culpa optio impedit nihil et accusantium ratione! Ea expedita vero architecto ex maiores dolorum dolore harum atque, aut omnis quisquam tenetur eligendi ut quam ipsam? Quis ipsum quaerat incidunt officiis, nihil veniam vel itaque est. Voluptatibus, cum saepe. Ratione, exercitationem eum voluptatem obcaecati eius necessitatibus eaque ipsa suscipit veritatis ullam beatae blanditiis recusandae atque possimus cumque! Optio, iusto. Ex, voluptatibus cum. A non cum quo itaque. Magni mollitia explicabo temporibus? Culpa optio impedit nihil et accusantium ratione! Ea expedita vero architecto ex maiores dolorum dolore harum atque, aut omnis quisquam tenetur eligendi ut quam ipsam? Quis ipsum quaerat incidunt officiis, nihil veniam vel itaque est. Voluptatibus, cum saepe.',
            img: compressorImg4,
            url: '/production/4',
        },
    ],
    css: {
        leftSideColor: '#FBA91B',
        rightSideColor: '#1E1E1E',
        titleColor: '#FBA91B',
        titleFontSize: 64,
        lineHeight: '70px',
        articleTitleColor: '#A2A2A2',
        articleTitleHoverColor: '#FFF',
        arrowColor: '#000',
    }
}

export const heatPageData = {
    sectionTitle: 'ТЕПЛО',
    articleList: [
        {
            title: 'Агрегаты воздушного отопления и тепловые завесы',
            text: 'Агрегаты воздушного отопления и тепловые завесы Агрегаты воздушного отопления и тепловые завесы Агрегаты воздушного отопления и тепловые завесы Агрегаты воздушного отопления и тепловые завесы Агрегаты воздушного отопления и тепловые завесы',
            img: null,
            url: '/heat/1',
        },
        {
            title: 'Конвекторное отопление',
            text: 'Конвекторное отоплениеКонвекторное отоплениеКонвекторное отоплениеКонвекторное отоплениеКонвекторное отопление',
            img: null,
            url: '/heat/2',
        },
        {
            title: 'Обогрев приточного воздуха',
            text: 'Обогрев приточного воздухаОбогрев приточного воздухаОбогрев приточного воздухаОбогрев приточного воздухаОбогрев приточного воздухаОбогрев приточного воздухаОбогрев приточного воздуха',
            img: null,
            url: '/heat/3',
        },
        {
            title: 'Нагрев горячего водоснабжения за счет теплоносителя',
            text: 'Нагрев горячего водоснабжения за счет теплоносителяНагрев горячего водоснабжения за счет теплоносителяНагрев горячего водоснабжения за счет теплоносителяНагрев горячего водоснабжения за счет теплоносителяНагрев горячего водоснабжения за счет теплоносителяНагрев горячего водоснабжения за счет теплоносителяНагрев горячего водоснабжения за счет теплоносителяНагрев горячего водоснабжения за счет теплоносителя',
            img: null,
            url: '/heat/4',
        },
        {
            title: 'Тепловые насосы в качестве источника тепловой энергии',
            text: 'Тепловые насосы в качестве источника тепловой энергииТепловые насосы в качестве источника тепловой энергииТепловые насосы в качестве источника тепловой энергииТепловые насосы в качестве источника тепловой энергииТепловые насосы в качестве источника тепловой энергииТепловые насосы в качестве источника тепловой энергииТепловые насосы в качестве источника тепловой энергии',
            img: null,
            url: '/heat/5',
        },
    ],
    pageBottomImg: null,
    css: {
        leftSideColor: '#EE423E',
        rightSideColor: '#1E1E1E',
        titleColor: '#EE423E',
        titleFontSize: 128,
        articleTitleColor: '#A2A2A2',
        articleTitleHoverColor: '#FFF',
        leftArticleTitleColor: '#FFF',
        leftArticleTitleSize: 48,
        leftArticleTitleLineHeight: '58px',
        arrowColor: '#FFF',
    },
    svg: heatBg,
}

export const waterPageData = {
    sectionTitle: 'вода',
    articleList: [
        {
            title: 'Водоснабжение и канализация административных комплексов',
            text: 'Водоснабжение и канализация административных комплексовВодоснабжение и канализация административных комплексовВодоснабжение и канализация административных комплексовВодоснабжение и канализация административных комплексов',
            img: null,
            url: '/water/1',
        },
        {
            title: 'Водоснабжение и канализация пищевого производства',
            text: 'Водоснабжение и канализация пищевого производстваВодоснабжение и канализация пищевого производстваВодоснабжение и канализация пищевого производства',
            img: null,
            url: '/water/2',
        },
        {
            title: 'Водозаборный узел',
            text: 'Водозаборный узелВодозаборный узелВодозаборный узелВодозаборный узелВодозаборный узелВодозаборный узел',
            img: null,
            url: '/water/3',
        },
        {
            title: 'Система увлажнения камер хранения',
            text: 'Нагрев горячего водоснабжения за счет теплоносителяНагрев горячего водоснабжения за счет теплоносителяНагрев горячего водоснабжения за счет теплоносителяНагрев горячего водоснабжения за счет теплоносителяНагрев горячего водоснабжения за счет теплоносителяНагрев горячего водоснабжения за счет теплоносителяНагрев горячего водоснабжения за счет теплоносителяНагрев горячего водоснабжения за счет теплоносителя',
            img: null,
            url: '/water/4',
        },
    ],
    pageBottomImg: null,
    css: {
        leftSideColor: '#20469A',
        rightSideColor: '#1E1E1E',
        titleColor: '#20469A',
        titleFontSize: 128,
        articleTitleColor: '#A2A2A2',
        articleTitleHoverColor: '#FFF',
        leftArticleTitleColor: '#FFF',
        leftArticleTitleSize: 48,
        leftArticleTitleLineHeight: '58px',
        arrowColor: '#FFF',
    },
    svg: waterBg,
}

export const windPageData = {
    sectionTitle: 'воздух',
    articleList: [
        {
            title: 'Воздухоснабжение складских помещений',
            text: 'Воздухоснабжение складских помещенийВоздухоснабжение складских помещенийВоздухоснабжение складских помещенийВоздухоснабжение складских помещенийВоздухоснабжение складских помещений',
            img: null,
            url: '/wind/1',
        },
        {
            title: 'Воздухоснабжение офисов',
            text: 'Воздухоснабжение офисовВоздухоснабжение офисовВоздухоснабжение офисовВоздухоснабжение офисов',
            img: null,
            url: '/wind/2',
        },
        {
            title: 'Воздухоснабжение для пищевых и промышленных производств',
            text: 'Воздухоснабжение для пищевых и промышленных производствВоздухоснабжение для пищевых и промышленных производствВоздухоснабжение для пищевых и промышленных производствВоздухоснабжение для пищевых и промышленных производств',
            img: null,
            url: '/wind/3',
        },
        {
            title: 'Фрикулинг вентиляцией для складских холодильных камер',
            text: 'Фрикулинг вентиляцией для складских холодильных камерФрикулинг вентиляцией для складских холодильных камерФрикулинг вентиляцией для складских холодильных камер',
            img: null,
            url: '/wind/4',
        },
        {
            title: 'Система сжатого воздуха',
            text: 'Система сжатого воздухаСистема сжатого воздухаСистема сжатого воздухаСистема сжатого воздуха',
            img: null,
            url: '/wind/5',
        },
    ],
    pageBottomImg: null,
    css: {
        leftSideColor: '#FBA91B',
        rightSideColor: '#1E1E1E',
        titleColor: '#FBA91B',
        titleFontSize: 128,
        articleTitleColor: '#A2A2A2',
        articleTitleHoverColor: '#FFF',
        leftArticleTitleColor: '#FFF',
        leftArticleTitleSize: 48,
        leftArticleTitleLineHeight: '58px',
        arrowColor: '#25262A',
    },
    svg: windBg,
}

export const coldPageData = {
    sectionTitle: 'холод',
    articleList: [
        {
            title: 'Охлаждение и кондиционирование складских помещений',
            text: 'Охлаждение и кондиционирование складских помещенийОхлаждение и кондиционирование складских помещенийОхлаждение и кондиционирование складских помещений',
            img: null,
            url: '/cold/1',
        },
        {
            title: 'Охлаждение для пищевого производства',
            text: 'Охлаждение для пищевого производстваОхлаждение для пищевого производстваОхлаждение для пищевого производства',
            img: null,
            url: '/cold/2',
        },
        {
            title: 'Охлаждение для камер дозаривания',
            text: 'Охлаждение для камер дозариванияОхлаждение для камер дозариванияОхлаждение для камер дозариванияОхлаждение для камер дозариванияОхлаждение для камер дозаривания',
            img: null,
            url: '/cold/3',
        },
        {
            title: 'Охлаждение технологических жидкостей и сред',
            text: 'Охлаждение технологических жидкостей и средОхлаждение технологических жидкостей и средОхлаждение технологических жидкостей и средОхлаждение технологических жидкостей и сред',
            img: null,
            url: '/cold/4',
        },
        {
            title: 'Системы охлаждения и контроля влажности в серверной',
            text: 'Системы охлаждения и контроля влажности в сервернойСистемы охлаждения и контроля влажности в сервернойСистемы охлаждения и контроля влажности в серверной',
            img: null,
            url: '/cold/5',
        },
        {
            title: 'Кондиционирование для офисов',
            text: 'Кондиционирование для офисовКондиционирование для офисовКондиционирование для офисовКондиционирование для офисов',
            img: null,
            url: '/cold/6',
        },
        {
            title: 'Система осущения воздуха',
            text: 'Система осущения воздухаСистема осущения воздухаСистема осущения воздухаСистема осущения воздуха',
            img: null,
            url: '/cold/7',
        },
        {
            title: 'Фрикулинг',
            text: 'ФрикулингФрикулингФрикулингФрикулингФрикулингФрикулинг',
            img: null,
            url: '/cold/8',
        },
    ],
    pageBottomImg: null,
    css: {
        leftSideColor: '#00B1B0',
        rightSideColor: '#1E1E1E',
        titleColor: '#00B1B0',
        titleFontSize: 128,
        articleTitleColor: '#A2A2A2',
        articleTitleHoverColor: '#FFF',
        leftArticleTitleColor: '#FFF',
        leftArticleTitleSize: 48,
        leftArticleTitleLineHeight: '58px',
        arrowColor: '#25262A',
    },
    svg: coldBg,
}