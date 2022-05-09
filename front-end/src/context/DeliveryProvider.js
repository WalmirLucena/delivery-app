import React, { useState } from 'react';
import PropTypes from 'prop-types';

import DeliveryContext from './DeliveryContext';

const { Provider } = DeliveryContext;

function DeliveryProvider({ children }) {
  const [delivery, setDelivery] = useState(null);
  const [user, setUser] = useState(null);
  const [newUser, setNewUser] = useState(null);

  const value = { delivery, setDelivery, user, setUser, newUser, setNewUser };

  return (
    <Provider value={ value }>
      { children }
    </Provider>
  );
}

DeliveryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DeliveryProvider;
