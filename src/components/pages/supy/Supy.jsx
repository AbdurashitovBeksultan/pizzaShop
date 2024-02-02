import React from 'react'
import scss from './Supy.module.scss'
import { useKeenSlider } from 'keen-slider/react'
import  { useState } from 'react';
import Modal from '../../modal/Modal'

const sliderSupy = [
	{
		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Supyi/Ashliam-Fu/Medium.png?hash=3dfdb0c55b75043851d6175451fe6e4a',
		title: 'Ашлям-Фу',
		text: 'Ашлям-фу с говядиной. Холодный острый овощной суп с крахмалом и лапшой. Подаётся с приправой Лаза. Холодный острый овощной суп с крахмалом и лапшой. Подаётся с приправой лаза. УЙ ЭТИ МЕНЕН АШЛЯМ-ФУ Крахмал, кесме жана жашылчалар кошулган ачуу муздак сорпо. Лаза татымалы менен берилет. Ashlyam Fu with beef. Cold spicy vegetable soup with starch and noodles. Served with seasoning Laza.',
	},
	{
		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Supyi/Borshch/Medium.png?hash=5a4ade6e4833f57818f5149b77dcd2cf',
		title: 'Борщ',
		text: 'Подаётся с чесночными сухариками и сметаной. БОРЩ Сарымсактуу кургатылган нандар жана каймак менен берилет. Borsch. Served with garlic croutons and sour cream.',
	},
	{
		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v39/Supyi/Kitaiskii_sup/Medium.png?hash=83832b1dc158b52d3be21bda9eb30061',
		title: 'Китайский суп',
		text: 'Говяжий бульон, говядина, древесные грибы, огурцы, стебель сельдерея, имбирь, перец чили, фунчоза. КЫТАЙ ШОРПОСУ Уйдун сорпосу, уй эти, дарак козу карындары, бадыра?, сельдерейдин с??г?г?, имбирь, чили калемпири, фунчоза. Japanese noodle soup Beef broth, beef, tree mushrooms, cucumbers, celery stalk, ginger, chili, funcheza. ',
	},
	{
		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Supyi/Kuksi/Medium.png?hash=8317e270de05b3e9f73ed63bf8f90fa0',
		title: 'Кукси',
		text: 'Национальное блюдо корейской кухни. Бульон мури, яичная лапша, омлет, огурцы, помидоры, говядина, кунжут. Подаётся с приправой лаза. КУКСИ Корей ашканасынын улуттук тамагы. Мури сорпосу, жумуртка кошулган кесме, омлет, бадыра?, помидор, уй эти, к?нж?т. Лаза татымалы менен берилет. Kuksi. The national dish of Korean cuisine. Muri broth, egg noodles, scrambled eggs, cucumbers, tomatoes, beef, sesame. Served with seasoning Laza.',
	},
	{
		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Supyi/Mampar/Medium.png?hash=f13b60a1f2a2bd3661e4fc919d9d9f44',
		title: 'Мампар',
		text: 'Традиционный среднеазиатский суп из говядины с тестом. МАМПАР Камыр менен уй эти кошулган салттуу Орто Азия шорпосу. Mampar. Traditional Central Asian beef soup with dough.',
	},
	{
		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v1/Supyi/Okroshka/Medium.png?hash=46eec9ff550a43b6d5e0bd04fd16ba73',
		title: 'Окрошка',
		text: 'Подаётся холодной, с горчицей и лимоном. КАЙМАКТА ЖАСАЛГАН ЭТ ОКРОШКАСЫ Муздак, горчица жана лимон менен берилет Meat Okroshka on sour cream. Boiled potatoes, fresh cucumbers, green onions, dill, eggs, meat, kefir. Served cold with mustard.',
	},
	{
		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v156/Soup/Ostryii_Sup_Tom_Iam/Medium.png?hash=509c53783e70d1fd52432dd8cba5e040',
		title: 'Острый Суп Том Ям',
		text: 'Острый суп по-тайски. Куриное филе, помидоры, грибы вёшенки, креветки, шампиньоны, кинза, лимон. Подается с рисом. ТОМ-ЯМ Таиланд ачуу шорпосу. Тооктун сулп эти, помидор, вёшенки козу карыны, креветка, шампиньон, кинза, лимон. К?р?ч менен берилет. Tom Yum soup. Spicy Thai soup.Chicken broth, tomatoes, oyster mushrooms, shrimps, coconut milk, ginger root, Jalapeno hot pepper, cilantro, lime leaves.',
	},
	{
		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Supyi/Pelmeni_s_bulonom/Medium.png?hash=d35083dbb268e686ef3c1c70467749d2',
		title: 'Пельмени с бульоном',
		text: 'Подаются со сметаной и чесноком. ШОРПОЛУУ ПЕЛЬМЕНДЕР Каймак жана сарымсак менен берилет.',
	},
	{
		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v156/Soup/Ramen_klassicheski/Medium.png?hash=1be96a1b8b017c9f62177cfe08201040',
		title: 'Рамен классический',
		text: 'Классический корейский рамен на остром бульоне с запеченной курицей «Су вид», водорослями Вакаме, капустой кимчи и яйцом Пашот. КЛАССИКАЛЫК РАМЕН Отко бышкан «Су вид» тоок эти, Вакаме балыры, кимчи капустасы жана Пашот жумурткасы менен ачуу сорподогу классикалык корей рамёну.',
	},
	{
		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v1/Supyi/Solianka/Medium.png?hash=8058ca4ac454618994cad6eff408d19a',
		title: 'Солянка',
		text: 'Подаётся со сметаной. ЭТТ?? КУРАМА СОЛЯНКАСЫ Каймак менен берилет. Solyanka. Served with sour cream.',
	},
]


const Supy = () =>  {
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

	const [isModalOpen, setModalOpen] = useState(false);
const [selectedItem, setSelectedItem] = useState(null);

const openModal = (item) => {
  setSelectedItem(item);
  setModalOpen(true);
};

const closeModal = () => {
  setModalOpen(false);
};
	return (
		<>
			<section className={scss.Slider}>
				<div className='container'>
					<div className={scss.content}>
						<div ref={sliderRef} className='keen-slider'>
							{sliderSupy.map((item, index) => (
								<div
									key={index}
									className='keen-slider__slide number-slide1'
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
					<h2>Приятного апетита😋</h2>
				</div>
			</section>

			     
{isModalOpen && (
        <Modal
          item={selectedItem}
          onClose={closeModal}
        />
      )}
		</>
	)
}

export default Supy
