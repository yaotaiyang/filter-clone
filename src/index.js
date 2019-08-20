export function filterClone(obj, include, exclude) {
    let res
    if (typeof obj == 'object') {
      if (getType(obj) === 'array') {
        res = []
        for (let i = 0, len = obj.length; i < len; i++) {
          res.push(filterClone(obj[i], include, exclude))
        }
      } else {
        res = {}
        for (let j in obj) {
            if (include && getType(include)==='array' && include.length) {
              if (include.indexOf(j) != -1) {
                res[j] = filterClone(obj[j], include, exclude);
              }
            }else if(include && getType(include)==='regexp'){
                if (include.test(j)) {
                    res[j] = filterClone(obj[j], include, exclude);
                }
            } else if (exclude && getType(exclude)==='array' && exclude.length) {
              if (exclude.indexOf(j) === -1) {
                res[j] = filterClone(obj[j], include, exclude);
              }
            }else if(exclude && getType(exclude)==='regexp'){
                if (!exclude.test(j)) {
                    res[j] = filterClone(obj[j], include, exclude);
                }
            } else {
              res[j] = filterClone(obj[j], include, exclude);
            }
        }
      }
    } else {
      res = obj
    }
    return res
    function getType(value) {
        const str = typeof value;
        if (str === 'object') {
            return value === null ? null : Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
        }
        return str
    }
  }
