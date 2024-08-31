

var TimeMap = function () {
    this.map = new Map();
};

TimeMap.prototype.set = function (key, value, timestamp) {
    const map = this.map;
    if (!map.has(key)) map.set(key, []);
    map.get(key).push([value, timestamp]);
};

TimeMap.prototype.get = function (key, timestamp) {
    const arr = this.map.get(key) || [];

    let [l, r] = [0, arr.length - 1];
    let res = "";
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        const [v, t] = arr[mid];
        if (timestamp === t) return v;
        if (timestamp >= t) {
            l = mid + 1;
            res = v;
        } else r = mid - 1;

    }
    return res;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */