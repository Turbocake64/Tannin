import React from 'react'
import { Link } from 'react-router-dom'
import { ListItem } from '../FlexList'
import './style.css'

function SavedWine({ name, id, hideShow, showMe, wineScore, wineTemp, wineTannin, wineSweetness, wineSummary, winePronunciation, winePrimaryFlavors, winePairings, wineDecant, wineGlassType, wineBody, wineAlcohol, wineAgeability, wineAcidity, wineVarietal, wineCountry, wineName, wineRegion }) {
  return (
      <ListItem>
        <div className="flex-list-item">
          <div className="employee-wine-card">
              <div className='employee-wine-card-name'>
                {name}
              </div>
              <div className='employee-wine-card-score'>
                {wineScore}
              </div>
              <div className='winebuttons'>
                <div>
                  <button className='wine-card-buttons' onClick={() => hideShow(id)}>Wine Specs</button>
                </div>

                  <div>
                    <Link
                      className={window.location.pathname === '/quizpage' ? 'nav-link active' : 'nav-link'}
                      to={{ pathname: '/quiz', state: { wineId: id, wineName: name } }}
                    ><button className='wine-card-buttons'>Quiz</button>
                    </Link>
                  </div>
              </div>

            <div>
              {showMe
                ? <div className="modal-overlay" onClick={() => hideShow(id)}>
                  <div className="info-modal-wrap">
                    <div className="info-modal-container">
                      <div className="info-modal-center">
                        <div className="info-modal-inner">
                          {name ? 
                            <div className="info-details">
                              <div className="wineSpecKey">
                                Name:
                              </div>
                              <div className='wineSpecValue'> 
                                {wineName}
                              </div>
                            </div> 
                          : null}
                          {winePronunciation ? 
                            <div className='infoDetails'>
                              <div className="wineSpecKey">
                                Pronunciation:
                              </div>
                              <div className='wineSpecValue'> 
                                {winePronunciation}
                              </div>
                            </div> 
                          : null}
                          {wineCountry ? 
                            <div className="infodetails">
                              <div className="wineSpecKey">
                                Country of Origin:
                              </div>
                              <div className='wineSpecValue'> 
                                {wineCountry}
                              </div>
                            </div> 
                          : null}

                          {wineRegion ? 
                            <div className="infoDetails">
                              <div className="wineSpecKey">
                                Region:
                              </div>
                              <div className='wineSpecValue'> 
                                {wineRegion}
                              </div>
                            </div> 
                          : null}

                          {wineSummary ? 
                            <div className="infoDetailsBlock">
                              <div className="wineSpecKey">
                                Summary: 
                              </div>
                              <div className="wineSpecValueBlock">
                                {wineSummary}
                              </div>
                            </div>
                          : null}

                          {wineAcidity ?
                            <div className="infoDetails">
                              <div className="wineSpecKey">
                                Acidity: 
                              </div>
                              <div className='wineSpecValue'>
                                {wineAcidity}
                              </div>
                            </div>
                          : null}

                          {wineAgeability ?
                          <div className="infoDetails">
                              <div className="wineSpecKey">
                                Ageability:
                              </div>
                              <div className='wineSpecValue'>
                                {wineAgeability}
                              </div>
                            </div>
                          : null}

                          {wineAlcohol ?
                            <div className="infoDetails">
                              <div className="wineSpecKey">
                                Alcohol By Volume:
                              </div>
                              <div className='wineSpecValue'>
                                {wineAlcohol}
                              </div>
                            </div>
                          : null}

                          {wineBody ?
                            <div className="infoDetails">
                              <div className="wineSpecKey">
                                Body:
                              </div>
                              <div className='wineSpecValue'>
                                {wineBody}
                              </div>
                            </div>
                          : null}

                          {wineSweetness ?
                          <div className="infoDetails">
                              <div className="wineSpecKey">
                                Sweetness:
                              </div>
                              <div className='wineSpecValue'>
                                {wineSweetness}
                              </div>
                            </div>
                          : null}

                          {wineTannin ?
                            <div className="infoDetails">
                              <div className="wineSpecKey">
                                Tannin:
                              </div>
                              <div className='wineSpecValue'>
                                {wineTannin}
                              </div>
                            </div>
                          : null}

                          {wineVarietal ? 
                            <div className='infoDetailsBlock'>
                              <div className='wineSpecKey'>
                                Varietals: 
                              </div>
                              <div className='wineSpecValueBlock'>
                                {wineVarietal.map(varietal => {
                                  return (
                                    <div>
                                      <span className="itemizedValue">{varietal}</span>
                                    </div>
                                  )}
                                )} 
                              </div>
                            </div> 
                          : null}
                          {winePrimaryFlavors ? 
                            <div className='infoDetailsBlock'>
                              <div className='wineSpecKey'>
                                Primary Flavors: 
                              </div>
                              <div className='wineSpecValueBlock'>
                                {winePrimaryFlavors.map(flavor => {
                                  return (
                                    <div>
                                      <span className="itemizedValue">{flavor}</span>
                                    </div>
                                  )}
                                )} 
                              </div>
                            </div> 
                          : null}
                          {winePairings ? 
                            <div className='infoDetailsBlock'>
                              <div className='wineSpecKey'>
                                Pairings: 
                              </div>
                              <div className='wineSpecValueBlock'>
                                {winePairings.map(pairing => {
                                  return (
                                    <div>
                                      <span className="itemizedValue">{pairing}</span>
                                    </div>
                                  )}
                                )} 
                              </div>
                            </div> 
                          : null}
                          {wineDecant ? 
                            <div className="infoDetails">
                              <div className="wineSpecKey">
                                Decanting: 
                              </div>
                              <div className='wineSpecValue'>
                                {wineDecant}
                              </div>
                            </div>
                          : null}
                          {wineGlassType ?
                            <div className="infoDetails">
                              <div className="wineSpecKey">
                                Glass Type: 
                              </div>
                              <div className='wineSpecValue'>
                                {wineGlassType}
                              </div>
                            </div>
                          : null}
                          {wineTemp ?
                            <div className="infoDetails">
                              <div className="wineSpecKey">
                                Serving Temperature: 
                              </div>
                              <div className='wineSpecValue'>
                                {wineTemp}
                              </div>
                            </div>
                          : null}
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
  )
}

export default SavedWine
