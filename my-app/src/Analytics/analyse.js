import React from 'react';
import './analyse.css';
import AnalyseItem from './AnalyticItem/analyticitem.js';
import analyseItemsData from '../data/analyticsList.js'

class Analyse extends React.Component {
    render() {
      return <div>
                <h1>Analytics</h1>
                <div class="analyse">
                      {analyseItemsData.map((analyseItem) => (
                          <AnalyseItem 
                              className={analyseItem.className}
                              title={analyseItem.title}
                              number={analyseItem.number}
                              percentage={analyseItem.percentage}/>
                          ))}
                  </div>
              </div>
    }
  }

export default Analyse;