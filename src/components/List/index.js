import React from 'react';
import Proptypes from 'prop-types';
import './styles.css';

const List = (props) => {
  const { name } = props;
  return (
    <div className="etape">
      <li className="currencies">Currencie</li>
      {
        name.map((listName) => (
          <div>
            <ul>
              <li className="step-list"><a href="#">{listName.name} </a></li>
            </ul>
          </div>
        ))
}

    </div>
  );
};

List.propTypes = {
  name: Proptypes.string.isRequired,
};

export default List;
