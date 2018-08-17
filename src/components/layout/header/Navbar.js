import React from 'react';
import PropTypes from 'prop-types';

import {
  Flex, Box, Hide, Relative,
} from 'rebass';
import NavLink from '../../Navlink';
import DropDown from './navbar/Dropdown';

import logo from '../../../assets/images/logo-new.png';
import search from '../../../assets/icons/search-solid.svg';


const Navbar = ({ cartLength }) => (
  <Hide medium small xsmall>
    <Flex>
      <Box width={1 / 6} mb={0} mr={5} px={3} pt={1}>
        <div className="header_logo">
          <NavLink linkTo="/" noActive>
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
      </Box>
      <Box width={5 / 6} mb={0}>
        <Flex px={0} alignItems="center" justifyContent="space-between">
          <Box width={5 / 9} mb={0}>
            <Relative>
              <Flex className="pt_custommenu">
                <NavLink title="diet plan" linkTo="/category/diet-plan" />
                <NavLink title="breakfast" linkTo="/category/breakfast" />
                <NavLink title="lunch" linkTo="/category/lunch" />
                <NavLink title="Dinner" linkTo="/category/dinner" />
                <DropDown />
              </Flex>
            </Relative>
          </Box>
          <Box className="pt_custommenu" width={2 / 9} mb={0}>
            <NavLink linkTo="/" noActive>
              <img src={search} width="12px" alt="search" />
            </NavLink>
            <NavLink linkTo="/cart" title={`Cart(${cartLength || 0})`} noActive />
          </Box>
        </Flex>
      </Box>
    </Flex>
  </Hide>
);

Navbar.propTypes = {
  cartLength: PropTypes.number.isRequired,
};

export default Navbar;
