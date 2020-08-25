import React from 'react';
import { VscSettingsGear } from "react-icons/vsc";

class Header extends React.Component {
  render() {
    return (
      <div style={styleWrapper}>
        <p>Test App</p>
        <VscSettingsGear />
      </div>
    );
  }
}

const styleWrapper = {
  display: 'flex',
}

export default Header;
