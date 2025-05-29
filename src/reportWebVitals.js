const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry); // измеряем смещение макета
      getFID(onPerfEntry); // задержка первого ввода
      getFCP(onPerfEntry); // первая отрисовка контента
      getLCP(onPerfEntry); // отрисовка самого большого элемента
      getTTFB(onPerfEntry); // время до первого байта
    });
  }
};

export default reportWebVitals;