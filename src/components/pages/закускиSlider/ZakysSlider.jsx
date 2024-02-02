import React, { useEffect, useState } from 'react'
import axios from 'axios'
import scss from './ZakysSlider.module.scss'
import Modalnyi from '../../modal/modalnyii/Modalnyi'

const ZakysSlider = () => {
	const [data, setData] = useState([])
	const [error, setError] = useState(null)

	const [selectedItem, setSelectedItem] = useState(null)
	const [isModalOpen, setModalOpen] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					'https://elchocrud.pro/api/v1/mypizza/snacks',
				)
				setData(response.data)
			} catch (error) {
				setError(error.message)
			}
		}

		fetchData()
	}, [])

	const openModal = (item) => {
		setSelectedItem(item)
		setModalOpen(true)
	}

	const closeModal = () => {
		setSelectedItem(null)
		setModalOpen(false)
	}

	return (
		<>
			{data.map((item, index) => (
				<div
					key={index}
					className={scss.card}
					onClick={() => openModal(item)}
				>
					<p>{item.id}</p>
					<h1>{item.name}</h1>
					<img src={item.image} alt={item.name} />
					<h3>{item.price}</h3>
					<h5>{item.weight}</h5>
					<p className={scss.text}>{item.ingredients}</p>
				</div>
			))}

			{isModalOpen && selectedItem && (
				<Modalnyi item={selectedItem} onClose={closeModal} />
			)}
		</>
	)
}

export default ZakysSlider

// import React from 'react'
// import { useEffect, useState } from 'react'
// import axios from 'axios'

// const ZakysSlider = () => {
// 	const [data, setData] = useState([])
// 	const [error, setError] = useState(null)

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				const response = await axios.get(
// 					'https://elchocrud.pro/api/v1/mypizza/snacks',
// 				)
// 				setData(response.data)
// 			} catch (error) {
// 				setError(error.message)
// 			}
// 		}

// 		fetchData()
// 	}, [])

// 	return (
// 		<>
// 			{data.map((item, index) => (
// 				<div key={index}>{item.name}
//         <img src={item.image} alt={item.name} />
//         <p>{item.ingedients}</p>
//         </div>
// 			))}
// 		</>
// 	)
// }

// export default ZakysSlider

// import React from 'react'
// import scss from './ZakysSlider.module.scss'
// import { useKeenSlider } from 'keen-slider/react'

// const sliderZakys = [
// 	{
// 		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v156/Zakuski/Assorti_SET/Medium.png?hash=d7eb26ad451b789bf365a5c6759ffbeb',
// 		title: 'Ассорти СЕТ',
//         text: 'Колбаски: говяжья и куриная, полукопченная, капуста квашеная, картофель фри, сочные куриные крылышки, чесночные гренки, сырный соус, горчица,кетчуп. АССОРТИ СЕТ Уй этинен жана тоок этинен, жарым- жартылай ышталган колбасалар, туздалып ачытылган капуста, карт?шк? фри, ширел?? тоок канаттары, сарымсактуу куурулган нандар, сыр чыгы, горчица, кетчуп.',
// 	},
//     {
// 		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Zakuski/Atlantika/Medium.png?hash=ae7197f1b66fa65b638ad8cf17858007',
// 		title: 'Атлантика',
//         text: 'Атлантическая слабосолёная сельдь, отварной картофель, лук, зелень. АТЛАНТИКА Азыраак туздалган Атлантика сельди, сууга бышкан карт?шк?, пияз, ч?п- чарлар. Atlantic slightly salted herring, boiled potatoes, onions, herbs.',
// 	},
//     {
// 		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Zakuski/Kryilyishki_barbekiu/Medium.png?hash=50c82fda67d0437db7c02116f5947588',
// 		title: 'Крылышки барбекю',
//         text: 'Крылышки барбекю. БАРБЕКЮ КАНАТТАРЫ Barbecue chicken wings',
// 	},
//     {
// 		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Zakuski/Kryilyishki_pod_sousom_teriiaki/Medium.png?hash=3d977c634021ea7269c74d849ebd0957',
// 		title: 'Крылышки под соусом терияки',
//         text: 'Крылышки под соусом терияки. ТЕРИЯКИ СОУСУНДА КАНАТТАР Teriyaki chicken wings.',
// 	},
//     {
// 		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Zakuski/Naggetsyi_iz_kuritsyi/Medium.png?hash=33af30fe977292fdd59cd4e76e6362ac',
// 		title: 'Наггетсы из курицы',
//         text: 'Наггетсы из курицы. Подаются с фирменным соусом тартар. Подаются с фирменным соусом тартар. ТООК ЭТИНЕН НАГГЕТСТЕР Тартар ?зг?ч?л?? соусу менен берилет. Chicken nuggets. Served with special sauce tartar.',
// 	},
//     {
// 		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v156/Zakuski/Firmennyie_kolbaski_goviazhi/Medium.png?hash=a640f809fc228996767494280693ce86',
// 		title: 'Фирменные колбаски (говяжьи)',
//         text: 'Подаются с квашеной капустой, картофелем по-деревенски, горчицей и маринованными огурцами. ФИРМАЛЫК КОЛБАСАЛАР Туздалып ачытылган капуста, элет карт?шк?с?, горчица жана маринаддалган бадыра? менен берилет.',
// 	},
//     {
// 		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v156/Zakuski/Firmennyie_kolbaski_kurinyie/Medium.png?hash=04cb662086da7782c99eb446efe28a1a',
// 		title: 'Фирменные колбаски (куриные)',
//         text: 'Подаются с квашеной капустой, картофелем по-деревенски, горчицей и маринованными огурцами. ФИРМАЛЫК КОЛБАСАЛАР Туздалып ачытылган капуста, элет карт?шк?с?, горчица жана маринаддалган бадыра? менен берилет.',
// 	},
//     {
// 		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v19/Zakuski/Khrustiashchie_kurinyie_kryilyishki/Medium.png?hash=de201bf4de991c1fc66bcdd0886fcd50',
// 		title: 'Хрустящие куриные крылышки',
//         text: 'Хрустящие куриные крылышки. ТООКТУН КЫТЫРАК КАНАТТАРЫ Crispy chicken wings.',
// 	},
// ]

// const закSlider = () => {
//     const [sliderRef] = useKeenSlider({
//         breakpoints: {
//           "(min-width: 400px)": {
//             slides: { perView: 2, spacing: 5 },
//           },
//           "(min-width: 700px)": {
//             slides: { perView: 2, spacing: 5 },
//           },
//           "(min-width: 1000px)": {
//             slides: { perView: 3, spacing: 10 },
//           },
//         },
//         slides: { perView: 1 },
//       })
// 	return (
// 		<>
// 			<section className={scss.Slider}>
// 				<div className='container'>
// 					<div className={scss.content}>
// 						<div ref={sliderRef} className='keen-slider'>
//                             {sliderZakys.map((item,index) => (
//                                  <div key={index} className="keen-slider__slide number-slide1">
//                                 <img className={scss.img} src={item.img} alt={item.title} />
//                                 <h3>{item.title}</h3>
//                                 <p>{item.text}</p>
//                                 </div>
//                             ))}
//                         </div>
// 					</div>
// 				</div>
//                 <br />
//                 <div>
//                     <h2>Приятного апетита😋</h2>
//                 </div>
// 			</section>
// 		</>
// 	)
// }

// export default закSlider
