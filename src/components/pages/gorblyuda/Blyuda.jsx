import React from 'react'
import scss from './Blyuda.module.scss'
import { useKeenSlider } from 'keen-slider/react'
import  { useState } from 'react';
import Modal from '../../modal/Modal'


const sliderData = [
	{
		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v156/Yesyik_tamaktar/Boso_Lagman/Medium.png?hash=e9c7c9cc16b451f6b9c9e01d5c3e0b8b',
		title: 'Босо Лагман',
		text: 'Кусочки молодой говядины, пекинской капусты, и полугорького перца заправленный фирменной заправкой и специями. Подаётся с приправой лаза и китайским уксусом. БОСО ЛАГМАН Жаш уй эти, пекин капустасы жана жарым ачуу калемпирдин б?л?кт?р? менен татытылган. Лазататымалдары жана кытай уксусу менен берилет.',
	},
	{
		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Goriachie_bliuda/Vareniki_s_kartoshkoi_po-ukrainski/Medium.png?hash=4119aed42f58e029ac9d5d00739452e9',
		title: 'Вареники с картошкой по-украински',
		text: 'Подаются со сметаной и жареным луком. КАРТ?ШК? МЕНЕН УКРАИНА ВАРЕНИГИ Каймак жана куурулган пияз менен берилет. Dumplings served with sour cream and fried onions.',
	},
	{
		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v156/Yesyik_tamaktar/Grechka_s_miasom/Medium.png?hash=c876ae7d65e9263e34bef9bb61b08934',
		title: 'Гречка с мясом',
		text: 'Говядина, гречка. ЭТ МЕНЕН ГРЕЧКА Уй эти, гречка. Buckwheat with meat. Buckwheat, beef, onions, greens.',
	},
	{
		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Goriachie_bliuda/Grechnevaia_lapsha_s_kuritsei/Medium.png?hash=7ad00961ed93de47b9613ea3e9503889',
		title: 'Гречневая лапша с курицей',
		text: 'Гречневая лапша, курица, кабачки, лук, болгарский перец, брокколи, кунжут, соус терияки. ТООК ЭТИ МЕНЕН ГРЕЧКА КЕСМЕСИ Гречка кесмеси, тоок эти, кабачоктор, пияз, болгар калемпири, брокколи, к?нж?т, терияки чыгы.',
	},
	{
		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Goriachie_bliuda/Gdza_zharenyie_s_goviadinoi/Medium.png?hash=12d2c1d531f2da7caadaa4e44f16d1cc',
		title: 'Гёдза жареные с говядином',
		text: 'Гёдза жареные с говядиной Подаётся с чесночно-соевым соусом УЙ ЭТИ МЕНЕН КУУРУЛГАН ГЁДЗА Сарымсак-соя чыгы менен берилет. Fried beaf gyoza Served with garlic and soy sauce',
	},
	{
		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Goriachie_bliuda/Gdza_na_paru_s_dzhusaem_i_iaitsom/Medium.png?hash=e13df62e1d380e918ef11f075262f6ef',
		title: 'Гёдза с джусаем и яйцом на пару',
		text: 'Гёдза на пару с джусаем и яйцом Подаётся с острым соевым соусом ТООК ЭТИ МЕНЕН БУУГА БЫШКАН ГЁДЗА Фирмалык ачуу чык менен берилет. Steamed gyoza with jusai and egg Served with hot soy sauce',
	},
	{
		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v156/Yesyik_tamaktar/Gdza_na_paru_s_kuritsei/Medium.png?hash=2f0b62996f5341eebe5e40165385bce4',
		title: 'Гёдза с курицей на пару',
		text: 'Подаются с фирменным острым соусом. ТООК ЭТИ МЕНЕН БУУГА БЫШКАН ГЁДЗА Фирмалык ачуу чык менен берилет.',
	},
	{
		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v156/Yesyik_tamaktar/Dapandzhi/Medium.png?hash=1e40badfda06e592f990f64a81335f7a',
		title: 'Дапанджи',
		text: 'Горячее блюдо восточной кухни из пряной курицы с овощами и лапшой. Умеренной остроты. ДАПАНДЖИ Даамдуу тоок этинен бышырылган кесме жана жашылча аралаш орто ачуу ысык чыгыш тамагы. Roast chicken A fragrant hot dish with a rich taste. Fried chicken with bell peppers and fresh tomatoes.',
	},
	{
		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v39/Goriachie_bliuda/Domashnie_kotletyi_s_gribnyim_sousom/Medium.png?hash=eaa30950c220cfbc8c0671b03eee6239',
		title: 'Домашние котлеты с грибным соусом',
		text: 'Курица, жир конины, специи. Подается с рисом. КОЗУ КАРЫН СОУСУ МЕНЕН ?ЙД?Г?Д?Й КОТЛЕТТЕР Тооктун эти, жылкынын майы, татымалдар. К?р?ч менен берилет Homemade cutlets Chicken, horse meat fat, spices. Served with rice.',
	},
	{
		img: 'https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v156/Yesyik_tamaktar/Zharkoe_iz_kuritsyi/Medium.png?hash=5cafb49d30f6ae26fb1fa17a94b8422b',
		title: 'Жаркое из курицы',
		text: 'Курица, картофель, морковь, болгарский перец, помидоры, кинза. ТООК ЭТИНЕН КУУРУЛГАН ТАМАК Тооктун эти, карт?шк?, сабиз, болгар калемпири, помидор, кинза.',
	},
]


const Blyuda = () =>{
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
              {sliderData.map((item, index) => (
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
          <h2>Приятного аппетита😋👍</h2>
        </div>
      </section>

      {isModalOpen && (
        <Modal
          item={selectedItem}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default Blyuda;
