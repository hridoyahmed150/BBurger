import  React  from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Hello from'./Layout.module.css';

const layout=(props)=>{
  return (
    <Auxiliary>
      <div className={Hello.content}>Toolbar , SideDrower , BackDrop</div>
      <main>
          {props.children}
      </main>
    </Auxiliary>
  )
}

export default layout;