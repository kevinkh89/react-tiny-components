import React from 'react';
import Card from './components/card/Card';
import checkCircle from './components/card/assets/check-symbol-4794.svg';
import Diamond from './components/card/assets/diamond-3718.svg';
import './App.css';
let templist = [
   'You can use 12 links every day',
   'chat support',
   'weekly meeting for teams',
   'You can use 12 links every day',
   'Team management',
   'Tags',
   'sales OF products',
];
export default props => {
   const TitleIcon = () => <img src={Diamond} />;
   const DescIcon = () => <img src={checkCircle} />;
   return (
      <Card special className={'hi'}>
         <Card.title
            special
            Icon={TitleIcon}
            price={'$30'}
            title="special"
            subtitle="05 services"
         />
         <Card.desc Icon={DescIcon} list={templist} />
         <Card.cta />
      </Card>
   );
};
