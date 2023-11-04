import React from 'react';

import Wrapper from '../Wrapper/Wrapper';
import SectionTitle from '../SectionTitle/SectionTitle';

import './student.css';

const Student = () => {
  const sectionModifire = 'student';

  return (
    <section className='student'>
      <Wrapper modifier={sectionModifire}>
        <SectionTitle
          modifier={sectionModifire}
          content={'Студент'}
        />
        <div className="student__content-wrapper">
          <div className="student__text-container">
            <h3 className="student__title">Роман</h3>
            <p className="student__subtitle">Фронтенд-разработчик, 25 лет</p>
            <p className="student__text">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
              и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a href="/" className="student__link">Github</a>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Student;