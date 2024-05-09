{"filter":false,"title":"StockListItem.js","tooltip":"/src/StockListItem.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":29,"column":0},"action":"insert","lines":["import utilities from './utilities';","","function StockListItem(props) {","  ","  const { stock } = props;","  const purchaseValueStr = utilities.formatNumber(stock.purchaseValue);","  const currentValueStr = utilities.formatNumber(stock.currentValue);","  ","  const purchasePriceStr = utilities.formatNumber(stock.purchasePrice);","  const currentPriceStr = utilities.formatNumber(stock.currentPrice);","  ","  const profitStr = utilities.formatNumber(stock.profit);","  const profitClass = stock.profit < 0 ? 'loss' : 'profit';","  ","  return (","    <tr>","      <td>{stock.ticker}</td>","      <td>{stock.name}</td>","      <td>{stock.shares}</td>","      <td className=\"money\">{purchasePriceStr}</td>","      <td className=\"money\">{purchaseValueStr}</td>","      <td className=\"money\">{currentPriceStr}</td>","      <td className=\"money\">{currentValueStr}</td>","      <td className={\"money \"+profitClass}>{profitStr}</td>","    </tr>","  );","}","","export default StockListItem;",""],"id":1}]]},"ace":{"folds":[],"scrolltop":125,"scrollleft":0,"selection":{"start":{"row":29,"column":0},"end":{"row":29,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1714511985073,"hash":"549332bce1315a44f6401b0112618b6cf02888c6"}