import React from 'react';
import './analyse.css';
import AnalyseItem from './AnalyticItem/analyticitem.js';
import analyseItemsData from '../data/analyticsData.js'

class Analyse extends React.Component {
    render() {
      return  <main>
                <div class="analyse">
                    {analyseItemsData.map((analyseItem) => (
                        <AnalyseItem 
                            className={analyseItem.className}
                            title={analyseItem.title}
                            number={analyseItem.number}
                            percentage={analyseItem.percentage}/>
                        ))}
                </div>
            </main>
    }
  }

export default Analyse;