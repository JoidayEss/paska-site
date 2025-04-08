import React from "react";
import s from "./PaskiList.module.css";
import { IoGiftOutline } from "react-icons/io5";
import AnimalPaska from "../AnimalPaska/AnimalPaska";

const PaskiList = () => {
  return (
    <div className={s.container}>
      <AnimalPaska />
      <div>
        <div className={s.icons_cont}>
          <h1 className={s.title}>
            Пасочки від <span className={s.title_span}>Солодунчика!</span>
          </h1>
          <IoGiftOutline className={s.icons} />
        </div>
        <ul className={s.paska_list}>
          <li className={s.paska_item}>
            <img
              title="Паска, панеттоне Santangelo PANETTONE al tiramisu, 908г"
              className={s.paska_img}
              src="/panattona-1.webp"
              alt="Pasochka"
            />
            <p
              className={s.paska_par}
              title="Паска, панеттоне Santangelo PANETTONE al tiramisu, 908г"
            >
              Паска, панеттоне Santangelo PANETTONE...
            </p>
            <p className={s.available}>В наявності</p>
            <div className={s.button_container}>
              <button className={s.button}>350 грн</button>
            </div>
          </li>
          <li className={s.paska_item}>
            <img
              title="Паска, панеттоне Santangelo PANETTONE tradizionale, 908г"
              className={s.paska_img}
              src="/panattona-2.webp"
              alt="Pasochka"
            />
            <p
              className={s.paska_par}
              title="Паска, панеттоне Santangelo PANETTONE tradizionale, 908г"
            >
              Паска, панеттоне Santangelo PANETTONE...
            </p>
            <p className={s.available}>В наявності</p>
            <div className={s.button_container}>
              <button className={s.button}>350 грн</button>
            </div>
          </li>
          <li className={s.paska_item}>
            <img
              className={s.paska_img}
              src="/panattona-3.webp"
              alt="Pasochka"
            />
            <p className={s.paska_par}>
              Панетоне Delicato з шок. кремом 750 гр.
            </p>
            <p className={s.available}>В наявності</p>
            <div className={s.button_container}>
              <button className={s.button}>340 грн</button>
            </div>
          </li>
          <li className={s.paska_item}>
            <img
              title="Панеттоне Delicato Italiano Panettone Mascarpone 750 гр."
              className={s.paska_img}
              src="/panattona-4.jpg"
              alt="Pasochka"
            />
            <p
              className={s.paska_par}
              title="Панеттоне Delicato Italiano Panettone Mascarpone 750 гр."
            >
              Панеттоне Delicato Italiano Panettone...
            </p>
            <p className={s.available}>В наявності</p>
            <div className={s.button_container}>
              <button className={s.button}>340 грн</button>
            </div>
          </li>
          <li className={s.paska_item}>
            <img className={s.paska_img} src="/paska4.webp" alt="Pasochka" />
            <p className={s.paska_par}>Паска від Батоші "Панська" 700 гр.</p>
            <p className={s.available}>В наявності</p>
            <div className={s.button_container}>
              <button className={s.button}>205 грн</button>
            </div>
          </li>
          <li className={s.paska_item}>
            <img className={s.paska_img} src="/paska5.webp" alt="Pasochka" />
            <p className={s.paska_par}>Паска від Батоші "Княжа" 700 гр.</p>
            <p className={s.available}>В наявності</p>
            <div className={s.button_container}>
              <button className={s.button}>205 грн</button>
            </div>
          </li>
          <li className={s.paska_item}>
            <img className={s.paska_img} src="/paska3.webp" alt="Pasochka" />
            <p className={s.paska_par}>Паска від Батоші "Мальва" 550 гр.</p>
            <p className={s.available}>В наявності</p>
            <div className={s.button_container}>
              <button className={s.button}>136 грн</button>
            </div>
          </li>
          <li className={s.paska_item}>
            <img className={s.paska_img} src="/paska2.webp" alt="Pasochka" />
            <p className={s.paska_par}>
              Паска від Батоші "Жовта айстра" 520 гр.
            </p>
            <p className={s.available}>В наявності</p>
            <div className={s.button_container}>
              <button className={s.button}>132 грн</button>
            </div>
          </li>
          <li className={s.paska_item}>
            <img className={s.paska_img} src="/paska1.webp" alt="Pasochka" />
            <p
              className={s.paska_par}
              title="Паска від Батоші Весна, Літо, Осінь 300 гр."
            >
              Паска від Батоші "Весна", "Літо", "Осінь" 300...
            </p>
            <p className={s.available}>В наявності</p>
            <div className={s.button_container}>
              <button className={s.button}>82 грн</button>
            </div>
          </li>
          <li className={s.paska_item}>
            <img className={s.paska_img} src="/paska6.webp" alt="Pasochka" />
            <p
              className={s.paska_par}
              title="Паска від Батоші Пілочка кольорова 300 гр."
            >
              Паска від Батоші "Пілочка кольорова" 300...
            </p>
            <p className={s.available}>В наявності</p>
            <div className={s.button_container}>
              <button className={s.button}>77 грн</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PaskiList;
