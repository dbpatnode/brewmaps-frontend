import React from 'react';

const BreweryCollection = (props) => {
  // console.log('favorite', props.favorites);

  const beer = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path d='M11.793 1.576c1.255 0 2.319.82 2.684 1.955.214-.082.447-.126.689-.126 1.074 0 1.944.871 1.944 1.944s-.871 1.944-1.944 1.944c-.626 0-1.183-.296-1.539-.756-.493.423-1.134.679-1.835.679-.884 0-1.673-.408-2.19-1.045-.424.497-1.056.813-1.761.813-.604 0-1.155-.231-1.567-.611-.354.487-.927.804-1.575.804-2.981 0-2.721-3.889 0-3.889.398 0 .769.12 1.077.326.383-.751 1.164-1.266 2.065-1.266.591 0 1.131.222 1.541.586.493-.813 1.389-1.358 2.411-1.358zm0-1.576c-.971 0-1.945.322-2.747.964-1.29-.42-2.746-.145-3.795.792-2.148-.339-4.251 1.056-4.251 3.669 0 1.941 1.758 3.328 3.699 3.328.613 0 1.209-.162 1.731-.457.998.388 2.127.35 3.108-.126 1.166.698 2.638.832 3.957.278.505.273 1.077.42 1.672.42 1.941 0 3.521-1.579 3.521-3.521 0-1.874-1.472-3.411-3.32-3.515-.768-1.067-2.056-1.832-3.575-1.832zm-2.793 20h-2v-10.072c.604.197 1.479.176 2-.144v10.216zm8 1.224v-11.375c-.619.235-1.299.34-2 .292v11.083c0 .273.019.538.084.791h-10.168c.064-.253.084-.518.084-.791v-11.21c-.671.067-1.331-.012-1.97-.232v11.442c0 .664-.366 1.203-1.03 1.203v1.573h16v-1.573c-.664 0-1-.539-1-1.203zm2.851-12.224h-1.851v2h1.492c2.416 0 1.663 4.425-1.492 6.255v2.16c3.209-1.213 5-4.424 5-6.963 0-1.918-1.005-3.452-3.149-3.452z' />
    </svg>
  );

  const phone = (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 16 16'
      class='bi bi-telephone'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        d='M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z'
      />
    </svg>
  );
  const map = (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 16 16'
      class='bi bi-map'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        d='M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98l4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z'
      />
    </svg>
  );

  return (
    <div>
      <h1 className='header'>Breweries</h1>
      <div className='search__container'>
        <input
          className='search__input'
          type='text'
          placeholder='search...'
          value={props.inputValue}
          onChange={props.breweryFilterOnChange}
        />
      </div>

      <div className='cards'>
        {props.filteredBreweries.map((brewery) => {
          // const Phone = brewery.filter(brewery.phone !== null);
          // console.log('filteredPhone: ', filteredPhone);
          // console.log('brewery: ', brewery.filter(brewery.phone !== null));

          return (
            <div className='row'>
              <div className='card' brewery={brewery} key={brewery.id}>
                <div id='brewery-card-info'>
                  <span>
                    <a
                      className='brewery-name'
                      style={{ display: 'table-cell' }}
                      href={brewery.website_url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {brewery.brewery_name}
                    </a>
                  </span>
                  <h6>Brewery Style: {brewery.brewery_type}</h6>
                  <p>
                    <span id='icons'>{map}</span>
                    <a
                      href={`https://maps.google.com/?q=${brewery.street},${brewery.city},${brewery.state}`}
                      className='address'
                      target='popup'
                      onClick="window.open('../html-link.htm','name','width=600,height=400')"
                    >
                      {brewery.street} {brewery.city}, {brewery.state}{' '}
                      {brewery.postal_code}
                    </a>
                  </p>

                  {/* <span id='icons'>{phone}</span> */}
                  {''}
                  {parseInt(brewery.phone).length > 0 ? (
                    <p>'No phone number available'</p>
                  ) : (
                    <a href={`tel:${brewery.phone}`} className='phone-number'>
                      {brewery.phone}
                    </a>
                  )}
                  {/* {brewery.phone} */}
                </div>

                {/* <h1>
                  {" "}
                  {`${props.favorites.some(
                    (b) => b.brewery.brewery_name === brewery.brewery_name
                  )}`}
                </h1> */}

                <button
                  brewery={brewery}
                  id={brewery.id}
                  className={
                    props.favorites.some(
                      (b) => b.brewery.brewery_name === brewery.brewery_name,
                    )
                      ? 'submit yellow'
                      : 'submit red'
                  }
                  onClick={(e) => props.addFavorite(e, brewery)}
                >
                  {beer}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default BreweryCollection;
