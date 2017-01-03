import React from 'react';

export default class Banner extends React.Component {
  
  constructor(elementToSlide = []) {
    super();
    this.elementToSlide = elementToSlide;
  }
  
  render() {
    let dataOut = '';
    const length = this.elementToSlide.length;
    return (
      <div className="banner">
        {
          this.elementToSlide.map(function(item, i) {
            dataOut = i === (length - 1) ? '' : 'vtb';
            return (
              <div className="banner__element" key={i} data-in="fadein" data-out={dataOut}>
                <div className="banner__image">
                  <img src={item.img.src} alt={item.img.alt} height={item.img.height} width={item.img.width} />
                </div>
                <article className="banner__caption">
                  <h1 className="banner__caption__title">{item.body.title}</h1>
                  <p className="banner__caption__content">{item.body.text}</p>
                </article>
                <div className="banner__progressBar"></div> 
              </div>
            );
          })   
        }
      </div>
    );
  }

}