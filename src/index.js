
// Num, Num -> Point
export function Point(x, y) {
  const P = { type: "point", x, y };
  Object.freeze(P);
  return P;
}
// Point -> String
Point.show = P => `Point(${P.x}, ${P.y})`;
// Point, Vector -> Point
Point.add = (P, v) => Point(P.x + v.x, P.y + v.y);
// Point, Point -> Vector
Point.sub = (P, Q) => Point(P.x - Q.x, P.y - Q.y);


// Num, Num -> Vector
export function Vector(x, y) {
  const v = { type: "vector", x, y };
  Object.freeze(v);
  return v;
}
// Point -> String
Vector.show = v => `Vector(${v.x}, ${v.y})`;
// Vector, Vector -> Vector
Vector.add = (v, w) => Vector(v.x + w.x, v.y + w.y);
// Number, Vector -> Vector
Vector.scale = (v, k) => Vector(v.x * k, v.y * k);
// Vector -> Vector
Vector.neg = v => Vector(-v.x, -v.y);
// Vector, Vector -> Vector
Vector.sub = (v, w) => Vector(v.x - w.x, v.y - w.y);
// Vector, Vector -> Number
Vector.innerProduct = (v, w) => v.x*w.x + v.y*w.y;
// Vector, Vector -> Distance
Vector.norm = v => Math.sqrt(v.x**2 + v.y**2);

// Point, Point -> Distance
Point.distance = (P, Q) => Vector.norm(Math.sub(P, Q));
// assumes non-zero vector as input
// Vector -> Vector
Vector.normalize = v => scale(v, 1/norm(v));
// TODO: maybe encorporate units?
// Vector, Vector -> Angle[radian]
Vector.angleRad = (v, w) => Math.acos(innerProduct(normalize(v), normalize(w)));
// Vector, Vector -> Angle[degree]
Vector.angleDeg = (v, w) => Math.acos(innerProduct(normalize(v), normalize(w)))*360/(2*Math.PI);

