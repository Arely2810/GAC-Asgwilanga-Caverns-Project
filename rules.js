
// residue: |a-b| + |b-c| + |c-a|
function residue(var a, var b, var c) {
  if (a < 0) {
    a *= -1;
  } else if (b < 0) {
    b *= -1;
  } else if (c < 0) {
    c *= -1;
  }
  return ((a-b) + (b-c) + (c-a));
}

// limit rule: x less than 16, y less than 9, z less than 7
function limit_rule(var x, var y, var z) {
  if (x > 16) {
    return false;
  } else if (y > 9) {
    return false;
  } else if (z > 7) {
    return false;
  }
  return true;
}

// sum rule: check if (a + b + c) is equal to the previous sum
function sum_rule(var a, var b, var c, var sum) {
  var temp_sum = a + b + c;
  if (temp_sum != sum) {
    return false;
  }
  return true;
}

// single-same rule: compare 1st povar (a, b, c) and 2nd povar (x, y, z)
function single_same_rule(var a, var b, var c, var x, var y, var z) {
  if (a == x) {
    zero_max_rule(y, z);
    return true;
  } else if (b == y) {
    zero_max_rule(x, z);
    return true;
  } else if (c == z) {
    zero_max_rule(x, y);
    return true;
  }
  return false;
}

// zero-max rule
function zero_max_rule(var other1, var other2, var same) {
  var limit = 16;
  var max = limit - same;
  var temp = limit;
  var temp2 = limit;
  temp -= other1;
  temp2 -= other2;
  if (temp == max) {
    temp -= other1;
    if (temp == 0) {
      return true;
    }
  } else if (temp2 == max) {
    temp2 -= other2;
    if (temp2 == 0) {
      return true;
    }
  }
  return false;
}

// verify function
function verify_all(var a, var b, var c, var x, var y, var z, var sum, var same, var other1, var other2) {
  limit_rule(a, b, c);
  sum_rule(x, y, z);
  single_same_rule(a, b, c, sum);
  zero_max_rule(other1, other2, same);
}
