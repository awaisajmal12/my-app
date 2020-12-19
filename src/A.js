import react from 'react';
import B from './B';

function A(props) {

    return (
        <div ClassName='A'>
            <h1>HELLO AWAIS {props.my}</h1>
       <h1>KING AWAIS{props.ki}</h1>
      <B oj='All'/>
      <hr/>
      <h1>HELLO AWAIS {props.my}</h1>
       <h1>KING AWAIS{props.ki}</h1>
       <B oj='are serving'/>
       
        </div>
    );
}
export default A;