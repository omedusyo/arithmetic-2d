
# Installation
```
npm install https://github.com/omedusyo/arithmetic-2d.git
```

# Usage
```
import { Point, Vector } from "arithmetic-2d";
```

# Interface
The types Distance, Angle[radian], Angle[degree] are just Number.


## Constructors
```
Point  : Num, Num -> Point
Vector : Num, Num -> Point
```

## Serialization
```
Point.show  : Point -> String
Vector.show : Point -> String
```

## Equality
```
Point.eq  : Point,  Point  -> Bool
Vector.eq : Vector, Vector -> Bool
```

## Affine and Vector structure
```
Point.add : Point, Vector -> Point
Point.sub : Point, Point -> Vector

Vector.zero  : Vector
Vector.add   : Vector, Vector -> Vector
Vector.scale : Number, Vector -> Vector
Vector.neg   : Vector -> Vector
Vector.sub   : Vector, Vector -> Vector
```

## Geometry
```
Point.distance : Point, Point -> Distance

// assumes non-zero vector as input
Vector.normalize : Vector -> Vector

Vector.innerProduct : Vector, Vector -> Number
Vector.norm         : Vector, Vector -> Distance
Vector.angleRad     : Vector, Vector -> Angle[radian]
Vector.angleDeg     : Vector, Vector -> Angle[degree]
```

