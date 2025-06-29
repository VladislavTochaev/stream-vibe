import getParams from '@/utils/getParams'

const rootSelector = '[data-js-slider]'

class Slider {
  selectors = {
    root: rootSelector,
    swiper: '[data-js-slider-swiper]',
    navigation: '[data-js-slider-navigation]',
    previousButon: '[data-js-slider-previous-button]',
    nextButton: '[data-js-slider-next-button]',
    pagination: '[data-js-slider-pagination]',
  }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.swiperElement = this.rootElement.querySelector(this.selectors.swiper)
    this.params = getParams(this.rootElement, this.selectors.root)
    this.navigationElement = this.params.navigationTargetElementId
      ? document.getElementById(this.params.navigationTargetElementId)
      : this.rootElement.querySelector(this.selectors.navigation)
  }
}

class SliderCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Slider(element)
    })
  }
}

export default SliderCollection