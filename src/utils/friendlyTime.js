export function friendlyTime(dateStr){
  const dateObj = typeof dateStr === 'object'?dataStr:(new Date(dateStr));
  const space = Date.now() - dateObj.getTime();
  let str = '';
  switch(true){
    case space < 60000:
      str = '刚刚'
      break;
    case space < 3600000:
      str = Math.floor(space/60000)+'分钟前';
      break
    case space < 3600000 * 24:
      str = Math.floor(space/3600000) + '小时前';
      break
    case space < 3600000 * 24 * 30:
      str = Math.floor(space/(3600000*24)) + '天前';
      break
    case space < 3600000 * 24 * 30*12:
      str = Math.floor(space/(3600000*24*30)) + '月前';
      break
    // default: 
    //   str = dateObj.getFullyear()+"年"+dateObj.getMonth()+'月'+dateObj.getDate()+'日'
  }
  return str

}