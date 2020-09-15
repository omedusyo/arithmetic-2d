
# Interface
The types Distance, Angle[radian], Angle[degree] are just Number.


## Constructors
```
Point : Num, Num -> Point
Vector : Num, Num -> Point
```

## Serialization
```
Point.show : Point -> String
Vector.show : Point -> String
```

## Affine and Vector structure
```
Point.add : Point, Vector -> Point
Point.sub : , Point -> Vector

Vector.add : Vector, Vector -> Vector
Vector.scale : Number, Vector -> Vector
Vector.neg : Vector -> Vector
Vector.sub : Vector, Vector -> Vector
```

## Geometry
```
Point.distance : Point, Point -> Distance

// assumes non-zero vector as input
Vector.normalize : Vector -> Vector

Vector.innerProduct : Vector, Vector -> Number
Vector.norm : Vector, Vector -> Distance
Vector.angleRad : Vector, Vector -> Angle[radian]
Vector.angleDeg : Vector, Vector -> Angle[degree]
```

