import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  no: PropTypes.number.isRequired,
  linkItem: PropTypes.object.isRequired,
};

const LinkItem = (props) => {
  const { no, link } = props;

  return (
    <>
      <tr>
        <th scope="row">{no}</th>
        <td>{link.name}</td>
        <td>{'https://ishortify/' + link.key}</td>
        <td>{link.originalUrl.replace('\\/', '').replace('\\', '/').replace('\\', '')}</td>
        <td>{link.total}</td>
        <td>{link.mobile}</td>
        <td>{link.desktop}</td>
        <td>{link.tr}</td>
        <td>{link.us}</td>
        <td>{link.other}</td>
      </tr>
    </>
  );
};

LinkItem.propTypes = propTypes;
export default LinkItem;
