import React from 'react';
import styles from './Card.module.css';
import { TiTick } from 'react-icons/ti';
import { FaTimes } from 'react-icons/fa'; // Import the 'x' icon

export default function Card({ name, price, duration, features }) {
  return (
    <div className='m-4'>
      <div className={styles.packContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>{name}</h1>
          <div className={styles.priceContainer}>
            {price}
            <small>/m</small>
          </div>
          <h3>{duration}</h3>
        </div>
        <ul className={styles.lists}>
          {features.map((feature, index) => (
            <li key={index} className={styles.list}>
              <span
                className={`${styles.listIcon} ${
                  feature.included ? styles.greenBg : styles.redBg
                }`}
              >
                {feature.included ? <TiTick /> : <FaTimes />} {/* Display the 'x' icon */}
              </span>
              <p>{feature.description}</p>
            </li>
          ))}
        </ul>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Obtener plan</button>
        </div>
      </div>
    </div>
  );
}










// import styles from './Card.module.css';
// import { TiTick } from 'react-icons/ti';

// export default function Card({ name, price, description, duration, image }) {
//   return (
//     <div className='m-4'>
//         <div className={styles.plan}>
//       <div className={styles.inner}>
//         <div className={styles.pricing}>
//           {price}
//           <small>/m</small>
//         </div>
//         <h1 className={styles.title}>{name}</h1>
//         <h2>{description}</h2>
//         <h3>{duration}</h3>
        
//         <ul className={styles.features}>
//           <li>
//             <div className={styles.icon}>
//               <TiTick/>
//             </div>
//             Característica 1
//           </li>
//           <li>
//             <div className={styles.icon}>
//             <TiTick/>
//             </div>
//             Característica 2
//           </li>
//         </ul>
//         <div className={styles.action}>
//           <button className={styles.button}>Obtener plan</button>
//         </div>
//       </div>
//     </div>
//     </div>
    
//   );
// }