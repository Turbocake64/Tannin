import React from 'react'
import { ListItem } from '../List'

import './style.css'

function Wine ({ name, id, hideShow, showMe, handleWineAdd, wineName, wineTemp, wineTannin, wineSweetness, wineSummary, winePronunciation, winePrimaryFlavors, winePairings, wineDecant, wineGlassType, wineBody, wineAlcohol, wineAgeability, wineAcidity, wineVarietal, wineCountry, wineRegion }) {
  return (
    <div>
      <ListItem>
        <div className="listitemdiv">
          <div className="winenamediv">

            <div className="winenamediv2">
              <div>
                <button className="winenamebtn" onClick={() => hideShow(id)}>{name}</button>
              </div>
              <div>
                <button className="btnadd" onClick={() => handleWineAdd(id)}>
                  <i className="fa fa-plus-circle fa-2x" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div>
              {showMe
                ? <div className="overlay4b" onClick={() => hideShow(id)}>
                  <div className="wrapinfo1">
                    <div className="wrapinfo2">
                      <div className="wrapinfo3">
                        <div className="infowrap">
                          {wineName ? <div className="infodetails">Name: {wineName}</div> : null}
                          {winePronunciation ? <div className="infodetails">Pronunciation: {winePronunciation}</div> : null}
                          {wineCountry ? <div className="infodetails">Country of Origin: {wineCountry}</div> : null}
                          {wineRegion ? <div className="infodetails">Region: {wineRegion}</div> : null}
                          {wineSummary ? <div className="infodetails">Summary: {wineSummary}</div> : null}
                          {wineAcidity ? <div className="infodetails">Acidity: {wineAcidity}</div> : null}
                          {wineAgeability ? <div className="infodetails">Ageability: {wineAgeability}</div> : null}
                          {wineAlcohol ? <div className="infodetails">Alcohol By Volume: {wineAlcohol}</div> : null}
                          {wineBody ? <div className="infodetails">Body: {wineBody}</div> : null}
                          {wineSweetness ? <div className="infodetails">Sweetness: {wineSweetness}</div> : null}
                          {wineTannin ? <div className="infodetails">Tannin: {wineTannin}</div> : null}
                          {wineVarietal ? <div> Varietal: {wineVarietal.map(varietal => {
                            return (
                              <div>
                                <ul className="travelcompany-input">
                                  <span className="input-label">{varietal}</span>
                                </ul>
                              </div>
                            )
                          })
                          } </div> : null
                          }
                          {winePrimaryFlavors ? <div> Primary Flavors : {winePrimaryFlavors.map(flavor => {
                            return (
                              <div>
                                <ul className="travelcompany-input">
                                  <span className="input-label">{flavor}</span>

                                </ul>
                              </div>
                            )
                          })
                          } </div> : null
                          }
                          {winePairings ? <div> Pairings : {winePairings.map(pairing => {
                            return (
                              <div>
                                <ul className="travelcompany-input">
                                  <span className="input-label">{pairing}</span>
                                </ul>
                              </div>
                            )
                          })
                          } </div> : null
                          }
                          {wineDecant ? <div className="infodetails">Decant: {wineDecant}</div> : null}
                          {wineGlassType ? <div className="infodetails">Glass Type: {wineGlassType}</div> : null}
                          {wineTemp ? <div className="infodetails">Serving Temp: {wineTemp}</div> : null}
                        </div>

                        <br />

                      </div>
                      <div className="btnwrap">
                        <button className="btnwrap1buserclose" onClick={() => hideShow(id)}>
                          <i className="fas fa-times-circle" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                : null
              }
            </div>
          </div>
        </div>
      </ListItem>
    </div>
  )
}

export default Wine
