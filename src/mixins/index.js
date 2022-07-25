//@ts-check
const mixin = {
  data() {
    return {
      newArr: []
    };
  },
  methods: {
    //對象轉換數組,data是要處理的數據，比如dataset.RISKALL.ROW
    objToArr: function(data) {
      var hash = [];
      if (!data.length) {
        hash[0] = data;
      } else {
        hash = data;
      }
      return hash;
    },
    //去重憑證號
    getNewArray: function(arr, key) {
      const set = new Set();
      this.newArr = arr.filter(item =>
        !set.has(item[key]) ? set.add(item[key]) : false
      );
      //console.log(this.newArr);
      return this.newArr;
    },
    // 保留兩位小數，整數部分逢三斷一過濾器
    // value代表要處理的值，unit代表單位，flag是true或者是false。true代表需要小數，false表示不需要
    NumFormat: function(value, unit, flag) {
      if (!value || value.trim() == "" || value == "\\") {
        return "\\";
      }
      if (value == "-") {
        return "-";
      }
      var num = value.replace(/[\D]|[\.]/g, "");       // eslint-disable-line 
      var str = value.replace(/[0-9]|[\.]/g, "");       // eslint-disable-line 

      if (num == "" || num == "undefined") {
        return str;
      }

      value = parseFloat(value).toFixed(2);
      var intPart = Number(value) | 0; //獲取整數部分
      var intPartFormat = intPart
        .toString()
        .replace(/(\d)(?=(?:\d{3})+$)/g, "$1,"); //將整數部分逢三一斷
      //=2表示數據有小數位

      if (flag) {
        var floatPart = value.toString().split(".");
        return intPartFormat + "." + floatPart[1] + (str ? str : unit);
      } else {
        return intPartFormat + (str ? str : unit);
      }
    },
    //判空
    isEmpty: function(data) {
      if (!data || data.trim() == "" || data == "\\") {
        return "\\";
      } else {
        return data;
      }
    },
    //轉換成整數百分數過濾器
    toPercent: function(point) {
      if (!point && point.trim() != "") {
        if (point == 0) {
          return 0;
        }
        var str = Number(point * 100).toFixed();
        str += "%";
        return str;
      } else {
        return "\\";
      }
    },
    //轉換成保留兩位小數的百分數過濾器
    toPercentFloat: function(point) {
      if (point && point.trim() != "") {
        if (point == 0) {
          return 0;
        }
        var str = Number(point * 100).toFixed(2);
        str += "%";
        return str;
      } else {
        return "\\";
      }
    }
  }
};

export default mixin;
