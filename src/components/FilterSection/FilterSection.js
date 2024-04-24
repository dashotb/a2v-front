import React from 'react'
import "./FilterSection.scss"
import { useState, useEffect } from 'react';

const FilterSection = (props) => {
  const brandFilter = []
  

  const getFilters = async (e) => {
    const value = e.target.getAttribute("value");
    console.log(value)
    
    if (brandFilter.includes(value)){
      const x = brandFilter.indexOf(value)
      brandFilter.pop(x)
      console.log(brandFilter)
    }
    else {
      brandFilter.push(value)
      console.log(brandFilter)
      while(i=0, i<filter.length, i++){

      }
    }
  }

  const [brands, setBrands] = useState([]);
  const getBrands = async () => {

    const response = await fetch(`/api/brands`).then((response) => response.json());
    setBrands(response);
  }
  useEffect(() => {
    getBrands()
  }, [])

  return (
    <>
      <div className='FilterSection'>
        <div className='brands'>
          <h4 className='title'>Marques</h4>
          <input type='searchbox' className='input_search' placeholder="Rechercher" />
          <div className='brands_list'>
            {brands.map(brand => (
              <div>
                
                <label for={brand.name}><input className="input" type="checkbox" id={brand.name} name={brand.name} value={brand.name} onChange={getFilters} />{brand.name}</label>
              </div>
            ))}
          </div>
        </div>

        <div className='brands'>
          <h4 className='title'>Tailles</h4>
          <input type='searchbox' className='input_search' placeholder="Rechercher" />
          <div className='brands_list'>
            <div>
              <input className="input" type="checkbox" id="scales" name="scales" />
              <label for="scales">Scales</label>
            </div>

            <div>
              <input className="input" type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
            </div>
            <div>
              <input className="input" type="checkbox" id="scales" name="scales" />
              <label for="scales">Scales</label>
            </div>

            <div>
              <input className="input" type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
            </div>
            <div>
              <input className="input" type="checkbox" id="scales" name="scales" />
              <label for="scales">Scales</label>
            </div>

            <div>
              <input className="input" type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
            </div>
            <div>
              <input className="input" type="checkbox" id="scales" name="scales" />
              <label for="scales">Scales</label>
            </div>

            <div>
              <input className="input" type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
            </div>
            <div>
              <input className="input" type="checkbox" id="scales" name="scales" />
              <label for="scales">Scales</label>
            </div>

            <div>
              <input className="input" type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
            </div>
            <div>
              <input className="input" type="checkbox" id="scales" name="scales" />
              <label for="scales">Scales</label>
            </div>

            <div>
              <input className="input" type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
            </div>
          </div>
        </div>
        
        <div className='brands'>
          <h4 className='title'>Coloris</h4>
          <input type='searchbox' className='input_search' placeholder="Rechercher" />
          <div className='brands_list'>
            <div>
              <input className="input" type="checkbox" id="scales" name="scales" />
              <label for="scales">Scales</label>
            </div>

            <div>
              <input className="input" type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
            </div>
            <div>
              <input className="input" type="checkbox" id="scales" name="scales" />
              <label for="scales">Scales</label>
            </div>

            <div>
              <input className="input" type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
            </div>
            <div>
              <input className="input" type="checkbox" id="scales" name="scales" />
              <label for="scales">Scales</label>
            </div>

            <div>
              <input className="input" type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
            </div>
            <div>
              <input className="input" type="checkbox" id="scales" name="scales" />
              <label for="scales">Scales</label>
            </div>

            <div>
              <input className="input" type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
            </div>
            <div>
              <input className="input" type="checkbox" id="scales" name="scales" />
              <label for="scales">Scales</label>
            </div>

            <div>
              <input className="input" type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
            </div>
            <div>
              <input className="input" type="checkbox" id="scales" name="scales" />
              <label for="scales">Scales</label>
            </div>

            <div>
              <input className="input" type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
            </div>
          </div>
        </div>

        <div className='brands'>
          <h4 className='title'>Matieres</h4>
          <input type='searchbox' className='input_search' placeholder="Rechercher" />
          <div className='brands_list'>
            <div>
              <input className="input" type="checkbox" id="scales" name="scales" />
              <label for="scales">Scales</label>
            </div>

            <div>
              <input className="input" type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
            </div>
            <div>
              <input className="input" type="checkbox" id="scales" name="scales" />
              <label for="scales">Scales</label>
            </div>

            <div>
              <input className="input" type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
            </div>
            <div>
              <input className="input" type="checkbox" id="scales" name="scales" />
              <label for="scales">Scales</label>
            </div>

            <div>
              <input className="input" type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
            </div>
            <div>
              <input className="input" type="checkbox" id="scales" name="scales" />
              <label for="scales">Scales</label>
            </div>

            <div>
              <input className="input" type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
            </div>
            <div>
              <input className="input" type="checkbox" id="scales" name="scales" />
              <label for="scales">Scales</label>
            </div>

            <div>
              <input className="input" type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
            </div>
            <div>
              <input className="input" type="checkbox" id="scales" name="scales" />
              <label for="scales">Scales</label>
            </div>

            <div>
              <input className="input" type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
            </div>
          </div>
        </div>

        <div className='brands'>
          <h4 className='title'>Etat</h4>
          <input type='searchbox' className='input_search' placeholder="Rechercher" />
          <div className='brands_list'>
            <div>
              <input className="input" type="checkbox" id="scales" name="scales" />
              <label for="scales">Scales</label>
            </div>

            <div>
              <input className="input" type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
            </div>
            <div>
              <input className="input" type="checkbox" id="scales" name="scales" />
              <label for="scales">Scales</label>
            </div>

            <div>
              <input className="input" type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
            </div>
            <div>
              <input className="input" type="checkbox" id="scales" name="scales" />
              <label for="scales">Scales</label>
            </div>

            <div>
              <input className="input" type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
            </div>
            <div>
              <input className="input" type="checkbox" id="scales" name="scales" />
              <label for="scales">Scales</label>
            </div>

            <div>
              <input className="input" type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
            </div>
            <div>
              <input className="input" type="checkbox" id="scales" name="scales" />
              <label for="scales">Scales</label>
            </div>

            <div>
              <input className="input" type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
            </div>
            <div>
              <input className="input" type="checkbox" id="scales" name="scales" />
              <label for="scales">Scales</label>
            </div>

            <div>
              <input className="input" type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
            </div>
          </div>
        </div>

        <div className='brands'>
          <h4 className='title'>Prix</h4>
          <input type='searchbox' className='input_search' placeholder="Rechercher" />
          <div className='brands_list'>
            <div>
              <input className="input" type="checkbox" id="scales" name="scales" />
              <label for="scales">Scales</label>
            </div>

            <div>
              <input className="input" type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
            </div>
            <div>
              <input className="input" type="checkbox" id="scales" name="scales" />
              <label for="scales">Scales</label>
            </div>

            <div>
              <input className="input" type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
            </div>
            <div>
              <input className="input" type="checkbox" id="scales" name="scales" />
              <label for="scales">Scales</label>
            </div>

            <div>
              <input className="input" type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
            </div>
            <div>
              <input className="input" type="checkbox" id="scales" name="scales" />
              <label for="scales">Scales</label>
            </div>

            <div>
              <input className="input" type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
            </div>
            <div>
              <input className="input" type="checkbox" id="scales" name="scales" />
              <label for="scales">Scales</label>
            </div>

            <div>
              <input className="input" type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
            </div>
            <div>
              <input className="input" type="checkbox" id="scales" name="scales" />
              <label for="scales">Scales</label>
            </div>

            <div>
              <input className="input" type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FilterSection