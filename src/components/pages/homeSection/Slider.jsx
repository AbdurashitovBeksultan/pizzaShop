import React from 'react'
import scss from './Slider.module.scss'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'
import Modal from '../../modal/Modal'

const sliderData = [
	{
		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v45/Pitstsa_30sm/4_Syira_30sm/Medium.png?hash=f530c2fc1726d73286f6656fd56d59ae',
		title: '4 Сыра',
		text: ' Пицца-соус, сыры: моцарелла, эмменталь, дорблю, пармезан. 4 СЫРА Пицца-соус, сырлар: моцарелла, эмменталь, дорблю, пармезан. 4 Cheese Pizza. Pizza sauce with mozzarella, emmental, dorblue, parmesan.',
	},
	{
		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Pitstsa_30sm/Barbekiu_30sm/Medium.png?hash=b35d2b33c43f3083ad5154b1c8ab1859',
		title: 'Барбекю',
		text: 'Сытная домашняя пицца с соусом барбекю, куриным филе, колбасками, грибами, томатами и маринованными огурчиками. БАРБЕКЮ Барбекю соусу, тооктун сулп эти, колбаса, козу карын, томат жана маринаддалган бадыра? менен тоюмдуу ?й пиццасы. Hearty homemade pizza with barbecue sauce, chicken fillet, sausages, mushrooms, tomatoes and pickled cucumbers.',
	},
	{
		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v32/Pitstsa_30sm/Vegetarianskaia_30sm/Medium.png?hash=5696140c19c5358cc13389a0122876fd',
		title: 'Вегетарианская',
		text: 'Пицца-соус, сыр «Моцарелла», помидоры, кукуруза, маслины, шампиньоны, болгарский перец, зелень, лук. ВЕГЕТЕРИАНДАР YЧYН Пицца-соус, моцарелла сыры, помидор, ж?г?р?, зайтун, шампиньон, болгар калемпири, ч?п-чарлар, пияз. Vegetarian Pizza sauce, Mozzarella, greens, onion, champignon mushrooms, bell pepper, tomatoes, olives, corn',
	},
	{
		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Pitstsa_30sm/Gaskonskaia_30sm/Medium.png?hash=5ad10721beff448a1c86e59f30d3c2d9',
		title: 'Гасконская',
		text: 'Пицца Гасконская. Пицца-соус, сыр моцарелла, копчёная курица, шампиньоны, болгарский перец, помидоры, кукуруза, майонез, зелень. Пицца-соус, моцарелла сыры, ышталган тоок, шампиньон, болгар калемпири, помидор, ж?г?р?, майонез, ч?п-чарлар. Gascon Pizza. Pizza sauce, mozzarella, smoked chicken, сhampignon mushrooms, bell peppers, tomatoes, corn, mayonnaise, parsley.',
	},
	{
		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Pitstsa_30sm/Derevenskaia_30sm/Medium.png?hash=ed1e51a8a26eb31dfda14430d67fd2b6',
		title: 'Деревенская',
		text: 'Пицца-соус, сыр моцарелла, маринованная говядина, копчёная курица, шампиньоны, чеснок, лук, зелень. ЭЛЕТТИК Пицца-соус, моцарелла сыры, маринаддалган уй эти, ышталган тоок эти, шампиньон, сарымсак, пияз, ч?п-чарлар. Village Pizza. Pizza sauce, mozzarella, marinated beef, smoked duck breast, champignon mushrooms, garlic, onion, greens.',
	},
	{
		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Pitstsa_30sm/Detskaia_30sm/Medium.png?hash=76eddf9cddb29e064eb78293fb70c364',
		title: 'Детская',
		text: 'Пицца Детская. Пицца-соус, сыр моцарелла, сосиски, помидоры, кукуруза. БАЛДАР ?Ч?Н Пицца-соус, моцарелла сыры, сосиска, помидор, ж?г?р?. Children’s Pizza. Pizza sauce, mozzarella, sausages, tomatoes, corn.',
	},
	{
		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Pitstsa_30sm/Domashniaia_30sm/Medium.png?hash=bd37cfba4ce5bc6ddd1ac72f061a3ba5',
		title: 'Домашняя',
		text: 'Пицца-соус, сыр моцарелла, ветчина, помидоры, шампиньоны, зелень. ?ЙД?Г?Д?Й Пицца-соус, моцарелла сыры, ветчина, помидор, шампиньон, ч?п-чарлар. Homemade Pizza. Pizza sauce, mozzarella, ham, tomatoes, champignon mushrooms, greens',
	},
	{
		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Pitstsa_30sm/Italianka_30sm/Medium.png?hash=20ad7fcd72e108089f2ca2fe79364e44',
		title: 'Итальянка',
		text: 'Пицца Итальянка. Пицца-соус, сыр моцарелла, говядина с грибами Вешенками в сливочном соусе, зелень. ИТАЛИЯЛЫК Пицца-соус, моцарелла сыры, каймактуу соуста вёшенки козу карыны менен уй эти, ч?п-чарлар. Italian Pizza. Pizza sauce, mozzarella, beef with oyster mushrooms in creamy sauce, greens.',
	},
	{
		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v1/Pitstsa_30sm/Pepperoni_30sm/Medium.png?hash=21df342a79807048d67e34d64d9a0d1a',
		title: 'Пепперони',
		text: 'Пицца-соус, сыр моцарелла, салями, шампиньоны. ПЕППЕРОНИ Пицца-соус, моцарелла сыры, салями, шампиньон Pepperoni Pizza. Pizza sauce, Mozzarella, salami, champignon mushrooms.',
	},
	{
		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v1/Pitstsa_30sm/Chili_30sm/Medium.png?hash=37bb302c9439a1c8fa4f6449f8e8041b',
		title: 'Чили',
		text: 'Пицца Чили. Говяжий фарш, острые перчики, болгарский перец, томаты, специи, сыр моцарелла. Тууралган уй эти, ачуу калемпир, болгар калемпири, помидор, татымалдар, моцарелла сыры. Chili Pizza. Minced beef, chili pepper, bell pepper, tomatoes, spices, mozzarella cheese. Тууралган уй эти, ачуу калемпир, болгар калемпири, помидор, татымалдар, моцарелла сыры.',
	},
]

const Slider = () => {
	const [sliderRef] = useKeenSlider({
		breakpoints: {
			'(min-width: 400px)': {
				slides: { perView: 2, spacing: 5 },
			},
			'(min-width: 700px)': {
				slides: { perView: 2, spacing: 5 },
			},
			'(min-width: 1000px)': {
				slides: { perView: 3, spacing: 10 },
			},
		},
		slides: { perView: 1 },
	})

	const [isModalOpen, setModalOpen] = useState(false)
	const [selectedItem, setSelectedItem] = useState(null)

	const openModal = (item) => {
		setSelectedItem(item)
		setModalOpen(true)
	}

	const closeModal = () => {
		setModalOpen(false)
	}

	return (
		<>
			<section className={scss.Slider}>
				<div className='container'>
					<div className={scss.content}>
						<div ref={sliderRef} className='keen-slider'>
							{sliderData.map((item, index) => (
								<div key={index} className='keen-slider__slide number-slide1'
									onClick={() => openModal(item)}
								>
									<div className={scss.card}>
										<img
											className={scss.img}
											src={item.img}
											alt={item.title}
										/>
										<h3>{item.title}</h3>
										<p>{item.text}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<br />
				<div>
					<h2>Приятного апетита</h2>
				</div>
			</section>

			{isModalOpen && <Modal item={selectedItem} onClose={closeModal} />}
		</>
	)
}

export default Slider
