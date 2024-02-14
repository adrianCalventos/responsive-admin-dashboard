import React from 'react';
import './analyse.css';
import AnalyseItem from './AnalyticItem/analyticitem.js';
import analyseItemsData from '../../data/analyticsList.js'
import { useTranslation} from 'react-i18next';

// class Analyse extends React.Component {
//     render() {
const Analyse = () =>{
  const [t, i18n] = useTranslation("global")
      return <div>
                <h1>{t("analytics.title")}</h1>
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
//    }
}

export default Analyse;