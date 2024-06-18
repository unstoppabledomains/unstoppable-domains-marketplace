
function validateResolverKeyRegex(key) {
    const TICKER_REGEX = '[0-9A-Za-z*$+-]+';
    const ADDRESS_REGEX = new RegExp(`^crypto\.${TICKER_REGEX}\.address$`);
    const MULTI_CHAIN_ADDRESS_REGEX = new RegExp(
    `^crypto\.${TICKER_REGEX}\.version\.${TICKER_REGEX}\.address$`,
    );

    return key.match(ADDRESS_REGEX) || key.match(MULTI_CHAIN_ADDRESS_REGEX)
}

export const getStats = async () => {
    try {
      
      var res = await fetch('https://raw.githubusercontent.com/unstoppabledomains/uns/main/resolver-keys.json')
      var json = await res.json()
      const unsTickers: string[] = []
      Object.keys(json.keys).forEach(function(key) {
          if (validateResolverKeyRegex(key)) unsTickers.push(key.split('.')[1])
      })
      const uniqueArray = unsTickers.filter(function(item, pos) {
          return unsTickers.indexOf(item) == pos;
      })
      const tickerCount = uniqueArray.length.toLocaleString()

      var res = await fetch('https://api.unstoppabledomains.com/api/domains/taken-count')
      var json = await res.json()
      const takenDomainsCount = (json.takenDomainsCount/1000000).toLocaleString()+'M+'

      var res = await fetch('https://api.unstoppabledomains.com/api/domain/records/count')
      var json = await res.json()
      const recordsCount = Math.round(json.count/1000).toLocaleString()+(json.count/1000 % 1 >= 0.5 ? 'k+' : 'k')

      return {
        'tickers': tickerCount,
        'domains': takenDomainsCount,
        'records': recordsCount, 
        'integrations': '865',
        'partners': '1000'
      }
    } catch (err) {
      //console.warn(err)
      return {
        'tickers': '307',
        'domains': '3.8M+',
        'records': '778k', 
        'integrations': '865',
        'partners': '1000'
      }
    }
  }
