/**
 *
 * @param {*} value 待验证的值
 * @param {*} validList 验证数组
 */
export function oneOf(value, validList = []) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}

/**
 * @param {Array} target 目标数组
 * @param {Array} arr 需要查询的数组
 * @description 判断要查询的数组是否至少有一个元素包含在目标数组中
 */
export const hasOneOf = (target, arr) => {
  return target.some(_ => arr.indexOf(_) > -1)
}