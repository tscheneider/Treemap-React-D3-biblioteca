import React, { Component } from 'react'
import * as d3 from 'd3'
import './App.css';
import TreeMap from "react-d3-treemap"
import "react-d3-treemap/dist/react.d3.treemap.css";
import { data } from './dataAnalytic';
import {  LegendOrdinal } from '@vx/legend';
import {  scaleOrdinal } from '@vx/scale';
/**https://vx-demo.now.sh/docs/legend */

const ordinalColorScale = scaleOrdinal({
  domain: ['De 1 min a 10 min', '10 min a 20 min', '30 min a 40 min', '40 min a 50 min', '50 min a 60 min', '60 min a 70 min', '70 min a 80 min'],
  range: d3.schemeGreens[9]
});


class App extends Component {

  constructor(props){
     super(props);
     this.myRef = React.createRef(); 
  }

  componentDidMount(){
    console.log(this.myRef)
      
  }
  render(){
   return (
     <div ref={this.myRef}>
         <TreeMap
            height={500}
            width={800}
            data={data}
            valueUnit={"Minutos estudados"}
            //colorModel={ColorModel.Depth}
            // disableBreadcrumb
             hideNumberOfChildren
            // hideValue
            // bgColorRangeLow={"#ba60f2"}
            // bgColorRangeHigh={"#fffdf2"}
            // bgColorRangeLow={"#226fa0"}
            // bgColorRangeHigh={"#91CF60"}
        />
        <h2>   Tempo de Estudo nos Tópico</h2>
      <LegendOrdinal 
          scale={ordinalColorScale} 
          direction="row"
          itemDirection="row"
          itemMargin='1px'
        />

    </div>
     
   );
  }
  
 }
 export default App;
