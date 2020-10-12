
// const BreweryCollection = (props) => {
//     return (
//         <div>
//             <div className="fav-header"><h4>Parks</h4></div>
//             <div>
//                 {props.breweries.map(brewery => {
//                     return (
//                         <div className="ml-5 mb-3" brewery={brewery} key={brewery.id} >
//                             <Flippy 
//                                 flipOnClick={true}
//                                 style={{ width: '300px' }}
//                             >
//                             <FrontSide
//                                 style={{ backgroundColor: '#ffffff' }}>
//                                 <FrontCard 
//                                     brewery={brewery} key={brewery.id} 
//                                     addFavorite={props.addFavorite}
//                                     removeFavorite={props.removeFavorite}
//                                     onSelectFavorite={props.onSelectFavorite}
//                                 />
//                             </FrontSide>
//                             <BackSide
//                                 style={{ backgroundColor: '#ffffff' }}>
//                                 <BackCard 
//                                     brewery={brewery} 
//                                 />
//                             </BackSide>
//                             </Flippy>
                            
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// }

// export default BreweryCollection;