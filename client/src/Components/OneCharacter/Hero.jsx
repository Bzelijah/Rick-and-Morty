import React from 'react';
import { useSelector } from 'react-redux';

const Hero = () => {
  const hero = useSelector((state) => state.currentHero);
  console.log(hero);
  return (
    <div>
      dasd
    </div>
  );
};

export default Hero;
