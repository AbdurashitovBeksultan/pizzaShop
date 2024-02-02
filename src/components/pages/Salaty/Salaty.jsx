

import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import scss from './Salaty.module.scss'
import Modalnyi from '../../modal/modalnyii/Modalnyi'

const Salaty = () => {
	const [data, setData] = useState([])
	const [error, setError] = useState(null)

  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					'https://elchocrud.pro/api/v1/mypizza/salads',
				)
				setData(response.data)
			} catch (error) {
				setError(error.message)
			}
		}

		fetchData()
	}, [])

 
  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalOpen(false);
  };

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
            <br />
            <h1>Приятного апетита😋👍</h1>
					</div>
				))}


{isModalOpen && selectedItem && (
        <Modalnyi
          item={selectedItem}
          onClose={closeModal}
        />
      )}
			</>
		)
	}


export default Salaty; 


// onClick={() => openModal(item)}

// {isModalOpen && (
//   <Modal
//     item={selectedItem}
//     onClose={closeModal}
//   />
// )}

//
// .text {
// 	font-style: italic;
// 	color: #f10909;
// 	width: 550px;
// 	margin-left: 700px;
// }
